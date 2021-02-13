<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
                Pat Mac Copper Works
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text to="/" router>Home</v-btn> 
        <v-btn text to="/about" router>About</v-btn> 
        <v-btn text to="/blog" router>Blog</v-btn> 
        <v-btn text to="/gallery" router>Gallery</v-btn> 

    </v-app-bar>

    <v-navigation-drawer v-model="drawer"
                         absolute
                         temporary>
        <v-list nav dense>
            <v-list-item-group>
                <v-list-item to="/">
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item to="/about">
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item>
                <v-list-item to="/blog">
                    <v-list-item-title>Blog</v-list-item-title>
                </v-list-item>
                <v-list-item to="/gallery">
                    <v-list-item-title>Gallery</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>


    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false, 
  }),
};
</script>
