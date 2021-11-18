import moment from "moment/moment";
export default {
    namespaced: true,
    state: {
        dateFormat: [],
        componentKey: 0,
        calendarIntervalFlag: false,
        monthWeek: true,
        calendarDateInterval: {}
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
            console.log(state.calendarDateInterval)
        },
    },

    actions: {
        WEEK_REVENUE: async (ctx) => {
            let lastWeek = new Date(moment().subtract(4, 'week').endOf('week').format())
            let nowDate = new Date()
            const obj= {
                startDate: await ctx.dispatch('sideBar/CREATURE_DATE', lastWeek, { root: true}),
                endDate: await ctx.dispatch('sideBar/CREATURE_DATE', nowDate, { root: true}),
            }
            console.log(obj)
            const revenueInterval = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
            console.log('revenueInterval')
            console.log(revenueInterval)

            const convertedObj = () => {
                const labels = [];
                const moneys = [];

                for (const oneDay of revenueInterval.incomeList) {
                    labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2]);
                    moneys.push(oneDay.oneDayIncome);
                }

                return {
                    labels: labels,
                    moneys: moneys
                }
            }

            console.log(convertedObj())

            ctx.commit('CALENDAR_DATE_INTERVAL', convertedObj());
        },
        // WEEK_REVENUE: (ctx) => {
        //     let lastWeek = new Date(moment().subtract(2, 'week').endOf('week').format())
        //     let nowDate = new Date()
        //     const obj= {
        //         start: lastWeek,
        //         end: nowDate,
        //     }
        //     console.log('Мы тут')
        //     ctx.dispatch('getDatesBetweenDates', obj)
        // },
        //  getDatesBetweenDates: async (ctx, calendar) => {
        //      console.log(calendar)
        //     const obj= {
        //         startDate: new Date(calendar.start),
        //         endDate: new Date(calendar.end)
        //     }
        //     let dates = []
        //     const theDate = new Date(obj.startDate)
        //     while (theDate < obj.endDate) {
        //         dates = [...dates, new Date(theDate)]
        //         theDate.setDate(theDate.getDate() + 1)
        //     }
        //     dates = [...dates, obj.endDate]
        //     let dateFormat = []
        //     for (const date of dates) {
        //        dateFormat.push(new Intl.DateTimeFormat('en-GB').format(date))
        //     }
        //
        //     ctx.commit('RECEPTION_DATE_FORMAT', dateFormat)
        //
        //     // const revenue = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
        //     //  console.log(revenue)
        // },

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
            console.log(calendar)

            const obj = {
                startDate: await ctx.dispatch('sideBar/CREATURE_DATE', calendar.start, { root: true}),
                endDate: await ctx.dispatch('sideBar/CREATURE_DATE', calendar.end, { root: true})
            }
            console.log(obj)
            ctx.commit('CALENDAR_DATE_INTERVAL', obj)

            const revenueInterval = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
            console.log(revenueInterval)

        }

    }
}