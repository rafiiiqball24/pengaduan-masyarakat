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
    <section
        class="flex flex-col items-center justify-center w-full py-[48px] gap-[20px] bg-white overflow-hidden relative">
        <div
            class="absolute top-0 bottom-0 left-0 w-[200px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none">
        </div>
        <div
            class="absolute top-0 bottom-0 right-0 w-[200px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none">
        </div>

        <div class="flex items-center gap-[48px] w-full overflow-hidden">
            <!-- Marquee Container -->
            <div class="flex items-center gap-[48px] animate-marquee whitespace-nowrap">
                <div v-for="partner in partners" :key="partner.name"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name"
                        :style="{ width: partner.width, height: partner.height }" class="object-contain" />
                </div>

                <div v-for="partner in partners" :key="`${partner.name}-dup`"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name"
                        :style="{ width: partner.width, height: partner.height }" class="object-contain" />
                </div>

                <div v-for="partner in partners" :key="`${partner.name}-dup-2`"
                    class="flex-shrink-0 flex items-center justify-center">
                    <img :src="partner.src" :alt="partner.name"
                        :style="{ width: partner.width, height: partner.height }" class="object-contain" />
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
    display: flex;
    width: max-content;
    animation: marquee 30s linear infinite;
}
</style>
