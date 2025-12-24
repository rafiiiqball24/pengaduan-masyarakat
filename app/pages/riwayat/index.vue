<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ProfileSidebar from '~/components/profile/ProfileSidebar.vue'
import ProfileHeader from '~/components/profile/ProfileHeader.vue'
import ComplaintTabs from '~/components/history/ComplaintTabs.vue'
import ComplaintCard from '~/components/history/ComplaintCard.vue'
import { useComplaints } from '~/composables/useComplaints'

definePageMeta({
    layout: false
})

const { complaints } = useComplaints()

const activeTab = ref('Terkirim')
const tabs = ['Terkirim', 'Diproses', 'Ditangani', 'Selesai', 'Dibatalkan']

const filteredComplaints = computed(() => {
    return complaints.value.filter(complaint => complaint.status === activeTab.value)
})

const showCancelAlert = ref(false)

const handleCancel = (complaintId: string) => {
    // In a real app, you would call an API here
    // For now, we simulate success
    showCancelAlert.value = true
    setTimeout(() => {
        showCancelAlert.value = false
    }, 5000) // Auto hide after 5 seconds
}
</script>

<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-bg-surface-neutral-light p-0 md:p-(--space-500)">
        <!-- Mobile Header -->
        <header class="flex md:hidden items-center bg-bg-form justify-between p-4 mb-4">
            <div class="flex items-center gap-2">
                <img src="/logo.svg" alt="Vide" class="h-10" />
                <img src="/brand-text.svg" alt="Vide" class="h-6" />
            </div>
            <button class="text-text-neutral-primary">
                <Menu :size="24" />
            </button>
        </header>


        <!-- Left Sidebar -->
        <ProfileSidebar class="rounded-500 mx-4 md:mx-0" />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col ml-0 md:ml-(--space-500) gap-4 md:gap-(--space-500) px-4 md:px-0 pb-4 md:pb-0">
            <ProfileHeader class="rounded-500" />

            <main class="flex-1 relative">
                <div class="bg-white rounded-500 p-4 md:p-(--space-500) h-full min-h-[500px]">

                    <!-- Tabs -->
                    <div class="mb-6 md:mb-8">
                        <ComplaintTabs v-model="activeTab" :tabs="tabs" />
                    </div>

                    <!-- List -->
                    <div class="space-y-6">
                        <ComplaintCard v-for="complaint in filteredComplaints" :key="complaint.id"
                            :complaint="complaint" @cancel="handleCancel" />
                    </div>

                </div>

                <!-- Cancel Alert (Floating at bottom inside main area or fixed on screen) -->
                <transition enter-active-class="transition ease-out duration-300"
                    enter-from-class="transform translate-y-full opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition ease-in duration-200"
                    leave-from-class="transform translate-y-0 opacity-100"
                    leave-to-class="transform translate-y-full opacity-0">
                    <div v-if="showCancelAlert"
                        class="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-50 md:max-w-md md:w-[400px]">
                        <div
                            class="bg-[#ECFDF3] border border-[#D1FADF] rounded-xl p-4 flex items-center justify-between shadow-lg h-14">
                            <div class="flex items-center gap-3">
                                <span class="text-[#027A48] font-semibold text-S">Laporan Dibatalkan</span>
                            </div>
                            <button @click="showCancelAlert = false"
                                class="text-black font-medium hover:opacity-75 text-sm">
                                Tutup
                            </button>
                        </div>
                    </div>
                </transition>
            </main>

            <!-- Copyright -->
            <footer class="p-8 pt-0 text-center md:text-left text-xs text-gray-300">
                © 2025 MUM. All rights reserved.
            </footer>
        </div>
    </div>
</template>

<style scoped>
/* Ensure hidden scrollbar for smooth visual on tabs overflow */
.overflow-x-auto::-webkit-scrollbar {
    display: none;
}

.overflow-x-auto {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
