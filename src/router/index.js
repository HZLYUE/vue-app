import Vue from 'vue'
import VueRouter from 'vue-router'

// import Tv from '../views/Tv.vue'
// import Chat from '../views/Chat.vue'
// import Book from '../views/Book.vue'
// import TvDetails from '../views/TvDetails.vue'




Vue.use(VueRouter)

const routes = [
  {path:'/',component:()=> import('../views/Tv.vue')},
  {path:'/music',component:()=> import('../views/Music.vue')},
  {path:'/book',component:()=> import('../views/Book.vue')},
  {path:'/chat',component:()=> import('../views/Chat.vue')},
  {path:'/tvdetails/:id',component:()=> import('../views/TvDetails.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
