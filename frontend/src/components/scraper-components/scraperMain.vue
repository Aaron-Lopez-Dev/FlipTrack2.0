<template>
    <div>
        <search />
        <searchResults />
    </div>
</template>

<script setup>
import search from './searchInputContainer.vue';
import searchResults from './searchResultsContainer.vue';
</script>

<style scoped>
div {
    display: flex;
}
</style>