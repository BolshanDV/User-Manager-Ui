<template>
  <div>
      <div class="text">
        <div class="navbar">
          <Navbar/>
        </div>
        <div class="flex-container">
          <div class="sidebar-column">
            <Sidebar/>
          </div>
          <div class="work_space">
            <router-view />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/layouts/LayoutComponent/Navbar";
import Sidebar from "@/layouts/LayoutComponent/Sidebar";
export default {
  name: "Layout",
  components:{
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.text{
  font-family: 'Roboto', sans-serif;
}
.flex-container{
  /*display: inline;*/

}
.sidebar-column{
  /*float: left;*/
  background-color: #0D121A;
  width: 16%;
  position: fixed;
  height: 100%;
  min-height:1500px;
  min-width: 250px;
  top: 0;

}
.work_space{
  /*float: left;*/
  width: 84%;
  height: 100%;
  margin-top: 20px;
  margin-left: 250px;
  background-color: #161E29;
  background-size: cover;
  min-height: 950px;
  min-width: 900px;

}
.navbar{
  position: fixed;
  top: 0;
  width: 100%;
  height: 8%;
  background: #080D16;
  min-height: 35px;
}
</style>