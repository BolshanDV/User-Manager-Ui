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
export default {
name: "ManagingDrops",
  components:{
    creatingDrop,
    dropAnalytics,
    tableManagementDrop
  },
}
</script>

<style scoped>
.main_section{
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
}
.first_section{
  width: 40%;
  margin-right: 20px;
}
.second_section{
  background: #0D121A;
  border-radius: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 80vh;
}
.analytics{
  background: #0D121A;
  border-radius: 10px;
  padding: 20px 15px;
}
input{
  color: #C4C4C4;
}
</style>
