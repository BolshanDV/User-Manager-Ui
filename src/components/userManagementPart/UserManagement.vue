<template>
  <div>
    <div class="user_management_flex" >
        <div class="head">Управление пользователями</div>
      <div
          @click="noSorting"
          class="sorting_btn">
        <div class="btn_color waves-effect waves-light z-depth-5">
          No sorting
        </div>
      </div>
        <div class="user_management_table">
          <TitleCategory class="user_management_table_element" />
          <TableElement>
          </TableElement>
        </div>
    </div>
  </div>
</template>

<script>
import TitleCategory from "./TitleCategory";
import TableElement from "./TableElement";
import {mapActions} from 'vuex'

export default {
  name: "UserManagement",
  components:{
    TitleCategory,
    TableElement
  },
  methods: {
    ...mapActions('userManagement',['NO_SORTING']),
    noSorting() {
      this.NO_SORTING()
    }
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
  margin: 20px 0 0 50px;
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
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  margin: 0.5vh;
  width: auto;
}
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
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>