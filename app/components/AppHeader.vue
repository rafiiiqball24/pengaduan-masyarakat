<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false)
</script>

<template>
    <header
        class="w-full max-w-[1440px] mx-auto flex items-center justify-between py-5 px-4 md:px-8 lg:px-12 xl:px-[112px] bg-[#FEFFFF] lg:bg-white transition-all duration-300 sticky top-0 z-50">

        <!-- Logo Section -->
        <div class="flex items-center justify-center w-24 gap-3 xl:w-auto xl:justify-start xl:gap-2 xl:-translate-x-10">
            <img src="/logo.svg" alt="Logo" class="w-10 h-10 shrink-0" />
            <img src="/brand-text.svg" alt="Vide" class="w-[44px] h-[15.462px] shrink-0" />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center gap-10 -translate-x-50">
            <NuxtLink to="/homepage" class="nav-link" :class="{ 'nav-active': $route.path === '/homepage' }">
                Homepage
            </NuxtLink>

            <NuxtLink to="/about" class="nav-link" :class="{ 'nav-active': $route.path === '/about' }">
                Tentang Kami
            </NuxtLink>

            <NuxtLink to="/faq" class="nav-link" :class="{ 'nav-active': $route.path === '/faq' }">
                FAQ
            </NuxtLink>

            <NuxtLink to="/contact" class="nav-link" :class="{ 'nav-active': $route.path === '/contact' }">
                Kontak
            </NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden xl:flex items-center gap-10">
            <NuxtLink to="/replication"
                class="flex items-center justify-center gap-1 text-button-outlined font-sans text-sm font-mid-strong leading-[24px]">
                Replication Request
            </NuxtLink>

            <button @click="$router.push('/login')"
                class="flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-button-secondary text-primary-foreground shadow-2 font-sans text-sm font-medium leading-[24px] hover:opacity-90 transition-opacity cursor-pointer">
                Masuk Sebagai Warga
            </button>

        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = true"
            class="xl:hidden flex w-8 h-8 p-[5px_4px] items-center justify-center aspect-square text-gray-900">
            <img src="/icons/menu-01.svg" class="w-full h-full" alt="Menu" />
        </button>

        <!-- Mobile Menu Overlay -->
        <div v-if="isOpen" class="fixed inset-0 z-50 bg-white flex flex-col h-screen overflow-y-auto">
            <div class="flex items-center justify-between py-5 px-4 bg-[#FEFFFF]">
                <div class="flex items-center justify-center gap-3">
                    <img src="/logo.svg" alt="Logo" class="w-10 h-10 shrink-0" />
                    <img src="/brand-text.svg" alt="Vide" class="w-[44px] h-[15.462px] shrink-0" />
                </div>
                <button @click="isOpen = false" class="flex w-8 h-8 p-1 justify-center items-center aspect-square">
                    <img src="/icons/cancel-01.svg" class="w-6 h-6 shrink-0" alt="Close" />
                </button>
            </div>

            <!-- Mobile Navigation -->
            <nav class="flex flex-col items-start gap-3 px-4 py-3 pb-6 flex-1 bg-white">
                <NuxtLink to="/homepage"
                    :class="['flex w-full py-3 justify-start items-center gap-1 rounded-[10px] font-sans text-[16px] font-medium leading-[24px]', $route.path === '/homepage' ? 'text-[#F67011]' : 'text-[#0A0A0A] opacity-60 hover:opacity-100']">
                    Homepage
                </NuxtLink>
                <NuxtLink to="/about"
                    :class="['flex w-full py-3 justify-start items-center gap-1 rounded-[10px] font-sans text-[16px] font-medium leading-[24px]', $route.path === '/about' ? 'text-[#F67011]' : 'text-[#0A0A0A] opacity-60 hover:opacity-100']">
                    Tentang Kami
                </NuxtLink>
                <NuxtLink to="/faq"
                    :class="['flex w-full py-3 justify-start items-center gap-1 rounded-[10px] font-sans text-[16px] font-medium leading-[24px]', $route.path === '/faq' ? 'text-[#F67011]' : 'text-[#0A0A0A] opacity-60 hover:opacity-100']">
                    FAQ
                </NuxtLink>
                <NuxtLink to="/contact"
                    :class="['flex w-full py-3 justify-start items-center gap-1 rounded-[10px] font-sans text-[16px] font-medium leading-[24px]', $route.path === '/contact' ? 'text-[#F67011]' : 'text-[#0A0A0A] opacity-60 hover:opacity-100']">
                    Kontak
                </NuxtLink>
            </nav>

            <!-- Mobile Actions -->
            <div class="flex flex-col justify-center items-center gap-3 p-4 bg-white">
                <button @click="$router.push('/login')"
                    class="flex items-center justify-center w-full px-3 py-2 gap-1 rounded-full bg-[#F67011] text-[#FEFFFF] shadow-2 font-sans text-[16px] font-medium leading-[24px] cursor-pointer hover:opacity-90 transition-opacity">
                    Masuk Sebagai Warga
                </button>

                <NuxtLink to="/replication"
                    class="flex items-center justify-center w-full px-3 py-2 gap-1 rounded-full border border-[#E0E0E0] text-[#0A0A0A] font-sans text-[16px] font-medium leading-[24px]">
                    Replication Request
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
.nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--color-button-outlined);
    opacity: 0.6;
    transition: opacity 0.2s;
}

.nav-link:hover {
    opacity: 1;
}

.nav-active {
    opacity: 1;
    color: var(--color-button-secondary);
}
</style>
