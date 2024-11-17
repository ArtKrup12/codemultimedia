<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import Menu from './components/menu.vue'
import navMenu from './components/navMenu.vue'
import sideMenu from './components/sideMenu.vue'
// import ExcerciseView from './views/ExcerciseView.vue';
const route = useRoute();

</script>
<template>
  <!-- <sideMenu/> -->
  <!-- <navMenu/> -->
   <!-- <ExcerciseView/> -->
  <RouterView />
  <Menu v-if="route.path !== '/'"/>
</template>
<style>
</style>
