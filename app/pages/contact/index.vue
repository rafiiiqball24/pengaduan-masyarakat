<script setup lang="ts">
// No script logic needed yet
</script>

<template>
    <div class="min-h-screen bg-background text-foreground flex flex-col">
        <AppHeader />

        <main class="flex-1 flex flex-col items-center justify-start w-full">
            <!-- Section Container -->
            <!-- Section Container -->
            <section
                class="flex flex-col xl:flex-row items-center gap-10 xl:gap-[80px] w-full max-w-[1440px] mx-auto px-4 py-8 xl:px-[112px] xl:py-[80px] self-stretch">

                <!-- Left Section -->
                <div
                    class="flex flex-col items-center p-5 pb-8 xl:pb-[96px] gap-6 xl:gap-10 flex-1 self-stretch rounded-2xl xl:rounded-[12px] bg-[#FAFBFB]">

                    <!-- Header -->
                    <div class="flex flex-col justify-center items-start gap-4 xl:gap-[16px] self-stretch">
                        <!-- Tagline -->
                        <div
                            class="flex items-center gap-[6px] text-[#F67011] font-['Geist'] text-[16px] font-semibold leading-[24px]">
                            <img src="/icons/star-set.svg" alt="Star" class="w-auto h-auto" />
                            <span>Kontak Kami</span>
                            <img src="/icons/star-set.svg" alt="Star" class="w-auto h-auto scale-x-[-1]" />
                        </div>

                        <!-- Title -->
                        <h1
                            class="self-stretch text-[#0A0A0A] font-['Urbanist'] text-[24px] xl:text-[40px] font-semibold leading-[32px] xl:leading-[48px] tracking-[-0.009px]">
                            Suara Anda, Prioritas Kami
                        </h1>

                        <!-- Description -->
                        <p
                            class="self-stretch text-[#0A0A0A]/80 font-['Geist'] text-[14px] xl:text-[20px] font-normal leading-[22px] xl:leading-[28px] tracking-[-0.003px]">
                            Setiap saran dan pertanyaan Anda sangat berarti bagi pengembangan Vide. Mari berkolaborasi
                            menciptakan platform laporan yang lebih baik.
                        </p>
                    </div>

                    <!-- Contact Cards Set -->
                    <div class="flex flex-col xl:flex-row items-start gap-4 xl:gap-[24px] self-stretch">
                        <!-- Phone Card -->
                        <div
                            class="flex p-[8px] items-center gap-[10px] self-stretch xl:flex-1 rounded-[12px] border border-[#EDEDED] bg-white xl:bg-transparent">
                            <div class="flex items-center justify-center p-[8px] gap-[10px] rounded-[8px] bg-[#F67011]">
                                <img src="/icons/telephone.svg" alt="Phone" class="w-6 h-6 brightness-0 invert" />
                            </div>
                            <div class="flex flex-col items-start">
                                <span
                                    class="self-stretch text-[#0A0A0A] font-['Geist'] text-[14px] font-medium leading-[22px]">
                                    Nomor Telepon
                                </span>
                                <span class="text-[#757575] font-['Geist'] text-[14px] font-normal leading-[22px]">
                                    08XX-XXXX-XXXX
                                </span>
                            </div>
                        </div>

                        <!-- Email Card -->
                        <div
                            class="flex p-[8px] items-center gap-[10px] self-stretch xl:flex-1 rounded-[12px] border border-[#EDEDED] bg-white xl:bg-transparent">
                            <div class="flex items-center justify-center p-[8px] gap-[10px] rounded-[8px] bg-[#F67011]">
                                <img src="/icons/email.svg" alt="Email" class="w-6 h-6 brightness-0 invert" />
                            </div>
                            <div class="flex flex-col items-start">
                                <span
                                    class="self-stretch text-[#0A0A0A] font-['Geist'] text-[14px] font-medium leading-[22px]">
                                    Email
                                </span>
                                <span class="text-[#757575] font-['Geist'] text-[14px] font-normal leading-[22px]">
                                    hellovide@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Section Placeholder -->
                <!-- Right Section (Form) -->
                <div
                    class="flex flex-col justify-center items-start gap-6 p-5 w-full xl:w-[540px] rounded-2xl bg-[#FAFBFB] shadow-[0_1.25px_4px_0_#F2F2F2]">
                    <form class="flex flex-col items-start gap-4 self-stretch">

                        <!-- Nama Lengkap -->
                        <div class="flex flex-col items-start gap-[6px] self-stretch">
                            <label
                                class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-['Geist'] text-[14px] font-medium leading-[22px]">
                                Nama Lengkap
                            </label>
                            <input type="text" placeholder="Masukkan nama lengkap Anda"
                                class="flex px-4 py-3 items-center gap-2 self-stretch rounded-[12px] border border-[#EDEDED] bg-[#FEFFFF] text-[#757575] font-['Geist'] text-[14px] xl:text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011] transition-colors" />
                        </div>

                        <!-- Alamat Email -->
                        <div class="flex flex-col items-start gap-[6px] self-stretch">
                            <label
                                class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-['Geist'] text-[14px] font-medium leading-[22px]">
                                Alamat Email
                            </label>
                            <input type="email" placeholder="contoh@email.com"
                                class="flex px-4 py-3 items-center gap-2 self-stretch rounded-[12px] border border-[#EDEDED] bg-[#FEFFFF] text-[#757575] font-['Geist'] text-[14px] xl:text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011] transition-colors" />
                        </div>

                        <!-- Pesan Anda -->
                        <div class="flex flex-col items-start gap-[6px] self-stretch flex-1">
                            <label
                                class="flex items-center gap-[6px] self-stretch text-[#0A0A0A] font-['Geist'] text-[14px] font-medium leading-[22px]">
                                Pesan Anda
                            </label>
                            <textarea placeholder="Tuliskan pertanyaan atau kendala Anda di sini..." rows="4"
                                class="flex px-4 py-3 flex-col items-start gap-2 self-stretch rounded-[12px] border border-[#EDEDED] bg-[#FEFFFF] text-[#757575] font-['Geist'] text-[14px] xl:text-[16px] font-normal leading-[24px] outline-none focus:border-[#F67011] transition-colors resize-none h-[120px]"></textarea>
                        </div>

                    </form>

                    <!-- Button Kirim -->
                    <button
                        class="flex justify-center items-center px-4 py-3 gap-2 self-stretch rounded-[12px] bg-[#F67011] text-[#FEFFFF] font-['Geist'] text-[20px] font-medium leading-[28px] tracking-[-0.003px] shadow-[0_0_2px_0_rgba(0,0,0,0.12),0_1px_2px_0_rgba(0,0,0,0.14)] hover:bg-[#E5600C] transition-colors">
                        Kirim
                    </button>
                </div>

            </section>
        </main>

        <AppFooter />
    </div>
</template>
