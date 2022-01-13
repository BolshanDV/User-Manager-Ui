export default {
    DROP_ANALYTICS: (state, data) => {
        state.dropAnalytics = data.licences
        console.log(state.dropAnalytics)
    }
}
