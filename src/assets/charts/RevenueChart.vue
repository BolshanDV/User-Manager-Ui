<template>
  <div class="analyticsRevenue">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
export default {
  name: "AnalyticsRevenue",
  mixins: [Bar],
  mounted() {
    this.renderChart({
          labels: ['1', '2', '3', 'Green', 'Purple', 'Orange'],
          datasets: [{
            data: [10, 12, 3, 5, 2, 3],
            backgroundColor: '#2BD6A2',
            borderColor: '#0D121A',
            borderWidth: 1
          }]
        },
    )

  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        barThickness: 10
      }]
    }
  },
}
</script>

<style scoped>

</style>