import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '@/views/todo/index.vue'

/* function _import(view) {
  return () => import(`@/views/${view}.vue`)
}  */

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})