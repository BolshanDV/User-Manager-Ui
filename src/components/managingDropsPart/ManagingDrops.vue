<template>
  <div class="main_section">
    <div class="first_section">
      <creatingDrop/>

      <div class="analytics">
        <dropAnalytics/>
      </div>
    </div>
    <div class="second_section">
      <div v-if="preloader">
        <Preloader />
      </div>
      <transition name="fade">
      <tableManagementDrop
          v-if="!preloader"
      />
      </transition>
    </div>

  </div>
</template>

<script>
import creatingDrop from './creatingDrop'
import dropAnalytics from './dropAnalytics'
import tableManagementDrop from './tableManagementDrop'
import {mapActions, mapGetters} from 'vuex'
export default {
name: "ManagingDrops",
  components:{
    creatingDrop,
    dropAnalytics,
    tableManagementDrop
  },
  methods:{
    ...mapActions('managingDropsStore', ['CALL_FUNC_FOR_DROP_ANALYTICS'])
  },
  computed: {
    ...mapGetters('userManagement',['preloader']),
  },
  beforeMount() {
    this.CALL_FUNC_FOR_DROP_ANALYTICS()
  }
}
</script>

<style scoped>
.main_section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
}
.first_section{
  margin-right: 20px;
  max-width: 410px;
}
.second_section{
  width: 55%;
  min-width: 670px;
  display: flex;
  flex-direction: column;
}
.analytics{
  background: #0D121A;
  border-radius: 10px;
  padding: 15px 5px;
  min-width: 410px;
}
input{
  color: #C4C4C4;
}
</style>
