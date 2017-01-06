// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from './container/Page1'
import store from './vuex/store'
import VueMaterial from 'vue-material'

Vue.use(VueRouter)
Vue.use(VueMaterial)

var router = new VueRouter({
  routes: [
    { path: '/page1', component: Page1 }
  ]
})

new Vue({
  store,
  router,
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}).$mount('#app')
