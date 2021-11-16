<template>
  <div id="app" class="app">
   <component :is="layout">
     <router-view/>
   </component>
  </div>
</template>

<script>
import mainLayout from "./layouts/layout";
import emptyLayout from "./layouts/emptyLayout";
import {mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    layout(){
      const component = (this.$route.meta.layout || 'empty') + 'Layout'
      return component
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.app{
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
</style>
