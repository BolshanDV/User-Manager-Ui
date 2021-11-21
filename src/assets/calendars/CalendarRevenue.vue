<template>
  <div>

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
/*.section{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/
</style>