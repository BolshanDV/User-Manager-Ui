<template>
  <div>
    <div v-if="preloader"  >
      <Preloader />
    </div>
    <transition-group name="slide-fade">
      <div
          v-show="!preloader"
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
<!--              <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">-->
            </div>
            <div class="user_management_table_element_content item2 "
                 @click="INPUT_CHANGE_LICENCE(user.userDTO.id)"
            >
              <div class="text_element">
                {{ user.licenceTypeDTO.renewalPrice}} ₽
                <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
              </div>
            </div>
            <div class="user_management_table_element_content item3">
              <div class="text_element">
                {{ user.licenceDTO.licenceKey }}
              </div>
            </div>
            <div class="user_management_table_element_content item2"
                 @click="INPUT_CHANGE_RENEWAL_DATE(user.userDTO.id)"
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
                    :id="user.userDTO.id"
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
<!--                <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">-->
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
              <div class="waves-effect waves-light btn1"
                      @click="KICK_USER(user.userDTO.id)"
                      @mouseover="CHANGE_NAME(index)"
                      @mouseleave="CHANGE_NAME_RETURN(index)"
              >
                <div class="text_element"
                >
                  {{user.kickUserText}}
                </div>
              </div>
              <div class="waves-effect waves-light btn1 "
                      @click="FREE_MONTH(index)"
              >
                <div class="text_element">Add Free Month</div>
              </div>
            </div>

          </div>
      </div>
    </transition-group>

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
        ['HANDLE_CLICK',
          'FREE_MONTH',
          'KICK_USER',
          'CHANGE_NAME',
          'CHANGE_NAME_RETURN',
          'INPUT_CHANGE_RENEWAL_DATE',
          'INPUT_CHANGE_LICENCE'
        ]),
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
  margin: 5px;
  /*width: auto;*/
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
  width: 120px;
}
.item2{
  width: 120px;
}
.item3{
  width: 220px;
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
  margin: 0 5px 10px 5px;
}
.element_content_show{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
  color: #C4C4C4;
  margin-left: 10px;
}
.element_content_show_container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1vh ;

}
.btn1{
  text-align: center;
  height: 40px;
  margin-left: 3vh;
  width: 190px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1F2A39;
}
.waves-effect{
  border-radius: 3px;
}
.button{
  align-items: flex-end;
  justify-content: flex-end;
}
.pencil_img{
  margin-left: 10px;
  width: 14px;
  height: 14px;
}
.arrow{
  margin: 0 12px 0 12px;
  width: 15px;
  height: 10px;
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
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.slide-fade-move {
  transition: transform 1.75s;
}

</style>