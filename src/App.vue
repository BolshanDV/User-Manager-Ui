<template>
  <div id="app" class="app">
   <component :is="layout">
     <router-view/>
   </component>
  </div>
</template>

<script>
import Layout from "@/layouts/Layout";
import {mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    layout(){
      return'layout'
    }
  },
  components:{
    Layout
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
