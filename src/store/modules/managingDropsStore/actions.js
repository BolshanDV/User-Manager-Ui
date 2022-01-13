import dateIntervalFilter from '../sideBarStore/dateIntervalFilter';
import axios from "axios";
// import Vue from "vue";

export default {

    CREATE_DROP: async(ctx, obj) => {
        const mainObj  = {
            password: obj.password,
            quantity: obj.quantity,
            licenceType: {
            id: obj.selectedLicense.idRole
        },
            autoRestock: obj.autoRestock,
            deleteAfterSoldOut: obj.deleteAfterSoldOut,
            mustBind: obj.mustBind,
            creationDate: await dateIntervalFilter.CREATURE_DATE(new Date())
        }

        await ctx.dispatch('CREATE_DROP_API_REQUEST', mainObj)

    },

    CREATE_DROP_API_REQUEST: async (ctx, obj) => {
        return await axios
            .post('http://localhost:8082/api/v1/drop/', obj, {
                withCredentials: true
            })
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    },

    CALL_FUNC_FOR_DROP_ANALYTICS: async (ctx) => {
        let response =  await ctx.dispatch('GET_DROP_ANALYTICS')
        ctx.commit('DROP_ANALYTICS', response)
    },

    GET_DROP_ANALYTICS: async () => {
        return await axios
            .get(`http://localhost:8082/api/v1/drop/?password=sinda`, {
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
