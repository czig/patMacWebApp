<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">
                Pat Mac Copper Works
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text to="/" router>Home</v-btn> 
        <v-btn text to="/about" router>About</v-btn> 
        <v-btn text to="/gallery" router>Gallery</v-btn> 
        <v-btn text to="/blog" router>Blog</v-btn> 

    </v-app-bar>

    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
