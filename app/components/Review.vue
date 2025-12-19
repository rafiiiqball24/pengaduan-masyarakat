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
    <section class="flex flex-col items-start gap-5 self-stretch w-full py-10 overflow-hidden">


        <div class="flex items-start gap-5 self-stretch overflow-x-auto px-[112px] pb-4 w-full no-scrollbar">
            <div v-for="(review, index) in reviews" :key="index"
                class="flex-shrink-0 flex w-[336.6px] p-5 flex-col items-start gap-[80px] rounded-500 bg-bg-surface-neutral">

                <div class="flex flex-col items-start gap-2 self-stretch">
                    <img :src="review.icon" alt="Quote" class="w-[67.5px] h-[72px]" />
                    <p
                        class="self-stretch overflow-hidden text-text-neutral-primary text-ellipsis font-sans text-[20px] font-normal leading-[28px] tracking-[-0.003px] line-clamp-5">
                        {{ review.text }}
                    </p>
                </div>

                <!-- Name -->
                <p class="text-text-neutral-secondary font-sans text-sm font-semibold leading-[22px]">{{ review.name }}
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
