<script setup lang="ts">
import { ref } from 'vue'

const selectedFiles = ref<File[]>([])
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileUpload = () => {
    fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
        selectedFiles.value = [...selectedFiles.value, ...Array.from(target.files)]
        target.value = ''
    }
}

const removeFile = (index: number) => {
    selectedFiles.value.splice(index, 1)
}

const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const isImage = (file: File) => file.type.startsWith('image/')
const getFileUrl = (file: File) => URL.createObjectURL(file)
const getFileExtension = (filename: string) => {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toUpperCase() || 'FILE';
}
</script>

<template>
    <section
        class="w-full flex flex-col items-center pt-[80px] pb-10 px-4 md:pt-20 md:px-8 xl:px-0 bg-[url('/background/section1.webp')] bg-light-gray bg-cover bg-no-repeat bg-center relative z-20">
        <!-- Badge -->
        <div class="flex items-center gap-2 px-2 py-1 bg-surface-primary rounded-[100px]">
            <span class="text-text-primary font-sans text-xs font-medium leading-[18px]">Wilayah Semarang Selatan</span>
        </div>

        <!-- Headline -->
        <div class="flex flex-col items-center gap-[12px] mt-4 text-center max-w-4xl">
            <h1
                class="text-[#0A0A0A] font-display text-[20px] md:text-2xl font-bold leading-[28px] md:leading-[54px] tracking-[-0.003px] md:tracking-[-0.012px]">
                Laporkan Masalah Untuk Mewujudkan<br class="hidden md:block"> Kota Yang Aman
            </h1>
            <p
                class="text-text-neutral-secondary font-sans text-[16px] md:text-M font-normal md:font-medium leading-[24px] md:leading-[28px] whitespace-normal md:whitespace-nowrap text-center">
                Setiap laporan Anda membantu menciptakan lingkungan yang nyaman dan terlindungi bagi semua.
            </p>
        </div>

        <!-- Input Area -->
        <div class="flex flex-col items-center mt-8 w-full md:px-0 xl:px-[112px]">
            <div class="flex flex-col gap-4 translate-y-0 md:translate-y-4 w-full items-center">

                <div
                    class="flex flex-col items-start gap-[12px] p-[12px_16px] md:p-3 md:px-4 w-full max-w-[720px] min-h-[262px] rounded-400 bg-[#FEFFFF] shadow-wide border border-[#EDEDED]">

                    <!-- 1. Text Laporan Box -->
                    <div
                        class="flex flex-col justify-between items-start flex-[1_0_0] self-stretch p-[8px_12px] md:p-2 md:px-3 gap-2 rounded-300 border border-[#EDEDED] bg-[#FEFFFF]">
                        <textarea placeholder="Buat laporanmu disini"
                            class="flex flex-col items-start self-stretch flex-[1_0_0] resize-none outline-none font-sans text-[16px] md:text-base text-[#0A0A0A] bg-transparent placeholder:text-text-neutral-secondary w-full"></textarea>
                    </div>

                    <!-- 2. Location Input Box -->
                    <div
                        class="flex flex-col items-start self-stretch p-[8px_12px] md:p-2 md:px-3 gap-2 rounded-300 border border-[#EDEDED] bg-[#FEFFFF]">
                        <!-- 3. Text Lokasi -->
                        <input type="text" placeholder="Masukkan lokasi kejadian"
                            class="flex-[1_0_0] text-[#0A0A0A] font-sans text-[16px] font-normal leading-[24px] outline-none bg-transparent w-full" />
                    </div>

                    <!-- Action Row -->
                    <div class="flex justify-between items-center self-stretch w-full">
                        <div class="flex items-center gap-[12px]">
                            <div class="relative group flex flex-col items-center">
                                <input type="file" ref="fileInput" class="hidden" @change="handleFileChange"
                                    accept="image/*,.pdf,.doc,.docx" multiple />
                                <div
                                    class="absolute top-full mt-2 hidden group-hover:flex flex-col items-center z-50 min-w-[150px]">
                                    <div class="relative bg-[#1A1A1A] text-white text-xs px-3 py-2 rounded shadow-xl">
                                        <div
                                            class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] rotate-45">
                                        </div>
                                        Tambahkan dokumen
                                    </div>
                                </div>
                                <button @click="triggerFileUpload"
                                    class="p-[2px] w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer">
                                    <img src="/icons/plus.svg" alt="Add" class="w-[24px] h-[24px]" />
                                </button>
                            </div>


                            <div class="relative group flex flex-col items-center">
                                <div
                                    class="absolute top-full mt-2 hidden group-hover:flex flex-col items-center z-50 min-w-[150px]">
                                    <div class="relative bg-[#1A1A1A] text-white text-xs px-3 py-2 rounded shadow-xl">

                                        <div
                                            class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] rotate-45">
                                        </div>
                                        Jangan tampilkan identitas saat mengirim laporan
                                    </div>
                                </div>
                                <button
                                    class="p-[3px_2px] w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100">
                                    <img src="/icons/incognito.svg" alt="Incognito" class="w-[24px] h-[24px]" />
                                </button>
                            </div>
                        </div>
                        <button
                            class="flex items-center justify-center p-[8px] gap-1 rounded-400 bg-[#F67011] hover:opacity-90 transition-opacity">
                            <span class="w-4 h-4 flex items-center justify-center">
                                <img src="/icons/send.svg" alt="Send" class="w-[16px] h-[16px] rotate-0 shrink-0" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>


            <div v-if="selectedFiles.length > 0"
                class="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 mt-8 w-full animate-fade-in">

                <div v-if="selectedFiles.some(isImage)"
                    class="flex p-2 items-center gap-2 rounded-[12px] bg-bg-form shadow-wide">

                    <div v-for="(file, index) in selectedFiles.filter(isImage)" :key="'img-' + index"
                        class="flex w-[52px] h-[52px] justify-end items-center pt-[3px] pr-[3px] pb-[33px] pl-[33px] rounded-[8px] bg-cover bg-center no-repeat relative group"
                        :style="{ backgroundImage: `url(${getFileUrl(file)})` }">

                        <button @click="removeFile(selectedFiles.indexOf(file))"
                            class="flex justify-center items-center p-[2px] rounded-full bg-[rgba(10,10,10,0.32)] backdrop-blur-[2px] cursor-pointer shadow-sm">
                            <img src="/icons/cancel-02.svg" class="w-[12px] h-[12px] p-[2.5px] box-content" />
                        </button>

                    </div>
                </div>

                <!-- 7. File Group -->
                <div v-if="selectedFiles.some(f => !isImage(f))"
                    class="flex p-2 items-center gap-2 rounded-[12px] bg-bg-form shadow-wide">


                    <div v-for="(file, index) in selectedFiles.filter(f => !isImage(f))" :key="'file-' + index"
                        class="flex p-2 flex-col items-start rounded-[8px] border border-border-neutral-light bg-bg-surface-neutral-light">

                        <div class="flex items-center gap-3">

                            <div class="relative w-5 h-5 flex justify-center items-center">
                                <img src="/icons/file.svg" class="w-full h-full aspect-square" />
                                <span
                                    class="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center text-white font-sans font-bold leading-normal"
                                    style="width: 16px; height: 6.5px; font-size: 4.5px;">
                                    {{ getFileExtension(file.name) }}
                                </span>
                            </div>

                            <!-- 11. Nama file dan ukuran file -->
                            <div class="flex w-[210px] flex-col items-start gap-[2px]">
                                <span
                                    class="line-clamp-1 self-stretch overflow-hidden text-text-neutral-primary text-ellipsis font-sans text-xs font-medium leading-[18px]">
                                    {{ file.name }}
                                </span>
                                <span
                                    class="text-text-neutral-secondary font-sans text-[10px] font-normal leading-[14px]">
                                    {{ formatFileSize(file.size) }}
                                </span>
                            </div>

                            <!-- 14. Cancel Icon -->
                            <button @click="removeFile(selectedFiles.indexOf(file))"
                                class="flex w-6 h-6 justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
                                <img src="/icons/cancel-01.svg" class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
