import moment from "moment/moment";
import objectCreator from "./objectCreator";
import axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        dateFormat: [],
        componentKey: 0,
        calendarIntervalFlag: false,
        monthWeek: true,
        calendarDateInterval: {},
        totalIncome: null,
        calendarEndStart: {},
        departedUsersData: {}
    }),

    getters: {
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
        },

        departedUsersData(state) {
            return state.departedUsersData
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
        },

        COUNTING_DEPARTED_USERS: (state, obj) => {
            state.departedUsersData = obj
        },

        UPDATE_CHART: (state) => {
            state.componentKey++
        }
    },

    actions: {
        WEEK_REVENUE: async (ctx, obj_info) => {
            let lastWeek = moment().subtract(obj_info.interval, 'days').startOf('day')
            let nowDate = new Date()

            const obj= await objectCreator.CREATURE_DATE_INTERVAL_FOR_API(lastWeek, nowDate)
            let dataIntervalFromApi
            switch (obj_info.title) {
                case 'dateSelectionRevenue': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.incomeList, title: obj_info.title})
                    ctx.commit('GET_TOTAL_INCOME', dataIntervalFromApi.totalIncome)
                    break
                }
                case 'dateSelectionDeductions': {
                    dataIntervalFromApi = await ctx.dispatch('RECEPTION_DATA_DEDUCTIONS', obj)
                    ctx.commit('COUNTING_DEPARTED_USERS', dataIntervalFromApi)
                    ctx.commit('UPDATE_CHART')
                    break
                }
                case 'dateSelectionUnsuccessful': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.canceledPaymentDTOS, title: obj_info.title })
                    ctx.commit('UPDATE_CHART')
                    let successfulPayments = 0
                    for (const item of dataIntervalFromApi.canceledPaymentDTOS) {
                        successfulPayments += item.qty
                    }
                    ctx.commit('GET_TOTAL_INCOME', successfulPayments)
                    break
                }
                case 'dateSelectionSuccessfulPayments': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.incomeList, title: obj_info.title })
                    ctx.commit('UPDATE_CHART')

                    let successfulPayments = 0
                    for (const item of dataIntervalFromApi.incomeList) {
                        successfulPayments += item.qty
                    }
                    ctx.commit('GET_TOTAL_INCOME', successfulPayments)
                    break
                }
                case 'dateSelectionCancelled': {
                    dataIntervalFromApi = await ctx.dispatch('RECEPTION_DATA_DEDUCTIONS', obj)
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.listMetrics, title: obj_info.title })
                    ctx.commit('UPDATE_CHART')
                    ctx.commit('GET_TOTAL_INCOME', dataIntervalFromApi.quantityIncomeUsers)
                }
            }
            ctx.commit('CHANGE_WW_MM')
            ctx.commit('CALENDAR_END_START', obj)
        },

        CREATE_DATA_FOR_CHART: (ctx, revenueInterval) => {
            const convertedObj = () => {
                const labels = [];
                const moneys = [];

                if (revenueInterval.title === 'dateSelectionRevenue'){
                    for (const oneDay of revenueInterval.data) {
                        labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2])
                        moneys.push(oneDay.oneDayIncome)
                    }
                }
                if (revenueInterval.title === 'dateSelectionUnsuccessful'){
                    for (const oneDay of revenueInterval.data) {
                        labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2])
                        moneys.push(oneDay.qty)
                    }
                }
                if (revenueInterval.title === 'dateSelectionSuccessfulPayments') {
                    for (const oneDay of revenueInterval.data) {
                        labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2])
                        moneys.push(oneDay.qty)
                    }
                }
                if (revenueInterval.title === 'dateSelectionCancelled') {
                    for (const oneDay of revenueInterval.data) {
                        labels.push(oneDay.date.split('-')[1] + '-' + oneDay.date.split('-')[2])
                        moneys.push(oneDay.departedUsers)
                    }
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

        OUTPUT_INTERVAL: async (ctx, calendarObj) => {
            const obj= await objectCreator.CREATURE_DATE_INTERVAL_FOR_API(calendarObj.calendar.start, calendarObj.calendar.end)
            let dataIntervalFromApi
            switch (calendarObj.title) {
                case 'dateSelectionRevenue': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.incomeList, title: calendarObj.title})
                    ctx.commit('GET_TOTAL_INCOME', dataIntervalFromApi.totalIncome)
                    ctx.commit('UPDATE_CHART')
                    break
                }
                case 'dateSelectionDeductions': {
                    dataIntervalFromApi = await ctx.dispatch('RECEPTION_DATA_DEDUCTIONS', obj)
                    ctx.commit('COUNTING_DEPARTED_USERS', dataIntervalFromApi)
                    ctx.commit('UPDATE_CHART')
                    break
                }
                case 'dateSelectionUnsuccessful': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.canceledPaymentDTOS, title: calendarObj.title })
                    ctx.commit('UPDATE_CHART')
                    break
                }
                case 'dateSelectionSuccessfulPayments': {
                    dataIntervalFromApi = await ctx.dispatch('sideBar/ANALYTICS', obj, { root: true})
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.incomeList, title: calendarObj.title })
                    ctx.commit('UPDATE_CHART')
                    break
                }
                case 'dateSelectionCancelled': {
                    dataIntervalFromApi = await ctx.dispatch('RECEPTION_DATA_DEDUCTIONS', obj)
                    ctx.dispatch('CREATE_DATA_FOR_CHART', {data: dataIntervalFromApi.listMetrics, title: calendarObj.title })
                    ctx.commit('GET_TOTAL_INCOME', dataIntervalFromApi.quantityDepartedUsers)
                    ctx.commit('UPDATE_CHART')
                }
            }
            ctx.commit('CHANGE_WW_MM')
            ctx.commit('CALENDAR_END_START', obj)
            ctx.commit('CHANGE_CALENDAR_DATE')
        },

        RECEPTION_DATA_DEDUCTIONS: async (ctx, obj) => {
            return await axios
                .post(`${process.env.VUE_APP_URL}/api/v1/members/retention`, obj,{
                    withCredentials: true
                })
                .then(response =>
                    response.data
                )
                .catch(error => {
                    console.log("There was an error!", error);
                });
        }

    }
}
