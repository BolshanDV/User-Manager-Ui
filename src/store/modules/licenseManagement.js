import axios from "axios";

export default {
    namespaced: true,
    state:{
        prices:[2500, 2000, 1500, 1000, 0],
        licenseFlag: false,
        selectedLicense: 'License type',
        renewalDate: '',
    },

    getters: {
        prices(state){
            return state.prices
        },

        licenseFlag(state) {
            return state.licenseFlag
        },

        selectedLicense(state) {
            return state.selectedLicense
        },

        renewalDate(state) {
            return state.renewalDate
        }


    },

    mutations: {
        LICENSE_FLAG: (state) => {
            state.licenseFlag = !state.licenseFlag
        },

        SELECTED_LICENSE: (state, id) => {
            state.selectedLicense = state.prices[id]
            state.licenseFlag = !state.licenseFlag
        }

    },

    actions: {
        LICENSE_FLAG: (ctx) => {
            ctx.commit('LICENSE_FLAG')
        },

        SELECTED_LICENSE: (ctx, id) => {
            ctx.commit('SELECTED_LICENSE', id)
        },

        CREATE_LICENCE: async ({dispatch}, {renewalDate, selectedLicense}) => {
             renewalDate = await dispatch('sideBar/CREATURE_DATE', renewalDate, { root: true })
             const obj = {
                 renewalDate:  renewalDate + ' 17:00:00.000000',
                 licenceTypeId : selectedLicense
            }
            const status = await dispatch('CREATE_LICENCE_REQUEST', obj)
            if (status === 202) dispatch('userManagement/getUsers')

        },

        CREATE_LICENCE_REQUEST: async (ctx, obj) => {
            return await axios
                .post('http:localhost:8082/api/v1/licences/', obj)
                .then(response =>
                    response.status
                )
                .catch(error => {
                    console.log("There was an error!", error);
                });
        },

        GET_LICENCE_REQUEST: async () => {
            const licences = await axios
                .get('http://localhost:8082/api/v1/licences/')
                .then(resObj => {
                    return resObj.data;
                })
                .catch(error => {
                    console.log(error);
                });
            console.log(licences)
        },




    }
}