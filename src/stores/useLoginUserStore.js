import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useLoginUserStore = defineStore("loginuser", {
    state: () => ({
        userid: useStorage("userid", ""),
        name: useStorage("name", "")
    }),
    getters: {
        getUserID: (state) => {
            return state.userid;
        },

        getname: (state) => {
            return state.name;
        }
    },
    actions: {
        clearStorage() {
            this.userid = "";
            this.name = "";
        },
    },
});