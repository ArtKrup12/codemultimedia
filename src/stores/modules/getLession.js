import { defineStore } from "pinia";
import axios, {all} from "axios";
export const useGetLessionStore = defineStore("getLessionList", {
    state: () => ({
        lessionList: [],
    }),
    getters: {},
    actions: {
        async getLession() {
            try {
                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/lession/getLession",
                    {}
                )).data
                console.log(response)
                this.lessionList = response;
            } catch (error) {
                console.error(error);
            }
        }
    },
});
