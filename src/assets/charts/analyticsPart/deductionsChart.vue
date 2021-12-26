<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>



<script>
import {mapGetters} from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: "AnalyticsRevenue",
  mixins: [Doughnut],
  mounted() {
    this.renderChart({
          // labels: ['5', '10'],
          datasets: [{
            data: ['5', '10'],
            backgroundColor: [
              '#2BD6A2',
              '#B41210',
            ],
            borderColor: '#080D16',
            borderWidth: 4
          }]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 68,
          legend:{
            position: "right",
              display: false
          }
        }
    )

  },
  computed: {
    ...mapGetters('customersChart', ['renewalPriceChart'])
  }
}
</script>

<style scoped>
  .canvas{
    width: 300px;
    height: 300px;
  }
</style>
