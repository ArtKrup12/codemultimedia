<template>
    <div class="mt-[5%] grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="min-h-[100px] hover:bg-red-500 rounded-lg bg-orange-500 shadow"></div>
      <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
    </div>
</template>

<script>
import ExcerciseInfoView from './ExcerciseInfoView.vue';
export default {
    components:{
        ExcerciseInfoView
    }
}
</script>

<style>

</style>