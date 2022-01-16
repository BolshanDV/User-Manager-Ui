<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {mapGetters} from 'vuex'
export default {
name: "successful_payments_drop",
  mixins: [Bar],
  mounted() {
    this.renderChart({
          labels: ['Успешных', 'Неуспешных'],
          datasets: [{
            data: [this.chart_data_payments.successful, this.chart_data_payments.unsuccessful],
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
              barThickness: 40,
              display: false
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                // display: false
              }
            }]
          }
        }
    )

  },
  computed: {
    ...mapGetters('managingDropsStore', ['chart_data_payments'])
  }
}
</script>

<style scoped>
canvas{
  height: 27vh;
  margin-top: 5px;
}
</style>
