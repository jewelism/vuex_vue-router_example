<template>
  <div class="hello">
    <h1 @click="increase">H : {{ count }}</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { INCREASE_COUNT } from '../mutation_types'

export default {
  name: 'HelloWorld',
  data () {
    return {
      INCREASE_COUNT
    }
  },
  computed: {
    count () {
      return this.$store.state.counter.count
    }
  },
  methods: {
    ...mapMutations({
      increase: INCREASE_COUNT
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
