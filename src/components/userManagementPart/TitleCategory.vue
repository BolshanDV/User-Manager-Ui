<template>
  <div>
    <div
      v-for="title in titles"
      :key="title.category"
      :class="[title.class]">
    <p>{{ title.category }}</p>
      <div
          @click="sortHandler(title.sortType)"
      >
        <img src="../../assets/photo/icons/UserMRevers.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: "TitleCategory",
  data: () => ({
    titles: [
      {
        category: 'Discord tag',
        class: 'user_management_table_element_content item1'
      },
      {
        category: 'Role',
        class: 'user_management_table_element_content item1'
      },
      {
        category: 'License type',
        class: 'user_management_table_element_content item2',
        sortType: 'byLicence',
      },
      {
        category: 'License key',
        class: 'user_management_table_element_content item3'},
      {
        category: 'Renewal date',
        class: 'user_management_table_element_content item1',
        sortType: 'byRenewDate'
      },
      {
        category: 'Key bind',
        class: 'user_management_table_element_content item2'
      },
      {
        category: 'Card bind',
        class:'user_management_table_element_content item2'
      },
    ],
  }),
  methods: {
    ...mapActions('userManagement',['SORT_HANDLER']),

    sortHandler(sortType) {
      this.SORT_HANDLER(sortType)
    }
  }
}
</script>

<style scoped>
.user_management_table_element_content{
  height: 100%;
  width: 16vh;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
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
  width: 55px;
}
.item3{
  width: 180px;
}
img{
  width: 16px;
  height: 16px;
  margin: 14px 0 14px 5px;
}
</style>