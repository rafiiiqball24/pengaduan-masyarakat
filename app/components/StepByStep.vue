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
    <section class="flex flex-col justify-center items-center w-full px-[16px] py-[40px] gap-[8px] 
        xl:flex-row xl:flex-wrap xl:items-start xl:content-start xl:px-[112px] xl:gap-5">

        <div v-for="step in steps" :key="step.number" class="flex w-full py-[16px] px-[20px] items-center gap-[10px] rounded-[16px] bg-[#18171C]
            md:max-w-[380px]
            xl:w-[598px] xl:h-[230px] xl:max-w-none xl:p-5 xl:rounded-500 xl:bg-bg-fill-secondary">

            <span
                class="font-['Geist'] text-[rgba(158,158,158,0.20)] text-[64px] font-bold leading-[64px] tracking-[-0.015px]
                xl:text-number-opacity xl:font-sans xl:text-[200px] xl:leading-none xl:flex xl:items-center xl:justify-center xl:translate-y-2 xl:tracking-normal">
                {{ step.number }}
            </span>

            <!-- Content Frame -->
            <div class="flex flex-col items-start gap-[10px] flex-1 min-w-0
                xl:shrink-0 xl:w-[458px] xl:flex-none">

                <!-- Icon -->
                <div class="flex w-[20px] h-[20px] p-[1.667px] justify-center items-center
                    xl:w-8 xl:h-8 xl:p-[2.667px]">
                    <img :src="step.icon" :alt="step.title" class="w-full h-full" />
                </div>

                <!-- Text -->
                <div class="flex flex-col items-start gap-px self-stretch">
                    <h3 class="self-stretch text-[#E0E0E0] font-['Geist'] text-[16px] font-semibold leading-[24px]
                        xl:text-text-white-secondary xl:font-sans xl:text-base xl:leading-6">
                        {{ step.title }}
                    </h3>

                    <p class="self-stretch text-[#E0E0E0] font-['Geist'] text-[14px] font-normal leading-[22px] tracking-tight
                        xl:text-text-white-secondary xl:font-sans xl:text-sm xl:tracking-normal">
                        {{ step.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
