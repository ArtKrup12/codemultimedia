import { defineStore } from "pinia";
import axios, {all} from "axios";
export const useGetListStore = defineStore("getList", {
    state: () => ({}),
    getters: {},
    actions: {
        async getList() {
            try {
                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/list/getList",
                    { },
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                )).data
                console.log(response)
                return response
            } catch (error) {
                console.error(error);
            }
        }
    },
});
