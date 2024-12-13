<style scoped>
</style>
<template>
  <div class="text-center m-2 p-2 h-screen rounded-md sm:ml-[16.5rem]">
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
          class="flex flex-wrap text-sm font-medium text-center  border-b border-gray-200 rounded-t-lg bg-[#7AB2D3] text-[#4A628A] dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <span class="p-3 pl-4">ขับขี่ปลอดภัย honda</span>
      </div>
      <div id="defaultTabContent">
        <div class=" p-2 bg-white rounded-lg md:p-2 dark:bg-gray-800" id="about" role="tabpanel"
             aria-labelledby="about-tab">
          <div class="flex justify-between">
            <div class="w-full mr-1">
              <div>
<!--               <VPdfViewer src="/pdf/ใบเสนอราคาระบบmemo.pdf" />-->
                <iframe
                    :src="'/pdf/'+lessionDetail.lessionDetail.linkPdf"
                    class="w-full h-[600px]"
                    frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
<!--          <div class="flex justify-center mt-3">-->
<!--            <h3 class="font-bold text-blue-700">ขอให้สนุกกับการเรียนนะ ครับ/ค่ะ</h3>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useLessioDetailStore} from '@/stores'; // นำเข้า Store
import {ref, defineComponent, onMounted, watch} from 'vue' ;
import {useRoute} from "vue-router";
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
