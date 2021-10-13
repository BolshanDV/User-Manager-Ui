<template>
  <div class="navbar">
    <div class="navbar_flex">
      <div class="navbar_user"><a>User</a></div>
      <div class="navbar_exit"><a class="waves-effect waves-light btn">Выйти</a></div>
    </div>
  </div>
</template>

<script>
export default {
name: "Navbar"
}
</script>
<style scoped>
.navbar{
  position: fixed;
  width: 100%;
  height: 8%;
  background: #080D16;
  min-height: 35px;

}
.navbar_flex{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 5vh;
  margin-top: 1.75vh;

}
.navbar_user{
  margin-right: 5vh;
}
.btn{
  min-height: 3.5vh;
  min-width: 8vh;
  text-align: center;
  margin-right: 5vh;
}
.waves-effect{
  background-color: #B41210;
  border-radius: 7px;
}
nav{
  position:fixed;
  height:8vh;
}
</style>