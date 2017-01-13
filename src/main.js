// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import VueMaterial from 'vue-material'

import LoginScreen from './container/LoginScreen'
import Page1 from './container/Page1'
import Page2 from './container/Page2'
import Page3 from './container/Page3'
import Page4 from './container/Page4'
import NotFound from './container/NotFound'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: [
    { path: '/', component: LoginScreen },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
    { path: '/page4', component: Page4 },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ]
})

new Vue({
  store,
  router,
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    toggleLeftSidenav () {
      if (!this.user) {
        return
      }
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}).$mount('#app')
