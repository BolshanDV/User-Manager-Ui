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
    },

    DROP_LIST_DATA: (state, obj) => {
        state.dropList = obj
    },
    STATUS_LINK_DROP: (state, obj) => {
        state.status_drop = obj
    }
}
