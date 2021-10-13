<template>
  <div>
      <div class="text">
        <Navbar/>
        <div class="flex-container1">
          <div class="navbar-column1">
            <Sidebar/>
          </div>
          <div class="space-graphs1">
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
.flex-container1{
  display: inline;
  font-family: 'Roboto', sans-serif;
}
.navbar-column1{
  float: left;
  background-color: #0D121A;
  width: 16%;
  position: fixed;
  /*height: 100%;*/
  min-height:900px;
  min-width: 250px;

}
.space-graphs1{
  float: left;
  width: 84%;
  margin-top: 20px;
  margin-left: 16%;
  background-color: #161E29;
  background-size: cover;
  min-height: 950px;
  min-width: 900px;

}

</style>