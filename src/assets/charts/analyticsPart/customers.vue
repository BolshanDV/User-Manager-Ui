<template>
  <canvas ref="canvas"></canvas>
</template>



<script>
import {mapGetters} from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: "customer",
  mixins: [Doughnut],
  mounted() {
    this.renderChart({
          labels: ['10000', '5000'],
          datasets: [{
            data: this.renewalPriceChart,
            backgroundColor: [
              '#9FFFE2',
              '#82D7EA',
            ],
            borderColor: '#080D16',
            borderWidth: 1
          }]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 68,
          legend:{
            position: "right"
          },
          y: {
            beginAtZero: true
          },
        }
    )

  },
  computed: {
    ...mapGetters('customersChart', ['renewalPriceChart'])
  }
}
</script>

<style scoped>
  cancas{
    width: 500px;
    height: 500px;
  }
</style>
