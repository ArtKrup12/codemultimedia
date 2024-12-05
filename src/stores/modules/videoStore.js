import { defineStore } from 'pinia';

export const useVideoStore = defineStore('video', {
    state: () => ({
        youtubeLink: 'https://www.youtube.com/watch?v=OX724d5r8Lg', // ตัวอย่างลิงก์
    }),
    actions: {
        setYoutubeLink(link) {
            this.youtubeLink = link;
        },
    },
});
