import Vue from 'vue'
import Vuex from 'vuex'

import RestaurantsModule from '@/store/modules/RestaurantsModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        RestaurantsModule,
    },
})
