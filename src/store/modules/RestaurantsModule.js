import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export default {
  namespaced: true,
  state: () => ({
    isFetched: false,
    restaurants: [],
    restaurant: {
      name: 'test',
      seats: [],
    },
    searchKeyword: '',
    type: '',
  }),
  mutations: {
    setRestaurants(state, value) {
      state.restaurants = value
    },
    setRestaurant(state, value) {
      state.restaurant = value
    },
    setIsFetched(state, value) {
      state.isFetched = value
    },
    setSearchKeyword(state, value) {
      state.searchKeyword = value
    },
    setType(state, value) {
      state.type = value
    },
  },
  actions: {
    setSearchKeyword(context, keyword) {
      context.commit('setSearchKeyword', keyword)
      context.dispatch('fetchRestaurants')
    },
    setType(context, type) {
      context.commit('setType', type)
      context.dispatch('fetchRestaurants')
    },
    fetchRestaurants(context) {
      axios.get(`/restaurants/?types__code=${context.state.type}&search=${context.state.searchKeyword}`)
        .then((response) => {
          context.commit('setRestaurants', response.data)
          context.commit('setIsFetched', true)
        })
    },
    fetchRestaurant(context, id) {
      axios.get(`/restaurants/${id}`)
        .then((response) => {
          context.commit('setRestaurant', response.data)
        })
    },
  },
}
