<template>
  <div>
    <div v-if="preloader"  >
      <Preloader />
    </div>
    <div
        v-else
        v-for="(user, index) in allUsers"
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
        <div class="user_management_table_element_content item1"><p>{{ user.licenceDTO.renewalDate}}</p></div>
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
          <button class="waves-effect waves-light btn">
            <p>Kick User</p>
          </button>
          <button class="waves-effect waves-light btn"
                  @click="freeMonth(index)"
          >
            <p>Add Free Month</p>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
name: "TableElement",
  computed:{
  ...mapGetters(
        'userManagement',['allUsers','preloader']

  )},
  methods:{
    ...mapActions('userManagement',['getUsers','HANDLE_CLICK','FREE_MONTH']),

    handleClick(id){
      this.HANDLE_CLICK(id)
    },

    freeMonth(id) {
      this.FREE_MONTH(id)
    }
  },

  beforeMount() {
    this.getUsers()
  },
}
</script>

<style scoped>
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
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  font-style: normal;

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