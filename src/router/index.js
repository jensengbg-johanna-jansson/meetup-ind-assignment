import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import Join from '../views/Join.vue'
import SearchEvent from '../views/SearchEvent.vue'
import Profile from '../views/Profile.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import NewReview from '../views/NewReview.vue'


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
    path: '/event/:eventId/newreview',
    name: 'NewReview',
    component: NewReview
  },
  {
    path: '/profile/:userId',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  routes
})

export default router
