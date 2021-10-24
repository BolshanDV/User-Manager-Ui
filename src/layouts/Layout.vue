<template>
<div class="all_element">
  <div class="navbar">
    <Navbar @click="isOpen = !isOpen"  />
  </div>
  <div class ="container_flex">
    <div class="sidebar">
      <Sidebar
          v-show="isOpen"
      />
    </div>

    <div class="work_space" :class="{fullWidth: !isOpen}">
      <router-view />
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
  /*height: 100%;*/
  margin-left: 245px;
  margin-top: 50px;
  background-size: cover;
  padding-top: 3vh;
  min-width: 1200px;
  width: 100%;
  background-color: #161E29;
}
.container_flex{
  background-color: #161E29;
  display: flex;
  background-size: contain;
  background-color: #161E29;
}
.fullWidth{
  margin-left: 0;
}
</style>