import { defineStore } from "pinia";
import axios, {all} from "axios";
export const useGetTestStore = defineStore("getTestList", {
    state: () => ({
        testList: [],
    }),
    getters: {},
    actions: {
        async getTest(lessionId) {
            try {
                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/lession/getTest",
                    {lessionId}
                )).data
                console.log(response)
                this.testList = response;
            } catch (error) {
                console.error(error);
            }
        }
    },
});
