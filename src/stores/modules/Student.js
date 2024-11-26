import { defineStore } from "pinia";
import axios from "axios";

export const useActionStudent = defineStore("ActionStudent", {
    state: () => ({
        dataStudentList: [],

    }),
    actions: {
        async getStudentList() {
            try {
                // const token = JSON.parse(localStorage.getItem("token"));
                // const response = await axios.post(
                //     import.meta.env.VITE_API_BASE_URL +
                //     "/drug/drug/getDrug",
                //     {
                //     },
                //     {
                //         headers: { Authorization: `Bearer ${token}` },
                //     }
                // );
                let response = {
                    data:[
                    {name: "สุชาติ ใจดี" ,class:"ม.5",room:"2"},
                    {name: "คนไทย มีใจ" ,class:"ม.1",room:"1"},
                    {name: "เพ็ญศรี ร่ำรวย" ,class:"ม.3",room:"3"},
                    {name: "สมชาย ค้าขาย" ,class:"ม.4",room:"4"},
                    {name: "ธนงทวย แซ่ตั้ง" ,class:"ม.5",room:"2"},
                    {name: "เมธี วงคำเหลา" ,class:"ม.2",room:"7"}
                ]
                }
                this.dataStudentList = response.data;
                console.log('dataStudentList : ',this.dataStudentList);
            
            } catch (error) {
                console.log(error);
            }
        },
    },
});