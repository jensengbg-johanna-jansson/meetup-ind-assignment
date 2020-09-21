import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import Join from '../views/Join.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:eventId',
    name: 'Event',
    component: Event
  },
  {
    path: '/event/:eventId/join',
    name: 'Join',
    component: Join
  }
]

const router = new VueRouter({
  routes
})

export default router
