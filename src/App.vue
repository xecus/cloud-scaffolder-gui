<template>
  <div>
    {{ hoge }}
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      hoge: 'Hello'
    }
  },
  components: {
    // Hello
  }
}
</script>

<style>
</style>
