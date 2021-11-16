<template>
  <div class="section">
    <v-date-picker
        v-model="calendar"
        :value = "null"
        color="red"
        is-dark
        is-range

      >
    </v-date-picker>
    <button
        @click="dateInf"
        class="waves-effect waves-light btn"
    >
      Вывести график

    </button>

    <div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['addDateInf'],
  name: "CalendarRevenue",
   data() {
     return {
       calendar: new Date(),
     };
   },
  methods:{
    dateInf(){
      this.addDateInf({
        calendar: this.calendar
      })
      console.log(this.calendar)
      const startDate = 'начало' + this.calendar.start
      const endDate = 'конец'+this.calendar.end
      console.log(startDate, endDate)
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