<template>
<div class="chart_section">
  <div class="successful_payments">
    Успешные оплаты
    <div class="successful_payments_chart">
      <successful_payments_drop/>
    </div>
    <div class="color_info">
      <div class="tiffany_color"></div>
      <div>Успешных оплат - </div>
    </div>
    <div class="color_info">
      <div class="tiffany_color red_color"></div>
      <div>Неуспешных оплат - </div>
    </div>

  </div>
  <div class="linked_keys">
    Привязанные ключи
    <div class="successful_payments_chart">
      <linkedKeys/>
    </div>
    <div class="color_info">
      <div class="tiffany_color"></div>
      <div>Привязаны -  </div>
    </div>
    <div class="color_info">
      <div class="tiffany_color red_color"></div>
      <div>Не привязаны - </div>
    </div>
  </div>
</div>
</template>

<script>
import successful_payments_drop from '../../assets/charts/successfulPaymentsDrop'
import linkedKeys from '../../assets/charts/linkedKeys'
export default {
name: "dropAnalytics",
  components:{
    successful_payments_drop,
    linkedKeys
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
  margin-right: 15px;
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
