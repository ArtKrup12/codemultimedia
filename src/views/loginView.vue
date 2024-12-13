<style scoped>
</style>
<template>

  <div class="h-screen w-screen flex justify-center items-center">
    <div class="flex justify-center w-full max-w-7xl ">
      <div
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center mb-4">
          <img src="/uploads/images/login/1.jpg" alt="Login Image">
        </div>
        <form @submit.prevent="SignIn" method="post" class="space-y-6">
          <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">เข้าสู่ระบบสื่อการเรียนการสอน</h5>
          <div>
            <label for="email"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ใช้งาน</label>
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
import {initCarousels, initModals} from 'flowbite';
import Swal from 'sweetalert2';


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
      console.log('data',data)
      if (data) {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          showConfirmButton: false,
          timer: 1500
        });
        await router.push('/home')
      } else {
        await Swal.fire({
          title: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          text: 'กรุณาลองอีกครั้ง',
          icon: 'warning',
          confirmButtonText: 'ดำเนินการต่อ',
          confirmButtonColor:"#4F9883"
        });
      }

    }

    onMounted(() => {
      initCarousels();
      initModals();
    });

    return {
      userName,
      passWord,
      SignIn
    }
  }
}
</script>
