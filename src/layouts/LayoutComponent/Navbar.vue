<template>
  <div>
    <div class="navbar_flex">
      <img v-if="discordUserData.avatar != null" :src="('https://cdn.discordapp.com/avatars/' + discordUserData.id + '/' + discordUserData.avatar) " alt="">
      <div class="navbar_user">{{discordUserData.username}}</div>
      <div class="navbar_exit">
        <div>
          <a class="waves-effect waves-light btn" href="http://localhost:8082/api/v1/logout">Выйти</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Navbar",
    computed:{
      ...mapGetters('navBar', ['authorized', 'discordUserData'])
    },
    methods:{
      ...mapActions('navBar', ['GET_DISCORD_USER_DATA'])
    },
    beforeMount() {
      this.GET_DISCORD_USER_DATA()
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
  height: 75px;
  padding: 1.75vh 0 1.75vh 0;

}
.navbar_user{
  color: #C4C4C4;
  margin-right: 40px;
}
.waves-effect{
  background-color: #B41210;
  border-radius: 7px;
  width: 150px;
  height: 43px;
}
nav{
  position:fixed;
  height:8vh;
}
img{
  border-radius: 100px;
  width: 40px;
  height: 40px;
  border: 2px solid #2BD6A2;
  margin-right: 15px;
}
.navbar_exit{
  margin-right: 5vh;
}
a{
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
</style>
