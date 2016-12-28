<template>
  <div>
    <alert type="success">
        ...
    </alert>
  </div>
</template>

<script>
import Axios from 'axios'
import { TEST_ACTION } from '../vuex/action-types'
import { alert } from 'vue-strap'

export default {
  name: 'page1',
  components: {
    alert
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
