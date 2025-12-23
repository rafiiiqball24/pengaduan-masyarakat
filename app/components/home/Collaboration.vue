<script setup lang="ts">
const partners = [
    { name: 'CboeGlobal', src: '/icons/CboeGlobal.svg', width: '116px', height: '40px' },
    { name: 'BlackRock', src: '/icons/BlackRock.svg', width: '277px', height: '39px' },
    { name: 'CBRE', src: '/icons/CBREGroup.svg', width: '168px', height: '40px' },
    { name: 'Ceridian', src: '/icons/Ceridian.svg', width: '128px', height: '40px' },
    { name: 'Dentsply', src: '/icons/Dentsply.svg', width: '143px', height: '40px' },
    { name: 'Everest', src: '/icons/Everest.svg', width: '192px', height: '40px' },
    { name: 'Expedia', src: '/icons/expedia.svg', width: '274px', height: '40px' },
]
</script>

<template>
    <section class="flex flex-col justify-center items-center self-stretch bg-white overflow-hidden relative 
        py-[40px] px-[16px] gap-[8px] 
        md:py-[48px] md:px-0 md:gap-[20px]">

        <!-- Frame Kiri -->
        <div class="absolute z-10 pointer-events-none left-0 
            w-[34px] h-[100px] top-1/2 -translate-y-1/2 
            bg-[linear-gradient(-90deg,rgba(254,255,255,0.00)_-19.54%,#FEFFFF_70.61%)]
            md:w-[200px] md:h-full md:top-0 md:translate-y-0 md:bg-gradient-to-r md:from-white md:to-transparent">
        </div>

        <!-- Frame Kanan -->
        <div class="absolute z-10 pointer-events-none right-0 
            w-[34px] h-[100px] top-1/2 -translate-y-1/2 
            bg-[linear-gradient(90deg,rgba(254,255,255,0.00)_-19.54%,#FEFFFF_70.61%)]
            md:w-[200px] md:h-full md:top-0 md:translate-y-0 md:bg-gradient-to-l md:from-white md:to-transparent">
        </div>

        <div class="w-full overflow-hidden flex items-center">
            <!-- Marquee Container -->

            <div class="animate-marquee flex items-center self-stretch w-max
                gap-[24px] [animation-duration:15s]
                md:gap-[48px] md:[animation-duration:30s]">

                <div v-for="partner in partners" :key="partner.name"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name" class="object-contain h-[24px] w-auto md:h-[40px]" />
                </div>

                <div v-for="partner in partners" :key="`${partner.name}-dup`"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name" class="object-contain h-[24px] w-auto md:h-[40px]" />
                </div>

                <div v-for="partner in partners" :key="`${partner.name}-dup-2`"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name" class="object-contain h-[24px] w-auto md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-marquee {
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>
