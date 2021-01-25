<template>
  <v-container>
        <v-carousel height="600">
            <v-carousel-item src="../assets/working_maple.jpg"></v-carousel-item>
            <v-carousel-item src="../assets/torch.jpg"></v-carousel-item>
            <v-carousel-item src="../assets/patrick.jpg"></v-carousel-item>
        </v-carousel>
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
