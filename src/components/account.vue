<template>
  <v-container>
    <v-layout row wrap>
      <v-card class="mx-auto my-12"
              max-width="400">
        <v-card-title>{{ store.email }}</v-card-title>
        <v-card-text>Email: {{ store.email }}</v-card-text>
        <v-card-actions>
          <v-btn primary @click.native="logout">Logout</v-btn>
        </v-card-actions> 
      </v-card>
    </v-layout>
  
  </v-container>

</template>

<script>
import { useStore } from '@/stores/main';
import axios from 'axios';

export default {
  name: 'account',
  data: () => ({
    store: useStore(),
  }),
  methods: {
    logout: function() {
      localStorage.removeItem("token")
      axios.defaults.headers.common['Authorization'] = ''
      this.store.commitLogOut()
      this.$router.push({path: "/logIn"})
    }
  }
}

</script>
