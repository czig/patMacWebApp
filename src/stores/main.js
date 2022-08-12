import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    loggedIn: false,
    email: '',
    token: ''
  }),
  actions: {
    commitLogIn(email, token) {
      this.loggedIn = true
      this.email = email
      this.token = token
    },
    commitLogOut() {
      this.loggedIn = false
      this.email = ''
      this.token = ''
    },
  }
})
