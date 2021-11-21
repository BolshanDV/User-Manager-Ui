
  <div class="analyticsRevenue">
    <canvas ref="canvas"></canvas>
  </div>

<script>
import {mapGetters} from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: "AnalyticsRevenue",
  mixins: [Doughnut],
  mounted() {
    this.renderChart({
          labels: ['3000', '2500', '2000', '1500'],
          datasets: [{
            data: this.renewalPriceChart,
            backgroundColor: [
              '#82D7EA',
              '#9FFFE2',
              '#3C57E3',
              '#2FA4FF',
            ],
            borderColor: '#080D16',
            borderWidth: 4
          }]
        },
    )

  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 10,
  },

  computed: {
    ...mapGetters('customersChart', ['renewalPriceChart'])
  }
}
</script>

<style scoped>

</style>