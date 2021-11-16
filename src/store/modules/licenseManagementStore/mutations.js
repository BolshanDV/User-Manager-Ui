export default {
    LICENSE_FLAG: (state) => {
        state.licenseFlag = !state.licenseFlag
    },

    SELECTED_LICENSE: (state, id) => {
        state.selectedLicense = state.prices[id]
        state.licenseFlag = !state.licenseFlag
    },

    UPDATE_LICENCES: (state, latestAdd) => {
        state.latestLicences = latestAdd
    }
}