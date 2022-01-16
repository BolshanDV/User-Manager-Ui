export default {
    DROP_ANALYTICS: (state, data) => {
        state.dropAnalytics = data
    },

    CHART_PAYMENTS: (state, obj) => {
        state.chart_data_payments = obj
    },

    SUMM_KEY: (state) =>  {
        state.key_update++
    },

    LINKED_KEYS_FOR_CHART: (state, obj) => {
        state.linkedKeysChart = obj
        console.log(state.linkedKeysChart)
    }
}
