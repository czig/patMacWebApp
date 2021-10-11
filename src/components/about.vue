<template>
  <v-container>
      <v-row class="mt-3 mx-4">
          <v-col class="col-xs-12 col-md-4">
            <img src="../assets/patrick.jpg"
             :width="360">
          </v-col>
          <v-col class="col-xs-12 col-md-8">
              <p class="text-justify">
                Hi!  My name is Patrick McGowan.  I live in Massachusetts.  I am 23 years old and have been making Copper designs since October 2019.  I have had Epilepsy since I was a small child.  My Dad and I were brainstorming and thought why not use some of the skills I learned in high School.  I work with an Oxy-Acetylene torch, I braze and solder large designs and use some power tools in our Garage shop.  My Dad and I share ideas and come up with different designs.  I have a part time job and do this on the side.  My skills continue to improve as I learn.  I have photos of my designs on this web site, and I am willing to consider new designs or requests.  I finish and clear coat all my designs, so they do not tarnish. 
              </p>
              <p class="text-justify">
                I am very proud of my work, and I want to show what someone with Epilepsy can do.  I try not to let Epilepsy get in the way of accomplishing my goals.  The profits earned from the sale of my works are donated to the Epilepsy Foundation of New England.
              </p>
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
