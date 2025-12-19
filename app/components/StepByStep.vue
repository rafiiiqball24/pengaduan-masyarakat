<script setup lang="ts">
const steps = [
    {
        number: '1',
        title: 'Sesuaikan Wilayah Pengaduan!',
        description: 'Untuk membuat laporan, kamu harus masuk ke website sesuai wilayahmu',
        icon: '/icons/global-search.svg'
    },
    {
        number: '2',
        title: 'Daftar Akun Sebagai Warga',
        description: 'Daftarkan akun dengan Google guna membuat laporan',
        icon: '/icons/authorized.svg'
    },
    {
        number: '3',
        title: 'Laporan Harus Benar',
        description: 'Sebelum mengirim, pastikan laporan mu adalah benar terjadi',
        icon: '/icons/checkmark.svg'
    },
    {
        number: '4',
        title: 'Tunggu Laporan Ditindak Lanjuti',
        description: 'Laporan yang terkirim akan ditindak lanjuti oleh tim keamanan setempat',
        icon: '/icons/workout-run.svg'
    }
]
</script>

<template>
    <section class="flex flex-wrap items-start content-start justify-center w-full px-[112px] py-[40px] gap-5">

        <div v-for="step in steps" :key="step.number"
            class="flex w-[598px] h-[230px] p-5 items-center gap-[10px] rounded-500 bg-bg-fill-secondary">
            <span
                class="text-number-opacity font-sans text-[200px] font-bold leading-none flex items-center justify-center translate-y-2">{{
                    step.number }}</span>

            <!-- Content Frame -->
            <div class="flex w-[458px] flex-col items-start gap-[10px] shrink-0">
                <!-- Icon -->
                <div class="flex w-8 h-8 p-[2.667px] justify-center items-center">
                    <img :src="step.icon" :alt="step.title" class="w-full h-full" />
                </div>

                <!-- Text -->
                <div class="flex flex-col items-start gap-px self-stretch">
                    <h3 class="self-stretch text-text-white-secondary font-sans text-base font-semibold leading-6">{{
                        step.title
                        }}</h3>
                    <p class="self-stretch text-text-white-secondary font-sans text-sm font-normal leading-[22px]">{{
                        step.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
