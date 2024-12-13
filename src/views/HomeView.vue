<template>
  <!--  <sideMenu/>-->
  <!--  <navMenu/>-->
  <HeadText/>
  <!-- <ExcerciseView class="w-auto sm:ml-[18%]"/> -->
  <div class="mt-5 ml-80">
    <span class="flex gap-2 items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 1024 1024">
      <path fill="#2C3E50"
            d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1"/>
    </svg>
    ยินดีตอนรับเข้าสู่ระบบสื่อการเรียนการสอน
  </span>
  </div>
  <div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import HeadText from "@/components/HeadText.vue"
// import sideMenu from "@/components/sideMenu.vue"
// import ExcerciseView from "./ExcerciseView.vue"
import navMenu from "@/components/navMenu.vue"
import {onMounted} from "vue"
// import {
//   initAccordions,
//   initCarousels,
//   initCollapses,
//   initDials,
//   initDismisses,
//   initDrawers,
//   initDropdowns,
//   initModals,
//   initPopovers,
//   initTabs,
//   initTooltips,
// } from "flowbite";
export default {
  components: {
    HeadText,
    navMenu
  },
  setup() {
    onMounted(async () => {
      // initAccordions();
      // initCarousels();
      // initCollapses();
      // initDials();
      // initDismisses();
      // initDrawers();
      // initDropdowns();
      // initModals();
      // initPopovers();
      // initTabs();
      // initTooltips();
    })
  },
}
</script>
