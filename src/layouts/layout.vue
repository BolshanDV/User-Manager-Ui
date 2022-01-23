<template>
<div class="all_element">
  <div class="navbar">
    <Navbar/>
  </div>
  <div class ="container_flex">

    <div class="sidebar">
      <transition name="fade">
        <Sidebar/>
      </transition>
    </div>

    <div class="work_space color">
      <toasted/>
      <transition name="fade">
        <router-view />
      </transition>

    </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/layouts/LayoutComponent/Navbar";
import Sidebar from "@/layouts/LayoutComponent/Sidebar";
import toasted from "../components/toastedPart/toasted";
export default {
name: "NewLayout",
  components:{
    Navbar,
    Sidebar,
    toasted
  },
  data: () => ({
    isOpen: true,
  })
}
</script>

<style scoped>

.all_element{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  background-color: #161E29;
  min-width: 1200px;
}
.navbar{
  width: 100%;
  position: fixed;
  z-index: 100;
}
.work_space{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  float: top;
  margin-left: 275px;
  margin-top: 50px;
  padding: 60px 20px 20px 20px;
  min-width: 1100px;
  min-height: 95vh;
  width: 100%;
  background: url('../assets/photo/background2.png') bottom right/ 100% auto no-repeat fixed, url('../assets/photo/background1.png') top left/ 100% auto no-repeat fixed;
}
.color{
  background-color: #161E29;
}
.container_flex{
  display: flex;
  /*background-size: contain;*/
}
</style>
