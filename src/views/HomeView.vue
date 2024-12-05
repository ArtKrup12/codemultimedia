<template>
<!--  <sideMenu/>-->
<!--  <navMenu/>-->
  <HeadText />
  <!-- <ExcerciseView class="w-auto sm:ml-[18%]"/> -->
 <div class="mt-5 ml-80">ยินดีตอนรับเข้าสู่ระบบสื่อการเรียรการสอน</div>
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
import ExcerciseView from "./ExcerciseView.vue"
import navMenu from "@/components/navMenu.vue"
import { onMounted } from "vue"
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
export default {
  components: {
    HeadText,
    ExcerciseView,
    navMenu
  },
  setup() {
    // initialize components based on data attribute selectors
    onMounted(async () => {
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
    })
  },
}
</script>
