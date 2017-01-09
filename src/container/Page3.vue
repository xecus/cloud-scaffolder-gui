<template>
  <div>
    <md-button class="md-primary" @click="aaa">Send</md-button>
    <md-button class="md-primary" @click="clear">Clear</md-button>

    <br>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Timestamp</md-table-head>
          <md-table-head>Message</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="recvLine in recvLines">
          <md-table-cell>
            {{ recvLine.timestamp }}
          </md-table-cell>
          <md-table-cell>
            {{ recvLine.message }}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>


  </div>
</template>

<script>
import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, 'http://25.37.37.128:37000')
export default {
  name: 'page3',

  data: () => {
    return {
      log: 'Here',
      recvLines: []
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
      val = JSON.parse(val)
      this.recvLines.push(val)
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    aaa () {
      let val = {
        cmd: 'Start'
      }
      this.$socket.emit('msg', JSON.stringify(val))
    },
    clear () {
      this.recvLines = []
    }
  }
}
</script>

<style>
</style>
