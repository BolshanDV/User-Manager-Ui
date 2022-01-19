<template>
  <div class="calendarParams">
    <div class="head_title">Выбор периода</div>
    <div class="calendarParams" >
      <div>
        <div
            class="choice_date"
            v-show="!calendarIntervalFlag"
        >
          <div class="btn_interval"
               @click="WEEK_REVENUE({title, interval: 7})">
            <!--             :class="{selected: monthWeek}"-->
            Неделя
          </div>
          <div class="btn_interval"
               @click="WEEK_REVENUE({title, interval: 30})">
            <!--             :class="{ selected: !monthWeek }"-->
            Месяц
          </div>
        </div>
        <div class="choice_date"
             v-show="!calendarIntervalFlag"
        >
          <div class="calendar_interval selected"
               @click="CHANGE_CALENDAR_DATE"
          >
            <div class="calendarParamsInterval">
              <div class="item">{{ calendarEndStart.startDate}}</div>
              <div class="item">-</div>
              <div class="item">{{calendarEndStart.endDate}}</div>
              <div><img class="calendar" src="../../assets/photo/icons/calendar.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="payments_period"
          v-show="!calendarIntervalFlag"
      >
        <div class="direction">
          Пок. уд. польз. за ук. период:
        </div>
        <div class="total_income">
          {{departedUsersData.retentionPercentage}}%
        </div>
      </div>
      <transition name="fade">
        <v-date-picker
            v-model="calendar"
            :value = "null"
            color="blue"
            is-dark
            is-range
            v-show="calendarIntervalFlag"
            :key="componentKey"
        >
        </v-date-picker>
      </transition>


    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "dateSelectionDeductions",
  data: function() {
    return {
      calendar: new Date(),
      title: 'dateSelectionCancelled'
    };
  },
  computed: {
    ...mapGetters('calendarDeductions', ['calendarIntervalFlag', 'monthWeek', 'calendarDateInterval', 'componentKey', 'departedUsersData', 'calendarEndStart'])
  },
  methods: {
    ...mapActions('calendarDeductions', ['OUTPUT_INTERVAL', 'CHANGE_CALENDAR_DATE', 'CHANGE_WW_MM', 'WEEK_REVENUE', 'DOUBLE_FUNC_WEEK_REVENUE', 'MONTH_REVENUE'])
  },
  watch: {
    calendar: function (){
      this.OUTPUT_INTERVAL({calendar: this.calendar, title: this.title})
    }
  },
  beforeMount() {
    this.WEEK_REVENUE({title: 'dateSelectionDeductions', interval: 7})
  },
}
</script>

<style scoped>
/*.head_title{*/
/*  display: block;*/
/*  flex-direction: row;*/
/*  justify-content: flex-start;*/
/*  align-content: center;*/
/*  margin: 10px 15px 20px 15px;*/
/*  font-weight: 500;*/
/*  font-size: 18px;*/
/*  line-height: 21px;*/
/*}*/
/*.calendarParams{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: space-between;*/
/*  align-content: center;*/
/*  height: auto;*/
/*}*/
/*.calendarParamsInterval{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-around;*/
/*  align-content: center;*/
/*}*/
/*.choice_date{*/
/*  background: #161E29;*/
/*  border-radius: 5px;*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-around;*/
/*  align-items: center;*/
/*  width: 270px;*/
/*  height: 45px;*/
/*  margin: 0 0 15px 0;*/
/*}*/
/*.btn_interval{*/
/*  border-radius: 3px;*/
/*  width: 17vh;*/
/*  height: 40px;*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  !*padding: 10px;*!*/
/*  margin: 3px ;*/
/*}*/
/*.calendar_interval{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-around;*/
/*  align-items: center;*/
/*  width: 265px;*/
/*  height: 40px;*/
/*  border-radius: 3px;*/
/*  margin: 3px ;*/
/*}*/
/*.selected{*/
/*  background: #272D36;*/
/*}*/
/*.selectedMonth{*/
/*  background-color: #5899db;*/
/*}*/
/*.payments_period{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  margin-top: 25%;*/
/*}*/
/*.item{*/
/*  margin: 3px;*/
/*}*/
/*.total_income{*/
/*  font-weight: 500;*/
/*  font-size: 50px;*/
/*  line-height: 57px;*/
/*}*/
/*.direction{*/
/*  font-weight: 500;*/
/*  font-size: 14px;*/
/*  line-height: 16px;*/
/*  color: #CCCCCC;*/
/*}*/
/*.calendar{*/
/*  width: 18px;*/
/*  height: 18px;*/
/*  margin-left: 7px;*/
/*}*/
</style>
