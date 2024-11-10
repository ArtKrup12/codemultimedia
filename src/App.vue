<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import Menu from './components/menu.vue'
const route = useRoute();
</script>
<template>
  <RouterView />
  <Menu v-if="route.path !== '/'"/>
</template>
<style>
</style>
