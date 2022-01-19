import axios from "axios";
import dateIntervalFilter from '../sideBarStore/dateIntervalFilter';

export default {
    LICENSE_FLAG: (ctx) => {
        ctx.commit('LICENSE_FLAG')
    },

    SELECTED_LICENSE: (ctx, id) => {
        ctx.commit('SELECTED_LICENSE', id)
    },

    CREATE_LICENCE: async ({dispatch}, {renewalDate, selectedLicense}) => {
        renewalDate = await dateIntervalFilter.CREATURE_DATE(renewalDate)
        const obj = {
            renewalDate:  renewalDate + ' 00:00:00.000000',
            licenceTypeId : selectedLicense.idRole
        }
        const status = await dispatch('CREATE_LICENCE_REQUEST', obj)
        if (status === 202) dispatch('userManagement/getUsers')

    },

    CREATE_LICENCE_REQUEST: async (ctx, obj) => {
        return await axios
            .post('http://localhost:8082/api/v1/licences/', obj, {
                withCredentials: true
            })
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error)
            });
    },

    LATEST_ADDITION: async (ctx) => {
        const response = await axios
            .get('http://localhost:8082/api/v1/licences/', {
                withCredentials: true
            })
            .then(resObj => {
                return {
                    objects: resObj.data,
                    status: resObj.status
                };
            })
            .catch(error => {
                console.log(error)
            });
        ctx.commit('UPDATE_LICENCES', response.objects)
    },

}
