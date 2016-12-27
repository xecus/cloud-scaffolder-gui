<template>
  <div>
    <alert type="success">
        ...
    </alert>
  </div>
</template>

<script>
import Store from '../vuex/store'
import { TEST_ACTION } from '../vuex/action-types'
import { alert } from 'vue-strap'

export default {
  store: Store,
  name: 'page1',
  components: {
    alert
  },
  created () {
    console.log('Ready!!')
    this.$store.dispatch(TEST_ACTION, 100).then((response) => {
      console.log('Test...[' + response + ']')
    })
  }
}
</script>

<style>
</style>
