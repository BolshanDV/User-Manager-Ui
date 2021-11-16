<template>
  <div class="login">
    <img src="../assets/photo/root.png" alt="">
    <div class="title item">
      User Manager
    </div>
    <div class="item">
      <div>
        <a href="http://localhost:8082/api/v1/oauth2/authorization/discord" class="btn waves-effect waves-red">Login with Discord</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout"
}
</script>

<style scoped>
img{
  width: 130px;
  height: 53px;
}
.login{
  margin-top: 25vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: absolute;
}
.title{
  font-weight: 300;
  font-size: 45px;
  line-height: 45px;
  margin-top: 20px;
}
.item{
  margin-top: 30px;
}
.btn{
  width: 200px;
  height: 56px;
  background: #B41210;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
</style>