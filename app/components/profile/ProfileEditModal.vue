<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    isOpen: boolean
    user: {
        name: string
        email: string
        phone: string
    }
}>()

const emit = defineEmits<{
    (e: 'close'): void
    (e: 'save', userData: { name: string; email: string; phone: string }): void
}>()

const formData = ref({
    name: '',
    email: '',
    phone: ''
})

// Sync form data when modal opens or user prop changes
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        formData.value = { ...props.user }
    }
})

watch(() => props.user, (newVal) => {
    formData.value = { ...newVal }
}, { deep: true })

const handleSave = () => {
    emit('save', formData.value)
    emit('close')
}
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>

        <!-- Modal Card -->
        <div class="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform transition-all">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-100">
                <h3 class="text-xl font-display font-bold text-gray-900">Ubah Profil</h3>
            </div>

            <!-- Body -->
            <div class="p-6 space-y-4">
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-text-neutral-primary">Nama Lengkap</label>
                    <input v-model="formData.name" type="text"
                        class="w-full px-4 py-2 border border-border-form-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-text-neutral-primary"
                        placeholder="Nama Lengkap" />
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-text-neutral-primary">Email</label>
                    <input v-model="formData.email" type="email"
                        class="w-full px-4 py-2 border border-border-form-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-text-neutral-primary"
                        placeholder="Email" />
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-text-neutral-primary">Nomor Telp.</label>
                    <input v-model="formData.phone" type="text"
                        class="w-full px-4 py-2 border border-border-form-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-text-neutral-primary"
                        placeholder="Nomor Telepon" />
                </div>
            </div>

            <!-- Footer -->
            <div class="px-6 py-4 bg-gray-50 flex flex-col gap-3">
                <button @click="handleSave"
                    class="w-full py-2.5 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-sm active:transform active:scale-[0.98]">
                    Simpan
                </button>
                <button @click="$emit('close')"
                    class="w-full py-2.5 px-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors active:transform active:scale-[0.98]">
                    Batalkan
                </button>
            </div>
        </div>
    </div>
</template>
