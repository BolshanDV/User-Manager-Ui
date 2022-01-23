<template>
  <div class="popUp">
    <div class="popUp_delete">
      <div class="main_text"><div>Are you sure you want to delete {{ idKickUser.discordUsername }}?</div></div>
      <div class="button_popUp">
        <div class="btn_color waves-effect waves-light z-depth-3 item"
          @click="SHOW_POPUP"
        >Close</div>
        <div class="btn_color waves-effect waves-light z-depth-3"
             @click="KICK_USER(idKickUser)"
        >Kick</div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
name: "popUp",
  computed: {
    ...mapGetters('userManagement', ['idKickUser'])
  },
  methods: {
    ...mapActions('userManagement', ['SHOW_POPUP', 'KICK_USER'])
  }
}
</script>

<style scoped>
.popUp{
  position: fixed;
  z-index: 100;
  /*background: rgba(0,0,0,0.82);*/
  padding: 100px;
  top: 100px;
  left: 300px;
  margin: 0;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  width: 6em
}
.btn_color{
  color: #C4C4C4;
  background-color: #1f2a39;
  padding: 5px;
  width: 170px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.button_popUp{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
}
.popUp_delete{
  padding: 50px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(22,30,41,0.96);
  margin:0 25% 0 25%;
  width: 500px;
  box-shadow: 20px 30px 30px 35px rgba(0, 0, 0, .5);
  border-radius: 5px;
}
.item{
  margin-right: 20px;
}
.main_text {
  font-size: 25px;
  line-height: 31px;
  text-align: center;
}
</style>
