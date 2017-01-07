<template>
  <div>

    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>
      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
        <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <example-box card-title="Default">
      <div slot="demo">

      <md-button class="md-primary md-raised" id="custom" @click="openDialog('dialog1')">Custom</md-button>

      <div class="field-group">

      <div>
        <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>
      </div>

      <div>
        <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>
      </div>

      <div>
        <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>
      </div>

      <div>
        <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>
      </div>

        <md-checkbox id="my-test4" name="my-test4" v-model="checkbox">Regular Checkbox</md-checkbox>
        <md-checkbox id="my-test5" name="my-test5" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>
        <md-checkbox id="my-test6" name="my-test6" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>
        <md-checkbox id="my-test7" name="my-test7" v-model="checkbox" disabled>Disabled</md-checkbox>

        <md-input-container>
          <label for="movie">Movie</label>
          <md-select name="movie" id="movie" v-model="movie">
            <md-option value="fight_club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather_ii">Godfather II</md-option>
            <md-option value="godfather_iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp_fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-input-container>
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container class="md-input-invalid">
            <label>Initial value</label>
            <md-input v-model="initialValue" required></md-input>
            <span class="md-error">Validation message</span>
         </md-input-container>
       </form>
      </div>

      </div>
      <div slot="code">
      </div>
    </example-box>


<md-table v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head>Dessert (100g serving)</md-table-head>
      <md-table-head md-numeric>Calories (g)</md-table-head>
      <md-table-head md-numeric>Fat (g)</md-table-head>
      <md-table-head md-numeric>Carbs (g)</md-table-head>
      <md-table-head md-numeric>Protein (g)</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in 5" :key="index">
      <md-table-cell>Dessert Name</md-table-cell>
      <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>

  </div>
</template>

<script>
import ExampleBox from '../components/ExampleBox'
export default {
  name: 'page2',
  data () {
    return {
      movie: 'godfellas',
      checked0: false,
      checked1: false,
      checked2: true,
      checked3: false,
      checkbox: false,
      initialValue: 'Helllllllo'
    }
  },
  components: {
    ExampleBox
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>

<style>
</style>
