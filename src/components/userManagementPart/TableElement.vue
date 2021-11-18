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
            <div class="user_management_table_element_content item2">
              <div
                  class="text_element"
                  :class="user.roleStyle"
              >
                {{ user.licenceTypeDTO.role }}
              </div>
            </div>
            <div class="user_management_table_element_content item3 "
                 @click="INPUT_CHANGE_LICENCE(user.userDTO.id)"
            >
              <div class="text_element">
                {{ user.licenceTypeDTO.renewalPrice}} ₽
                <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
              </div>
            </div>
            <div class="user_management_table_element_content item4">
              <div class="text_element">
                {{ user.licenceDTO.licenceKey }}
              </div>
            </div>
            <div class="user_management_table_element_content item5"
                 @click="INPUT_CHANGE_RENEWAL_DATE(user.userDTO.id)"
            >
              <div
                  class="text_element"
              >
                {{ user.licenceDTO.renewalDate}}
                <img class="pencil_img" src="../../assets/photo/icons/pencil.png" alt="">
              </div>
            </div>
            <div class="user_management_table_element_content item6">
              <div
                  class="text_element"
                  :class="user.keyBindStyle"
              >
                {{ user.licenceDTO.keyBind}}
              </div>
            </div>
            <div class="user_management_table_element_content item7">
              <div
                  :data-tooltip=user.paymentDTO.comment
                  class="text_element"
                  :class="user.paymentDTO.paymentStateStyle"
              >
                <div>
                  <div>
                    {{ user.paymentDTO.paymentState}}
                    {{user.paymentDTO.paymentStateFailed}}
                  </div>
                </div>
                <div
                    v-if="user.paymentDTO.paymentState !== 'Successful'"
                class="warning_img"
                >
                  <img src="../../assets/photo/icons/warning.png" alt="warning" class="warning">
                </div>
              </div>
            </div>
            <div class="user_management_table_element_content" >
              <div class="item8">
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
.color{
  background-color: #161E29;
  border-radius: 3px;
}
.element_content_show{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65%;
}
.element_content_show_parameter{
  margin: 8px;
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
  margin: 0 12px 0 0;
  width: 15px;
  height: 10px;
  transform: rotate(-90deg);
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
.warning{
  height: 14px;
  width: 14px;
  margin-left: 4px;
}
.warning_img{
  display: flex;
  flex-direction: row;
  justify-content: flex-start ;
  align-content: baseline;
}
[data-tooltip] {
  position: relative;
  z-index: 1;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  width: 650px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  background-color: rgba(22,30,41,0.95);
  border-radius: 5px;
  left: -680px;
  top: -4px;
  padding: 3px;
  pointer-events: none;
  opacity: 0;
  transition: 1s;
  z-index: 1;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em
}
[data-tooltip]:hover::after {
  opacity: 1;
}
</style>