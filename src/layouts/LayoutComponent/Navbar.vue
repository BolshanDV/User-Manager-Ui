<template>
  <div>
    <div class="navbar_flex">
      <img v-if="discordUserData.avatar != null" :src="('https://cdn.discordapp.com/avatars/' + discordUserData.id + '/' + discordUserData.avatar) " alt="">
      <div class="navbar_user">{{discordUserData.username}}</div>
      <div class="navbar_exit">
        <a v-if="authorized" class="waves-effect waves-light btn" href="http://localhost:8082/api/v1/logout">Выйти</a>
        <a v-else class="waves-effect waves-light btn" href="http://localhost:8082/api/v1/oauth2/authorization/discord">Войти</a>
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
  height: 60px;
  padding: 1.75vh 0 1.75vh 0;

}
.navbar_user{
  color: #C4C4C4;
  margin-right: 15px;
}
.btn{
  text-align: center;
  margin-right: 5vh;
  width: 150px;
}
.waves-effect{
  background-color: #B41210;
  border-radius: 7px;
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
</style>