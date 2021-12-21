<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Bar } from 'vue-chartjs'
export default {
  name: "successful_payments_drop",
  mixins: [Bar],
  mounted() {
    this.renderChart({
          labels: ['Успешных', 'Неуспешных'],
          datasets: [{
            data: [10, 14],
            backgroundColor: [
              '#2BD6A2',
              '#B41210'
            ],
            borderColor: '#101722',
          }]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend:{
            display: false
          },
          scales: {
            xAxes: [{
              barThickness: 44,
              display: false
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                display: false
              }
            }]
          }
        }
    )

  },
}
</script>

<style scoped>
canvas{
  height: 27vh;
  margin-top: 5px;
}
</style>
