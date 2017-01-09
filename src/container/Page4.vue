<template>
  <div>

    <md-card class="user-card" v-for="user in users">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ user.username }}</div>
          <div class="md-subhead">user</div>
        </md-card-header-text>
        <md-menu md-size="4" md-direction="bottom left">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>
          <md-menu-content>
            <md-menu-item disabled>
              <span>Enable</span>
              <md-icon>mood</md-icon>
            </md-menu-item>
            <md-menu-item disabled>
              <span>Disable</span>
              <md-icon>mood_bad</md-icon>
            </md-menu-item>
            <md-menu-item disabled>
              <span>Edit</span>
              <md-icon>edit</md-icon>
            </md-menu-item>
            <md-menu-item @click="deleteUser(user.ID)">
              <span>Delete</span>
              <md-icon>delete</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>
      <md-card-content>

         <md-table>
           <md-table-header>
             <md-table-row>
               <md-table-head>key</md-table-head>
               <md-table-head>value</md-table-head>
             </md-table-row>
           </md-table-header>
         
           <md-table-body>
             <md-table-row v-for="(v, k) in user">
               <md-table-cell>{{ k }}</md-table-cell>
               <md-table-cell>{{ v }}</md-table-cell>
             </md-table-row>
           </md-table-body>
         </md-table>

      </md-card-content>
    </md-card>

  </div>
</template>

<script>
import Axios from 'axios'
import _ from 'lodash'
const SSO_HOST = 'http://25.37.37.128:38000'
export default {
  name: 'page4',
  data: () => {
    return {
      users: []
    }
  },
  components: {
  },
  created () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      Axios.get(SSO_HOST + '/api/v1/users')
      .then((response) => {
        this.users = _.map(response.data, (data) => {
          return _.omit(data, ['DeletedAt', 'password'])
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteUser (userId) {
      Axios.delete(SSO_HOST + '/api/v1/users/' + userId)
      .then((response) => {
        this.users = _.map(response.data, (data) => {
          return _.omit(data, ['DeletedAt', 'password'])
        })
        this.loadUsers()
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.user-card {
	#width: 380px;
	margin-top: 4em;
	margin-left: 4em;
	margin-right: 4em;
	margin-bottom: 4em;
}
</style>
