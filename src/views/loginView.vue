<style scoped>
</style>
<template>
  <div class="h-full">
    <div class="flex justify-center mt-12 ">
      <div
          class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
            @submit.prevent="SignIn"
            method="post" class="space-y-6">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">เข้าสู่ระบบ แจ้งเตือนยาความเสี่ยงสูง</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ใช้งาน</label>
            <input type="text" name="userName" id="userName" v-model="userName"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   placeholder="" required/>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
            <input type="password" name="passWord" id="passWord" v-model="passWord" placeholder=""
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required/>
          </div>
          <button type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useAuthStore} from '@/stores';

export default {
  components: {},
  setup() {
    const userName = ref()
    const passWord = ref()
    const router = useRouter()

    const authStore = useAuthStore()

    const SignIn = async () => {
      // console.log(userName.value,passWord.value)
      const data = await authStore.login(userName.value, passWord.value)
      if (data) {
        await router.push('/home')
      } else {
        alert('รหัสผ่านผิด')
      }

    }

    onMounted(async () => {
    })
    return {
      userName,
      passWord,
      SignIn
    }
  }
}
</script>
