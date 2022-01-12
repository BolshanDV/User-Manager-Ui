<template>
  <div class="create_section">
    <header>Создание дропа</header>
    <div class="create_section_main">
      <div>Количество слотов</div>
      <div class="input_style">
        <input v-model="quantity"
               type="number">
      </div>
      <div>Тип лицензии для дропа</div>
      <div class="type_license input_date">
        <div class="type_license_item"
             @click="LICENSE_FLAG"
        >
          <div>
            {{selectedLicense.nameRole}}
          </div>
          <div>
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
      <div>Пароль для дропа</div>
      <div class="input_style">
        <input
            v-model="password"
            type="text">
      </div>
      <div class="checkbox_item">
        <div>Автоматически рестокать неоплаченные слоты</div>
        <div class="switch">
          <label>
            <input type="checkbox"
              v-model="autoRestock"
            >
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="checkbox_item">
        <div>Удалить дроп автоматически после sold out’а</div>
        <div class="switch">
          <label>
            <input type="checkbox"
                   v-model="deleteAfterSoldOut"
            >
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="checkbox_item">
        <div>Привязка ключей к аккаунтам</div>
        <div class="switch right1">
          <label>
            <input type="checkbox"
                   v-model="mustBind"
            >
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="button_creation ">
        <div class="btn_drop waves-light waves-effect"
          @click="CREATE_DROP({quantity, password, selectedLicense, autoRestock, deleteAfterSoldOut, mustBind})"
        >Создать дроп</div>
        <div class="btn_drop waves-light waves-effect"
             @click="GET_INF"
        >INF</div>
      </div>
    </div>



  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "creatingDrop",
  data: () =>({
    quantity: null,
    password: null,
    autoRestock: false,
    deleteAfterSoldOut: false,
    mustBind: false
  }),
  computed:{
    ...mapGetters('licenseManagement', ['prices', 'licenseFlag', 'selectedLicense']),
    ...mapGetters('userManagement', ['preloader'])
  },
  methods:{
    ...mapActions('licenseManagement', ['LICENSE_FLAG', 'SELECTED_LICENSE', 'CREATE_LICENCE', 'LATEST_ADDITION']),
    ...mapActions('managingDropsStore', ['CREATE_DROP', 'GET_INF'])
  },
}
</script>

<style scoped>
.create_section{
  /*height: 55%;*/
  margin-bottom: 20px;
  background: #0D121A;
  border-radius: 10px;
  padding: 15px;
}
.create_section_main{
  background: #101722;
  border-radius: 5px;
  display: flex;
  margin-top: 15px;
  padding: 15px;
  flex-direction: column;
}
.input_style{
  background: #161E29;
  border-radius: 3px;
  padding: 0 10px;
  margin: 10px 0;
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
.type_license_item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin: 10px 0 10px 0;
}
.drop_down_menu{
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}
.main_text{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
}
.arrow{
  float: right;
  width: 16px;
  height: 12px;
}
.checkbox_item{
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: space-between;
}
.switch{
  float: right;
}
.right1{
  float: right;
}
.lever{
  margin: 0;
}
input{
  color: #C4C4C4;
}
.button_creation{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.btn_drop{
  background: #1F2A39;
  border-radius: 3px;
  margin-top: 23px;
  width: 140px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
header{
  font-size: 18px;
  line-height: 21px;
}
</style>
