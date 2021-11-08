import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './pages/Index.vue'
import Reservation from './pages/Reservation.vue'
import Done from './pages/Done.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from '@/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: '/', component: Index },
  { path: '/reservation/:id', component: Reservation },
  { path: '/done', component: Done },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
