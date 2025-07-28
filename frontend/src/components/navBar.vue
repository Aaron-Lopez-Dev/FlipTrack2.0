<template>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <router-link to="/tracker"><li><a>TRACKER</a></li></router-link>
      <router-link to="/scraper"><li><a>SCRAPER</a></li></router-link>
      <router-link to="/about"><li><a>ABOUT</a></li></router-link>
      </ul>
    </div>


    <router-link to="/"><a class="btn btn-ghost text-xl">FlipTrack</a></router-link>
  </div>

  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <router-link to="/tracker"><li><a>TRACKER</a></li></router-link>
      <router-link to="/scraper"><li><a>SCRAPER</a></li></router-link>
      <router-link to="/about"><li><a>ABOUT</a></li></router-link>
    </ul>
  </div>
  </div>

</template>

<script setup>

</script>

<style>

</style>