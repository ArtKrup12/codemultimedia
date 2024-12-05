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
          <div class="flex justify-between">
            <div class="w-3/4 mr-1">
              <ul class="space-y-4 text-left  text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li>
                  ควรสวมหมวกกันน็อคตอนไหน
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>You might feel like you are being really "organized".</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nesting tons of folders in your source code is also not helpful.</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li>
                  ควรสวมหมวกกันน็อคตอนไหน
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>You might feel like you are being really "organized".</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nesting tons of folders in your source code is also not helpful.</span>
                      </label>
                    </li>
                  </ol>
                </li>
                <li>
                  ควรสวมหมวกกันน็อคตอนไหน
                  <ol class="ps-5 mt-2 space-y-1 list-none">
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>You might feel like you are being really "organized".</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</span>
                      </label>
                    </li>
                    <li>
                      <label class="flex items-center space-x-2">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span>Nesting tons of folders in your source code is also not helpful.</span>
                      </label>
                    </li>
                  </ol>
                </li>
              </ul>

            </div>
            <div class="w-1/4 mr-1 flex justify-start">
              b
            </div>
          </div>
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
