<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <HeadText/>
      <div class="text-right p-2">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          เพิ่ม
        </button>
      </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs uppercase font-serif bg-gray-600 text-white dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 text-base text-start">ลำดับ</th>
            <th scope="col" class="px-6 py-3 text-base text-start">หัวข้อ</th>
            <th scope="col" class="px-6 py-3 text-base text-start">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, index) in lessonList"
            :key="index"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.topic }}
            </th>
            <td class="px-6 py-4 flex gap-2 text-center">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >แก้ไข</a
              >
              <a
                href="#"
                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                >ลบ</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HeadText from "@/components/HeadText.vue"

export default {
    components:{
        HeadText
    },
  data() {
    return {
      lessonList: [
        { topic: "บทเรียน 1" },
        { topic: "บทเรียน 2" },
        { topic: "บทเรียน 3" },
        { topic: "บทเรียน 4" },
        { topic: "บทเรียน 5" },
        { topic: "บทเรียน 6" },
      ],
    };
  },
};
</script>

<style></style>