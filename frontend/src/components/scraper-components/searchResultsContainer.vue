<template>
  <div class="search-results-container">
    <div class="loadingContainer" v-if="isLoading == true">
      <span class="loading loading-bars loading-xl"></span>
    </div>
    
     <listing  v-else class="listingResults" />

     
  </div>
  
</template>

<script setup>
import Listing from './listingContainer.vue';
import { isLoading } from '@/composables/fetchData';

</script>

<style scoped>
.search-results-container{
  width: 1100px;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
    justify-content: center;
  align-items: center;
}

.loadingContainer{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>