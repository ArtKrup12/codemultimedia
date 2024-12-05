<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4">ข้อสอบเก็บคะแนน</span>
      </div>
      <div id="defaultTabContent">
        <div class=" p-2 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="about" role="tabpanel"
             aria-labelledby="about-tab">
          <div class="">
            <div class="">
              <ul class="space-y-4 p-2 text-left  text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li class="p-4 bg-blue-100 rounded-md">
                  <label class="font-bold">ควรสวมหมวกกันน็อคตอนไหน</label>
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ถึงที่หมายแล้วค่อยสวมหมวกกันน็อค</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ก่อนออกเดินทางทุกครั้ง และล็อคสายรัดคาง</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ขณะขับขี่มอเตอร์ไซค์</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>ไม่สวมหมวกกันน็อค เพราะสาวๆจะไม่เห็นหน้า</span>
                      </label>
                    </li>
                  </ol>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="mb-4 me-2 flex justify-end">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ถัดไป</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const selectedOption1 = ref('');
const selectedOption2 = ref('');
</script>
