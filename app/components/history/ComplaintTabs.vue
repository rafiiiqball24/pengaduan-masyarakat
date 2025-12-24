<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
    tabs: string[];
    modelValue: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const isOpen = ref(false)

const selectTab = (tab: string) => {
    emit('update:modelValue', tab)
    isOpen.value = false
}
</script>

<template>
    <div>
        <!-- Mobile Dropdown -->
        <div class="md:hidden relative z-50">
            <button @click="isOpen = !isOpen"
                class="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-text-neutral-primary shadow-sm hover:bg-gray-50 transition-colors">
                <span>{{ modelValue }}</span>
                <ChevronDown :size="20" class="text-text-neutral-secondary transition-transform duration-200"
                    :class="{ 'rotate-180': isOpen }" />
            </button>

            <!-- Dropdown Menu -->
            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div v-if="isOpen"
                    class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50">
                    <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)"
                        class="w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors mb-1 last:mb-0"
                        :class="modelValue === tab ? 'bg-primary text-white' : 'bg-bg-surface-neutral-light text-text-neutral-primary hover:bg-gray-200'">
                        {{ tab }}
                    </button>
                </div>
            </transition>
        </div>

        <!-- Desktop Tabs -->
        <div class="hidden md:inline-flex flex-wrap gap-2 p-1 bg-bg-surface-neutral-light rounded-xl w-full md:w-auto">
            <button v-for="tab in tabs" :key="tab" @click="$emit('update:modelValue', tab)"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-1 md:flex-initial text-center"
                :class="[
                    modelValue === tab
                        ? 'bg-white text-text-neutral-primary shadow-sm'
                        : 'text-text-neutral-secondary hover:text-text-neutral-primary hover:bg-white/50'
                ]">
                {{ tab }}
            </button>
        </div>
    </div>
</template>
