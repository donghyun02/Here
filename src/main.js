import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './pages/Index.vue'
import Reservation from './pages/Reservation.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/reservation', component: Reservation },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
