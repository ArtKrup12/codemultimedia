<template>

  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
      </path>
    </svg>
  </button>

  <aside id="logo-sidebar"
         class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div class="h-full px-3 py-4 bg-white overflow-y-auto">
      <a href="" class="flex items-center ps-2.5 mb-5">
        <span class="self-center text-xl font-semibold whitespace-nowrap">บทเรียน</span>
      </a>
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
              class="flex items-center p-2 rounded-lg hover:bg-[#D5C9ED] hover:text-gray-600 group currentPage"
              to="/home"
              @click="handlePage('home')"
              :class="{active: pageName === 'home'}">
            <span class="ms-3">หน้าหลัก</span>
          </router-link>
        </li>
        <li>
          <button type="button"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-[#D5C9ED] hover:text-gray-600 active:bg-dark"
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">บทที่ 1 ขับขี่ปลอดภัย</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2" data-tabs-active-classes="text-white">
            <li>
              <router-link   to="/content"
                 class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-[#D5C9ED] hover:text-gray-600">เนื้อหา</router-link>
            </li>
            <li>
              <router-link   to="/assign"
                             class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-[#D5C9ED] hover:text-gray-600">ส่งงาน</router-link>
            </li>
            <li>
              <router-link to="/test"
                 class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">แบบทดสอบเก็บคะแนน</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link
              class="flex items-center p-2 rounded-lg hover:bg-[#D5C9ED] hover:text-gray-600 group currentPage"
              to="/home"
              @click="handlePage('home')"
              :class="{active: pageName === 'home'}">
            <span class="ms-3">ข้อมูลผู้จัดทำ</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import {Icon} from '@iconify/vue';
import {usePageStore} from "@/stores";
import {ref} from "vue";

export default {
  components: {
    Icon
  },
  setup() {
    const pageStore = usePageStore();
    const pageName = ref("home");
    let role = ref("admin")

    const pageName2 = localStorage.getItem("pageMenu" || '')
    console.log(pageName2);

    if (pageName2 === null) {

    } else {
      pageName.value = pageName2
    }
    const handlePage = async (pageNames) => {
      pageName.value = pageNames;
      pageStore.setPage(pageNames);
    };
    return {
      pageName,
      pageStore,
      handlePage,
      role
    }
  }
}


</script>

<style>
/* .currentPage.active{
  background-color: blue;
} */
</style>