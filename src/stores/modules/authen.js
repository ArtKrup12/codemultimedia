import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")),
        token: JSON.parse(localStorage.getItem("token")),
        statusToken :[],
    }),
    getters: {
        isLoggedIn: (state) => state.user,
    },
    actions: {
        async login(userName, passWord) {
            try {
                // console.log(import.meta.env.API_URL)
                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/user/login",
                    { userName, passWord }
                )).data
                // let mockup_data = {
                //     userName:'admin',
                //     passWord:'12345'
                // }
                console.log(response)
                // if(response.status){
                if(response.status === 200){
                    console.log(userName,passWord)
                    localStorage.setItem("user", JSON.stringify(response));
                    localStorage.setItem("idUser", JSON.stringify(response.id.id));
                    localStorage.setItem("role", response.id.role);
                    return true
                }else {
                    return false
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
});
