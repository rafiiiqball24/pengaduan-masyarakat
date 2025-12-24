<script setup lang="ts">
import { LogOut, UserCircle } from 'lucide-vue-next'

const route = useRoute()

const handleItemClick = (event: Event, path: string) => {
    // Logic later
}

const menuItems = [
    { name: 'Profile', icon: UserCircle, path: '/profil', active: true },
    { name: 'Riwayat Pengaduan', icon: '/icons/sticky-note-01.svg', path: '/riwayat', active: false },
    { name: 'Logout', icon: '/icons/logout-03.svg', path: '/login', active: false },
]
</script>

<template>
    <aside class="w-80 bg-bg-form border-r border-gray-100 hidden md:flex flex-col items-center py-8 min-h-screen">
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
                class="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200" :class="[
                    route.path.startsWith(item.path) && item.path !== '#logout'
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'hover:bg-gray-100 text-text-neutral-primary'
                ]">
                <img v-if="typeof item.icon === 'string'" :src="item.icon" class="w-5 h-5" alt="" />
                <component v-else :is="item.icon" :size="20" />
                <span class="font-sans font-medium text-sm">{{ item.name }}</span>
            </NuxtLink>
        </nav>
    </aside>
</template>
