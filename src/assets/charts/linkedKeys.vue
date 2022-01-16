<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {mapGetters} from "vuex";
export default {
  name: "successful_payments_drop",
  mixins: [Bar],
  computed: {
    ...mapGetters('managingDropsStore', ['linkedKeysChart'])
  },
  mounted() {
    this.renderChart({
          labels: ['Успешных', 'Неуспешных'],
          datasets: [{
            data: [this.linkedKeysChart.keyBindTrue, this.linkedKeysChart.keyBindFalse],
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
            y: {
              beginAtZero: true
            },
            xAxes: [{
              barThickness: 44,
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
}
</script>

<style scoped>
canvas{
  height: 27vh;
  margin-top: 5px;
}
</style>
