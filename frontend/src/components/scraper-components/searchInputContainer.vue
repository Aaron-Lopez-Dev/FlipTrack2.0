<template>
  <div class="search-container">
    <h2>Marketplace Scraper</h2>
    <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Item to Search" v-model="searchInput"/>
</label>
    <input type="text" class="input" placeholder="Enter Zip Code" v-model="zipInput">
    <input type="text" class="input" placeholder="Search Radius (Miles)" v-model="radiusInput">

    <button class="btn btn-outline" @click="handleGetData">Submit</button>

    <div class="result" id="results">
      <span class="leftAlign">Average Price: </span>
      <span>{{ average }}</span>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { setParameters } from '@/composables/setParameters'
import { fetchData } from '@/composables/fetchData'
import { average } from '@/composables/fetchData'

const zipInput = ref('')
const searchInput = ref('')
const radiusInput = ref('')

function handleGetData() {
  fetchData({
    zipInput: zipInput.value,
    searchInput: searchInput.value,
    radiusInput: radiusInput.value
  })
}

</script>


  <style scoped>
  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 450px;
    max-width: 350px;
    text-align: center;
    margin: 20px;
  }
  .leftAlign{
    align-items: left;
  }

  .input,
  button {
    width: 200px;
    margin: 10px;
  }
  </style>