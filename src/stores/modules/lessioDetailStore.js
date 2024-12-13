import { defineStore } from 'pinia';
import axios from "axios";

export const useLessioDetailStore = defineStore('lessionDetail', {
    state: () => ({
        lessionDetail:{}, // ตัวอย่างลิงก์
    }),
    actions: {
        async getLessionDetail(id) {
            try {
                const response = (await axios.post(
                    import.meta.env.VITE_API_URL + "/lession/getLessionDetail",
                    {
                        id
                    }
                )).data
                // console.log('detail :',response)
                this.lessionDetail = response;
            } catch (error) {
                console.error(error);
            }
        }
        // setYoutubeLink(link) {
        //     this.youtubeLink = link;
        // },
    },
});
