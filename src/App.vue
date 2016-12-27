<template>
  <div>
    {{ hoge }}
  </div>
</template>

<script>
import Store from './vuex/store'
import { TEST_ACTION } from './vuex/action-types'

export default {
  store: Store,
  name: 'app',
  data () {
    return {
      hoge: 'hello'
    }
  },
  components: {
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
