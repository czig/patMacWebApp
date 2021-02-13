<template>
  <v-container>
      <under-construction></under-construction>
  </v-container>
</template>

<script>
  import underConstruction from "@/components/underConstruction"
  export default {
    name: 'about',

    data: () => ({
      ecosystem: [
      ],
      importantLinks: [
      ],
      whatsNext: [
      ],
    }),
    components: {
        "under-construction": underConstruction
    }
  }
</script>
