<template>
<div class="empty_layout">
  <div class="wave">
    <div class="wave_one"></div>
    <div class="wave_two"></div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
name: "EmptyLayout"
}
</script>

<style scoped>
.empty_layout{
  display: flex;
  min-height: 100vh;
  min-width: 200px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #101722;
  /*background-attachment: scroll;*/
  /*background-repeat: no-repeat;*/
  color: #FFFFFF;
  overflow: hidden;
}
.wave{
  overflow: hidden;
  width: 100%;
  position: relative;
}

.wave_one, .wave_two{
  width: 200vh;
  height: 180vh;
  position: absolute;
}
.wave_one{
  left: -80vh;
  top: 27vh;
  background: radial-gradient(circle farthest-corner at 100px 55px, #1D002E, #001C25);
  border-radius: 48%;
  animation: wave 50s linear infinite;
}
.wave_two{
  left: 60vh;
  top: 70vh;
  background: radial-gradient(circle farthest-corner at 100px 55px, #061b2e,#2e0009);
  border-radius: 44%;
  animation: wave 40s linear infinite;
}
@keyframes wave {
  100% {
    transform: rotate(360deg);
  }
}
</style>