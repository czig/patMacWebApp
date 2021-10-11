<template>
  <v-container>
    <v-dialog v-model="dialog"
              :max-width="dialogImage.width">
        <v-card>
            <v-btn fab
                   dark
                   small
                   absolute
                   right
                   @click.stop = "dialog = false">
                <v-icon>mdi-close</v-icon> 
            </v-btn>
            <v-img :src="dialogImage.src" 
                   contain
                   >
                <template v-slot:placeholder> 
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate
                                             color="grey lighten-5">
                        </v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-card>
    </v-dialog>
    <v-row class="mt-3">
        <v-col v-for="(image,i) in images"
               :key="i"
               class="d-flex child-flex"
               cols="4"
               >
               <v-hover v-slot="{ hover }">
                    <v-img :src="image.src" 
                           aspect-ratio="1"
                           :class="`elevation-${hover ? 12 : 2}`"
                           class="grey lighten-2"
                           style="cursor: pointer"
                           @click = "showDialog(image)" 
                           >
                        <template v-slot:placeholder> 
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                <v-progress-circular indeterminate
                                                     color="grey lighten-5">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
           </v-hover>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'gallery',
    data: () => ({
      dialog: false,
      dialogImage: {},
      images: [
          {
            src: require('../assets/acorn.jpg'),
            width: 640,
          },
          {
            src: require('../assets/buck.jpg'),
            width: 640,
          },
          {
            src: require('../assets/bunnies.jpg'),
            width: 640,
          },
          {
            src: require('../assets/christmas_ornaments.jpg'),
            width: 640,
          },
          {
            src: require('../assets/circles_in_garden.jpg'),
            width: 640,
          },
          {
            src: require('../assets/cutouts.jpg'),
            width: 640,
          },
          {
            src: require('../assets/dogwood_spray.jpg'),
            width: 640,
          },
          {
            src: require('../assets/dragon_flies.jpg'),
            width: 640,
          },
          {
            src: require('../assets/epilepsy_symbol.jpg'),
            width: 640,
          },
          {
            src: require('../assets/fish.jpg'),
            width: 640,
          },
          {
            src: require('../assets/fish_brazed_2.jpg'),
            width: 640,
          },
          {
            src: require('../assets/fish_brazing.jpg'),
            width: 640,
          },
          {
            src: require('../assets/fish_working.jpg'),
            width: 640,
          },
          {
            src: require('../assets/landscape_art_2_garage.jpg'),
            width: 640,
          },
          {
            src: require('../assets/landscape_art_garden.jpg'),
            width: 640,
          },
          {
            src: require('../assets/landscape_art_working.jpg'),
            width: 640,
          },
          {
            src: require('../assets/landscaping_design.jpg'),
            width: 640,
          },
          {
            src: require('../assets/maple_leaf_big.jpg'),
            width: 640,
          },
          {
            src: require('../assets/maple_leafs_diag.jpg'),
            width: 640,
          },
          {
            src: require('../assets/maple_leafs.jpg'),
            width: 800,
          },
          {
            src: require('../assets/maple_spray.jpg'),
            width: 640,
          },
          {
            src: require('../assets/maple_spray_mounted.jpg'),
            width: 640,
          },
          {
            src: require('../assets/pat_mac_sign.jpg'),
            width: 800,
          },
          {
            src: require('../assets/patrick.jpg'),
            width: 640,
          },
          {
            src: require('../assets/torch.jpg'),
            width: 720,
          },
          {
            src: require('../assets/working_fish.jpg'),
            width: 640,
          },
          {
            src: require('../assets/working_maple.jpg'),
            width: 1080,
          },
          {
            src: require('../assets/garden_art.jpg'),
            width: 1080,
          },
          {
            src: require('../assets/butterfly2.jpg'),
            width: 1080,
          },
      ],
    }),
    methods: {
        showDialog: function(src) {
            this.dialog = true
            this.dialogImage = src
        }   
    },
  }
</script>
