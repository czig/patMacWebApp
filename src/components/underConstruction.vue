<template>
  <v-container>
    <v-row>
        <v-col class="col-xs-12 col-md-6">
            <span class="text-h2 text-left">Under Construction!</span>
            <p class="body-1 mt-4 text-left">Please check back later!</p>
        </v-col>
        <v-col class="col-xs-12 col-md-6">
            <img src="../assets/fish_working.jpg"
                 :width="$vuetify.breakpoint.width > 640 ? 640 : $vuetify.breakpoint.width"
                 contain>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'under construction',

    data: () => ({
      ecosystem: [
      ],
      importantLinks: [
      ],
      whatsNext: [
      ],
    }),
  }
</script>
