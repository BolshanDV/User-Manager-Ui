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
        console.log(response)
        ctx.commit('DROP_ANALYTICS', response)
        ctx.dispatch('DATA_SUCFUL_PAYMENTS_CHART')
        ctx.commit('SUMM_KEY')
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
    },

    DATA_SUCFUL_PAYMENTS_CHART: (ctx) => {
        const obj_payments = {
            successful: ctx.state.dropAnalytics.licences.length,
            unsuccessful: ctx.state.dropAnalytics.canceledPayments
        }

        let keyBindFalseCounter = 0
        let keyBindTrueCounter = 0

        for (let item of ctx.state.dropAnalytics.licences) {
            switch (item.keyBind) {
                case false: {
                    keyBindFalseCounter++
                    break
                }
                case true: {
                    keyBindTrueCounter++
                    break
                }
            }
        }

        const obj_keyBind = {
            keyBindFalse: keyBindFalseCounter,
            keyBindTrue: keyBindTrueCounter
        }
        console.log(obj_keyBind)
        ctx.commit('LINKED_KEYS_FOR_CHART', obj_keyBind)
        ctx.commit('CHART_PAYMENTS', obj_payments)

    }

}
