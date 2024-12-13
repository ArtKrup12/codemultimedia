<style scoped>
</style>
<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center bg-[#7AB2D3] text-[#4A628A] border-b border-gray-200 rounded-t-lg  dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4">ขับขี่ปลอดภัย honda</span>
      </div>
      <div id="defaultTabContent">
        <div class=" p-2 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="about" role="tabpanel"
             aria-labelledby="about-tab">
          <div class="flex justify-center">
            <!--            <div class="w-3/4 mr-1">-->
            <div class=" h-[600px] w-full bg-green-500">
              <iframe
                  :src="'https://www.youtube.com/embed/' + lessionDetail.lessionDetail.linkVideo"
                  class="w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
              ></iframe>
            </div>
          </div>
<!--          <div class="w-1/4 ml-1 flex justify-start">-->
<!--            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">-->
<!--              <div-->
<!--                  class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"-->
<!--                  id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">-->
<!--                <span class="p-3 pl-4">เนื้อหา</span>-->
<!--              </div>-->
<!--              <div id="defaultTabContent" class="flex justify-center mt-2">-->
<!--                <ol class="space-y-4 w-[90%] ">-->
<!--                  <li class="flex justify-between">-->
<!--                    <div class="w-1/2 mr-1">-->
<!--                      <button type="button"-->
<!--                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-->
<!--                        ทำแบบทดสอบก่อนเรียน-->
<!--                      </button>-->
<!--                    </div>-->
<!--                    <div class="w-1/2 ml-1">-->
<!--                      <button type="button"-->
<!--                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-->
<!--                        ทำแบบทดสอบหลังเรียน-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </ol>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
<!--        <div class="flex justify-center mt-3">-->
<!--          <h3 class="font-bold text-blue-700">ขอให้สนุกกับการเรียนนะ ครับ/ค่ะ</h3>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import {useLessioDetailStore} from '@/stores'; // นำเข้า Store
import { useRoute } from 'vue-router';
import {defineComponent, onMounted, ref,watch } from "vue";
export default defineComponent({
  components: {
  },
  setup() {
    const lessionDetail = useLessioDetailStore();
    const route = useRoute();
    const idLession = route.params.id;
    const id = ref(route.params.id);
    // const youtubeLink = ref(`https://www.youtube.com/embed/${videoId}`)
    console.log('videoId',idLession)
    onMounted(() => {
      lessionDetail.getLessionDetail(id.value);
    });

    watch(
        () => route.params.id,
        (newId) => {
          id.value = newId;
          lessionDetail.getLessionDetail(id.value);
        }
    );

    // console.log(videoStore.youtubeLink.linkVideo)

    return {
      lessionDetail,
    }
  },
})
</script>
