import { defineStore } from "pinia";
import axios, {all} from "axios";
export const useGetDrugStore = defineStore("getDrug", {
    state: () => ({}),
    getters: {},
    actions: {
        async getDrug() {
            try {
                const response = (await axios.get(
                    import.meta.env.VITE_API_URL + "/drug/getDrug",
                    { },
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                )).data
                // console.log(response)
                return response
            } catch (error) {
                console.error(error);
            }
        }
    },
});
