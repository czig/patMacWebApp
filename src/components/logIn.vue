<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
        <transition name="fade" mode="out-in">
          <v-layout v-if="pending">
            <v-card flat tile class="mx-auto mt-16">
              <v-progress-circular indeterminate :size="120" :width="6" class="primary--text"></v-progress-circular>
            </v-card>
          </v-layout> 
          <v-form v-model="valid" class="my-5">
            <v-card v-if="!pending" class="py-5 px-3">
              <v-card-text @keyup.enter="login">
                <v-text-field
                  name="input-email"
                  label="email"
                  v-model="email"
                  :rules="emailRules"
                  autofocus
                  required
                  ></v-text-field>
                <v-text-field
                  name="input-password"
                  label="password"
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="show_password ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPassword"
                  :type="show_password ? 'text' : 'password'"
                  required
                  counter
                ></v-text-field>
              </v-card-text> 
              <v-btn primary @click.native="login">Login</v-btn>
            </v-card>
          </v-form>
        </transition> 
      </v-flex> 
    </v-layout>
    <v-snackbar :timeout="1500"
                :top="true"
                color="error"
                  v-model="show_snackbar">
      {{ snackbar_text }}
      <v-btn text @click.native="show_snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container> 
</template>

<script>
  import { useStore } from '@/stores/main'
  import axios from 'axios'

  export default {
    name: 'logIn',
    data: () => ({
      store: useStore(),
      email: "",
      password: "",
      pending: false,
      show_password: false,
      valid: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email invalid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters'
      ],
      show_snackbar: false,
      snackbar_text: ''
    }),
    methods: {
      showPassword: function() {
        this.show_password = !this.show_password 
      },
      login: function() {
        if (this.password && this.email) {
          this.pending = true
          axios.post('/login', {
            email: this.email.toLowerCase(),
            password: this.password
          })
          .then((res) => {
            console.log('login success')
            var token = res.data.token
            localStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = token
            this.store.commitLogIn(this.email, token)
            this.$router.push({path: "/account"})
          })
          .catch((err) => {
            console.log('login failure')
            console.log(err)
            this.store.commitLogOut()
            this.snackbar('Invalid credentials. Please try again.')
          })
        } else {
          this.snackbar('Please input email and password')
        }
        this.pending = false
      },
      snackbar: function(text) {
        this.snackbar_text = text;
        this.show_snackbar = true; 
      }
    },
  }
</script>
