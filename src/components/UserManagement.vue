<template>
  <div class="user_management_flex">
    <p class="head">Управление пользователями</p>
    <div class="user_management_table">
      <div class="user_management_table_element"

      >
        <div
            v-for="title in titles"
            :key="title.category"
            class="user_management_table_element_content">
          <p>{{ title.category }}</p>
        </div>
      </div>
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserManagement",
  data: () =>({
    titles:[
      {category:'Discord tag'},
      {category:'Role'},
      {category:'License type'},
      {category:'License key'},
      {category:'Renewal date'},
      {category:'Key bind'},
      {category:'Payment status'},
      {category:'Card bind'},
    ],
    info: null,
  }),
  mounted() {
    axios
        .get('http://localhost:8080/api/v1/users/details/')
        .then(response => (this.info = response));
  }
}
</script>

<style scoped>
.user_management_flex{
  margin: 7vh 2vh 5vh 2vh;
  min-height: 800px;
  min-width: 800px;
  background: #0D121A;
  border-radius: 10px;
  padding: 2vh;
}
.head{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.user_management_table{
  background: #101722;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  /*padding: 1% 1% 0 1%;*/
  min-width: 100vh;
}
.user_management_table_element{
  width: 100%;
  height: 5vh;
  margin: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
}
.user_management_table_element_content{
  height: 100%;
  width: 16vh;
  /*background-color: #6E7F99;*/
  /*margin-right: 2vh;*/
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  padding-left: 1vh;
}
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.user_management_table_element_clr{
  background-color: #161E29;
}
</style>