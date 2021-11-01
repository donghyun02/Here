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
    },
    actions: {
        fetchRestaurants(context, search = '') {
            axios.get(`/restaurants/?search=${search}`)
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
