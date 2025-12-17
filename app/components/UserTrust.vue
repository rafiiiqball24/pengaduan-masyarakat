<script setup lang="ts">
const stats = [
    { number: '80+', label: 'Laporan terkirim setiap harinya' },
    { number: '99%', label: 'Laporan laporan direspon perhari' },
    { number: '500+', label: 'Orang terbantu dengan layanan kami' }
]
</script>

<template>
    <section class="flex w-[1440px] h-[458px] px-[112px] py-10 items-center gap-10 mx-auto">
        <!-- Text Frame -->
        <div class="flex flex-col items-start gap-10 flex-[1_0_0]">
            <!-- Headline & Description -->
            <div class="flex flex-col items-start gap-[12px] self-stretch">
                <h2
                    class="w-[556px] text-text-neutral-primary font-sans text-L font-semibold leading-[40px] tracking-[-0.008px]">
                    Sigap Bantu Warga
                </h2>
                <p class="w-[556px] text-black-95080 font-sans text-SM-16 font-normal leading-[24px]">
                    Website ini hadir untuk memudahkan setiap warga dalam menyampaikan laporan masalah di lingkungan
                    sekitar. Dengan sistem yang sederhana dan cepat, siapa pun dapat berpartisipasi menjaga kenyamanan
                    bersama. Dengan adanya website ini, masyarakat tidak lagi kesulitan menyampaikan keluhan atau
                    masalah. Semua bisa dilakukan secara praktis, cepat, dan terorganisir, sehingga tercipta lingkungan
                    yang lebih aman, nyaman, dan sejahtera.
                </p>
            </div>

            <!-- Stats Row -->
            <div class="flex items-start gap-3 self-stretch">
                <div v-for="stat in stats" :key="stat.label"
                    class="flex flex-col items-center gap-3 flex-1 text-center">
                    <span
                        class="text-text-neutral-primary font-sans text-L font-semibold leading-[40px] tracking-[-0.008px]">
                        {{ stat.number }}
                    </span>
                    <span
                        class="self-stretch text-text-neutral-secondary font-sans text-SM-16 font-normal leading-[24px] text-center">
                        {{ stat.label }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Image -->
        <div class="h-[378px] flex-[1_0_0] rounded-500 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/images/usertrust.webp');">
        </div>
    </section>
</template>
