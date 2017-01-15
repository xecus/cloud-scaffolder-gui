<template>
  <div>
    <md-button class="md-primary" @click="doAuth">認証</md-button>
    <md-button class="md-primary" @click="sendCommand()">コマンド送信</md-button>
    <md-button class="md-primary" @click="clear">Clear</md-button>

    <br>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>#</md-table-head>
          <md-table-head>Timestamp</md-table-head>
          <md-table-head>Message</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(recvLine, index) in logs">
          <md-table-cell>
            --
          </md-table-cell>
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
import Store from '../vuex/store'
import VueSocketio from 'vue-socket.io'
import _ from 'lodash'
Vue.use(VueSocketio, process.env.WS_HOST)
export default {
  name: 'page3',
  store: Store,
  data: () => {
    return {
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
  computed: {
    logs () {
      return _.slice(_.reverse(this.recvLines), 0, 5)
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    doAuth () {
      let val = {
        token: this.$store.state.user && this.$store.state.user.token
      }
      this.$socket.emit('authRequest', JSON.stringify(val))
    },
    sendCommand () {
      this.$socket.emit('control', 'Hello')
    },
    clear () {
      this.recvLines = []
    }
  }
}
</script>

<style>
</style>
