<template>
  <canvas ref="canvas"
          class="canvas"
  >
  </canvas>
</template>

<script>
import {mapGetters} from 'vuex'
import { Doughnut } from 'vue-chartjs'
export default {
  name: "AnalyticsRevenue",
  mixins: [Doughnut],
  mounted() {
    this.renderChart({
          labels: ['Оставшиеся пользователи', 'Ушедшие пользователи'],
          datasets: [{
            data: [this.CountMember, this.departedUsersData.quantityDepartedUsers],
            backgroundColor: [
              '#2BD6A2',
              '#B41210',
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
            position: "right",
              display: false
          }
        }
    )

  },
  computed: {
    ...mapGetters('sideBar', ['CountMember']),
    ...mapGetters('calendarDeductions', ['departedUsersData'])
  }
}
</script>

<style scoped>
  .canvas{
    width: 300px;
    height: 300px;
  }
</style>
