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
               :cols="$vuetify.breakpoint.name == 'xs' ? 12 : 4"
               >
               <v-hover v-slot="{ hover }">
                   <v-card :class="`elevation-${hover ? 12 : 2}`"
                            style="cursor: pointer"
                            @click="showDialog(image)"
                           >
                    <v-img :src="image.src" 
                           aspect-ratio="1"
                           class="grey lighten-2"
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
                        <v-card-title class="align-center justify-center text-subtitle-1">
                            {{image.title}} 
                        </v-card-title>
                   </v-card>
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
            title: "Acorn"
          },
          {
            src: require('../assets/buck.jpg'),
            width: 640,
            title: "Buck"
          },
          {
            src: require('../assets/bunnies.jpg'),
            width: 640,
            title: "Bunnies"
          },
          {
            src: require('../assets/christmas_ornaments.jpg'),
            width: 640,
            title: "Christmas Ornaments"
          },
          {
            src: require('../assets/circles_in_garden.jpg'),
            width: 640,
            title: "Landscape Art"
          },
          {
            src: require('../assets/cutouts.jpg'),
            width: 640,
            title: "Christmas Tree and Dragonfly cutouts"
          },
          {
            src: require('../assets/dogwood_spray.jpg'),
            width: 640,
            title: "Dogwood spray"
          },
          {
            src: require('../assets/dragon_flies.jpg'),
            width: 640,
            title: "Dragonflies"
          },
          {
            src: require('../assets/epilepsy_symbol.jpg'),
            width: 640,
            title: "Epilepsy Foundation Symbol"
          },
          {
            src: require('../assets/fish.jpg'),
            width: 640,
            title: "Trout"
          },
          {
            src: require('../assets/fish_brazed_2.jpg'),
            width: 640,
            title: "Trout (brazed)"
          },
          {
            src: require('../assets/fish_brazing.jpg'),
            width: 640,
            title: "Trout (brazed)"
          },
          {
            src: require('../assets/fish_working.jpg'),
            width: 640,
            title: "Working on the Trout"
          },
          {
            src: require('../assets/landscape_art_2_garage.jpg'),
            width: 640,
            title: "Garden Art in Progress"
          },
          {
            src: require('../assets/landscape_art_garden.jpg'),
            width: 640,
            title: "Garden Art"
          },
          {
            src: require('../assets/landscape_art_working.jpg'),
            width: 640,
            title: "Garden Art in Progress"
          },
          {
            src: require('../assets/landscaping_design.jpg'),
            width: 640,
            title: "Garden Art"
          },
          {
            src: require('../assets/maple_leaf_big.jpg'),
            width: 640,
            title: "Maple Leaf"
          },
          {
            src: require('../assets/maple_leafs_diag.jpg'),
            width: 640,
            title: "Maple Leaves"
          },
          {
            src: require('../assets/maple_leafs.jpg'),
            width: 800,
            title: "Maple Leaves"
          },
          {
            src: require('../assets/maple_spray.jpg'),
            width: 640,
            title: "Maple Leaf Spray"
          },
          {
            src: require('../assets/maple_spray_mounted.jpg'),
            width: 640,
            title: "Maple Leaf Spray Mounted"
          },
          {
            src: require('../assets/pat_mac_sign.jpg'),
            width: 800,
            title: "Company Sign!"
          },
          {
            src: require('../assets/patrick.jpg'),
            width: 640,
            title: "Me with the Landscape Art base"
          },
          {
            src: require('../assets/torch.jpg'),
            width: 720,
            title: "Working on the Landscape Art"
          },
          {
            src: require('../assets/working_fish.jpg'),
            width: 640,
            title: "Working on the trout"
          },
          {
            src: require('../assets/working_maple.jpg'),
            width: 1080,
            title: "Working on the maple leaf spray"
          },
          {
            src: require('../assets/garden_art.jpg'),
            width: 1080,
            title: "Landscape Art outside"
          },
          {
            src: require('../assets/butterfly2.jpg'),
            width: 1080,
            title: "Butterfly"
          },
          {
            src: require('../assets/sunflower.jpeg'),
            width: 640,
            title: "Sunflower"
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

<style>
.hyphen-text {
    display: block;
    overflow: hidden;
    word-break: break-all;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}

</style>
