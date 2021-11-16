<script src="../../store/modules/sideBar.js"></script>
<template>
  <div class="sidebar">
    <div class="sidebar_mainData ">
      <div class="logo">
        <img src="@/assets/photo/root.png" alt="img" class="logo_image">
      </div>
      <transition name="fade">
        <div v-show="!preloader">
          <div
              class="sidebar_mainData_members"
          >
            <div class="mainData_header">Количество мемберов</div>
            <div class="members_info">
              <div class="countCustomer">
                {{countCustomer}}
              </div>
              <div class="mainData_header">вкл.</div>
              <div class="countLifetime">
                {{countLifetime}}
              </div>
              <div class="mainData_header">
                lifetime
              </div>
            </div>
          </div>
          <div class="sidebar_mainData_revenue"
          >
            <div class="mainData_header">
              Выручка за {{nowDate}}
            </div>
            <div class="analytics_totalIncome">
              <div class="totalIncome">{{analytics.totalIncome}}₽</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="sidebar_menu " >
      <router-link
          v-for="link in links"
          :key="link.url"
          tag="div"
          class="page waves-effect waves-light"
          :to="link.url"
          active-class="page_active page"
          :exact="link.exact"
      >
        <img :src=" require('../../assets/photo/icons/' + link.image)" alt="img" class="icons" >
        <div>{{link.title}}</div>
      </router-link>

    </div>

  </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  props: ['value'],
  name: "Sidebar",
  computed: {
    ...mapGetters('sideBar',
        [
          'links',
          'analytics',
          'nowDate',
          'countCustomer',
          'countLifetime'
        ]
    ),
    ...mapGetters('userManagement', [
        'preloader'
    ])
  },
  methods: {
    ...mapActions('sideBar', ['postAnalytics'])
  },

  beforeMount() {
    this.postAnalytics()
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.sidebar{
  background: #080D16;
  height: 100%;
  position: fixed;
  z-index: 100;
  width:255px;
  min-width: 200px;
}
.sidebar_mainData{
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  margin: 0 0 4vh 0 ;
  min-width: 120px;
  min-height: 350px;

}
.sidebar_mainData_members{
  background-color: #161E29;
  border-radius: 10px;
  padding: 2vh;
  margin: 6vh 3vh 4vh 3vh;
  display: flex;
  flex-direction: column;

}
.sidebar_mainData_revenue{
  background-color: #161E29;
  border-radius: 10px;
  padding: 2vh;
  margin: 2vh 3vh 2vh 3vh;
  display: flex;
  flex-direction: column;
}
.page_active{
  border-right-style: solid;
  border-color: #6E7F99 ;
}
.page{
  margin: 0.3vh;
  background-color: #161E29;
  padding: 3vh 1.5vh 3vh 3vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  color: #EBEBEB;
}
.logo{
  margin: 2vh 2vh 1.5vh 0;
  text-align: center;
}
.icons{
  height: 26px;
  width: 26px;
  margin-right: 1.75vh;
}
.logo_image {
  height: 50px;
  width: 128px;
  margin-left: 1.75vh;
}
.totalIncome{
  font-weight: 500;
  font-size: 45px;
  line-height: 53px;
}
.analytics_totalIncome {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.mainData_header{
  color: #CCCCCC;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 16px;
}
.members_info{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}
.countCustomer{
  font-weight: 500;
  font-size: 45px;
  line-height: 55px;
}
.countLifetime{
  font-size: 14px;
  line-height: 16px;
  margin: 0 5px 0 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>