<script setup lang="ts">
const tabs = [
    'General',
    'Reporting Guide',
    'Aspirations',
    'Tracking & Follow-up',
    'Privacy & Security',
    'Account Management'
]

const activeTab = ref('General')

const faqs = ref([
    {
        question: 'What is the difference between a copyright and a trademark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOpen: true
    },
    {
        question: 'How does the internet work?',
        answer: 'The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite (TCP/IP) to link devices worldwide.',
        isOpen: false
    },
    {
        question: 'What are the key factors to consider when buying a car?',
        answer: 'Key factors include budget, fuel efficiency, reliability, safety ratings, resale value, and intended use (e.g., commuting vs. family trips).',
        isOpen: false
    },
    {
        question: 'How do I start a healthy diet?',
        answer: 'Start by incorporating more fruits, vegetables, whole grains, and lean proteins into your meals while reducing processed foods and sugary drinks.',
        isOpen: false
    },
    {
        question: 'What is the capital of the United States?',
        answer: 'The capital of the United States is Washington, D.C.',
        isOpen: false
    },
    {
        question: 'What is the speed of light?',
        answer: 'The speed of light in a vacuum is approximately 299,792,458 meters per second (about 186,282 miles per second).',
        isOpen: false
    }
])

const toggleFaq = (index: number) => {
    if (faqs.value[index]) {
        faqs.value[index].isOpen = !faqs.value[index].isOpen
    }
}
</script>

<template>
    <div class="min-h-screen bg-background text-foreground flex flex-col">
        <AppHeader />

        <main class="flex-1 flex flex-col items-center justify-start w-full">
            <section class="flex flex-col items-start w-full max-w-[1440px] mx-auto bg-white">
                <div
                    class="flex flex-col items-center self-stretch px-4 md:px-8 xl:px-[128px] pt-10 xl:pt-[80px] pb-5 xl:pb-[40px]">
                    <div class="flex flex-col items-center w-full max-w-[1000px] gap-4">
                        <!-- Logo -->
                        <img src="/icons/chat-question.svg" alt="FAQ Icon" class="w-11 h-11 aspect-square" />

                        <!-- Title Wrapper -->
                        <div class="flex flex-col items-center gap-3 w-full">
                            <h2
                                class="text-center text-[#0A0A0A] font-['Geist'] text-[24px] font-semibold leading-[32px] tracking-[-0.005px] xl:font-['Urbanist'] xl:text-[48px] xl:leading-[54px] xl:tracking-[-0.012px]">
                                Ada yang Bisa Kami Bantu?
                            </h2>
                            <p
                                class="self-stretch text-center text-[#0A0A0A]/80 font-['Geist'] text-[14px] font-normal leading-[22px] tracking-normal xl:text-[20px] xl:leading-[28px] xl:tracking-[-0.003px]">
                                Temukan jawaban cepat seputar cara melapor, menyampaikan aspirasi, dan bagaimana Vide
                                bekerja
                                untuk
                                menghubungkan suaramu.
                            </p>
                        </div>

                        <!-- Filter Tabs -->

                        <div class="w-full overflow-x-auto no-scrollbar pt-6">
                            <div class="flex items-center gap-2 min-w-max px-4 xl:px-0 mx-auto xl:justify-center">
                                <button v-for="tab in tabs" :key="tab"
                                    class="flex items-center gap-[2px] px-3 py-1.5 xl:gap-1 xl:px-2 xl:py-1 rounded-full font-['Geist'] text-sm font-medium leading-[22px] cursor-pointer transition-all duration-200 ease whitespace-nowrap"
                                    :class="[
                                        activeTab === tab
                                            ? 'bg-[#F67011] text-[#FEFFFF]'
                                            : 'bg-[#FFF7ED] text-[#E75A0F]'
                                    ]" @click="activeTab = tab">
                                    {{ tab }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Accordion Section -->
                <div
                    class="flex flex-col items-center self-stretch px-4 md:px-8 xl:px-[112px] pt-5 xl:pt-[40px] pb-10 xl:pb-[80px]">
                    <div class="flex flex-col items-center w-full max-w-[920px]">

                        <div v-for="(faq, index) in faqs" :key="index" class="flex flex-col items-start self-stretch">
                            <!-- Accordion Title -->
                            <button @click="toggleFaq(index)"
                                class="flex p-4 items-center gap-3 self-stretch bg-[#FEFFFF] cursor-pointer hover:bg-gray-50 transition-colors">
                                <span
                                    class="flex-1 text-left text-[#0A0A0A] font-['Geist'] text-[16px] font-medium leading-[24px]">
                                    {{ faq.question }}
                                </span>
                                <img src="/icons/CaretDown.svg" alt="Toggle"
                                    class="transition-transform duration-300 w-5 h-5 xl:w-6 xl:h-6 shrink-0"
                                    :class="{ 'rotate-180': faq.isOpen }" />
                            </button>

                            <!-- Accordion Body -->
                            <div v-show="faq.isOpen"
                                class="flex flex-col items-start p-4 pt-0 gap-3 self-stretch text-[#757575] font-['Geist'] text-[14px] font-normal leading-[22px]">
                                {{ faq.answer }}
                            </div>

                            <!-- Divider -->
                            <div class="self-stretch h-[1px] bg-[#EDEDED]"></div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

        <AppFooter />
    </div>
</template>
