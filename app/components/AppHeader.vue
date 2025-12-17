<template>
    <header class="w-full max-w-[1440px] mx-auto flex items-center justify-between py-4 px-[112px] bg-white">

        <div class="flex items-center gap-2 -translate-x-10">
            <img src="/logo.svg" alt="Logo" class="w-10 h-10 shrink-0" />
            <img src="/brand-text.svg" alt="Vide" class="w-[44px] h-[16px] shrink-0" />
        </div>

        <nav class="hidden md:flex items-center gap-8 -translate-x-60">
            <NuxtLink to="/"
                class="flex items-center justify-center gap-1 text-button-secondary font-sans text-sm font-mid-strong leading-[24px]">
                Homepage
            </NuxtLink>
            <NuxtLink to="/about"
                class="flex items-center justify-center gap-1 text-button-outlined font-sans text-sm font-mid-strong leading-[24px] opacity-60 hover:opacity-100">
                Tentang Kami
            </NuxtLink>
            <NuxtLink to="/faq"
                class="flex items-center justify-center gap-1 text-button-outlined font-sans text-sm font-mid-strong leading-[24px] opacity-60 hover:opacity-100">
                FAQ
            </NuxtLink>
            <NuxtLink to="/contact"
                class="flex items-center justify-center gap-1 text-button-outlined font-sans text-sm font-mid-strong leading-[24px] opacity-60 hover:opacity-100">
                Kontak
            </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-10 translate-x-10">
            <NuxtLink to="/replication"
                class="hidden md:flex items-center justify-center gap-1 text-button-outlined font-sans text-sm font-mid-strong leading-[24px]">
                Replication Request
            </NuxtLink>

            <button
                class="flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-button-secondary text-primary-foreground shadow-2 font-sans text-sm font-medium leading-[24px] hover:opacity-90 transition-opacity cursor-pointer">
                Masuk Sebagai Warga
            </button>
        </div>
    </header>
</template>
