<template>
  <div>
    <v-date-picker
        v-model="calendar"
        :value = "null"
        color="red"
        is-dark
        is-range

      >
    </v-date-picker>
    <button @click="dateInf"></button>

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
      this.addDateInf({ calendar: this.calendar })
      console.log(this.calendar)
    }

  }
}
</script>

<style scoped>

</style>