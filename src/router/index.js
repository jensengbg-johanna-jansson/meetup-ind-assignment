import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import Join from '../views/Join.vue'
import SearchEvent from '../views/SearchEvent.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchEvent
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
  },
  {
    path: '/profile/:userId',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
