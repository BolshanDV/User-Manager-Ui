<template>
  <div class="waves-effect waves-light">
    <div
      v-for="title in titles"
      :key="title.category"
      class="user_management_table_element_content"
      :class="[title.class]"
      @click="SORT_HANDLER(title.sortType)"
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
import {mapActions, mapGetters} from 'vuex'
export default {
name: "TitleCategory",
  computed: {
    ...mapGetters('titleCategory', ['titles'])
  },

  methods: {
    ...mapActions('userManagement', ['SORT_HANDLER']),
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
img{
  width: 16px;
  height: 16px;
  margin: 14px 0 14px 5px;
}
p{
  font-weight: 500;
}
</style>