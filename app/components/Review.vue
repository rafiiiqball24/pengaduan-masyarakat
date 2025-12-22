<script setup lang="ts">
const reviews = [
    {
        text: 'Websitenya Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini...',
        name: 'Rachmad Supard',
        icon: '/icons/petik.svg'
    },
    {
        text: 'Websitenya Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini...',
        name: 'Rafi',
        icon: '/icons/petik.svg'
    },
    {
        text: 'Websitenya Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini...',
        name: 'Anya Tayler',
        icon: '/icons/petik.svg'
    },
    {
        text: 'Websitenya Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini...',
        name: 'Rachmad Rafi Supardi',
        icon: '/icons/petik.svg'
    }
]
</script>

<template>
    <section class="flex flex-col items-center gap-[20px] self-stretch w-full py-[40px] px-[16px] overflow-hidden
        xl:px-0 xl:py-10 xl:gap-5 xl:items-start">

        <div class="flex flex-col items-center gap-[20px] self-stretch w-full
            xl:flex-row xl:items-start xl:gap-5 xl:overflow-x-auto xl:px-[112px] xl:pb-4 xl:no-scrollbar">

            <div v-for="(review, index) in reviews" :key="index" class="flex flex-col items-start gap-[40px] p-[20px] rounded-[20px] bg-[#F5F5F5] w-full max-w-[380px] shrink-0
                xl:w-[336.6px] xl:max-w-none xl:gap-[80px] xl:rounded-500 xl:bg-bg-surface-neutral">

                <div class="flex flex-col items-start gap-[8px] self-stretch
                    xl:gap-2">
                    <!-- Icon -->
                    <img :src="review.icon" alt="Quote" class="w-[40px] h-[43px]
                        xl:w-[67.5px] xl:h-[72px]" />

                    <!-- Review Text -->
                    <p
                        class="self-stretch overflow-hidden text-[#0A0A0A] font-['Geist'] text-[14px] font-normal leading-[22px] line-clamp-5
                        xl:text-text-neutral-primary xl:font-sans xl:text-[20px] xl:tracking-[-0.003px] xl:leading-[28px]">
                        {{ review.text }}
                    </p>
                </div>

                <!-- Name -->
                <p class="text-[#757575] font-['Geist'] text-[12px] font-semibold leading-[18px]
                    xl:text-text-neutral-secondary xl:font-sans xl:text-sm xl:leading-[22px]">
                    {{ review.name }}
                </p>
            </div>
        </div>

    </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
