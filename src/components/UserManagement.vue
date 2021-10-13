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
      <div
          v-for="user in users"
          :key="user.data.id"
          class="user_management_table_element color">
        <div class="user_management_table_element_content item1"><p>{{ user.data['common-data'].discordName }}</p></div>
        <div class="user_management_table_element_content item1"><p>{{ user.data['common-data'].Role }}</p></div>
        <div class="user_management_table_element_content item2"><p>{{ user.data['renew-data'].renewPrice }}</p></div>
        <div class="user_management_table_element_content item3"><p>{{ user.data['licence-data'].licenceKey }}</p></div>
        <div class="user_management_table_element_content item3"><p>{{ user.data['renew-data'].renewDate }}</p></div>
        <div class="user_management_table_element_content item2"><p>{{ user.data['licence-data'].keyBind }}</p></div>
        <div class="user_management_table_element_content item1"><p>Succesful</p></div>
        <div class="user_management_table_element_content item2"><p>{{ user.data['billing-data'].cartBind }}</p></div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserManagement",
  data: () => ({
    titles: [
      {category: 'Discord tag', class:'user_management_table_element_content item1'},
      {category: 'Role', class:'user_management_table_element_content item1'},
      {category: 'License type', class:'user_management_table_element_content item2'},
      {category: 'License key'},
      {category: 'Renewal date'},
      {category: 'Key bind'},
      {category: 'Payment status'},
      {category: 'Card bind'},
    ],
    users: null,
  }),
  beforeMount() {
    (async () => {
      await axios
          .get('http://localhost:8080/api/v1/users/details/')
          .then(resObj => (this.users = resObj.data))
          .catch(error => {
            console.log(error);
          });
    })();
  },
  methods: {

  },
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
  padding: 0 1% 1% 1%;
  min-width: 500px;
}
.user_management_table_element{
  /*width: 100%;*/
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  margin: 0.5vh;

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
  margin-left: 1vh;
  min-height: 10px;
}
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.color{
  background-color: #161E29;
  border-radius: 3px;

}
.item1{
  flex-basis: 12vh;
  min-width: 100px;
}
.item2{
  flex-basis: 5vh;
  min-width: 60px;
}
.item3{
  flex-basis: 20vh;
  min-width: 200px;
}
</style>