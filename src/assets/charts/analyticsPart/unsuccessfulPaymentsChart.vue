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
  name: "unsuccessfulPaymentsChart",
  mixins: [Bar],
  mounted() {
    this.renderChart({
          labels: this.calendarDateInterval.labels,
          datasets: [{
            data: this.calendarDateInterval.moneys,
            backgroundColor: '#82D7EA',
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
            xAxes: [{
              gridLines: {
                zeroLineColor: '#C4C4C4',
              },
            }],
            yAxes: [{
              gridLines: {
                zeroLineColor: '#C4C4C4',
              },
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        }
    )
  },
  computed: {
    ...mapGetters('dateSelectionUnsuccessful', ['calendarDateInterval'])
  },
}
</script>

<style scoped>
canvas{
  height: 350px;
  width: 600px;
}
</style>
