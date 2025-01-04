<template>
  <v-container>
      <v-row class="mt-3 mx-4">
          <v-col class="col-xs-12">
              <div class="text-h3">Contact Us!</div>
              <p class="mt-5 ml-1">
              For any questions, orders, or inquiries, please contact me via phone (call or text) or email
              <ul>
                <li>
                  Phone: 774-573-3785
                </li>
                <li>
                  Email: <a href="mailto:patrick@patmacscopperworks.com">patrick@patmacscopperworks.com</a>. 
                </li>
              </ul>
              <br>
              <br>
              If you wish to place an order for copper art, please text, call, or email me with the following information:
                <ul>
                    <li>Your Name</li>
                    <li>
                      Copper Art being ordered (please reference the gallery for examples)
                      <ul>
                        <li>I am happy to consider special requests. Please send me your ideas or pictures of what you have in mind.</li>
                      </ul>
                    </li>

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
