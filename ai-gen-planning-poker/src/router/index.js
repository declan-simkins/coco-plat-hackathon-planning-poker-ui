import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import RoomView from '../views/RoomView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/room/:id', component: RoomView },
  ],
})
