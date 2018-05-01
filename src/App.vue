<template>
  <div id="app">
    <router-view/>
    <div @click="decrease">
      A : {{ count }}
    </div>
  </div>
</template>

<script>
import { DECREASE_COUNT } from './mutation_types'
import { callDecreaseCount } from './actions'

export default {
  name: 'App',
  data () {
    return {
      DECREASE_COUNT
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    decrease () {
      callDecreaseCount()
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
