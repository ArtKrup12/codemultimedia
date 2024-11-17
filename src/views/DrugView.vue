<template>
  <div>
    <sideMenu/>
    <HeadText/>
    <div class="overflow-y-auto" style="height: 80vh;">
      <div v-if="lists.length > 0" v-for="list in lists" :key="list" class="mb-2 mt-2">
        <a href="#"
           class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ list.drugId.name }}</h5>
          <div class="flex flex-col">
            <span class="font-normal text-gray-700 dark:text-gray-400">lot no : {{ list.lotNo }}</span>
            <span class="font-normal text-gray-700 dark:text-gray-400">exp : {{ list.dateExp }} เหลืออีก * วัน หมดอายุ</span>
            <span class="font-normal text-gray-700 dark:text-gray-400">จำนวน : {{ list.quantity }} </span>
          </div>
        </a>
      </div>
      <div v-else class="mb-2 mt-2">
        <span
           class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ไม่มีข้อมูล</h5>
        </span>
      </div>
    </div>
  </div>
  <div class="fixed bottom-20 right-5 z-50">
    <button type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Icon icon="charm:plus" width="28" height="28" style="color: white"/>
      <span class="sr-only">Icon description</span>
    </button>
  </div>


  <!-- Main modal -->
  <div id="crud-modal" tabindex="-1" aria-hidden="true"
       class="hidden duration-1000 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <!--  <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden fixed inset-0 z-50 justify-center items-end w-full h-full transition-all duration-300 ease-out transform translate-y-full">-->
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            เพิ่มยาความเสี่ยงสูง
          </h3>
          <button type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="addDrug" method="post" class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label for="category"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อยา</label>
              <select id="drugName" v-model="drugName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option v-for="option in options" :value="option.value">{{ option.text }}</option>
              </select>

            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lot No.</label>
              <input type="text" name="lotNo" id="lotNo" v-model="lotNo"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="EX000" required="">
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันหมดอายุ</label>
              <input type="text" name="expDate" id="expDate" v-model="expDate"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="dd-mm-yyyy" required="">
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
              <input type="number" name="numDrug" id="numDrug" v-model="numDrug"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="1" required="">
            </div>
            <div class="col-span-2">
              <label for="price"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้รับผิดชอบ</label>
              <input type="text" name="respPerson" id="respPerson" v-model="respPerson"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="" required="">
            </div>
            <div class="col-span-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     for="file_input">เพิ่มรูปภาพ</label>
              <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="imageFile" type="file" accept="image/*;capture=camera"  @change="onFileChange">
            </div>
            <div class="col-span-2">
              <!-- Preview the image before uploading -->
              <div v-if="previewUrl">
                <h4>Preview:</h4>
                <img :src="previewUrl" alt="Image Preview" style="max-width: 80%; margin-top: 10px;" />
              </div>

            </div>
          </div>
          <button type="submit"
                  class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Icon icon="ic:round-add" width="24" height="24" style="color: white"/>
            เพิ่มยา
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import HeadText from "@/components/HeadText.vue"
import {Icon} from "@iconify/vue"
import {onMounted, ref} from 'vue'
import {initFlowbite} from 'flowbite'
import {useAddStore,useGetDrugStore,useGetListStore} from "@/stores/index.js";
import router from "@/router/index.js";
import sideMenu from "@/components/sideMenu.vue";

export default {
  components: {
    HeadText,
    Icon,
    sideMenu
  },
  setup() {
    //form-data
    const drugName = ref()
    const lotNo = ref()
    const numDrug = ref()
    const respPerson = ref()
    const expDate = ref()
    const file = ref(null)
    //form-data

    //preview-image
    const previewUrl = ref(null)
    const uploadSuccess = ref(false)
    //preview-image

    //data from api
    const options = ref([
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ])

    const lists = ref([])
    //data from api

    const addData = useAddStore()
    const drugData = useGetDrugStore()
    const listData = useGetListStore()
    const addDrug = async () => {
      const apiAdd = await addData.addDrug(drugName.value,lotNo.value,numDrug.value,respPerson.value,expDate.value,file.value)
      // console.log(apiAdd)
      if(apiAdd){
        console.log('add')
        // await router.push('/drug')
        location.reload()
      }else{
        console.log('no add')
      }
    }

    const fetchDataFromAPI = async () => {
      try {
        const apiData = await drugData.getDrug()
        const apiDataList = await listData.getList()
        lists.value = apiDataList
        options.value = apiData.map(item => ({
          text: item.name,
          value: item._id
        }))
      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    }

    onMounted(() => {
      initFlowbite();
      fetchDataFromAPI()
    })

    console.log(lists)
    const onFileChange = (event) => {
      const selectedFile = event.target.files[0]
      if (selectedFile) {
        file.value = selectedFile
        previewUrl.value = URL.createObjectURL(selectedFile)
      }
    }

    return {
      lists,
      drugName,
      lotNo,
      numDrug,
      respPerson,
      previewUrl,
      uploadSuccess,
      options,
      expDate,
      onFileChange,
      addDrug,
      fetchDataFromAPI
    }

  }
}
</script>