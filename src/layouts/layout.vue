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
  background-size: cover;
  padding: 60px 20px 20px 20px;
  min-width: 1100px;
  min-height: 900px;
  width: 100%;

  background: #161E29;
}
.container_flex{
  display: flex;
  background-size: contain;
}
</style>
