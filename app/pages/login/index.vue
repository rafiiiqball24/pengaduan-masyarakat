<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { googleTokenLogin } from 'vue3-google-login'

const router = useRouter()
const isAgreed = ref(false)
const showToast = ref(false)
const isLoggingIn = ref(false)
const config = useRuntimeConfig()
const isOpen = ref(false)

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
        <div class="min-h-screen w-full flex flex-col lg:flex-row bg-gray-100 relative">

            <!-- Mobile Navbar -->
            <div class="flex lg:hidden justify-between items-center w-full px-4 py-4 bg-white relative">
                <!-- Logo -->
                <div class="flex items-center justify-center gap-3">
                    <img src="/logo.svg" alt="Logo" class="w-10 h-10 shrink-0" />
                    <img src="/brand-text.svg" alt="Vide" class="w-[44px] h-[15.462px] shrink-0" />
                </div>

                <!-- Mobile Menu Button -->
                <button @click="isOpen = true"
                    class="flex w-8 h-8 p-[5px_4px] items-center justify-center aspect-square text-gray-900">
                    <img src="/icons/menu-01.svg" class="w-full h-full" alt="Menu" />
                </button>
            </div>

            <!-- Mobile Menu Overlay -->
            <div v-if="isOpen" class="lg:hidden fixed inset-0 z-50 bg-white flex flex-col h-screen overflow-y-auto">
                <div class="flex items-center justify-between py-5 px-4 bg-[#FEFFFF]">
                    <div class="flex items-center justify-center gap-3">
                        <img src="/logo.svg" alt="Logo" class="w-10 h-10 shrink-0" />
                        <img src="/brand-text.svg" alt="Vide" class="w-[44px] h-[15.462px] shrink-0" />
                    </div>
                    <button @click="isOpen = false" class="flex w-8 h-8 p-1 justify-center items-center aspect-square">
                        <img src="/icons/cancel-01.svg" class="w-6 h-6 shrink-0" alt="Close" />
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <nav class="flex flex-col items-start gap-3 px-4 py-3 pb-6 flex-1 bg-white">
                    <NuxtLink to="/homepage"
                        class="flex w-full py-3 justify-start items-center gap-1 rounded-[10px] text-[#F67011] font-sans text-[16px] font-medium leading-[24px]">
                        Homepage
                    </NuxtLink>
                    <NuxtLink to="/about"
                        class="flex w-full py-3 justify-start items-center gap-1 rounded-[10px] text-[#0A0A0A] opacity-60 hover:opacity-100 font-sans text-[16px] font-medium leading-[24px]">
                        Tentang Kami
                    </NuxtLink>
                    <NuxtLink to="/faq"
                        class="flex w-full py-3 justify-start items-center gap-1 rounded-[10px] text-[#0A0A0A] opacity-60 hover:opacity-100 font-sans text-[16px] font-medium leading-[24px]">
                        FAQ
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="flex w-full py-3 justify-start items-center gap-1 rounded-[10px] text-[#0A0A0A] opacity-60 hover:opacity-100 font-sans text-[16px] font-medium leading-[24px]">
                        Kontak
                    </NuxtLink>
                </nav>

                <!-- Mobile Actions -->
                <div class="flex flex-col justify-center items-center gap-3 p-4 bg-white">
                    <button @click="$router.push('/login')"
                        class="flex items-center justify-center w-full px-3 py-2 gap-1 rounded-full bg-[#F67011] text-[#FEFFFF] shadow-2 font-sans text-[16px] font-medium leading-[24px] cursor-pointer hover:opacity-90 transition-opacity">
                        Masuk Sebagai Warga
                    </button>

                    <NuxtLink to="/replication"
                        class="flex items-center justify-center w-full px-3 py-2 gap-1 rounded-full border border-text-white-secondary text-[#0A0A0A] font-sans text-[16px] font-medium leading-[24px]">
                        Replication Request
                    </NuxtLink>
                </div>
            </div>

            <!-- Left Section (Image) -->
            <div
                class="hidden lg:flex flex-col justify-end items-start flex-1 self-stretch p-10 bg-[linear-gradient(0deg,rgba(10,10,10,0.32)_0%,rgba(10,10,10,0.32)_100%),url('/images/login.webp')] bg-cover bg-no-repeat bg-position-[35%_center] bg-gray-300">

                <!-- Content -->
                <div class="flex flex-col items-start self-stretch gap-[12px]">
                    <!-- Logo -->
                    <div class="relative shrink-0 w-[146px] h-[85px] aspect-146/85">
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
                class="flex flex-col justify-center items-center shrink-0 w-full min-h-[calc(100vh-72px)] lg:h-[900px] lg:min-h-0 px-4 lg:w-[701px] lg:p-10 bg-white gap-10 lg:gap-(--space-2000) pb-0 lg:pb-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">

                <!-- Header Group -->
                <div class="flex flex-col items-center gap-3 lg:gap-4 w-full mt-0 lg:mt-(--space-2000)">

                    <!-- Badge -->
                    <div
                        class="flex items-center px-2 py-1 gap-1 rounded-[100px] lg:rounded-full bg-[var(--color-surface-primary)]">
                        <span
                            class="text-[var(--color-text-primary)] font-sans text-sm font-medium leading-[22px]">Selamat
                            Datang!</span>
                    </div>

                    <!-- Title & Subtitle -->
                    <div class="flex flex-col items-center gap-3 lg:gap-2 self-stretch">
                        <h1
                            class="self-stretch text-center text-[var(--color-text-neutral-primary)] font-sans lg:font-[Urbanist] text-[24px] lg:text-[40px] font-semibold lg:font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.005px] lg:tracking-[-0.009px]">
                            Buat Akun Masyarakat
                        </h1>
                        <p
                            class="self-stretch text-center text-black-95080 lg:text-(--color-text-neutral-primary)/80 font-sans text-[14px] lg:text-[20px] font-normal leading-[22px] lg:leading-[28px] tracking-normal lg:tracking-[-0.003px]">
                            Daftar sebagai masyarakat yuk, biar kamu bisa ikut melaporkan kejadian dan kamu langsung
                            jadi
                            bagian dari perubahan positif di sekitar kita!
                        </p>
                    </div>
                </div>

                <!-- CTA Group -->
                <div class="flex flex-col items-center self-stretch w-full gap-5">

                    <!-- Checkbox -->
                    <div class="flex items-center self-stretch cursor-pointer p-1 gap-2 pl-6 lg:pl-0"
                        @click="isAgreed = !isAgreed">

                        <div class="flex items-center justify-center">
                            <div class="flex items-center justify-center shrink-0 w-4 h-4 lg:w-5 lg:h-5 p-0.5 gap-1 rounded lg:rounded transition-colors duration-200"
                                :class="isAgreed ? 'bg-[#E75A0F] border-none rounded-[4px]' : 'border border-[#18171C] bg-transparent rounded-[4px]'">
                                <img v-if="isAgreed" src="/icons/Check.svg" alt="Checked" class="w-full h-full" />
                            </div>
                        </div>
                        <div class="flex flex-col flex-1">
                            <span
                                class="text-[#0A0A0A] font-sans text-xs lg:text-base font-normal leading-[18px] lg:leading-6">
                                Saya telah membaca dan menyetujui <span class="font-semibold">Syarat dan</span><br
                                    class="lg:hidden" />
                                <span class="font-semibold">Ketentuan</span>, serta <span
                                    class="font-semibold">Kebijakan Privasi</span>
                                yang berlaku.
                            </span>
                        </div>
                    </div>

                    <!-- Google Login Button -->
                    <button @click="handleLogin" :disabled="!isAgreed || isLoggingIn" class="flex justify-center items-center transition-all duration-300
                    py-2 px-3 lg:py-3 lg:px-4 gap-1 lg:gap-2 rounded-full border
                    w-[75%] mx-auto lg:w-fit shadow-2" :class="isAgreed
                        ? 'border-[#F67011] bg-[#F67011] cursor-pointer'
                        : 'border-[#E0E0E0] bg-[#EDEDED] cursor-not-allowed'">

                        <div class="w-[18px] h-[18px] lg:w-5 lg:h-5 flex justify-center items-center p-0 lg:p-0.5">
                            <img :src="isAgreed ? '/icons/google_active.svg' : '/icons/google_non_active.svg'"
                                alt="Google" class="w-full h-full" />
                        </div>
                        <span
                            class="font-sans text-[16px] lg:text-xl font-medium leading-[24px] lg:leading-7 tracking-normal lg:tracking-[-0.003px]"
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