<template>
  <div>
    <div
      v-for="title in titles"
      :key="title.category"
      :class="[title.class]">
    <p>{{ title.category }}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "TitleCategoty",
  data: () => ({
    titles: [
      {category: 'Discord tag', class:'user_management_table_element_content item1'},
      {category: 'Role', class:'user_management_table_element_content item1'},
      {category: 'License type', class:'user_management_table_element_content item2'},
      {category: 'License key', class:'user_management_table_element_content item3'},
      {category: 'Renewal date', class:'user_management_table_element_content item1'},
      {category: 'Key bind', class:'user_management_table_element_content item2'},
      // {category: 'Payment status', class:'user_management_table_element_content item1'},
      {category: 'Card bind', class:'user_management_table_element_content item2'},
    ],
    users: null,
  }),
}
</script>

<style scoped>
.user_management_table_element_content{
  height: 100%;
  width: 16vh;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  margin-left: 1vh;
  min-height: 10px;
}
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
}
.item1{
  width: 100px;
}
.item2{
  width: 45px;
}
.item3{
  width: 180px;
}
</style>