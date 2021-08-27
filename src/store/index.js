import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    genres: [],
    bandStatuses: [],
  },
  mutations: {
    fillCountries(state, payload) {
      state.countries = payload
    },
    fillGenres(state, payload) {
      state.genres = payload
    },
    fillBandStatuses(state, payload) {
      state.bandStatuses = payload
    }
  },
  actions: {
    getCountries({commit}) {
      axios.get('/api/countries').then((response) => {
        commit('fillCountries', response.data.data)
      })
    },
    getGenres({commit}) {
      axios.get('/api/genres').then((response) => {
        commit('fillGenres', response.data.data)
      })
    },
    getBandStatuses({commit}) {
      axios.get('/api/band_statuses').then((response) => {
        commit('fillBandStatuses', response.data.data)
      })
    }
  },
  getters: {
    countries: state => state.countries,
    genres: state => state.genres,
    statuses: state => state.bandStatuses,
  }
})
