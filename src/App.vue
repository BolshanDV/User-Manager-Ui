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

<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import "assets/css/transitions/transition.css";
@import "assets/css/colorRoles.css";
@import "assets/css/fonts/font.css";
@import "assets/css/colums.css";
@import "assets/css/table.css";
</style>
