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
         class="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div class="h-full py-4 bg-[#4A628A] text-[#DFF2EB] overflow-y-auto">
      <a href="" class="flex bg items-center ps-2.5 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#DFF2EB"
                d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm5-11l2.5-1.5L16 11V4h-5z"/>
        </svg>
        <span class="self-center text-xl font-semibold whitespace-nowrap">บทเรียน</span>
      </a>
      <ul class="space-y-2  ps-4 pe-4 font-medium">
        <li>
          <router-link
              class="flex items-center p-2 rounded-sm hover:bg-[#7AB2D3] hover:text-gray-600 group currentPage"
              to="/home"
              @click="handlePage('home')"
              :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
              <path fill="#DFF2EB"
                    d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/>
              <path fill="#DFF2EB"
                    d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"/>
            </svg>
            <span class="ms-3">หน้าหลัก</span>
          </router-link>
        </li>
                <li v-if="roleData === '2'"> <!-- เงื่อนไข role -->
                  <router-link
                      class="flex items-center p-2 rounded-lg hover:bg-[#D5C9ED] hover:text-gray-600 group currentPage"
                      to="/manageStudent"
                      @click="handlePage('manageStudent')"
                      :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'manageStudent'}">
                    <span class="ms-3">จัดการบทเรียน</span>
                  </router-link>
                </li>
        <li v-if="roleData === '1'" v-for="lesson in listLessionStore.lessionList" :key="lesson.id">
          <button type="button"
                  @click="toggleCollapse(lesson.id)"
                  class="flex items-center w-full p-2 text-[#DFF2EB] transition duration-75 rounded-sm group hover:bg-[#7AB2D3] hover:text-gray-600 active:bg-dark"
                  :aria-controls="lesson.id" :data-collapse-toggle="lesson.id">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
              <path fill="#DFF2EB"
                    d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM4 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M4 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm7 0H5v2h6zm-1 4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1m0 1h1v1h-1z"/>
            </svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ lesson.subject }}</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul :id="lesson.id" class="hidden py-2 space-y-2" data-tabs-active-classes="text-gray-600">
            <li>
              <router-link
                  :to="'/pre_test/'+lesson.id"
                  @click="handlePage('pretest'+lesson.id)"
                  :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'pretest'+lesson.id}"
                  class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-[#7AB2D3] hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                  <path fill="#DFF2EB" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/>
                </svg>
                แบบทดสอบก่อนเรียน
              </router-link>
            </li>
            <li>
              <router-link :to="'/content/'+lesson.id"   @click="handlePage('vdo'+lesson.id)"
                           :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'vdo'+lesson.id}"
                           class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-[#7AB2D3] hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                  <path fill="#DFF2EB" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/>
                </svg>
                เนื้อหา คลิปวีดีโอ
              </router-link>
            </li>
            <li>
              <router-link  :to="'/content_pdf/'+lesson.id"
                           class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-[#7AB2D3] hover:text-gray-600"
                            @click="handlePage('pdf'+lesson.id)"
                            :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'pdf'+lesson.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                  <path fill="#DFF2EB" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/>
                </svg>
                เนื้อหา pdf
              </router-link>
            </li>
            <li>
              <router-link to="/assign"
                           @click="handlePage('assign'+lesson.id)"
                           :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'assign'+lesson.id}"
                           class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-[#7AB2D3] hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                  <path fill="#DFF2EB" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/>
                </svg>
                ส่งงาน
              </router-link>
            </li>
            <li>
              <router-link
                  :to="'/test/'+lesson.id"
                  @click="handlePage('test'+lesson.id)"
                  :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'test'+lesson.id}"
                  class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-[#7AB2D3] hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                  <path fill="#DFF2EB" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"/>
                </svg>
                แบบทดสอบเก็บคะแนน
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link
              class="flex items-center p-2 rounded-sm hover:bg-[#7AB2D3] hover:text-gray-600 group currentPage"
              to="/infor"
              @click="handlePage('infor')"
              :class="{'bg-[#7AB2D3] text-gray-600': pageName === 'infor'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="#DFF2EB" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.01 8H11a1 1 0 0 0-.117 1.993L11 12v4.99c0 .52.394.95.9 1.004l.11.006h.49a1 1 0 0 0 .596-1.803L13 16.134V11.01c0-.52-.394-.95-.9-1.004zM12 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
              </g>
            </svg>
            <span class="ms-3">ข้อมูลผู้จัดทำ</span>
          </router-link>
        </li> <li>
          <router-link
              class="flex items-center p-2 rounded-sm hover:bg-[#7AB2D3] hover:text-gray-600 group currentPage"
              to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#DFF2EB" d="m22 12l-4-4v3h-8v2h8v3m2 2a10 10 0 1 1 0-12h-2.73a8 8 0 1 0 0 12Z" />
            </svg>
            <span class="ms-3">ออกจากระบบ</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import {Icon} from '@iconify/vue';
import {usePageStore, useGetLessionStore} from "@/stores";
import {computed, onMounted, ref} from "vue";
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
    Icon
  },
  setup() {
    const pageStore = usePageStore();
    const listLessionStore = useGetLessionStore();
    const pageName = ref("home");
    let role = ref(null)

    const pageName2 = localStorage.getItem("pageMenu" || '')
    const roleData = localStorage.getItem("role" || '')
    console.log(roleData);

    if (pageName2 === null) {

    } else {
      pageName.value = pageName2
    }
    const handlePage = async (pageNames) => {
      pageName.value = pageNames;
      pageStore.setPage(pageNames);
      console.log(pageNames)
      if (pageNames === '') {

      }
    };

    const toggleCollapse = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.toggle('hidden');
      }
    };


    onMounted(() => {
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
      listLessionStore.getLession();
    });
    console.log('Lession:', listLessionStore)
    return {
      toggleCollapse,
      pageName,
      pageStore,
      roleData,
      listLessionStore,
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