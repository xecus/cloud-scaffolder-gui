<template>
  <div>

  <vue-toastr ref="toastr"></vue-toastr>

  <h1 class="login-title">Login</h1>

  <div class="login-form">

  <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
  <label>Username</label>
  <md-input v-model="username" required></md-input>
  </md-input-container>
  <md-input-container md-has-password>
  <label>Password</label>
  <md-input v-model="password" type="password" required></md-input>
  </md-input-container>
  </form>

  <md-button class="md-raised md-primary login-button" @click="do_login">Login</md-button>

  </div>

  <div class="footer">
  <a href="#" target="_blank"><img src="/static/taguro.jpg"></a>
  <p>Github <a href="#" target="_blank">https://github.com/xecus/cloud-scaffolder-gui</a></p>
  </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Store from './../vuex/store'
import { SET_USER } from './../vuex/mutation-types'
import Axios from 'axios'
import Toastr from 'vue-toastr'
import { waitMillisecondsAsync } from '../util'
import JwtDecode from 'jwt-decode'
import Moment from 'moment'
Vue.component('vue-toastr', Toastr)
const routeAfterLoginSuccessflly = 'page1'
export default {
  name: 'default',
  store: Store,
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    if (this.$store.state.user) {
      this.$router.push(routeAfterLoginSuccessflly)
    }
  },
  methods: {
    do_login () {
      Axios.post(process.env.SSO_HOST + '/api/v1/auth', {
        username: this.username,
        password: this.password
      })
      .then((response) => {
        let decoded = JwtDecode(response.data.token)
        let user = {
          token: response.data.token,
          id: decoded.id,
          exp: Moment.unix(decoded.exp),
          oring_iat: Moment.unix(decoded.orig_iat)
        }
        this.$store.commit(SET_USER, user)
        this.$refs.toastr.s('Success')
        waitMillisecondsAsync(1000).then(() => {
          this.$router.push(routeAfterLoginSuccessflly)
        })
      })
      .catch((error) => {
        console.log(error)
        this.$refs.toastr.e('Failed')
      })
    }
  }
}
</script>

<style>
.login-title { 
  text-align:center;
  margin-top: 4em;
  color: #636363;
}
.login-form {
  width: 380px;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

.login-button {
  width: 100%;
}

.footer {
  text-align: center;
}

.footer a {
  color: #4a89dc;
  text-decoration: none;
  transition: all .2s ease;
}

.footer a:hover {
  color: #666;
  text-decoration: underline;
}

.footer img {
  width: 80px;
  transition: all .2s ease;
}
.footer img:hover {
  opacity: .83;
}

.footer img:focus , footer a:focus {
  outline: none;
}
</style>
