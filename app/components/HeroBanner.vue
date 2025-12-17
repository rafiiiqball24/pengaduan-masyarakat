<script setup lang="ts">
import { ref } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)

const triggerFileUpload = () => {
    fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0]
        if (selectedFile.value) {
            alert(`File selected: ${selectedFile.value.name}`)
        }
    }
}
</script>

<template>
    <section
        class="w-full flex flex-col items-center pt-20 pb-10 bg-[url('/background/section1.webp')] bg-light-gray bg-cover bg-no-repeat bg-center relative z-20">
        <!-- Badge -->
        <div class="flex items-center gap-1 px-2 py-1 bg-surface-primary rounded-[100px]">
            <span class="text-text-primary font-sans text-S font-mid leading-[22px]">Wilayah Semarang Selatan</span>
        </div>

        <!-- Headline -->
        <div class="flex flex-col items-center gap-3 mt-4 text-center max-w-4xl px-4">
            <h1
                class="text-text-neutral-primary font-display text-2xl font-semibold leading-[54px] tracking-[-0.012px]">
                Laporkan Masalah Untuk Mewujudkan<br>Kota Yang Aman
            </h1>
            <p
                class="text-text-neutral-secondary font-sans text-M font-medium leading-[28px] tracking-[-0.003px] whitespace-nowrap">
                Setiap laporan Anda membantu menciptakan lingkungan yang nyaman dan terlindungi bagi semua.
            </p>
        </div>

        <!-- Input Area -->
        <div class="flex flex-col items-center mt-8 w-full px-[112px]">
            <div class="flex w-[720px] h-[210px] flex-col items-start gap-[6px] translate-y-4">
                <!-- Input Box -->
                <div
                    class="flex flex-col justify-between items-start flex-1 self-stretch p-3 px-4 rounded-400 border border-border-form-default bg-bg-form shadow-wide">
                    <textarea placeholder="Buat laporanmu disini.."
                        class="w-full h-full resize-none outline-none font-sans text-sm text-text-neutral-primary bg-transparent placeholder:text-text-neutral-secondary"></textarea>

                    <div class="flex justify-between items-center self-stretch w-full mt-2">
                        <div class="flex items-center gap-2">
                            <!-- Plus Button -->
                            <div class="relative group flex flex-col items-center">
                                <input type="file" ref="fileInput" class="hidden" @change="handleFileChange"
                                    accept="image/*,.pdf,.doc,.docx" />
                                <div
                                    class="absolute top-full mt-2 hidden group-hover:flex flex-col items-center z-50 min-w-[150px]">
                                    <div class="relative bg-[#1A1A1A] text-white text-xs px-3 py-2 rounded shadow-xl">
                                        <!-- Arrow -->
                                        <div
                                            class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] rotate-45">
                                        </div>
                                        Tambahkan dokumen
                                    </div>
                                </div>
                                <button @click="triggerFileUpload"
                                    class="p-0.5 w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer">
                                    <img src="/icons/plus.svg" alt="Add" class="w-6 h-6" />
                                </button>
                            </div>

                            <!-- Incognito Button -->
                            <div class="relative group flex flex-col items-center">
                                <!-- Assuming same tooltip for now or placeholder -->
                                <div
                                    class="absolute top-full mt-2 hidden group-hover:flex flex-col items-center z-50 min-w-[150px]">
                                    <div class="relative bg-[#1A1A1A] text-white text-xs px-3 py-2 rounded shadow-xl">
                                        <!-- Arrow -->
                                        <div
                                            class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] rotate-45">
                                        </div>
                                        Jangan tampilkan identitas saat mengirim laporan
                                    </div>
                                </div>
                                <button
                                    class="p-0.5 w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
                                    <img src="/icons/incognito.svg" alt="Incognito" class="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <button
                            class="flex items-center justify-center p-2 rounded-full bg-button-secondary hover:opacity-90 transition-opacity">
                            <img src="/icons/send.svg" alt="Send" class="w-4 h-4 " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
