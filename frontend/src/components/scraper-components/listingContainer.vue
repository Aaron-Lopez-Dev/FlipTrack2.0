<template>
  <div class="listingContainer">
    <div v-for="(listing, index) in listingDataPull" :key="index" class="listing">
      <a :href="listing.listingurl" target="_blank"><img class="listingPhoto" :src="listing.listingphoto" /></a>
      <span>{{ listing.listingtitle }}</span>
      <span>{{ listing.listingprice }}</span>
      <span>{{ listing.mileage || '' }}</span>
    </div>
  </div>
</template>

<script setup>
import { listingDataPull } from '@/composables/fetchData';


</script>

<style>
.listingContainer {
  margin-top: 4250px;
  width: 900px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem; 
  box-sizing: border-box;
}

.listing {
  margin: auto 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.listingPhoto {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
</style>