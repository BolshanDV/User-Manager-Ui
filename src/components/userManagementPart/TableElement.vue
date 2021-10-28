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
        <div class="user_management_table_element_content item1 ">
          <div class="text_element">{{ user.discordUsername }}</div>
        </div>
        <div class="user_management_table_element_content item5">
          <div
              class="text_element"
              :class="user.roleStyle"
          >{{ user.licenceTypeDTO.role }}</div>
        </div>
        <div class="user_management_table_element_content item2 ">
          <div class="text_element">{{ user.licenceTypeDTO.renewalPrice}}
            <img class="ruble_img" src="../../assets/photo/icons/ruble.png" alt="">
            <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
        </div>
        </div>
        <div class="user_management_table_element_content item3">
          <div class="text_element">{{ user.licenceDTO.licenceKey }}</div>
        </div>
        <div class="user_management_table_element_content item2">
          <div class="text_element">{{ user.licenceDTO.renewalDate}}</div>
          <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
        </div>
        <div class="user_management_table_element_content item4">
          <div
             class="text_element"
             :class="user.keyBindStyle">
            {{ user.licenceDTO.keyBind}}
          </div>
        </div>
        <div class="user_management_table_element_content item4">
          <div
              class="text_element"
              :class="user.cartBindStyle"
          >
            {{ user.billingDTO.cartBind }}</div>
        </div>
      </div>
      <div
          v-show="user.flag"
          class="element_content_show_container"
      >
        <div class="element_content_show">
          <div class="element_content_show_parameter">
            <div class="text_element">Email: </div>
            <div class="text_show">{{user.discordEmail}}</div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">Creation date:</div>
            <div class="text_show">{{user.creationDate}}</div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">Payment id: </div>
            <div class="text_show">{{user.billingDTO.paymentId}}</div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">CartDate: </div>
            <div class="text_show">{{user.billingDTO.cartDate}}</div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">CartEnding: </div>
            <div class="text_show">{{user.billingDTO.cartEnding}}</div>
          </div>
        </div>
        <div class="element_content_show_container button">
          <button class="waves-effect waves-light btn">
            <div class="text_element">Kick User</div>
          </button>
          <button class="waves-effect waves-light btn"
                  @click="freeMonth(index)"
          >
            <div class="text_element">Add Free Month</div>
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
    ...mapActions('userManagement',['getUsers','HANDLE_CLICK', 'FREE_MONTH']),

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
  height: 50px;
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
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1vh;
  min-height: 10px;
}
.text_element{
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  font-style: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}
.color{
  background-color: #161E29;
  border-radius: 3px;
}
.item1{
  width: 100px;
}
.item2{
  width: 120px;
}
.item3{
  width: 200px;
}
.item4{
  width: 87px ;
}
.item5{
  width: 84px;
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
  margin: 15px;
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
.ruble_img{
  width: 18px;
  height: 18px;
}
.pencil_img{
  margin-left: 10px;
  width: 15px;
  height: 15px;
}
.unbinded{
  color: #FF0000;
}
.binded{
  color: #2BD6A2;
}
.customer{
  color: #D45DE8;
}
.lifeTime{
  color: #F1A0FF;
}
.FF{
  color: #FF4343;
}
.developer{
  color: rgba(0,224,255,0.96)
}
.supportTeam{
  color: rgba(255,162,0,0.96);
}
.en{
  color: rgba(99,0,219,0.96);
}
.moderator{
  color: rgba(175,255,159,0.62);
}
</style>