export default {
    namespaced: true,
    state: {
        renewalPriceChart: []
    },

    getters: {
        renewalPriceChart(state) {
            return state.renewalPriceChart
        }
    },

    mutations: {
        COUNT_CUSTOMERS: (state, renewalPriceChart) => {
            state.renewalPriceChart = [renewalPriceChart.renewal3000, renewalPriceChart.renewal2500, renewalPriceChart.renewal2000, renewalPriceChart.renewal1500]
        }
    },

    actions: {
        COUNT_CUSTOMERS: (ctx, users) => {
            let renewalPriceChart = {
                renewal1500: 0,
                renewal2000: 0,
                renewal2500: 0,
                renewal3000: 0,
            }
            for (const user of users) {
                switch (user.licenceTypeDTO.renewalPrice) {
                    case 3000 : renewalPriceChart.renewal3000++
                        break;
                    case 2500 : renewalPriceChart.renewal2500++
                        break;
                    case 2000: renewalPriceChart.renewal2000++
                        break
                    case 1500: renewalPriceChart.renewal1500++
                }
            }
            ctx.commit('COUNT_CUSTOMERS',renewalPriceChart)

        }
    }
}