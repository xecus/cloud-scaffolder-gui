// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from './container/Page1'
import store from './vuex/store'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/page1', component: Page1 }
  ]
})

new Vue({
  store,
  router
}).$mount('#app')
