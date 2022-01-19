<template>
<div class="chart_section">
  <div class="successful_payments">
    Успешные оплаты
    <div class="successful_payments_chart">
      <successful_payments_drop
        :key="key_update"
      />
    </div>
    <div class="color_info">
      <div class="tiffany_color"></div>
      <div>Успешных - {{chart_data_payments.successful}}</div>
    </div>
    <div class="color_info">
      <div class="tiffany_color red_color"></div>
      <div>Неуспешных - {{chart_data_payments.unsuccessful}}</div>
    </div>

  </div>
  <div class="linked_keys">
    Привязанные ключи
    <div class="successful_payments_chart">
      <linkedKeys
          :key="key_update"
      />
    </div>
    <div class="color_info">
      <div class="tiffany_color"></div>
      <div>Привязаны - {{ linkedKeysChart.keyBindTrue }}</div>
    </div>
    <div class="color_info">
      <div class="tiffany_color red_color"></div>
      <div>Не привязаны - {{ linkedKeysChart.keyBindFalse }}</div>
    </div>
  </div>
</div>
</template>

<script>
import successful_payments_drop from '../../assets/charts/successfulPaymentsDrop'
import linkedKeys from '../../assets/charts/linkedKeys'
import {mapGetters} from "vuex";
export default {
name: "dropAnalytics",
  components:{
    successful_payments_drop,
    linkedKeys
  },
  computed: {
    ...mapGetters('managingDropsStore', ['chart_data_payments', 'key_update', 'linkedKeysChart'])
  }
}
</script>

<style scoped>
.chart_section{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.successful_payments{
  width: 45%;
  margin-right: 17px;
}
.linked_keys{
  width: 45%;
}
.successful_payments_chart{
  background: #101722;
  border-radius: 5px;
  padding: 10px;
  margin-top: 15px;
}
.tiffany_color{
  width: 25px;
  height: 14px;
  background: #2BD6A2;
  border: 2px solid #0D121A;
  margin-right: 10px;
}
.red_color{
  background: #B41210;
}
.color_info{
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
}
</style>
