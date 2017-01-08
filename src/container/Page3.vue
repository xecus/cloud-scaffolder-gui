<template>
  <div>
    <md-button class="md-primary" @click="aaa">Primary</md-button>

    <br>

    {{ log }}

  </div>
</template>

<script>
import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, 'http://25.37.37.128:38000')
export default {
  name: 'page3',

  data: () => {
    return {
      log: 'Here'
    }
  },

  sockets: {
    connect () {
      console.log('socket connected')
    },
    disconnect () {
      console.log('socket disconnected')
    },
    hoge (val) {
      this.log += val + '<br>'
      console.log('[' + val + ']')
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    aaa () {
      let val = {
        aaa: 'Hello'
      }
      this.$socket.emit('msg', JSON.stringify(val))
    }
  }
}
</script>

<style>
</style>
