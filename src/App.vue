<template>
  <div id="app" class="app">
   <component :is="layout">
     <router-view/>
   </component>
  </div>
</template>

<script>
import Layout from "@/layouts/Layout";
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
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
</style>
