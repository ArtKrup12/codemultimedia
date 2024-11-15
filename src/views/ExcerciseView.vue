<template>
  <!-- <div class="fixed left-0 top-0 rounded-md bg-exCon w-screen">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit qui voluptas aspernatur eos porro illo perspiciatis ducimus. Mollitia, ratione deleniti?
  </div>
  <div class="sm:ml-60 bg-exCon">
    <div class="grid grid-rows-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nobis sunt cupiditate voluptates perspiciatis rem ea quod temporibus quam at id corrupti mollitia quis saepe, ad ex necessitatibus deserunt libero doloremque blanditiis sint fuga? Corporis earum dicta qui sit ea laborum neque nesciunt odit minus reiciendis ipsum natus, fugiat quod.</div>
    <ExcerciseInfoView class="grid grid-rows-4"/>
  </div> -->

  <div class="w-screen h-screen flex flex-col">
    <div style="background-color: black;" class="h-full w-full"></div>
     <div class="flex justify-between w-full h-full">
        <div style="background-color: red;" class=" w-3/4">

        </div>
        <div style="background-color: green;" class="bg-green w-1/4">

        </div>
      </div>
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