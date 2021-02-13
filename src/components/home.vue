<template>
  <v-container fluid class="ma-0 pa-0">
      <v-img max-width="100%"
             :aspect-ratio="20/6" 
             src="../assets/pat_mac_sign.jpg">
      </v-img>
      <v-container>
          <v-row class="mt-3">
              <v-col>
                  <span class="text-h5 text-sm-h4 text-md-h2">Welcome to PatMacCopperWorks! </span>
                  <p class="text-justify mt-4">
                      I'm Patrick McGowan, and this is website is devoted to my copper art. Please check out the "About" section to read about how I got started on copper art. I will be posting in the "Blog" page as I create more copper pieces. Feel free to look at the gallery to see images of my finished products and me at work! Thanks for visiting! 
                  </p>
                  <p class="text-justify">-PM</p>
              </v-col>
          </v-row>
      </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      images: [
          '../assets/working_maple.jpg', 
          '../assets/torch.jpg',
          '../assets/patrick.jpg',
      ],
    }),
  }
</script>

<style>
    .parallax {
        background-attachment: fixed;
        background-size: contain;
    }
</style>
