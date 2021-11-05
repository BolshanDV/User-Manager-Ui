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
              Renewal - {{selectedLicense}}
            </div>
            <div>
              <img src="../../assets/photo/icons/arrow1.png" class="arrow" alt="">
            </div>

          </div>
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
                <div>Renewal - {{ price }}</div>
            </div>
          </div>
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
      <div class="text_header">Недавно созданные</div>
      <div
          class="color user_management_table_section"
      >
        <div class="table_block">
          <div
              class="user_management_table_element waves-effect waves-light"
          >
            <div class="user_management_table_element_content item1 ">
              <div class="text_element">
                HI
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name : "LicenseManagement",
  data: () => ({
    renewalDate: ''
  }),
  computed:{
    ...mapGetters('licenseManagement', ['prices', 'licenseFlag', 'selectedLicense'])
  },
  methods:{
    ...mapActions('licenseManagement', ['LICENSE_FLAG', 'SELECTED_LICENSE', 'CREATE_LICENCE', 'GET_LICENCE_REQUEST'])
  },
  beforeMount() {
      this.GET_LICENCE_REQUEST()
  }
}
</script>

<style scoped>
  .license_flex{
    height: 150vh;
    display: flex;
    flex-direction: row;
    margin: 0 0 5vh 0;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
  }
  .license_create{
    min-height: 30%;
    width: 33%;
    background: #0D121A;
    border-radius: 10px;
    padding: 2vh;
    margin-right: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;

  }
  .license_recently{
    height: 100%;
    width: 58%;
    background: #0D121A;
    border-radius: 10px;
    padding: 2vh;
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
    padding: 20px;
  }
  .text_header{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin: 10px 0 15px 0
  }
  .main_text{
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
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
  .arrow{
    width: 18px;
    height: 13px;
    margin-left: 100px;
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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    margin: 10px 0 10px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
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
  .user_management_table_section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5vh 1vh 0.5vh 1vh;
  }
  .color{
    background-color: #161E29;
    border-radius: 3px;
  }
</style>