<template>
  <div class="section">

    <v-date-picker
        v-model="calendar"
        :value = "null"
        color="blue"
        is-dark
        is-range
      >
    </v-date-picker>
    <div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "CalendarRevenue",
   data() {
     return {
       calendar: new Date(),
     };
   },
  methods: {
    ...mapActions('calendar', ['OUTPUT_INTERVAL'])
  },
  watch: {
    calendar: function (){
      this.OUTPUT_INTERVAL(this.calendar)
    }
  }

}
</script>

<style scoped>
.section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn{
  color: #CCCCCC;
  width: 200px;
  height: 40px;
  margin-top: 10px;
  background-color: #2e0009;
  border-radius: 6px;
}
</style>