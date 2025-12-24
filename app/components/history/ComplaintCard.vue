<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import type { Complaint } from '~/composables/useComplaints'

const props = defineProps<{
    complaint: Complaint
}>()

defineEmits<{
    (e: 'cancel', id: string): void
}>()

const isExpanded = ref(false)
const textRef = ref<HTMLElement | null>(null)
const showReadMore = ref(false)

const checkOverflow = async () => {
    await nextTick()
    if (textRef.value) {
        showReadMore.value = textRef.value.scrollHeight > textRef.value.clientHeight
    }
}

onMounted(() => {
    checkOverflow()
})

watch(() => props.complaint.content, checkOverflow)

const statusColor = computed(() => {
    switch (props.complaint.status) {
        case 'Terkirim':
            return 'bg-primary text-primary-foreground' 
        case 'Diproses':
            return 'bg-[#0EA5E9] text-white' 
        case 'Ditangani':
            return 'bg-[#10B981] text-white' 
        case 'Selesai':
            return 'bg-gray-900 text-white' 
        case 'Dibatalkan':
            return 'bg-gray-100 text-gray-500' 
        default:
            return 'bg-gray-500 text-white'
    }
})
</script>


<template>
    <div class="bg-white rounded-xl p-3 md:p-6 border-b border-gray-100 last:border-b-0 space-y-4">
        <!-- Header -->
        <div class="flex justify-between items-start">
            <div class="flex items-center gap-2 text-text-neutral-secondary text-sm">
                <img src="/icons/calendar-01.svg" alt="Calendar" />
                <span>{{ complaint.date }}</span>
            </div>
            <span :class="['px-4 py-2 rounded-full text-xs font-medium', statusColor]">
                {{ complaint.status }}
            </span>
        </div>

        <!-- Content -->
        <div class="space-y-2">
            <p ref="textRef" class="text-text-neutral-primary text-base leading-relaxed"
                :class="{ 'line-clamp-2': !isExpanded }">
                {{ complaint.content }}
            </p>
            <button v-if="showReadMore" @click="isExpanded = !isExpanded"
                class="text-primary text-sm font-medium flex items-center gap-1 hover:text-primary/80 transition-colors">
                {{ isExpanded ? 'Lebih Sedikit' : 'Lihat Selengkapnya' }}
                <component :is="isExpanded ? ChevronUp : ChevronDown" :size="16" />
            </button>
        </div>

        <!-- File Attachment -->
        <div v-if="complaint.file"
            class="bg-bg-surface-neutral-light rounded-lg p-3 flex items-center gap-3 w-full md:w-auto max-w-sm">
            <div class="w-10 h-10 bg-error-50 text-error-500 rounded-lg flex items-center justify-center shrink-0">
                <!-- Simple PDF icon representation -->
                <img src="/icons/file-type-icon.svg" alt="File" />
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-text-neutral-primary truncate">{{ complaint.file.name }}</p>
                <p class="text-xs text-text-neutral-secondary">{{ complaint.file.size }}</p>
            </div>
        </div>

        <!-- Images Grid -->
        <div v-if="complaint.images && complaint.images.length > 0" class="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <div v-for="(img, index) in complaint.images" :key="index"
                class="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden">
                <img :src="img" class="w-full h-full object-cover" alt="Evidence" />
            </div>
        </div>

        <!-- Footer -->
        <div class="flex flex-row items-center justify-between gap-4 pt-2">
            <div class="flex items-center gap-2 text-text-neutral-secondary text-sm">
                <img src="/icons/location-04.svg" alt="Location" />
                <span>{{ complaint.location }}</span>
            </div>

            <button v-if="complaint.status === 'Terkirim'" @click="$emit('cancel', complaint.id)"
                class="border border-primary text-primary hover:bg-surface-primary px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors md:self-end whitespace-nowrap">
                Batalkan Laporan
            </button>
        </div>
    </div>
</template>
