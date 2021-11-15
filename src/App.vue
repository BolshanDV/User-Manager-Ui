<template>
  <div id="app" class="app">
   <component :is="layout">
     <router-view/>
   </component>
  </div>
</template>

<script>
import mainLayout from "./layouts/Layout";
import emptyLayout from "./layouts/emptyLayout";
import {mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    layout(){
      console.log(this.$route.meta)
      return (this.$route.meta.layout) + 'Layout'
    }
  },
  components:{
    mainLayout,
    emptyLayout
  },
  methods: {
    ...mapActions('userManagement', ['getUsers'])
  },
  created() {
    this.getUsers()
  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
</style>
