<template>
  <div
    class="fixed bottom-0 left-0 z-30 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 " style="box-shadow: 0 -3px 1px rgba(84, 84, 84, 0.1);">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <router-link :class="{
                'inline-flex flex-col items-center justify-center px-5 active:text-blue-500 group text-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName === 'home',
                'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName !== 'home',
              }"
                   aria-current="page"
                   to="/home"
                   @click="handlePage('home')"
      >
        <Icon icon="ic:round-home" width="24" height="24"/>
        <span>หน้าหลัก</span>
      </router-link>
      <router-link :class="{
                'inline-flex flex-col items-center justify-center px-5 active:text-blue-500 group text-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName === 'drug',
                'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName !== 'drug',
              }"
                   aria-current="page"
                   to="/drug"
                   @click="handlePage('drug')"
      >
        <Icon icon="mdi:drugs" width="24" height="24"/>
        <span >ข้อมูลยา</span>
      </router-link>
      <router-link :class="{
                'inline-flex flex-col items-center justify-center px-5 active:text-blue-500 group text-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName === 'check',
                'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName !== 'check',
              }"
                   aria-current="page"
                   to="/check"
                   @click="handlePage('check')"
      >
        <Icon icon="mdi:checkbox-outline" width="24" height="24"/>
        <span class="text-xs ">ตรวจสอบ</span>
      </router-link>
      <router-link :class="{
                'inline-flex flex-col items-center justify-center px-5 active:text-blue-500 group text-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName === 'setting',
                'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group':
                  pageName !== 'setting',
              }"
                   aria-current="page"
                   to="/setting"
                   @click="handlePage('setting')"
      >
        <Icon icon="tabler:dots" width="24" height="24" />
        <span >ตั้งค่า</span></router-link>
    </div>
  </div>
</template>
<script>
import {Icon} from '@iconify/vue';
import {usePageStore} from "@/stores";
import {ref} from "vue";
export default {
  components: {
    Icon
  },
  setup(){
    const pageStore = usePageStore();
    const pageName = ref("home");

    const pageName2 = localStorage.getItem("pageMenu" || '')
    if(pageName2 === null){

    }else{
      pageName.value = pageName2
    }
    const handlePage = async (pageNames) => {
      pageName.value = pageNames;
      pageStore.setPage(pageNames);
    };
    return {
      pageName,
      pageStore,
      handlePage
    }
  }
}
</script>