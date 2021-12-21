<template>
  <div class="analytics_Section">

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Выручка</p>
      </div>

      <div class="element_Analytics_section">

        <div class="element_Analytics_section_chart">
          <RevenueChart
              :key="componentKey"
          />
        </div>

        <div class="element_Analytics_section_menu">
            <date-selection/>
        </div>

      </div>
    </div>

    <div class="element_Analytics_Row">

      <div class="element_Analytics_Row_One">
        <div class="element_Analytics_head">
          <p>Соотношение пользователей</p>
        </div>
          <div class="chart_customer">
            <customers
                v-if="!preloader"
            />
          </div>
      </div>

      <div class="element_Analytics_Row_Two">
        <div class="element_Analytics_head">
          <p>Процент удержания пользователей</p>
        </div>
      </div>

    </div>

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Количество успешных платежей</p>
      </div>

      <div class="element_Analytics_section">
        <div class="element_Analytics_section_chart">
          <RevenueChart
              :key="componentKey"
          />
        </div>

        <div class="element_Analytics_section_menu">
          <date-selection/>
        </div>
      </div>
    </div>

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Количество отмененных подписок</p>
      </div>

      <div class="element_Analytics_section">
        <div class="element_Analytics_section_chart">
          <RevenueChart
              :key="componentKey"
          />
        </div>
        <div class="element_Analytics_section_menu">
          <date-selection/>
        </div>
      </div>
    </div>

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Количество неудачных платежей</p>
      </div>

      <div class="element_Analytics_section">
        <div class="element_Analytics_section_chart">
          <RevenueChart
              :key="componentKey"
          />
        </div>
        <div class="element_Analytics_section_menu">
          <date-selection/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import RevenueChart from "../../assets/charts/RevenueChart";
// import CalendarRevenue from "../../assets/calendars/CalendarRevenue";
import dateSelection from "./dateSelection"
import customers from "../../assets/charts/customers";
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Analytics",
  data() {
    return {
      calendar:''
    };
  },
  components:{
    RevenueChart,
    // CalendarRevenue,
    customers,
    dateSelection
  },
  computed:{
    ...mapGetters('userManagement', ['preloader']),
    ...mapGetters('calendar', ['componentKey'])
  },
  methods:{
    ...mapActions('calendar',['WEEK_REVENUE'])
  },
  beforeMount() {
    this.WEEK_REVENUE()
  },
}
</script>

<style scoped>
  .analytics_Section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-flow: column nowrap;
    align-items: center;
    /*margin: 0 0 5vh 0;*/
  }
  .element_Analytics {
    height: 47vh;
    min-height: 440px;
    min-width: 1100px;
    width: 120vh;
    background: #0D121A;
    margin: 0 0 3vh 0;
    border-radius: 10px;
  }
  .element_Analytics_Row {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: stretch;
    justify-content: space-between;
    height: auto;
    min-height: 400px;
    width: 120vh;
    min-width: 1100px;
    margin: 0 0 3vh 0;
    /*position: relative;*/
  }
.element_Analytics_Row_One {
  background: #0D121A;
  border-radius: 10px;
  margin-right: 20px;
  width: 80vh;
  padding: 20px;
}
.chart_customer{
  background: #080D16;
  border-radius: 9px;
  height: 40vh;
  /*width: 400px;*/
  /*height: 500px;*/
  padding: 30px;}

.element_Analytics_Row_Two{
  width: 120vh ;
  background: #0D121A;
  border-radius: 10px;
}
.element_Analytics_head{
  margin: 0 3vh 3vh 3vh;
}
.element_Analytics_section{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: auto;
}
.element_Analytics_section_chart{
  width: 80%;
  min-width: 500px;
  height: 100%;
  border-radius: 10px;
  background: #080D16;
  margin: 0 3vh 0 3vh;
  padding: 10px;
}
.element_Analytics_section_menu{
  width: 40vh ;
  min-width: 300px;
  height: 100%;
  border-radius: 10px;
  background: #080D16;
  padding: 15px;
  margin: 0 3vh 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}
p{
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
</style>