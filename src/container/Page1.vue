<template>
  <div>

<md-tabs>
  <md-tab id="movies" md-label="Movies">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="music" md-label="Music">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="books" md-label="Books">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>
</md-tabs>

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
