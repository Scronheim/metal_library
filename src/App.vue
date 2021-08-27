<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$vuetify.theme.dark = true
    Promise.all([
      this.$store.dispatch('getCountries'),
      this.$store.dispatch('getGenres'),
      this.$store.dispatch('getBandStatuses')
    ])
  },
  data: () => ({
    //
  }),
};
</script>
