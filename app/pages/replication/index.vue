<template>
    <div class="flex flex-col min-h-screen bg-white">
        <!-- Header -->
        <AppHeader />

        <main class="flex-1 w-full flex flex-col items-center">
            <!-- Top Section -->
            <section
                class="max-w-[1440px] w-full flex flex-col items-center py-10 px-4 gap-6 lg:pt-[80px] lg:pb-[40px] lg:px-[112px] lg:gap-[40px]">
                <!-- Header Content -->
                <div class="w-full max-w-[1216px] flex flex-col justify-center items-center gap-[16px]">
                    <!-- Icon -->
                    <img src="/icons/note-01.svg" alt="Note Icon" class="w-[44px] h-[44px] aspect-square" />

                    <!-- Title -->
                    <h1
                        class="self-stretch text-center font-display text-3xl lg:text-[40px] font-semibold leading-tight lg:leading-[48px] tracking-[-0.009px] text-[#0A0A0A]">
                        Ajukan Replikasi Sistem
                    </h1>

                    <!-- Subtitle -->
                    <p
                        class="self-stretch text-center font-sans text-base lg:text-[20px] font-normal leading-normal lg:leading-[28px] tracking-[-0.003px] text-[#0a0a0acc]">
                        Tertarik untuk mengimplementasikan platform Vide untuk kebutuhan wilayah atau organisasi Anda?
                        Silakan lengkapi data Anda dan tim kami akan segera menghubungi Anda.
                    </p>
                </div>
            </section>

            <!-- Bottom Section -->
            <section
                class="max-w-[1440px] w-full flex flex-col-reverse gap-10 lg:flex-row lg:items-start px-4 pb-20 lg:pt-[40px] lg:pb-[80px] lg:px-[112px] lg:gap-[40px]">
                <!-- Left Section (Form) -->
                <div class="flex flex-col items-start gap-[32px] w-full lg:w-[608px] lg:shrink-0 z-10">
                    <!-- Form Section -->
                    <div class="flex flex-col justify-center items-start gap-[24px] self-stretch rounded-400">

                        <!-- Form Set -->
                        <div class="flex flex-col items-start gap-[16px] self-stretch">

                            <!-- Nama Lengkap -->
                            <div class="flex flex-col items-start gap-[6px] self-stretch">
                                <label
                                    class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-sans text-[14px] font-medium leading-[22px]">
                                    Nama Lengkap
                                </label>
                                <input type="text" placeholder="Masukkan nama lengkap Anda" v-model="formData.name"
                                    class="flex items-center w-full px-[16px] py-[12px] gap-[8px] rounded-300 border border-[#EDEDED] bg-[#FEFFFF] text-text-neutral-secondary font-sans text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011]" />
                            </div>

                            <!-- Alamat Email -->
                            <div class="flex flex-col items-start gap-[6px] self-stretch">
                                <label
                                    class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-sans text-[14px] font-medium leading-[22px]">
                                    Alamat Email
                                </label>
                                <input type="email" placeholder="contoh@email.com" v-model="formData.email"
                                    class="flex items-center w-full px-[16px] py-[12px] gap-[8px] rounded-300 border border-[#EDEDED] bg-[#FEFFFF] text-text-neutral-secondary font-sans text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011]" />
                            </div>

                            <!-- Nomor Telepon -->
                            <div class="flex flex-col items-start gap-[6px] self-stretch">
                                <label
                                    class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-sans text-[14px] font-medium leading-[22px]">
                                    Nomor Telepon
                                </label>
                                <input type="tel" placeholder="08xx - xxxx -- xxxx" v-model="formData.phone"
                                    class="flex items-center w-full px-[16px] py-[12px] gap-[8px] rounded-300 border border-[#EDEDED] bg-[#FEFFFF] text-text-neutral-secondary font-sans text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011]" />
                            </div>

                            <!-- Pesan Pengajuan -->
                            <div class="flex flex-col items-start gap-[6px] self-stretch h-[180px]">
                                <label
                                    class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-sans text-[14px] font-medium leading-[22px]">
                                    Pesan Pengajuan
                                </label>
                                <textarea placeholder="Tuliskan informasi atau pesan Anda di sini..."
                                    v-model="formData.message"
                                    class="flex flex-1 w-full px-[16px] py-[12px] items-start gap-[8px] self-stretch rounded-300 border border-[#EDEDED] bg-[#FEFFFF] text-text-neutral-secondary font-sans text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011] resize-none"></textarea>
                            </div>
                        </div>

                        <!-- Checkbox -->
                        <div class="flex p-[4px] items-center gap-[8px] self-stretch">
                            <div class="relative flex items-center justify-center w-[16px] h-[16px]">
                                <input type="checkbox" id="agreement" v-model="formData.agreement"
                                    class="peer w-full h-full appearance-none rounded-[4px] border border-bg-fill-secondary checked:bg-[#F67011] checked:border-[#F67011] cursor-pointer transition-colors" />
                                <svg class="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <label for="agreement"
                                class="flex-1 text-[#0a0a0acc] font-sans text-[12px] font-normal leading-[18px]">
                                Saya memahami dan menyetujui <span class="font-medium text-[#0a0a0acc]">Syarat &
                                    Ketentuan</span> serta kebijakan privasi yang berlaku mengenai replikasi platform
                                Vide.
                            </label>
                        </div>

                        <!-- Submit Button -->
                        <button @click="handleSubmit"
                            class="flex px-[16px] py-[12px] justify-center items-center gap-[8px] self-stretch rounded-300 bg-[#F67011] text-[#FEFFFF] font-sans text-[20px] font-medium leading-[28px] tracking-[-0.003px] shadow-2 hover:bg-[#e06000] transition-colors cursor-pointer">
                            Kirim
                        </button>
                    </div>
                </div>

                <!-- Right Section -->
                <div class="w-full flex justify-center -mt-12 lg:flex-1 lg:relative lg:min-h-[600px] lg:-mt-16">
                    <div
                        class="relative w-full scale-150 lg:scale-100 max-w-[600px] lg:max-w-none lg:w-[1000px] lg:h-[1000px] lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                        <ClientOnly>
                            <Vue3Lottie animationLink="/animation/load.json" width="100%" height="100%" />
                        </ClientOnly>
                    </div>
                </div>

            </section>
        </main>

        <AppFooter />

        <!-- Success Modal/Backdrop -->
        <div v-if="showSuccess"
            class="fixed inset-0 z-50 flex items-end justify-center pb-10 bg-black/20 backdrop-blur-sm transition-all duration-300">
            <div
                class="flex w-[343px] py-[12px] px-[16px] items-center gap-[10px] shrink-0 rounded-[8px] border border-[#D1FDD7] bg-[#E8FCF5] shadow-[0_1.25px_4px_0_#F2F2F2]">
                <span class="flex-1 text-[#0E9B77] font-sans text-[14px] font-semibold leading-[22px]">
                    Permohonan berhasil dikirim!
                </span>
                <button @click="showSuccess = false"
                    class="flex py-[4px] px-[12px] justify-center items-center gap-[4px] rounded-[8px] text-[#0A0A0A] font-sans text-[12px] font-medium leading-[18px] hover:bg-[#D1FDD7] transition-colors cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSuccess = ref(false);

const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
});

const handleSubmit = () => {
    showSuccess.value = true;
    // Reset form data
    formData.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
    };

    setTimeout(() => {
        showSuccess.value = false;
    }, 3000);
};
</script>
