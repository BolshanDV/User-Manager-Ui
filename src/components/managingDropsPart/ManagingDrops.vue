<template>
  <div class="main_section">
    <div class="first_section">
      <creatingDrop/>

      <div class="analytics">
        <dropAnalytics/>
      </div>
    </div>
    <div class="second_section">
      <tableManagementDrop/>
    </div>

  </div>
</template>

<script>
import creatingDrop from './creatingDrop'
import dropAnalytics from './dropAnalytics'
import tableManagementDrop from './tableManagementDrop'
import {mapActions} from 'vuex'
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
  beforeMount() {
    this.CALL_FUNC_FOR_DROP_ANALYTICS()
  }
}
</script>

<style scoped>
.main_section{
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
}
.first_section{
  /*width: 40%;*/
  margin-right: 20px;
  min-width: 400px;
}
.second_section{
  width: 60%;
  display: flex;
  flex-direction: column;
}
.analytics{
  background: #0D121A;
  border-radius: 10px;
  padding: 15px 10px;
  min-width: 400px;
}
input{
  color: #C4C4C4;
}
</style>
