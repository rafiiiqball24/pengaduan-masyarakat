<script setup lang="ts">
definePageMeta({
    middleware: [
        function (to, from) {
            return navigateTo('/homepage')
        }
    ]
})
</script>

<template>
    <div>Redirecting...</div>
</template>
