<template>
  <div class="main-container">
    <navBar />
    <scraper />
  </div>
</template>

<script setup>
import navBar from '../components/navBar.vue';
import scraper from '../components/scraper-components/scraperMain.vue';

</script>

<style>
.main-container{
  width: 100vw;
}
</style>