<template>
  <div class="analyticsRevenue">
    <canvas ref="canvas"
    >
    </canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {mapGetters} from 'vuex'
export default {
  name: "successfulPaymentsChart",
  mixins: [Bar],
  mounted() {
    this.renderChart({
          labels: this.calendarDateInterval.labels,
          datasets: [{
            data: this.calendarDateInterval.moneys,
            backgroundColor: '#5899db',
            borderColor: '#1c283b',
            borderWidth: 1
          }]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        }
    )
  },
  computed: {
    ...mapGetters('calendarSuccessfulPayments', ['calendarDateInterval'])
  },
}
</script>

<style scoped>
canvas{
  height: 350px;
  width: 600px;
}
</style>
