<template>
<div class="all_element">
  <div class="navbar">
    <Navbar/>
  </div>
  <div class ="container_flex">
    <div class="sidebar">
      <Sidebar/>
    </div>

    <div class="work_space">
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
export default {
name: "NewLayout",
  components:{
    Navbar,
    Sidebar
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
  background: #161E29;
  height: 100%;
}
.navbar{
  width: 100%;
  position: fixed;
  z-index: 100;
}
.work_space{
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: top;
  height: 100%;
  margin-left: 260px;
  margin-top: 50px;
  background-size: cover;
  padding: 60px 30px 20px 30px;
  min-width: 1100px;
  min-height: 900px;
  width: 100%;
  background-color: #161E29;
}
.container_flex{
  /*background-color: #161E29;*/
  display: flex;
  background-size: contain;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.35s;
}

.fade-enter-active {
  transition-delay: 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>