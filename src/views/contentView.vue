<style scoped>
</style>
<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4">ขับขี่ปลอดภัย honda</span>
      </div>
      <div id="defaultTabContent">
        <div class=" p-2 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="about" role="tabpanel"
             aria-labelledby="about-tab">
          <div class="flex justify-between">
            <div class="w-3/4 mr-1">
              <div class=" h-[600px] bg-green-500">
                <iframe
                    :src="'https://www.youtube.com/embed/OX724d5r8Lg'"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="w-1/4 ml-1 flex justify-start">
              <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div
                    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                    id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                  <span class="p-3 pl-4">เนื้อหา</span>
                </div>
                <div id="defaultTabContent" class="flex justify-center mt-2">
                  <ol class="space-y-4 w-[90%] ">
                    <li>
                      <div class="w-full p-2 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
                        <div class="flex items-center justify-between">
                          <span class="sr-only">User info</span>
                          <h3 class="font-medium">1. นำเข้าสู่บทเรียน</h3>
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                          </svg>
                        </div>
                      </div>
                    </li>
                      <li>
                        <div class="w-full p-2 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
                          <div class="flex items-center justify-between">
                            <span class="sr-only">User info</span>
                            <h3 class="font-medium">2. สมหมวกกันน็อค</h3>
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="w-full p-2 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
                          <div class="flex items-center justify-between">
                            <span class="sr-only">Account info</span>
                            <h3 class="font-medium">3. ไม่ขับขี่ด้วยความเร็วสูง</h3>
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="w-full p-2 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
                          <div class="flex items-center justify-between">
                            <span class="sr-only">Social accounts</span>
                            <h3 class="font-medium">4. ไม่เลี้ยวตัดหน้า</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="w-full p-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
                          <div class="flex items-center justify-between">
                            <span class="sr-only">Review</span>
                            <h3 class="font-medium">5. เว้นระยะห่าง</h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="w-full p-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
                          <div class="flex items-center justify-between">
                            <span class="sr-only">Confirmation</span>
                            <h3 class="font-medium">6. ดื่มไม่ขับ</h3>
                          </div>
                        </div>
                      </li>
                    <li class="flex justify-between">
                      <div class="w-1/2 mr-1"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ทำแบบทดสอบก่อนเรียน</button></div>
                      <div class="w-1/2 ml-1"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ทำแบบทดสอบหลังเรียน</button></div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-3">
            <h3 class="font-bold text-blue-700">ขอให้สนุกกับการเรียนนะ ครับ/ค่ะ</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useVideoStore} from '@/stores'; // นำเข้า Store
const videoStore = useVideoStore();
</script>
