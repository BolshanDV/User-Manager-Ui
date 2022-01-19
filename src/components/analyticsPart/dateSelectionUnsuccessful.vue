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
          Отмены подписок за ук.период:
        </div>
        <div class="total_income">
          {{totalIncome}}
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
  name: "dateSelectionUnsuccessful",
  data: function() {
    return {
      calendar: new Date(),
      title: 'dateSelectionUnsuccessful'
    };
  },
  computed: {
    ...mapGetters('dateSelectionUnsuccessful', ['calendarIntervalFlag', 'monthWeek', 'calendarDateInterval', 'componentKey', 'totalIncome', 'calendarEndStart'])
  },
  methods: {
    ...mapActions('dateSelectionUnsuccessful', ['OUTPUT_INTERVAL', 'CHANGE_CALENDAR_DATE', 'WEEK_REVENUE'])
  },
  watch: {
    calendar: function (){
      this.OUTPUT_INTERVAL({calendar: this.calendar, title: this.title})
    }
  },
  beforeMount() {
    this.WEEK_REVENUE({title: 'dateSelectionUnsuccessful', interval: 7})
  },
}
</script>

<style scoped>
/*@import "../../assets/style/dateSelectionStyle.css";*/
</style>
