<template>
  <div>

  <h1 class="login-title">Login</h1>

  <div class="login-form">

  <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
  <label>Username</label>
  <md-input v-model="username"></md-input>
  </md-input-container>
  <md-input-container md-has-password>
  <label>Password</label>
  <md-input type="password"></md-input>
  </md-input-container>
  </form>

  <md-button class="md-raised md-primary login-button" @click="aaa">Login</md-button>

  </div>

  <div class="footer">
  <a href="#" target="_blank"><img src="/static/logo.png"></a>
  <p>You Gotta Love <a href="#" target="_blank">Vue.js</a></p>
  </div>

  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'default',
  data: () => {
    return {
      username: 'admin',
      password: 'password'
    }
  },
  methods: {
    aaa () {
      Axios.post('http://25.37.37.128:37000/api/login', {
        username: 'admin',
        password: 'admin'
      })
      .then(function (response) {
        console.log(response.data.token)
      })
      .catch(function (error) {
        console.log(error)
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
