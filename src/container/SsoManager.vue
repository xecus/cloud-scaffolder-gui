<template>
  <div>

    <md-dialog-prompt
      v-model="new_user_string"
      md-title="User Registration"
      md-ok-text="OK"
      md-cancel-text="Cancel"
      md-input-maxlength="256"
      md-input-placeholder="ID:Password"
      @close="onClose"
      ref="dialog_id">
    </md-dialog-prompt>

    <md-button class="md-primary md-raised" @click="new_user">
      <md-icon>add</md-icon>
      New User
    </md-button>

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
            <md-menu-item @click="enableUser(user, true)">
              <span>Enable</span>
              <md-icon>mood</md-icon>
            </md-menu-item>
            <md-menu-item @click="enableUser(user, false)">
              <span>Disable</span>
              <md-icon>mood_bad</md-icon>
            </md-menu-item>
            <md-menu-item disabled>
              <span>Edit</span>
              <md-icon>edit</md-icon>
            </md-menu-item>
            <md-menu-item @click="deleteUser(user)">
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
import Store from './../vuex/store'
export default {
  name: 'page4',
  store: Store,
  data: () => {
    return {
      new_user_string: '',
      users: []
    }
  },
  components: {
  },
  created () {
    this.loadUsers()
  },
  computed: {
    jwt () {
      let user = this.$store.state.user
      return user && user.token
    }
  },
  methods: {
    generateAxiosHeader () {
      return {
        headers: {
          'Authorization': 'Bearer ' + this.jwt,
          'Content-Type': 'application/json'
        }
      }
    },
    regUser (payload) {
      Axios.post(process.env.SSO_HOST + '/api/v1/users', payload, this.generateAxiosHeader())
      .then((response) => {
        this.loadUsers()
        console.log('Registerd Successfully')
      })
      .catch((error) => {
        console.log(error)
      })
    },
    loadUsers () {
      Axios.get(process.env.SSO_HOST + '/api/v1/users', this.generateAxiosHeader())
      .then((response) => {
        this.users = response.data
        console.log('Updated user list')
      })
      .catch((error) => {
        console.log(error)
      })
    },
    updateUser (userId, payload) {
      return Axios.put(process.env.SSO_HOST + '/api/v1/users/' + userId, payload,
      this.generateAxiosHeader()).then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    enableUser (user, stat) {
      user.enabled = stat
      this.updateUser(user.ID, user).then((response) => {
        this.loadUsers()
      })
    },
    deleteUser (user) {
      Axios.delete(process.env.SSO_HOST + '/api/v1/users/' + user.ID, this.generateAxiosHeader())
      .then((response) => {
        this.loadUsers()
      })
      .catch((error) => {
        console.log(error)
      })
    },
    new_user () {
      this.openDialog('dialog_id')
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onClose (res) {
      if (res === 'cancel') {
        return
      }
      let splitedString = this.new_user_string.split(':')
      let payload = {
        username: splitedString[0],
        password: splitedString[1],
        enabled: true
      }
      this.regUser(payload)
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
