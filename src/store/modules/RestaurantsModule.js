import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export default {
    namespaced: true,
    state: () => ({
        isFetched: false,
        restaurants: [],
    }),
    mutations: {
        setRestaurants(state, value) {
            state.restaurants = value
        },
        setIsFetched(state, value) {
            state.isFetched = value
        },
    },
    actions: {
        fetchRestaurants(context) {
            axios.get('/restaurants')
                .then((response) => {
                    context.commit('setRestaurants', response.data)
                    context.commit('setIsFetched', true)
                })
        }
    },
    getters: {

    },
}