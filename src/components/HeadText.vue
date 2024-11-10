<template>
  <div>
    <span class="text-2xl font-bold" v-if="pageName === 'home'">รายการแจ้งเตือน</span>
    <span class="text-2xl font-bold" v-else-if="pageName === 'drug'">รายการยา</span>
    <span class="text-2xl font-bold" v-else-if="pageName === 'check'">รายการยาที่รอตรวจสอบ</span>
    <span class="text-2xl font-bold" v-else-if="pageName === 'setting'">ข้อมูลส่วนตัว</span>
    <span class="text-2xl font-bold" v-else>พบข้อผิดพลาด</span>
    <div class="mt-3 bg-white" v-if="pageName !== 'home'">
      <form class="w-full mx-auto bg-white">
        <label for="default-search"
               class="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon icon="fluent:search-16-filled" width="24" height="24" style="color: #6a6868"/>
          </div>
          <input type="search" id="default-search"
                 class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="ค้นหายา..." required/>
          <button type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            ค้นหา
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
<script>
import {usePageStore} from "@/stores";
import {ref} from "vue";
import {Icon} from "@iconify/vue";

export default {
  components: {
    Icon
  },
  setup() {
    const pageStore = usePageStore();
    const pageName = ref("home");

    const pageName2 = localStorage.getItem("pageMenu" || '')
    if (pageName2 === null) {

    } else {
      pageName.value = pageName2
    }
    return {
      pageStore,
      pageName
    }
  }
}
</script>
