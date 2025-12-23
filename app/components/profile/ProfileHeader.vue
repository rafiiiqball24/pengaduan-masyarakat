<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
    if (route.path.startsWith('/riwayat')) return 'Riwayat Pengaduan'
    return 'Profil'
})
</script>

<template>
    <header class="w-full h-20 bg-bg-form px-8 hidden md:flex items-center justify-between">
        <!-- Left: Breadcrumb/Title -->
        <div class="flex items-center gap-2 text-sm font-sans">
            <template v-if="!route.path.startsWith('/riwayat')">
                <span class="text-text-neutral-secondary">Home</span>
                <span class="text-text-neutral-secondary">›</span>
            </template>
            <span class="font-semibold text-text-neutral-primary">{{ pageTitle }}</span>
        </div>

        <!-- Right: Navigation & User -->
        <div class="flex items-center gap-8">
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-text-neutral-secondary">
                <NuxtLink to="/about" class="hover:text-primary transition-colors">Tentang Kami</NuxtLink>
                <NuxtLink to="/faq" class="hover:text-primary transition-colors">FAQ</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-primary transition-colors">Kontak</NuxtLink>
                <NuxtLink to="/replication"
                    class="text-text-neutral-primary font-semibold hover:text-primary transition-colors">
                    Replication Request</NuxtLink>
            </nav>

            <div class="flex items-center gap-3 pl-8 border-l border-gray-100">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt="User" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm font-medium text-text-neutral-secondary">Dino@gmail.com</span>
            </div>
        </div>
    </header>
</template>
