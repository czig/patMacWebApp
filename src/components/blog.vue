<template>
  <v-container>
      <under-construction></under-construction>
  </v-container>
</template>

<script>
  import underConstruction from "@/components/underConstruction.vue"
  export default {
    name: 'blog',

    data: () => ({
      ecosystem: [
      ],
      importantLinks: [
      ],
      whatsNext: [
      ],
    }),

    components: {
        'under-construction': underConstruction
    }
  }
</script>
