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
  head: {
    link: [
      {
        rel: "icon",
        href: ('../public/logo.ico')
      },
    ]
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty') + 'Layout'
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
  @import "assets/style/transitions/transition.css";
  @import "assets/style/colorRoles.css";
  @import "assets/style/fonts/font.css";
  @import "assets/style/universalTable/colums.css";
  @import "assets/style/universalTable/table.css";
  @import "assets/style/dateSelectionStyle.css";

</style>
