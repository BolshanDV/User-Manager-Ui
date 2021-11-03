<template>
  <div class="analytics_Section">

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Выручка</p>
      </div>

      <div class="element_Analytics_section">

        <div class="element_Analytics_section_chart">
          <RevenueChart
          :calendar="calendar"
          />
        </div>

        <div class="element_Analytics_section_menu">
          <CalendarRevenue
              :addDateInf = "addDateInf"
            >
          </CalendarRevenue>
        </div>

      </div>
    </div>

    <div class="element_Analytics_Row">

      <div class="element_Analytics_Row_One">
        <div class="element_Analytics_head">
          <p>Соотношение пользователей</p>
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
        </div>

        <div class="element_Analytics_section_menu">
        </div>
      </div>
    </div>

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Количество отмененных подписок</p>
      </div>

      <div class="element_Analytics_section">
        <div class="element_Analytics_section_chart">
        </div>
        <div class="element_Analytics_section_menu">
        </div>
      </div>
    </div>

    <div class="element_Analytics">
      <div class="element_Analytics_head">
        <p>Количество неудачных платежей</p>
      </div>

      <div class="element_Analytics_section">
        <div class="element_Analytics_section_chart">
        </div>
        <div class="element_Analytics_section_menu">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import RevenueChart from "../../assets/charts/RevenueChart";
import CalendarRevenue from "../../assets/alendars/CalendarRevenue";
import {mapActions} from 'vuex'
export default {
  name: "Analytics",
  data() {
    return {
      calendar:''
    };
  },
  components:{
    RevenueChart, CalendarRevenue
  },

  beforeMount() {
      this.getUsers()
  },
  methods:{
    ...mapActions('userManagement', ['getUsers']),
    addDateInf(data) {
      this.calendar = data.calendar
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.analytics_Section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 0 5vh 0;
}
.element_Analytics {
  height: 70vh;
  width: 98%;
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
    height: 30%;
    width: 98%;
    margin: 3vh ;
}
.element_Analytics_Row_One {
  width: 40%;
  height: 60vh;
  background: #0D121A;
  border-radius: 10px;
  margin-right: 3vh;
}
.element_Analytics_Row_Two{
  width: 70% ;
  height: 60vh;
  /*margin: 3vh;*/
  background: #0D121A;
  border-radius: 10px;
}
.element_Analytics_head{
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
}
.element_Analytics_head{
  margin: 0 3vh 3vh 3vh;
}
.element_Analytics_section{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: stretch;
  justify-content: space-between;
  height: 95%;
  width: 100%;
}
.element_Analytics_section_chart{
  width: 70%;
  height: 89%;
  border-radius: 10px;
  background: #080D16;
  margin: 0 3vh 0 3vh;
}
.element_Analytics_section_menu{
  width: 30% ;
  height: 89%;
  border-radius: 10px;
  background: #080D16;
  margin: 0 3vh 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>