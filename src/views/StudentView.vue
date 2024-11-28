<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <HeadText />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <div class="bg-gray-700 flex justify-between py-3 items-center ">
        <div class="text-lg text-white ps-5"><label>รายชื่อนักเรียน</label></div>
        <div class="pe-5">
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">เพิ่มข้อมูล</button>
        </div>
      </div>
      <div class="m-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs uppercase font-serif bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-base text-start">ลำดับ</th>
              <th scope="col" class="px-6 py-3 text-base text-start">ชื่อ</th>
              <th scope="col" class="px-6 py-3 text-base text-start">เลขประจำตัว</th>
              <th scope="col" class="px-6 py-3 text-base text-start">
                ระดับชั้น
              </th>
              <th scope="col" class="px-6 py-3 text-base text-start">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              v-for="(item, index) in tableData_student" :key="index">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ index + 1 }}
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.name }}
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.sid }}
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ item.class }}/{{ item.room }}
              </th>
              <td class="px-6 py-4 flex gap-2 text-center">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  data-modal-target="crud-modal" data-modal-toggle="crud-modal">แก้ไข</a>
                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">ลบ</a>
                <modal />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import HeadText from "@/components/HeadText.vue";
import { useActionStudent } from "../stores/index.js";
import { comma } from "postcss/lib/list";
import { computed, onMounted } from "vue";

import modal from "@/components/modal.vue";
export default {
  components: {
    HeadText,
    modal,
  },
  data() {
    const studentData = useActionStudent();

    onMounted(async () => {
      await studentData.getStudentList();
    });

    const tableData_student = computed(() => {
      return studentData.dataStudentList;
    });

    return {
      tableData_student,
    };
  },
};
</script>

<style></style>