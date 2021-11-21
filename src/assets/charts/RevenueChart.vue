<template>
  <div class="analyticsRevenue">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {mapGetters} from 'vuex'
export default {
  name: "AnalyticsRevenue",
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
    )

  },
  props: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false // отключает легенду, бесполезную когда на графике одна линия
      },
      scales: {
        xAxes: [{
          barThickness: 10
        }]
      },
    },
  },

  computed: {
    ...mapGetters('calendar', ['calendarDateInterval'])
  },
  methods:{
  },
}
</script>

<style scoped>

</style>