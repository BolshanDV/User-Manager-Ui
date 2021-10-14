<template>
<div class="all_element">
  <div class="navbar">
    <Navbar/>
  </div>
  <div class ="container_flex">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="work_space">
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
  }
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
.sidebar{
  background: #080D16;
  height: 100%;
  position: fixed;
  z-index: 100;
  width:245px;
  min-width: 200px;
}
.work_space{
  background-color: #161E29;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: top;
  height: 100%;
  margin-left: 245px;
  margin-top: 50px;
  background-size: cover;
  padding-top: 3vh;
  min-width: 1200px;
  width: auto;
}

</style>