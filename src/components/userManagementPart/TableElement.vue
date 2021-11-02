<template>
  <div>
    <div v-if="preloader"  >
      <Preloader />
    </div>
    <div
        v-else
        v-for="(user, index) in allUsers"
        :key="user.userDTO.id"
        class="color user_management_table_section"
    >
      <div class="table_block">
        <div
            class="user_management_table_element waves-effect waves-light"
        >
          <div class="user_management_table_element_content item1 ">
            <div class="text_element">
              {{ user.userDTO.discordUsername }}
            </div>
          </div>
          <div class="user_management_table_element_content item5">
            <div
                class="text_element"
                :class="user.roleStyle"
            >
              {{ user.licenceTypeDTO.role }}
            </div>
            <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
          </div>
          <div class="user_management_table_element_content item2 "
               @click="INPUT_CHANGE_LICENCE(index)"
          >
            <div class="text_element">
              {{ user.licenceTypeDTO.renewalPrice}}
              <img class="ruble_img" src="../../assets/photo/icons/ruble.png" alt="">
              <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
            </div>
          </div>
          <div class="user_management_table_element_content item3">
            <div class="text_element">
              {{ user.licenceDTO.licenceKey }}
            </div>
          </div>
          <div class="user_management_table_element_content item2"
               @click="INPUT_CHANGE_RENEWAL_DATE(index)"
          >
            <div
                class="text_element"
            >
              {{ user.licenceDTO.renewalDate}}
              <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
            </div>
          </div>
          <div class="user_management_table_element_content item4">
            <div
                class="text_element"
                :class="user.keyBindStyle"
            >
              {{ user.licenceDTO.keyBind}}
            </div>
          </div>
          <div class="user_management_table_element_content" >
            <div class="item6">
              <div
                  :class="user.cartBindStyle"
              >
                {{ user.billingDTO.cartBind }}
              </div>
            </div>
            <div
                @click="HANDLE_CLICK(index)"
                :class="{rotate: user.flag}"
            >
              <img  class="arrow"
                    src="../../assets/photo/icons/arrow.png" alt="">
            </div>
          </div>
        </div>
        <div
            class="input_section"
        >
          <inputField
              :id="index"
              :inputFlagRenewal="user.inputFlagRenewal"
              :inputFlagLicence="user.inputFlagLicence"
              v-if="(user.inputFlagRenewal) || (user.inputFlagLicence)"
          />
        </div>
      </div>
      <div
          v-show="user.flag"
          class="element_content_show_container"
      >
        <div class="element_content_show">
          <div class="element_content_show_parameter">
            <div class="text_element">Discord id: </div>
            <div class="text_show">
              {{user.userDTO.discordId}}
            </div>
            <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">Email: </div>
            <div class="text_show">
              {{user.userDTO.discordEmail}}
            </div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">Creation date:</div>
            <div class="text_show">
              {{user.userDTO.creationDate}}
            </div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">Payment id: </div>
            <div class="text_show">
              {{user.billingDTO.paymentId}}
            </div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">CartDate: </div>
            <div class="text_show">
              {{user.billingDTO.cartDate}}
            </div>
          </div>
          <div class="element_content_show_parameter">
            <div class="text_element">CartEnding: </div>
            <div class="text_show">
              {{user.billingDTO.cartEnding}}
            </div>
          </div>
        </div>
        <div class="element_content_show_container button">
          <button class="waves-effect waves-light btn"
                  @click="KICK_USER(user.userDTO.id)"
                  @mouseover="CHANGE_NAME(index)"
                  @mouseleave="CHANGE_NAME_RETURN(index)"
          >
            <div class="text_element"
            >
              {{user.kickUserText}}
            </div>
          </button>
          <button class="waves-effect waves-light btn "
                  @click="FREE_MONTH(index)"
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
import inputField from '../inputField'
export default {
name: "TableElement",
  components: {
    inputField
  },
  computed:{
    ...mapGetters(
        'userManagement',['allUsers','preloader'],
    )
  },
  methods:{
    ...mapActions('userManagement',
        ['getUsers',
          'HANDLE_CLICK',
          'FREE_MONTH',
          'KICK_USER',
          'CHANGE_NAME',
          'CHANGE_NAME_RETURN',
          'INPUT_CHANGE_RENEWAL_DATE',
          'INPUT_CHANGE_LICENCE'
        ]),
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
  margin-left: 5px;
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
.item6{
  width: 126px;
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
.arrow{
  margin: 0 12px 0 12px;
  width: 12px;
  height: 12px;
  transform: rotate(-90deg);
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
.waves-effect{
  background: #161E29;
  transition-duration: 10s;
}
.rotate{
  transform: rotate(90deg);
}
.table_block{
  display: flex;
  flex-direction: column;
}
.input_section{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>