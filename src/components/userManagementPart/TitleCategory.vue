<template>
  <div class="waves-effect waves-light">
    <div
      v-for="title in titles"
      :key="title.category"
      :class="[title.class]"
      @click="sortHandler(title.sortType)"
    >
    <p>{{ title.category }}</p>
      <div
        v-if="title.img != null"
      >
        <img :src="require('../../assets/photo/icons/' + title.img)" alt="img" class="icons">
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
        class: 'user_management_table_element_content item5',
        sortType: 'byRole',
        img: 'UserMRevers.png'
      },
      {
        category: 'Licence type',
        class: 'user_management_table_element_content item2',
        sortType: 'byLicence',
        img: 'UserMRevers.png'
      },
      {
        category: 'License key',
        class: 'user_management_table_element_content item3'
      },
      {
        category: 'Renewal date',
        class: 'user_management_table_element_content item2',
        sortType: 'byRenewDate',
        img: 'UserMRevers.png'
      },
      {
        category: 'Key bind',
        class: 'user_management_table_element_content item4'
      },
      {
        category: 'Card bind',
        class:'user_management_table_element_content item4'
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
  min-height: 10px;
  border-radius: 3px;
  margin: 5px 0 0 5px;
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
  width: 114px;
}
.item3{
  width: 200px;
}
.item4{
  width: 87px ;
}
.item5{
  width: 84px;
}
img{
  width: 16px;
  height: 16px;
  margin: 14px 0 14px 5px;
}
</style>