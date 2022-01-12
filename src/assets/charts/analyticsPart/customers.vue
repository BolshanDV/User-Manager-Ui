<template>
  <canvas ref="canvas"></canvas>
</template>



<script>
import {mapGetters} from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: "AnalyticsRevenue",
  mixins: [Doughnut],
  mounted() {
    this.renderChart({
          labels: ['10000', '5000'],
          datasets: [{
            data: this.renewalPriceChart,
            backgroundColor: [
              '#82D7EA',
              '#9FFFE2',
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
            position: "right"
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
  cancas{
    width: 500px;
    height: 500px;
  }
</style>
