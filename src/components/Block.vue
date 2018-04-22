// Define a new component called button-counter
<template>
	<div class="block">
    <input v-model="sql">
		<button @click="updateSQL('hello there my friends')">Click me to update sql</button>	
		<code> {{sql}} </code>
	</div>
</template>
<script type="text/javascript">

import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
  	sql: {
        get () {
          console.log(this.$store.state.block)
          return this.$store.state.block.sql
        },
        set (value) {
          this.$store.commit('updateSQL', value)
        }
      }
  },
  methods: {
  	updateSQL(InputEvent) {
      console.log(InputEvent)
  		this.$store.dispatch('updateSQL', InputEvent.data)
  	}
  }
}
</script>

<style>
.block {
  margin-left: 10vw;
}
</style>