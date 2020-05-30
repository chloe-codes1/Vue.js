import Vue from 'vue'
import VueRouter from 'vue-router'

// step 1: import
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import HelloName from '../views/HelloName.vue'
import Ping from '../views/Ping.vue' 
import Pong from '../views/Pong.vue'

Vue.use(VueRouter)

  // Django 에서 urls.py 같은 것!
  const routes = [
    // step 2: 등록
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/hello/:name',
    name: '',
    component: HelloName
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping
  },
  {
    path: '/pong',
    name: 'Pong',
    component: Pong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
