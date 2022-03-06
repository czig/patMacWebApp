<template>
  <v-container>
      <v-row class="mt-3 mx-4">
          <v-col class="col-xs-12">
              <div class="text-h3">Contact Us!</div>
              <p class="mt-5 ml-1">
              For any questions or inquiries, please email me at <a href="mailto:patrick@patmacscopperworks.com">patrick@patmacscopperworks.com</a>. 
              <br>
              <br>
              If you wish to place an order for copper art, please email me at the email shown above with the following information:
                <ul>
                    <li>Your Name</li>
                    <li>Copper Art being ordered (please reference the gallery for examples)</li>
                    <li>Date when you would like Copper Art by</li>
                    <li>A good phone number to reach you at</li>
                </ul>
              </p>
              <br>
              <br>
              <div class="text-h6">Thank you for your support!</div>
          </v-col>
      </v-row>
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
