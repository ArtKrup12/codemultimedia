<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import Menu from './components/menu.vue'
// import navMenu from './components/navMenu.vue'
import sideMenu from './components/sideMenu.vue'
const route = useRoute();

</script>
<template>
  <sideMenu/>
  <!-- <navMenu/> -->
  <RouterView />
  <Menu v-if="route.path !== '/'"/>
</template>
<style>
</style>
