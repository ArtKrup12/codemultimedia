<template>
  <HeadText />
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
import HeadText from "@/components/HeadText.vue";

export default {
  components:{
    HeadText
  }
}
</script>