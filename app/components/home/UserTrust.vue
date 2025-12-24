<script setup lang="ts">
const stats = [
    { number: '80+', label: 'Laporan terkirim\nsetiap harinya' },
    { number: '99%', label: 'Laporan laporan\ndirespon perhari' },
    { number: '500+', label: 'Orang terbantu\ndengan layanan kami' }
]
</script>

<template>
    <section class="flex flex-col justify-center items-start w-full px-[16px] py-[40px] gap-[20px] self-stretch
        xl:w-[1440px] xl:h-[458px] xl:flex-row xl:px-[112px] xl:py-10 xl:items-center xl:gap-10 xl:mx-auto">

        <!-- Text Frame -->
        <div class="flex flex-col items-start gap-[16px] self-stretch
            xl:gap-10 xl:flex-[1_0_0]">

            <div class="flex flex-col items-start gap-[12px] self-stretch text-left">
                <!-- Title -->
                <h2
                    class="self-stretch text-[#0A0A0A] font-['Geist'] text-[24px] font-semibold leading-[32px] tracking-[-0.005px]
                    xl:w-[556px] xl:text-text-neutral-primary xl:font-sans xl:text-L xl:leading-[40px] xl:tracking-[-0.008px]">
                    Sigap Bantu Warga
                </h2>

                <!-- Desc -->
                <p class="self-stretch text-left text-black-95080 font-['Geist'] text-[14px] font-normal not-italic leading-[22px]
                    xl:w-[556px]">
                    Website ini hadir untuk memudahkan setiap warga dalam menyampaikan laporan masalah di lingkungan
                    sekitar. Dengan sistem yang sederhana dan cepat, siapa pun dapat berpartisipasi menjaga kenyamanan
                    bersama. Dengan adanya website ini, masyarakat tidak lagi kesulitan menyampaikan keluhan atau
                    masalah. Semua bisa dilakukan secara praktis, cepat, dan terorganisir, sehingga tercipta lingkungan
                    yang lebih aman, nyaman, dan sejahtera.
                </p>
            </div>

            <!-- Stats Row -->
            <div class="flex items-start gap-[4px] self-stretch
                xl:gap-3">
                <div v-for="stat in stats" :key="stat.label" class="flex flex-col justify-center items-center gap-[8px] flex-[1_0_0] text-center
                    xl:gap-3 xl:flex-1">

                    <!-- Number -->
                    <span
                        class="text-[#0A0A0A] font-['Geist'] text-[24px] font-bold leading-[32px] tracking-[-0.005px]
                        xl:text-text-neutral-primary xl:font-sans xl:text-L xl:font-semibold xl:leading-[40px] xl:tracking-[-0.008px]">
                        {{ stat.number }}
                    </span>

                    <!-- Label -->
                    <span class="self-stretch text-text-neutral-secondary font-['Geist'] text-[12px] font-normal leading-[18px] text-center whitespace-pre-line
                        xl:text-text-neutral-secondary xl:font-sans xl:text-SM-16 xl:leading-[24px]">
                        {{ stat.label }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Image -->

        <div class="h-[209px] self-stretch rounded-500 bg-cover bg-center bg-no-repeat order-first
            xl:h-[378px] xl:flex-[1_0_0] xl:rounded-500 xl:order-0"
            style="background-image: url('/images/usertrust.webp');">
        </div>
    </section>
</template>
