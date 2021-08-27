<template>
  <v-container fluid>
    <v-card elevation="10">
      <v-card-title>Add band</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field dense label="Band name" v-model="band.name"/>
          </v-col>
          <v-col>
            <v-autocomplete dense label="Country of origin"
                            :items="$store.getters.countries"
                            item-value="id"
                            item-text="name"
                            v-model="band.country_of_origin"/>
          </v-col>
          <v-col>
            <v-text-field dense label="Location" v-model="band.location"/>
          </v-col>
          <v-col>
            <v-select dense label="Status"
                      :items="$store.getters.statuses"
                      item-text="status"
                      item-value="id"
                      v-model="band.status_id"/>
          </v-col>
          <v-col>
            <v-select dense label="Formed in" :items="years" v-model="band.formed_in"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field dense label="Years active" v-model="band.years_active"/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AddBand",
  computed: {
    years() {
      return Array.from({ length: (1970 - new Date().getFullYear()) / -1 + 1}, (_, i) => new Date().getFullYear() + (i * -1));
    }
  },
  data: () => ({
    band: {
      name: null,
      country_of_origin: null,
      location: null,
      status_id: null,
      formed_in: null,
      years_active: null,
      genre: null,
      lyrical_themes: null,
      current_label: null,
      url_to_logo: null,
      url_to_picture: null,
      created_by: null,
      created_at: null,
      updated_at: null,
      updated_by: null,
    }
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>
