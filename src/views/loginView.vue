<style scoped>
</style>
<template>

  <div class="h-screen w-screen flex justify-center items-center">
    <div class="flex justify-center w-full max-w-7xl ">
      <div
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center mb-4">
          <img src="/uploads/images/login/python_logo.jpg" alt="Login Image">
        </div>
        <form @submit.prevent="SignIn" method="post" class="space-y-6">
          <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">เข้าสู่ระบบ</h5>
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
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            ยังไม่ได้ลงชื่อเข้าใช้? <a
              href="#"
              @click.prevent="openRegistrationModal"
              class="text-blue-700 hover:underline dark:text-blue-500"
          >
            ลงทะเบียน
          </a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Registration Modal -->


  <!-- Registration Modal -->
  <!-- Registration Modal -->
  <div
      id="registration-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="registration-modal"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-6 text-xl font-medium text-center text-gray-900 dark:text-white">
            ลงทะเบียนผู้ใช้ใหม่
          </h3>
          <form @submit.prevent="register" class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
              <input
                  type="text"
                  name="floating_username"
                  id="floating_username"
                  v-model="registrationForm.username"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
              />
              <label
                  for="floating_username"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ชื่อผู้ใช้งาน
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  v-model="registrationForm.email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
              />
              <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                อีเมล
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  v-model="registrationForm.password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
              />
              <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                รหัสผ่าน
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                  type="password"
                  name="floating_repeat_password"
                  id="floating_repeat_password"
                  v-model="registrationForm.confirmPassword"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
              />
              <label
                  for="floating_repeat_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ยืนยันรหัสผ่าน
              </label>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    v-model="registrationForm.firstName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  ชื่อ
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    v-model="registrationForm.lastName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  นามสกุล
                </label>
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="floating_phone"
                    id="floating_phone"
                    v-model="registrationForm.mobile"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  เบอร์มือถือ
                </label>
              </div>
            </div>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ลงทะเบียน
            </button>
          </form>
        </div>
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
    const registrationForm = ref({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    })
    let registrationModal = null
    const openRegistrationModal = () => {
      // Initialize modal using Flowbite
      const modalElement = document.getElementById('registration-modal')
      registrationModal = new Modal(modalElement)
      registrationModal.show()
    }

    const register = async () => {
      // Password validation
      if (registrationForm.value.password !== registrationForm.value.confirmPassword) {
        await Swal.fire({
          title: 'รหัสผ่านไม่ตรงกัน',
          text: 'กรุณากรอกรหัสผ่านใหม่',
          icon: 'warning',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: "#4F9883"
        })
        return
      }
      const registrationData = {
        firstName: registrationForm.value.firstName,
        userName: registrationForm.value.username,
        lastName: registrationForm.value.lastName,
        email: registrationForm.value.email,
        mobile: registrationForm.value.mobile,
        password: registrationForm.value.password,
        role: 1
      }
      try {
        console.log(registrationData)
        // Call registration method from auth store
        const result = await authStore.register(registrationData)

        if (result) {
          // Show success message
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "ลงทะเบียนสำเร็จ",
            showConfirmButton: false,
            timer: 1500
          })

          // Close modal
          if (registrationModal) {
            registrationModal.hide()
          }

          // Optionally, you could auto-login or redirect
        } else {
          // Handle registration failure
          await Swal.fire({
            title: 'การลงทะเบียนล้มเหลว',
            text: 'กรุณาลองอีกครั้ง',
            icon: 'error',
            confirmButtonText: 'ตกลง',
            confirmButtonColor: "#4F9883"
          })
        }
      } catch (error) {
        console.error('Registration error:', error)
        await Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: error.message || 'กรุณาลองใหม่อีกครั้ง',
          icon: 'error',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: "#4F9883"
        })
      }
    }


    const SignIn = async () => {
      // console.log(userName.value,passWord.value)
      const data = await authStore.login(userName.value, passWord.value)
      console.log('data', data)
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
          confirmButtonColor: "#4F9883"
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
      SignIn,
      registrationForm,
      openRegistrationModal,
      register
    }
  }
}
</script>
