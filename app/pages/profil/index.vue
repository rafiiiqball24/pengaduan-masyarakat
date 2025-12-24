<script setup lang="ts">
import { ref } from 'vue'
import { Image as ImageIcon, Edit2, User as UserIcon, Menu } from 'lucide-vue-next'
import ProfileSidebar from '~/components/profile/ProfileSidebar.vue'
import ProfileHeader from '~/components/profile/ProfileHeader.vue'
import ProfileEditModal from '~/components/profile/ProfileEditModal.vue'

definePageMeta({
    layout: false
})

const user = ref({
    name: 'Alexander Graham Bell',
    email: 'grahambell@gmail.com',
    phone: '+62 081200000000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
})

const isModalOpen = ref(false)

const handleSave = (updatedUser: { name: string; email: string; phone: string }) => {
    user.value = { ...user.value, ...updatedUser }
}
</script>

<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-bg-surface-neutral-light p-4 md:p-(--space-500)">
        <!-- Mobile Header -->
        <header class="flex md:hidden items-center justify-between mb-6">
            <div class="flex items-center gap-2">
                <img src="/logo.svg" alt="Vide" class="h-8" />
                <img src="/brand-text.svg" alt="Vide" class="h-4" />
            </div>
            <button class="text-text-neutral-primary">
                <img src="/icons/menu-01.svg" class="w-6 h-6" />
            </button>
        </header>

        <!-- Mobile Breadcrumb -->
        <div class="flex md:hidden items-center gap-2 text-sm text-text-neutral-secondary mb-6">
            <span>Home</span>
            <span>›</span>
            <span class="font-semibold text-text-neutral-primary">Profil</span>
        </div>

        <!-- Left Sidebar -->
        <ProfileSidebar class="rounded-500" />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col ml-0 md:ml-(--space-500) gap-4 md:gap-(--space-500)">
            <ProfileHeader class="rounded-500" />

            <main class="flex-1">
                <div class="bg-bg-form rounded-500 p-4 md:p-(--space-500)">

                    <!-- Header Action -->
                    <div class="flex justify-between items-start mb-8">
                        <div class="flex items-center gap-2 text-primary font-medium mb-4">
                            <img src="/icons/image-02.svg" :size="20" />
                            <span class="text-text-neutral-primary font-medium">Profile Picture</span>
                        </div>

                        <button @click="isModalOpen = true"
                            class="flex items-center gap-2 text-text-neutral-secondary hover:text-primary transition-colors">
                            <img src="/icons/pencil-edit-02.svg" :size="16" />
                            <span class="text-sm font-medium">Edit Profil</span>
                        </button>
                    </div>

                    <!-- Profile Picture Section -->
                    <div class="flex items-center gap-8 md:gap-4 mb-8 md:mb-12">
                        <div
                            class="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm ring-1 ring-gray-100">
                            <img :src="user.image" class="w-full h-full object-cover" />
                        </div>

                        <div class="flex flex-row gap-3">
                            <button
                                class="px-4 py-2 md:px-3 md:py-2 bg-primary text-primary-foreground rounded-full text-xs md:text-base font-medium hover:bg-orange-600 transition-colors duration-300 shadow-2">
                                Ubah Gambar
                            </button>
                            <button
                                class="px-4 py-2 md:px-3 md:py-2 border-2 border-border-form-default text-primary rounded-full text-xs md:text-base font-medium hover:bg-surface-primary transition-colors">
                                Hapus gambar
                            </button>
                        </div>
                    </div>

                    <!-- Personal Information Section -->
                    <div class="mb-6">
                        <div class="flex items-center gap-2 text-primary font-medium mb-6">
                            <img src="/icons/user.svg" :size="20" />
                            <span class="text-text-neutral-primary font-medium">Informasi Personal</span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="space-y-2">
                                <label class="block text-sm text-text-neutral-secondary">Nama Lengkap</label>
                                <div class="font-display font-semibold text-text-neutral-primary text-M">
                                    {{ user.name }}
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="block text-sm text-text-neutral-secondary">Email</label>
                                <div class="font-display font-semibold text-text-neutral-primary text-M">
                                    {{ user.email }}
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="block text-sm text-text-neutral-secondary">Nomor Telp.</label>
                                <div class="font-display font-semibold text-text-neutral-primary text-M">
                                    {{ user.phone }}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <!-- Copyright -->
            <footer class="p-8 pt-0 text-center md:text-left text-xs text-gray-300">
                © 2025 MUM. All rights reserved.
            </footer>
        </div>

        <!-- Edit Profile Modal -->
        <ProfileEditModal :is-open="isModalOpen" :user="user" @close="isModalOpen = false" @save="handleSave" />
    </div>
</template>

<style scoped>
/* Reset */
</style>
