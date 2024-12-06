<style scoped>
#dropzone {
  transition: border-color 0.3s ease;
}
#dropzone:hover {
  border-color: #2563eb; /* Blue hover color */
}
#dropzone.border-highlight {
  border-color: #2563eb; /* Highlight color when dragging */
}
</style>
<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4">ส่งงาน</span>
      </div>
      <div id="defaultTabContent" class="grid grid-cols-1">
        <div
            v-for="(task, index) in tasks"
            :key="index"
            class="w-[calc(100%-2rem)] p-6 m-3 bg-white border border-gray-200 rounded-lg shadow text-left dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ task.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ task.description }}
          </p>
          <button data-modal-target="default-modal" data-modal-toggle="default-modal"
                  class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button">
            ส่งงาน
            <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
              <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- Main modal -->
  <div id="default-modal" tabindex="-1" aria-hidden="true" data-modal-placement="top-right"
       class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-2 m-2 md:p-2 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            ส่งงานที่ 1
          </h3>
          <button type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">

          <label for="message"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อธิบายเพิ่มเติม</label>
          <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="พิมพ์ข้อความเพิ่มเติม..."></textarea>

          <div class="flex items-center justify-center w-full">
            <div for="dropzone-file"
                 id="dropzone"
                 @dragenter.prevent="onDragEnter"
                 @dragover.prevent="onDragOver"
                 @dragleave="onDragLeave"
                 @drop.prevent="onDrop"
                   class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                    class="font-semibold">กดที่นี้อัปโหลด</span> หรือ ลากมาวาง</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, JPG, JPEG (MAX. 5MB)</p>
              </div>
              <input id="dropzone-file"  ref="fileInput"  type="file" class="hidden" multiple
                     @change="onFileSelect" />
            </div>
          </div>

        </div>
        <!-- Modal footer -->
        <div
            class="flex items-center justify-end p-1 m-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="default-modal" type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            บันทึก
          </button>
          <button data-modal-hide="default-modal" type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import {
  initAccordions, initCarousels, initCollapses, initDials, initDismisses, initDrawers, initDropdowns,
  initModals, initPopovers, initTabs, initTooltips,
} from "flowbite";

export default {
  setup() {
    const tasks = ref(
        Array.from({length: 3}, (_, i) => ({
          title: `งานที่ ${i + 1}`,
          description: `เขียนเรียงความเกี่ยวกับการจราจรมา 1 หน้ากระดาษ. . .`,
        }))
    );

    const fileInput = ref(null);
    const dropzoneHighlight = ref(false);

    // Handle drag events
    const onDragEnter = () => {
      dropzoneHighlight.value = true;
    };
    const onDragOver = () => {
      dropzoneHighlight.value = true;
    };
    const onDragLeave = () => {
      dropzoneHighlight.value = false;
    };
    const onDrop = (event) => {
      dropzoneHighlight.value = false;
      const files = event.dataTransfer.files;
      console.log("Dropped files:", files);
      fileInput.value.files = files; // Assign files to input
      alert(`คุณอัปโหลดไฟล์ ${files.length} ไฟล์`);
    };
    const onFileSelect = () => {
      const files = fileInput.value.files;
      console.log("Selected files:", files);
    };



    onMounted(async () => {
      initModals();
    })

    return {
      tasks,
      fileInput,
      dropzoneHighlight,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
      onFileSelect,};
  },
};
const selectedOption1 = ref('');
const selectedOption2 = ref('');
</script>
