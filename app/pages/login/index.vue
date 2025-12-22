<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { googleTokenLogin } from 'vue3-google-login'

const router = useRouter()
const isAgreed = ref(false)
const showToast = ref(false)
const isLoggingIn = ref(false)
const config = useRuntimeConfig()

const handleLogin = async () => {
    if (!isAgreed.value) return

    // Check if Client ID is configured
    if (!config.public.googleClientId) {
        alert('Google Client ID not configured. Please add NUXT_PUBLIC_GOOGLE_CLIENT_ID to your environment variables.')
        return
    }

    isLoggingIn.value = true

    try {
        const response = await googleTokenLogin()
        console.log('Google Login Response:', response)

        // Here you would typically verify the token with your backend or get user info
        // For now, we simulate success

        isLoggingIn.value = false
        showToast.value = true

        // Redirect after showing toast
        setTimeout(() => {
            router.push('/homepage')
        }, 1500)
    } catch (error) {
        console.error('Login Failed:', error)
        isLoggingIn.value = false
        alert('Login Failed. See console for details.')
    }
}

const closeToast = () => {
    showToast.value = false
}
</script>

<template>
    <!-- Wrapper to center the fixed content if screen is large, or handle scroll if small -->
    <div class="min-h-screen w-full flex items-center bg-gray-100 overflow-auto">


        <!-- Main Container -->
        <div class="min-h-screen w-full flex bg-gray-100 relative">


            <!-- Left Section (Image) -->
            <div
                class="flex flex-col justify-end items-start flex-1 self-stretch p-10 bg-[linear-gradient(0deg,rgba(10,10,10,0.32)_0%,rgba(10,10,10,0.32)_100%),url('/images/login.webp')] bg-cover bg-no-repeat bg-[35%_center] bg-gray-300">

                <!-- Content -->
                <div class="flex flex-col items-start self-stretch gap-[12px]">
                    <!-- Logo -->
                    <div class="relative shrink-0 w-[146px] h-[85px] aspect-[146/85]">
                        <img src="/logo.svg" alt="Logo" class="w-full h-full object-contain object-bottom-left" />
                    </div>

                    <!-- Quote/Notes -->
                    <p class="self-stretch text-white text-quote">
                        Bumi menyediakan cukup untuk memenuhi kebutuhan setiap orang, tetapi tidak untuk keserakahan
                        setiap
                        orang.
                    </p>

                    <!-- Author -->
                    <p class="self-stretch text-white text-quote">
                        — Mahatma Gandhi
                    </p>
                </div>
            </div>

            <!-- Right Section (Form) -->
            <div
                class="flex flex-col justify-center items-center shrink-0 w-full lg:w-[701px] h-[900px] p-10 bg-white gap-[var(--space-2000)] pb-40">

                <!-- Header Group -->
                <div class="flex flex-col items-center gap-4 w-full mt-[var(--space-2000)]">

                    <!-- Badge -->
                    <div class="flex items-center px-2 py-1 gap-1 rounded-full bg-[var(--color-surface-primary)]">
                        <span
                            class="text-[var(--color-text-primary)] font-sans text-sm font-medium leading-[22px]">Selamat
                            Datang!</span>
                    </div>

                    <!-- Title & Subtitle -->
                    <div class="flex flex-col items-center gap-2 self-stretch">
                        <h1
                            class="self-stretch text-center text-[var(--color-text-neutral-primary)] font-[Urbanist] text-[40px] font-semibold leading-[48px] tracking-[-0.009px]">
                            Buat Akun Masyarakat
                        </h1>
                        <p
                            class="self-stretch text-center text-[var(--color-text-neutral-primary)]/80 font-sans text-[20px] font-normal leading-[28px] tracking-[-0.003px]">
                            Daftar sebagai masyarakat yuk, biar kamu bisa ikut melaporkan kejadian dan kamu langsung
                            jadi
                            bagian dari perubahan positif di sekitar kita!
                        </p>
                    </div>
                </div>

                <!-- CTA Group -->
                <div class="flex flex-col items-center self-stretch w-full gap-5">

                    <!-- Checkbox -->
                    <div class="flex items-center self-stretch cursor-pointer p-1 gap-3" @click="isAgreed = !isAgreed">
                        <div class="flex items-start justify-center pt-[2px]">
                            <div class="flex items-center justify-center shrink-0 w-5 h-5 p-0.5 gap-1 rounded transition-colors duration-200"
                                :class="isAgreed ? 'bg-[#E75A0F] border-none' : 'border border-[#18171C] bg-transparent'">
                                <img v-if="isAgreed" src="/icons/Check.svg" alt="Checked" class="w-full h-full" />
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[#0A0A0A] font-sans text-base font-normal leading-6">
                                Saya telah membaca dan menyetujui <span class="font-semibold">Syarat dan
                                    Ketentuan</span>, serta <span class="font-semibold">Kebijakan Privasi</span>
                                yang berlaku.
                            </span>
                        </div>
                    </div>

                    <!-- Google Login Button -->
                    <button @click="handleLogin" :disabled="!isAgreed || isLoggingIn"
                        class="flex justify-center items-center transition-all duration-300 py-3 px-4 gap-2 rounded-full border w-fit"
                        :class="isAgreed
                            ? 'border-[#F67011] bg-[#F67011] cursor-pointer'
                            : 'border-[#E0E0E0] bg-[#EDEDED] cursor-not-allowed'">
                        <div class="w-5 h-5 flex justify-center items-center p-0.5">
                            <img :src="isAgreed ? '/icons/google_active.svg' : '/icons/google_non_active.svg'"
                                alt="Google" />
                        </div>
                        <span class="font-sans text-xl font-medium leading-7 tracking-[-0.003px]"
                            :class="isAgreed ? 'text-[#FEFFFF]' : 'text-[#9E9E9E]'">
                            {{ isLoggingIn ? 'Masuk...' : 'Masuk Menggunakan Google' }}
                        </span>
                    </button>

                </div>
            </div>
        </div>

        <!-- Toast Notification -->
        <Transition enter-active-class="transition ease-out duration-300"
            enter-from-class="transform opacity-0 translate-y-10" enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200" leave-from-class="transform opacity-100 translate-y-0"
            leave-to-class="transform opacity-0 translate-y-10">
            <div v-if="showToast"
                class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center w-[343px] px-4 py-3 gap-[10px] rounded-lg border border-[#D1FDD7] bg-[#E8FCF5] shadow-[0_1.25px_4px_0_#F2F2F2]">
                <span class="flex-1 text-[#0E9B77] font-sans text-sm font-semibold leading-[22px]">
                    Kamu sudah berhasil Masuk!
                </span>
                <button @click="closeToast"
                    class="flex justify-center items-center hover:bg-black/5 transition-colors py-1 px-3 gap-1 rounded-lg">
                    <span class="text-[#0A0A0A] font-sans text-xs font-medium leading-[18px]">Tutup</span>
                </button>
            </div>
        </Transition>

    </div>
</template>

<style scoped>
/* Custom Scrollbar if needed */
</style>