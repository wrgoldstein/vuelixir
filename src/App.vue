<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <block/>
  </div>
</template>

<script>
import Block from './components/Block.vue'

export default {
  computed: {
    appName(){ 
      return this.$store.state.app.appName 
    }
  },
  components: {
    'block': Block
  }
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}
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