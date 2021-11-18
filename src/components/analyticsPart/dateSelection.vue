<template>
  <div class="calendarParams">
    <div class="head_title">Выбор периода</div>
    <div class="calendarParams" >
      <div class="choice_date">
        <div class="btn_interval"
             @click="DOUBLE_FUNC_WEEK_REVENUE"
             :class="{selected: monthWeek}"
        >
          Неделя
        </div>

        <div class="btn_interval"
             @click="CHANGE_WW_MM"
             :class="{ selected: !monthWeek }"
        >
          Месяц
        </div>
      </div>
      <div class="choice_date">
        <div class="calendar_interval"
             @click="CHANGE_CALENDAR_DATE"
             :class="{selectedMonth: calendarIntervalFlag}"
        >
          <div v-show="!calendarIntervalFlag">Календарь</div>
          <div v-show="calendarIntervalFlag"
               class="calendarParams"
          >
            <div class="calendarParamsInterval">
              <div class="item">{{ calendarDateInterval.startDate}}</div>
              <div class="item">-</div>
              <div class="item">{{calendarDateInterval.endDate}}</div>
            </div>
            <div class="calendarParamsInterval">SAVE</div>
          </div>


        </div>
      </div>
      <transition name="fade">
      <CalendarRevenue
          v-show="calendarIntervalFlag"
          :key="componentKey"
      />
      </transition>
      <div class="payments_period"></div>

    </div>

  </div>
</template>

<script>
import CalendarRevenue from '../../assets/calendars/CalendarRevenue'
import {mapGetters, mapActions} from 'vuex'
export default {
name: "dateSelection",
  components: {
    CalendarRevenue
  },
  computed: {
    ...mapGetters('calendar', ['calendarIntervalFlag', 'monthWeek', 'calendarDateInterval','componentKey'])
  },
  methods: {
    ...mapActions('calendar', ['CHANGE_CALENDAR_DATE', 'CHANGE_WW_MM', 'WEEK_REVENUE', 'DOUBLE_FUNC_WEEK_REVENUE'])

  }
}
</script>

<style scoped>

.head_title{
  display: block;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}
.calendarParams{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.calendarParamsInterval{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.choice_date{
  background: #161E29;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 270px;
  height: 50px;
  margin: 0 0 8px 0;
  /*padding: 10px;*/
}
.btn_interval{
  border-radius: 3px;
  width: 17vh;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*padding: 10px;*/
  margin: 3px ;
}
.calendar_interval{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 265px;
  height: 45px;
  border-radius: 3px;
  margin: 3px ;
}
.selected{
  background: #272D36;
}
.selectedMonth{
  background-color: #5899db;
}
.payments_period{

}
.item{
  margin: 3px;
}
</style>