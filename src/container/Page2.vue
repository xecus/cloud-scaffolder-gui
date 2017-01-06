<template>
  <div>
    <example-box card-title="Default">
      <div slot="demo">
        AAA
      </div>
      <div slot="code">
        BBBB
      </div>
    </example-box>
  </div>
</template>

<script>
import ExampleBox from '../components/ExampleBox'
export default {
  name: 'page2',
  components: {
    ExampleBox
  }
}
</script>

<style>
</style>
