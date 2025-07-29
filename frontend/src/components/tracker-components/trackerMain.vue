<template>
    <div>
        <inputComponent />
        <dbFetch />
    </div>
</template>

<script setup>
import inputComponent from './inputComponent.vue';

import dbFetch from './dbFetch.vue';
</script>

<style scoped>
div{
  display: flex;
  flex-direction: row;
}
</style>