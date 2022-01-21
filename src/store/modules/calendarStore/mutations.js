export default {
    RECEPTION_DATE_FORMAT: (state, dateFormat ) => {
        state.dateFormat = dateFormat
        state.componentKey ++
    },

    CHANGE_CALENDAR_DATE: (state) => {
        state.calendarIntervalFlag = !state.calendarIntervalFlag
    },

    CHANGE_WW_MM(state) {
        state.monthWeek = !state.monthWeek
    },

    CALENDAR_DATE_INTERVAL: (state, obj) => {
        state.calendarDateInterval = obj
        state.componentKey++
    },

    GET_TOTAL_INCOME: (state, totalIncome) => {
        state.totalIncome = totalIncome
    },

    CALENDAR_END_START: (state, obj) => {
        state.calendarEndStart = obj
    },

    COUNTING_DEPARTED_USERS: (state, obj) => {
        state.departedUsersData = obj
    },

    UPDATE_CHART: (state) => {
        state.componentKey++
    }
}
