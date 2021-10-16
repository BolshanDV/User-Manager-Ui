<template>
  <div class="user_management_flex">
    <p class="head">Управление пользователями</p>
    <div class="user_management_table">
      <TitleCategory class="user_management_table_element" />
      <div
          v-for="(user, index) in users"
          :key="user.id"
          class="user_management_table_section color"
      >
        <div
            @click="handleClick(index)"
            class="user_management_table_element"
        >
          <div class="user_management_table_element_content item1 "><p>{{ user.discordUsername }}</p></div>
          <div class="user_management_table_element_content item1"><p>{{ user.licenceTypeDTO.role }}</p></div>
          <div class="user_management_table_element_content item2 "><p>{{ user.licenceTypeDTO.renewalPrice }}</p></div>
          <div class="user_management_table_element_content item3"><p>{{ user.licenceDTO.licenceKey }}</p></div>
          <div class="user_management_table_element_content item1"><p>{{ user.licenceDTO.renewalDate }}</p></div>
          <div class="user_management_table_element_content item2"><p>{{ user.licenceDTO.keyBind }}</p></div>
<!--        <div class="user_management_table_element_content item1"><p>Succesful</p></div>-->
        <div class="user_management_table_element_content item2"><p>{{ user.billingDTO.cartBind }}</p></div>
        </div>
        <div
            v-show="user.flag"
            class="element_content_show_container"
        >
          <div class="element_content_show">
            <div class="element_content_show_parameter">
              <p>Email: </p>
              <p class="text_show">{{user.discordEmail}}</p>
            </div>
            <div class="element_content_show_parameter">
              <p>Creation date:</p>
              <p class="text_show">{{user.creationDate}}</p>
            </div>
            <div class="element_content_show_parameter">
              <p>Payment id: </p>
              <p class="text_show">{{user.billingDTO.paymentId}}</p>
            </div>
            <div class="element_content_show_parameter">
              <p>CartDate: </p>
              <p class="text_show">{{user.billingDTO.cartDate}}</p>
            </div>
            <div class="element_content_show_parameter">
              <p>CartEnding: </p>
              <p class="text_show">{{user.billingDTO.cartEnding}}</p>
            </div>
          </div>
          <div class="element_content_show_container button">
            <button class="waves-effect waves-light btn"><p>Kick User</p></button>
            <button class="waves-effect waves-light btn"><p>Add Free Month</p></button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TitleCategory from "./TitleCategory";

export default {
  name: "UserManagement",
  components:{
    TitleCategory
  },
  data: () => ({
    users: null,
  }),
  beforeMount() {
    (async () => {
      await axios
          .get('http://localhost:8080/api/v1/users/details')
          .then(resObj => (this.users = resObj.data))
          .then(() => {
            for ( const user of this.users) {
              this.$set(user, 'flag', false)
              if(user.billingDTO.cartEnding === null){
                user.billingDTO.cartEnding = "empty"
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
    })();
  },
  methods: {
     handleClick(id) {
       this.users[id].flag = !this.users[id].flag;
    },


  },
}
</script>

<style scoped>
.user_management_flex{
  margin: 0 2vh 5vh 2vh;
  background: #0D121A;
  border-radius: 10px;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: auto;
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
  padding: 0 1% 1% 1%;
  min-width: 500px;
  width: auto;
}
.user_management_table_element{
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  margin: 0.5vh;
  width: auto;
}
.user_management_table_element_content{
  height: 100%;
  width: 16vh;
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
  width: 100px;
}
.item2{
  width: 45px;
}
.item3{
  width: 180px;
}
.user_management_table_section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5vh 1vh 0.5vh 1vh;
}
.element_content_show{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2vh 0 2vh;
  width: 65%;
}
.element_content_show_parameter{
  margin-right:2vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.text_show{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;

  color: #C4C4C4;
  margin-left: 10px;
}
.element_content_show_container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom:1vh ;
}
.btn{
  text-align: center;
  height: 40px;
  margin-left: 3vh;
}
.waves-effect{
  background: #1F2A39;
  border-radius: 3px;
}
.button{
  align-items: flex-end;
  justify-content: flex-end;
}
</style>