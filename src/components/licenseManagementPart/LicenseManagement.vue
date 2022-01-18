<template>
  <div class="license_flex">
    <div class="license_create">
      <div class="text_header">
        Создание лицензий
      </div>
      <div class="license_space">
        <div class="main_text">
          Тип лицензии
        </div>

        <div class="type_license input_date">
          <div class="type_license_item"
               @click="LICENSE_FLAG"
          >
            <div>
              {{selectedLicense.nameRole}}
            </div>
            <div class="arrow_right">
              <img src="../../assets/photo/icons/arrow.png" class="arrow" alt="">
            </div>
          </div>
          <transition name="slide-fade"
          >
            <div
                v-if="licenseFlag"
                class="fade"
            >
              <hr>
              <div
                  v-for="(price, index) in prices"
                  :key="index"
                  class="main_text drop_down_menu"
                  @click="SELECTED_LICENSE(index)"
              >
                <div>{{price.nameRole}}</div>
              </div>
            </div>
          </transition>
        </div>
        <div class="main_text">Дата следующей оплаты</div>
        <div class="input_date">
          <input
              placeholder="DD.MM.YYYY"
              type="date"
              class="validate datepicker-here main_text"
              v-model="renewalDate"
          />
        </div>
        <div class="create_key">
          <div class="create_key_btn main_text waves-effect waves-light"
               @click="CREATE_LICENCE({renewalDate, selectedLicense})"
          >
            Создать ключ
          </div>

        </div>
      </div>

    </div>
    <div class="license_recently">
      <div v-if="preloader"  >
        <Preloader />
      </div>
      <transition name="slide-fade">
        <div
            v-show="!preloader"
        >
          <div class="text_header">Недавно созданные</div>
          <div class="table_container">
            <div
                class="color user_management_table_section "
                v-for="(latestLicence, index) in latestLicences"
                :key="index"
            >
              <div class="table_block">
                <div
                    class="user_management_table_element waves-effect waves-light"
                >
                  <div class="user_management_table_element_content item4">
                    <div class="text_element">
                      {{ latestLicence.licenceDTO.licenceKey }}
                    </div>
                  </div>
                  <div class="user_management_table_element_content item6">
                    <div class="text_element"
                         :class="latestLicence.keyBindStyle"
                    >
                      {{ latestLicence.licenceDTO.keyBind}}
                    </div>
                  </div>
                  <div class="user_management_table_element_content item5">
                    <div class="text_element">
                      Create
                    </div>
                  </div>
                  <div class="user_management_table_element_content item10" >
                    <div class="text_element"
                         @click="INPUT_CHANGE_RENEWAL_DATE(latestLicence.userDTO.id)"
                    >
                      {{ latestLicence.licenceDTO.renewalDate}}
                      <img src="../../assets/photo/icons/pencil.png" alt="" class="delete">
                      <div
                          @click="KICK_USER(latestLicence.userDTO.id)"
                      >
                        <img
                            src="../../assets/photo/icons/delete.png"
                            class="delete"
                        >
                      </div>

                    </div>
                  </div>
                </div >
                <inputField
                    class="inputRenewal"
                    :id="latestLicence.userDTO.id"
                    :inputFlagRenewal="latestLicence.inputFlagRenewal"
                    v-if="latestLicence.inputFlagRenewal"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import inputField from '../inputField'
import {mapGetters,mapActions} from 'vuex'
export default {
  name : "LicenseManagement",
  components: {
    inputField
  },
  data: () => ({
    renewalDate: ''
  }),
  computed:{
    ...mapGetters('licenseManagement', ['prices', 'licenseFlag', 'selectedLicense', 'latestLicences']),
    ...mapGetters('userManagement', ['preloader'])
  },
  methods:{
    ...mapActions('licenseManagement', ['LICENSE_FLAG', 'SELECTED_LICENSE', 'CREATE_LICENCE', 'LATEST_ADDITION']),
    ...mapActions('userManagement', ['KICK_USER', 'INPUT_CHANGE_RENEWAL_DATE'])
  },
}
</script>

<style scoped>
  .license_flex{
    /*height: 150vh;*/
    display: flex;
    flex-direction: row;
    margin: 0 0 5vh 0;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
  }
  .license_create{
    min-height: 30vh;
    width: 25vw;
    min-width: 300px;
    background: #0D121A;
    border-radius: 10px;
    padding: 13px;
    margin-right: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .license_recently{
    width: 800px;
    min-height: 500px;
    background: #0D121A;
    border-radius: 10px;
    padding: 13px;
  }
  .create_key{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
  }
  .license_space{
    background: #101722;
    border-radius: 5px;
    padding: 15px;
  }
  .text_header{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin: 10px 0 15px 0
  }
  .main_text{
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }
  .type_license{
    background: #161E29;
    border-radius: 3px;
    min-height: 50px;
    margin: 15px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
  }
  .input_date{
    background: #161E29;
    border-radius: 3px;
    margin: 15px 0 20px 0;
    padding: 0 15px 0 15px;
  }
  .create_key_btn{
    background: #1F2A39;
    border-radius: 3px;
    width: 140px;
    height: 45px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .type_license_item{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin: 10px 0 10px 0;
  }
  .drop_down_menu{
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }
  hr{
    width: 100px;
  }
  .fade{
    width: 100%;
  }
  .color{
    background-color: #161E29;
    border-radius: 3px;
  }
  .delete{
    width: 14px;
    height: 15px;
    margin: 0 10px 0 10px;
  }
  .inputRenewal{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .table_container{
    background: #101722;
    border-radius: 5px;
    padding: 15px 10px 10px 10px;
  }
  .arrow_right{
    float: right;
  }
  .arrow{
    width: 16px;
    height: 12px;
  }
</style>
