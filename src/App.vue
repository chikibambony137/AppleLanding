<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <Header></Header>
    <router-view></router-view>
    <Footer class="mt-8  relative bottom-0 hidden md:block"></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
</script>

<style>

</style> 