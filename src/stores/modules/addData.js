import { defineStore } from "pinia";
import axios, {all} from "axios";
export const useAddStore = defineStore("addData", {
    state: () => ({}),
    getters: {},
    actions: {
        async addDrug(drugName, lotNo,numDrug,respPerson,expDate,file) {
            try {
                const formData = new FormData();
                // เพิ่มข้อมูลใน FormData
                formData.append('drugId', drugName);
                formData.append('lotNo', lotNo);
                formData.append('quantity', numDrug);
                formData.append('dateExp', expDate);
                formData.append('respPerson', respPerson);
                formData.append('img', file);

                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/list/addList",
                    formData,
                    {
                        headers: { "Content-Type":'multipart/form-data' },
                    }
                )).data
                // console.log(response.status)
                if (response.status === 200){
                    return true
                }else{
                    return false
                }
                // console.log(drugName,lotNo,numDrug,respPerson,expDate,file)
            } catch (error) {
                console.error(error);
            }
        }
    },
});
