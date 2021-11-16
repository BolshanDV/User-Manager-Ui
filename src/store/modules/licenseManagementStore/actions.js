import axios from "axios";

export default {
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
            .post('http://localhost:8082/api/v1/licences/', obj, {
                withCredentials: true
            })
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    },

    LATEST_ADDITION: (ctx, users) => {
        let latestAdd = users.slice().reverse()
        latestAdd = latestAdd.slice(0,10)
        ctx.commit('UPDATE_LICENCES', latestAdd)
    }

}