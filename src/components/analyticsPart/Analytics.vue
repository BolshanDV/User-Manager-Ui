<template>
  <div>
    <div v-if="preloader"  >
      <Preloader />
    </div>
    <transition name="slide-fade">
      <div
          class="analytics_Section"
          v-show="!preloader"
      >

        <div class="element_Analytics">
          <div class="element_Analytics_head">
            <div class="title_analytic">Выручка</div>
          </div>

          <div class="element_Analytics_section">

            <div class="element_Analytics_section_chart">
              <RevenueChart
                  :key="componentKey"
                  v-if="!preloader"
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
              <div class="title_analytic">Соотношение пользователей</div>
            </div>
            <div class="chart_customer">
                <customers
                    v-if="!preloader"
                />
            </div>

          </div>

          <div class="element_Analytics_Row_Two">
            <div class="element_Analytics_head">
              <div class="title_analytic">Процент удержания пользователей</div>
            </div>
            <div class="element_Analytics_section">
              <div class="chart_customer_deductions_column">
                <div class="chart_customer_deductions">

                </div>
                <div>
                  <div class="color_info">
                    <div class="tiffany_color"></div>
                    <div>Успешных оплат - </div>
                  </div>
                  <div class="color_info">
                    <div class="tiffany_color red_color"></div>
                    <div>Неуспешных оплат - </div>
                  </div>
                </div>

              </div>
              <div class="element_Analytics_section_menu">

              </div>
            </div>

          </div>

        </div>

        <div class="element_Analytics">
          <div class="element_Analytics_head">
            <div class="title_analytic">Количество успешных платежей</div>
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
            <div class="title_analytic">Количество отмененных подписок</div>
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
            <div class="title_analytic">Количество неудачных платежей</div>
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
    </transition>
  </div>


</template>

<script>
import RevenueChart from "../../assets/charts/analyticsPart/RevenueChart";
// import CalendarRevenue from "../../assets/calendars/CalendarRevenue";
import dateSelection from "./dateSelection"
import customers from "../../assets/charts/analyticsPart/customers";
import Preloader from '../../components/preloader'
import calendarHandler from "../../mixins/calendarHandler";
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Analytics",
  data() {
    return {
      calendar:''
    };
  },
  mixins: [calendarHandler],
  components:{
    RevenueChart,
    // CalendarRevenue,
    customers,
    dateSelection,
    Preloader,
  },
  computed:{
    ...mapGetters('userManagement', ['preloader']),
    ...mapGetters('calendarRevenue', ['componentKey'])
  },
  methods:{
    ...mapActions('calendarRevenue',['WEEK_REVENUE'])
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
    align-items: stretch;
    justify-content: space-between;
    height: auto;
    min-height: 400px;
    width: 120vh;
    min-width: 1100px;
    margin: 0 0 3vh 0;
  }
  .element_Analytics_Row_One {
    background: #0D121A;
    border-radius: 10px;
    margin-right: 20px;
    padding: 0 20px 20px 20px;
  }
  .chart_customer{
    background: #080D16;
    border-radius: 9px;
    height: 350px;
    padding: 30px;
  }

  .element_Analytics_Row_Two{
    background: #0D121A;
    border-radius: 10px;
  }
  .element_Analytics_head{
    margin: 0 3vh 3vh 3vh;
  }
  .element_Analytics_section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
  .element_Analytics_section_chart{
    width: 80%;
    height: 100%;
    min-height: 350px;
    border-radius: 10px;
    background: #080D16;
    margin: 0 3vh 0 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .element_Analytics_section_menu{
    width: 40vh ;
    min-width: 300px;
    height: 100%;
    min-height: 350px;
    border-radius: 10px;
    background: #080D16;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
  }
    .title_analytic{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
      margin-top: 20px;
  }
  .chart_customer_deductions{
    background: #080D16;
    margin-right: 3vh;
    height: 250px;
    padding: 15px;
    border-radius: 5px;
  }
  .chart_customer_deductions_column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    width: 300px;
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
