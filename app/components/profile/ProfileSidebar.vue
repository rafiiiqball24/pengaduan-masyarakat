<script setup lang="ts">
import { ref } from 'vue'
import { LogOut } from 'lucide-vue-next'
import { UserCircle } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const showLogoutModal = ref(false)

const menuItems = [
    { name: 'Profile', icon: UserCircle, path: '/profil' },
    { name: 'Riwayat Pengaduan', icon: '/icons/sticky-note-01.svg', path: '/riwayat' },
    { name: 'Logout', icon: '/icons/logout-03.svg', path: '#logout' },
]

const handleItemClick = (e: Event, path: string) => {
    if (path === '#logout') {
        e.preventDefault()
        showLogoutModal.value = true
    }
}

const confirmLogout = () => {
    // Perform actual logout logic here (clear tokens, etc.)
    showLogoutModal.value = false
    router.push('/login')
}
</script>

<template>
    <aside class="w-64 bg-bg-form border-r border-gray-100 hidden md:flex flex-col items-center py-8 min-h-screen">
        <!-- Logo area -->
        <div class="mb-10 flex flex-col items-center">
            <img src="/icons/herms_logo.svg.svg" alt="Logo" class="w-12 h-12 mb-2" />
        </div>

        <!-- User Mini Profile -->
        <div class="mb-10 flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-3 border-4 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Andira Hadley" class="w-full h-full object-cover" />
            </div>
            <h3 class="font-display font-bold text-gray-900 text-lg">Andira Hadley</h3>
        </div>

        <!-- Navigation -->
        <nav class="w-full px-4 space-y-2">
            <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.path"
                @click="handleItemClick($event, item.path)"
                class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200" :class="[
                    route.path.startsWith(item.path) && item.path !== '#logout'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-text-neutral-secondary hover:bg-surface-primary hover:text-text-neutral-primary'
                ]">
                <img v-if="typeof item.icon === 'string'" :src="item.icon" class="w-5 h-5 transition-all duration-200"
                    :class="{ 'brightness-0 invert': route.path.startsWith(item.path) && item.path !== '#logout' }"
                    alt="" />
                <component v-else :is="item.icon" :size="20" />
                <span class="font-sans font-medium text-sm">{{ item.name }}</span>
            </NuxtLink>
        </nav>

        <!-- Logout Modal -->
        <Teleport to="body">
            <transition enter-active-class="transition ease-out duration-200"
                leave-active-class="transition ease-in duration-150" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="showLogoutModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <!-- Blur Backdrop -->
                    <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" @click="showLogoutModal = false"></div>

                    <!-- Modal Content -->
                    <div class="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center space-y-4">
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-gray-900">Tinggalkan Layanan</h3>
                            <p class="text-sm text-gray-500">Apakah kamu yakin untuk keluar dari layanan kami?</p>
                        </div>

                        <div class="flex flex-col md:flex-row gap-3 pt-2">
                            <button @click="confirmLogout"
                                class="flex-1 px-4 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg text-sm font-semibold transition-colors">
                                Ya
                            </button>
                            <button @click="showLogoutModal = false"
                                class="flex-1 px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-semibold transition-colors">
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </Teleport>
    </aside>
</template>
