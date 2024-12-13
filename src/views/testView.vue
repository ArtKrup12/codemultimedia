<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-[#7AB2D3] dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4 font-bold">ข้อสอบเก็บคะแนน</span>
      </div>
      <div id="defaultTabContent">
        <div class=" p-2 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="about" role="tabpanel"
             aria-labelledby="about-tab">
          <div class="">
            <div class="">
              <ul class="space-y-4 p-2 text-left  text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li v-for="(testRow, index) in testList.testList" :key="index" class="p-4 bg-[#B9E5E8] rounded-md">
                  <label class="font-bold">{{ testRow.question }}</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li v-for="(answerKey, ansIndex) in ['ansId1', 'ansId2', 'ansId3', 'ansId4']" :key="answerKey">
                      <label class="flex items-center space-x-2">
                        <input
                            :id="`question-${index}-answer-${ansIndex}`"
                            type="radio"
                            :value="testRow[answerKey]"
                            :name="`question-${index}`"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            v-model="selectedAnswers[index]"
                            @change="handleAnswerSelection(index, testRow[answerKey], answerKey)"
                        >
                        <span>{{ testRow[`ansName${ansIndex + 1}`] }}</span>
                      </label>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mb-4 me-2 flex justify-end">
          <button
              type="button"
              @click="submitAnswers"
              class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            ส่งคำตอบ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, reactive, watch } from 'vue';
import { useGetTestStore } from "@/stores/index.js";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

export default defineComponent({
  setup() {
    const testList = useGetTestStore();
    const route = useRoute();
    const id = ref(route.params.id);
    const idUser = ref(localStorage.getItem("idUser"));

    const selectedAnswers = reactive({});

    onMounted(() => {
      testList.getTest(id.value);
    });

    watch(
        () => route.params.id,
        (newId) => {
          id.value = newId;
          testList.getTest(id.value);
          Object.keys(selectedAnswers).forEach(key => delete selectedAnswers[key]);
        }
    );

    const handleAnswerSelection = (index, answerId, answerKey) => {
      console.log(`EmpId ${idUser.value} Question ${index + 1} Selected Answer ID (${answerKey}):`, answerId);
    };

    const submitAnswers =  () => {
      const submissionData = testList.testList.map((question, index) => ({
        questionId: question.id,
        selectedAnswerId: selectedAnswers[index]
      }));
      Swal.fire({
        title: "คุณต้องการส่งคำตอบ?",
        text: "ยืนยันเพื่อส่งคำตอบ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText:"ปิด",
        allowOutsideClick:false
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(submissionData)
        }
      });


      console.log('Full Test Submission:', submissionData);
    };

    return {
      testList,
      selectedAnswers,
      handleAnswerSelection,
      submitAnswers
    };
  }
})
</script>