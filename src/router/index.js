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
import page404 from '../views/404.vue'
import getUser from '../js/userDataFunctions.js'

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
    component: Profile,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = getUser.IS_AUTH();
      if(!isAuthenticated) next({ name: 'SignIn' })
      else next()
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = getUser.IS_AUTH();
      if(isAuthenticated) next({ name: '404' })
      else next()
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = getUser.IS_AUTH();
      if(isAuthenticated) next({ name: '404' })
      else next()
    }
  },
  {
    path: '/404',
    name: '404',
    component: page404
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
