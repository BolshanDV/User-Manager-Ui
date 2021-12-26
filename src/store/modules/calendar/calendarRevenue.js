import moment from "moment/moment";
export default {
    namespaced: true,
    state: {
        dateFormat: [],
        componentKey: 0,
        calendarIntervalFlag: false,
        monthWeek: true,
        calendarDateInterval: {},
        totalIncome: null,
        calendarEndStart: {}
    },

    getters:{
        dateFormat(state) {
            return state.dateFormat
        },

        componentKey(state) {
            return state.componentKey
        },

        calendarIntervalFlag(state) {
            return state.calendarIntervalFlag
        },

        monthWeek(state) {
            return state.monthWeek
        },

        calendarDateInterval(state) {
            return state.calendarDateInterval
        },

        totalIncome(state) {
            return state.totalIncome
        },

        calendarEndStart(state) {
            return state.calendarEndStart
        }

    },

    mutations: {
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
            console.log(state.calendarEndStart)
        }
    },

    actions: {

        WEEK_REVENUE: async (ctx) => {
            let lastWeek = moment().subtract(7, 'days').startOf('day')
            let nowDate = new Date()
            const obj= {
                startDate: await ctx.dispatch('sideBar/CREATURE_DATE', lastWeek, { root: true}),
                endDate: await ctx.dispatch('sideBar/CREATURE_DATE', nowDate, { root: true})
            }
            const revenueInterval = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})

            ctx.dispatch('CREATE_DATA_FOR_CHART', revenueInterval)
            ctx.commit('CALENDAR_END_START', obj)
            ctx.dispatch('GET_TOTAL_INCOME', revenueInterval.totalIncome)

        },

        CREATE_DATA_FOR_CHART: (ctx, revenueInterval) => {
            const convertedObj = () => {
                const labels = [];
                const moneys = [];

                for (const oneDay of revenueInterval.incomeList) {
                    labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2])
                    moneys.push(oneDay.oneDayIncome)

                }

                return {
                    labels: labels,
                    moneys: moneys
                }
            }
            ctx.commit('CALENDAR_DATE_INTERVAL', convertedObj())
        },

        CHANGE_CALENDAR_DATE: (ctx) => {
            ctx.commit('CHANGE_CALENDAR_DATE')

        },

        CHANGE_WW_MM: (ctx) => {
            ctx.commit('CHANGE_WW_MM')
        },

        DOUBLE_FUNC_WEEK_REVENUE: (ctx) => {
            ctx.dispatch('CHANGE_WW_MM')
            ctx.dispatch('WEEK_REVENUE')
        },

        OUTPUT_INTERVAL: (ctx, calendar) => {
            ctx.dispatch('GET_DETAIL_PAYMENTS_ANALYTIC', calendar)
        },

        GET_DETAIL_PAYMENTS_ANALYTIC: async (ctx, calendar) => {

            const obj = {
                startDate: await ctx.dispatch('sideBar/CREATURE_DATE', calendar.start, { root: true}),
                endDate: await ctx.dispatch('sideBar/CREATURE_DATE', calendar.end, { root: true})
            }

            ctx.commit('CALENDAR_END_START', obj)
            const revenueInterval = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})

            ctx.dispatch('CREATE_DATA_FOR_CHART', revenueInterval)
            ctx.dispatch('GET_TOTAL_INCOME', revenueInterval.totalIncome)
            ctx.dispatch('CHANGE_CALENDAR_DATE')
        },

        GET_TOTAL_INCOME: (ctx, totalIncome) => {
            ctx.commit('GET_TOTAL_INCOME', totalIncome)
        },

        MONTH_REVENUE: async (ctx) => {
            let month = moment().subtract(30, 'days').startOf('day')
            let nowDate = new Date()

            const obj= {
                startDate: await ctx.dispatch('sideBar/CREATURE_DATE', month, { root: true}),
                endDate: await ctx.dispatch('sideBar/CREATURE_DATE', nowDate, { root: true})
            }
            const revenueInterval = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})

            ctx.dispatch('CREATE_DATA_FOR_CHART', revenueInterval)
            ctx.commit('CALENDAR_END_START', obj)
            ctx.dispatch('GET_TOTAL_INCOME', revenueInterval.totalIncome)

        }
    }
}