<script setup lang="ts">
const footerLinks = [
    { name: 'HOMEPAGE', href: '#' },
    { name: 'TENTANG KAMI', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'KONTAK', href: '#' }
]

const socialLinks = [
    { name: 'WhatsApp', icon: '/icons/whatsapp.svg' },
    { name: 'X', icon: '/icons/x.svg' },
    { name: 'Facebook', icon: '/icons/facebook.svg' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="flex flex-col items-start gap-4 px-[128px] py-[48px] w-full bg-bg-black">

        <div class="flex justify-between items-start self-stretch">
            <!-- Logo & Text -->
            <div class="flex flex-col items-start gap-4 w-[301px]">
                <img src="/logo.svg" alt="Logo" class="w-[53px] h-[53px] aspect-square" />

                <!-- Title & Subtitle -->
                <div class="flex flex-col items-start gap-[6px]">
                    <h2
                        class="text-text-white-primary font-display text-[24px] font-semibold leading-[32px] tracking-[-0.005px]">
                        LMUM
                    </h2>
                    <p class="text-text-white-secondary font-sans text-sm font-normal leading-6 w-[301px]">
                        Sigap untuk membantu warga
                    </p>
                </div>
            </div>

            <!-- Footer Links -->
            <div class="flex items-start gap-[72px]">
                <a v-for="link in footerLinks" :key="link.name" :href="link.href"
                    class="text-text-white-secondary font-sans text-xs font-semibold leading-[22px]">
                    {{ link.name }}
                </a>
            </div>
        </div>

        <!-- Divider -->
        <div class="flex flex-col items-start self-stretch h-px bg-border-neutral"></div>

        <!-- Bottom Container -->
        <div class="flex justify-between items-center self-stretch">
            <p class="text-text-white-primary font-sans text-xs font-medium leading-[22px]">
                © {{ currentYear }} MUM. All rights reserved.
            </p>

            <!-- Social Links -->
            <div class="flex items-start gap-8">
                <a v-for="social in socialLinks" :key="social.name" href="#" class="w-6 h-6">
                    <img :src="social.icon" :alt="social.name" class="w-full h-full object-contain" />
                </a>
            </div>
        </div>
    </footer>
</template>
