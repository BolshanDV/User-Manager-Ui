<template>
  <div @click="$emit('click')">
    <div class="navbar_flex">
      <div class="navbar_user"><a>User</a></div>
      <div class="navbar_exit"
           @click="AUTHORIZATION"
      >
        <p class="waves-effect waves-light btn">Выйти</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: "Navbar",
    methods: {
       ...mapActions('navbar', ['AUTHORIZATION'])
     }
  }
</script>
<style scoped>
.navbar_flex{
  display: flex;
  flex-direction: row;
  background: #080D16;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 1.75vh 0 1.75vh 0;

}
.navbar_user{
  margin-right: 5vh;
}
.btn{

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