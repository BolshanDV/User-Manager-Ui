<template>
  <div class="center_flex" >
    <pop-up
    v-if="popUpFlag"/>
    <div class="user_management_flex" >
        <div class="head">Управление пользователями</div>
      <div class="search">
        <div class="search_input" >
          <input type="text" placeholder="Найти пользователя" v-model="search">
        </div>
        <div
            @click="NO_SORTING"
            class="sorting_btn">
          <div class="btn_color waves-effect waves-light z-depth-5">
            No sorting
          </div>
        </div>
      </div>

        <div class="user_management_table">
          <TitleCategory class="user_management_table_element" />
          <TableElement/>
        </div>
    </div>
  </div>
</template>

<script>
import TitleCategory from "./TitleCategory";
import TableElement from "./TableElement";
import popUp from '../popUp'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "UserManagement",
  data: () => ({
    search: ''
  }),
  components:{
    TitleCategory,
    TableElement,
    popUp
  },
  computed:{
    ...mapGetters('userManagement', ['popUpFlag'])
  },
  methods: {
    ...mapActions('userManagement', ['NO_SORTING', 'FILTERED_NAME']),
  },
  watch: {
    search: function () {
      this.FILTERED_NAME(this.search)
    }
  }
}
</script>

<style scoped>
.user_management_flex{
  background: #0D121A;
  border-radius: 10px;
  padding: 0 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 88%;
  min-width: 1100px;
}

.head{
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin: 20px 0 0 10px;
}
/*.user_management_table_element{*/
/*  height: 50px;*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-between;*/
/*  border-radius: 3px;*/
/*  align-items: center;*/
/*  margin: 0.5vh;*/
/*  width: auto;*/
/*}*/
.sorting_btn{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 50px 17px 0;
}
.btn_color{
  color: #C4C4C4;
  background-color: #161E29;
  padding: 5px;
  width: 170px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.center_flex{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;;
}
.search{
  margin: 10px;
  width: 100%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
input{
  color: #C4C4C4;
}
.search_input{
  margin-right: 20px;
  width: 300px;
}
</style>
