import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    commitLogIn() {
      this.loggedIn = true
    },
    commitLogOut() {
      this.loggedIn = false
    },
  }
})
