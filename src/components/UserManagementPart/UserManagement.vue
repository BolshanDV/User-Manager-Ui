<template>
  <div>
    <div class="user_management_flex" >
        <p class="head">Управление пользователями</p>
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

export default {
  name: "UserManagement",
  components:{
    TitleCategory,
    TableElement
  },
  data: () => ({
  }),
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
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 3px;
  align-items: center;
  margin: 0.5vh;
  width: auto;
}
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
</style>