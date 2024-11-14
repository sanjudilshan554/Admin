<template>
    <VaLayout>
        <template #top>
            <AppNavbar />
        </template>

        <template #left>
            <AppSidebar />
        </template>

        <template #content>
            <RouterView />
        </template>
    </VaLayout>
</template>

<script setup>
import AppNavbar from '../components/navbar/AppNavbar.vue';
import AppSidebar from '../components/navbar/AppNavbar.vue';
import VaLayout from './VaLayout.vue';
</script>