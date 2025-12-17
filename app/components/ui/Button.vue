<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md'
})
</script>

<template>
    <button
        class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        :class="{
            'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'bg-accent text-accent-foreground hover:bg-accent/90': variant === 'accent',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 py-2 px-4': size === 'md',
            'h-12 px-8 text-lg': size === 'lg',
        }">
        <slot />
    </button>
</template>
