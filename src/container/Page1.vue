<template>
  <div>

    <md-avatar class="md-avatar-icon">
      <md-icon>home</md-icon>
    </md-avatar>

    <md-avatar class="md-avatar-icon md-primary">
      <md-icon>folder</md-icon>
    </md-avatar>

     <md-avatar class="md-avatar-icon md-accent">
      <md-icon>favorite</md-icon>
    </md-avatar>

    <md-avatar class="md-avatar-icon md-warn">
      <md-icon>notes</md-icon>
    </md-avatar>

  </div>
</template>

<script>
import Axios from 'axios'
import { TEST_ACTION } from '../vuex/action-types'

export default {
  name: 'page1',
  components: {
  },
  created () {
    console.log('process.env.DB_HOST=' + process.env.DB_HOST)
    console.log('Ready!!')
    Axios.get('http://tgr.tokyo')
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    this.$store.dispatch(TEST_ACTION, 100).then((response) => {
      console.log('Test...[' + response + ']')
    })
  }
}
</script>

<style>
</style>
