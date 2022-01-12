export default {
    namespaced: true,
    state: {
        renewalPriceChart: [],
    },

    getters: {
        renewalPriceChart(state) {
            return state.renewalPriceChart
        }
    },

    mutations: {
        COUNT_CUSTOMERS: (state, renewalPriceChart) => {
            state.renewalPriceChart = [renewalPriceChart.renewal10000, renewalPriceChart.renewal5000]
        }
    },

    actions: {
        COUNT_CUSTOMERS: (ctx, users) => {
            let renewalPriceChart = {
                renewal10000: 0,
                renewal5000: 0,
            }
            for (const user of users) {
                switch (user.licenceTypeDTO.renewalPrice) {
                    case 10000 : renewalPriceChart.renewal10000++
                        break;
                    case 5000 : renewalPriceChart.renewal5000++
                        break;
                }
            }
            ctx.commit('COUNT_CUSTOMERS',renewalPriceChart)
        },

    }
}
