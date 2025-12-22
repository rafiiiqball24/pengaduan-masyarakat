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
    <footer class="flex flex-col items-start gap-[20px] px-[16px] py-[24px] w-full bg-[#1F1F1F]
        xl:px-[128px] xl:py-[48px] xl:gap-4 xl:bg-bg-black">

        <div class="flex flex-col items-start gap-[24px] pt-[12px] self-stretch
            xl:flex-row xl:justify-between xl:pt-0 xl:gap-0">
            <!-- Logo & Text -->
            <div class="flex flex-col items-start gap-[16px] w-full
                xl:w-[301px] xl:gap-4">
                <img src="/logo.svg" alt="Logo" class="w-[55px] h-[32px] aspect-[55/32]
                    xl:w-[53px] xl:h-[53px] xl:aspect-square" />

                <!-- Title & Subtitle -->
                <div class="flex flex-col items-start gap-[6px]">
                    <h2 class="text-[#FEFFFF] font-['Geist'] text-[24px] font-semibold leading-[32px] tracking-[-0.005px]
                        xl:text-text-white-primary xl:font-display xl:tracking-[-0.005px]">
                        LMUM
                    </h2>
                    <p class="text-[#E0E0E0] font-['Geist'] text-[16px] font-normal leading-[24px] w-[301px]
                        xl:text-text-white-secondary xl:font-sans xl:text-sm">
                        Sigap untuk membantu warga
                    </p>
                </div>
            </div>

            <!-- Footer Links -->
            <div class="flex flex-col items-start gap-[20px]
                xl:flex-row xl:gap-[72px]">
                <a v-for="link in footerLinks" :key="link.name" :href="link.href" class="text-[#E0E0E0] font-['Geist'] text-[14px] font-semibold leading-[22px]
                    xl:text-text-white-secondary xl:font-sans xl:text-xs">
                    {{ link.name }}
                </a>
            </div>
        </div>

        <!-- Divider -->
        <div class="flex flex-col items-start self-stretch h-px bg-[rgba(158,158,158,0.20)]
            xl:bg-border-neutral"></div>

        <!-- Bottom Container -->

        <div class="flex flex-col-reverse items-start gap-[16px] self-stretch
            xl:flex-row xl:justify-between xl:items-center xl:gap-0">
            <p class="text-[#FEFFFF] font-['Geist'] text-[14px] font-medium leading-[22px]
                xl:text-text-white-primary xl:font-sans xl:text-xs">
                © {{ currentYear }} MUM. All rights reserved.
            </p>

            <!-- Social Links -->
            <div class="flex items-start gap-[32px]
                xl:gap-8">
                <a v-for="social in socialLinks" :key="social.name" href="#" class="w-[24px] h-[24px]">
                    <img :src="social.icon" :alt="social.name" class="w-full h-full object-contain" />
                </a>
            </div>
        </div>
    </footer>
</template>
