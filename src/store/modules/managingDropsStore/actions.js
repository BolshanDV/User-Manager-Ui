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
            .post('http://localhost:8082/api/v1/drop/create', obj, {
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
        let drop_list = await ctx.dispatch('GET_LIST_DROP')
        ctx.commit('DROP_LIST_DATA', drop_list)
        if (drop_list.length !== null) {
            let lastDrop = drop_list.length - 1
            ctx.dispatch('GET_DATA_DROP_INFO', drop_list[lastDrop])
        }
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

        ctx.commit('LINKED_KEYS_FOR_CHART', obj_keyBind)
        ctx.commit('CHART_PAYMENTS', obj_payments)
    },

    DELETE_LICENCE: async (ctx, id) => {
        console.log(id)
        const status = await axios
            .delete(`http://localhost:8082/api/v1/licences/${id}`,{
                withCredentials: true
            })
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
        if (status === 202) ctx.dispatch('CALL_FUNC_FOR_DROP_ANALYTICS')
    },

    GET_LIST_DROP: async () => {
        return await axios
            .get(`http://localhost:8082/api/v1/drop/`, {
                withCredentials: true
            })
            .then(response =>
                response.data
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    },

    GET_DATA_DROP_INFO: async (ctx, item ) => {
        const obj = {
            creationDate: item.creationDate,
            password: item.password,
        }
        const inf = await axios
            .post('http://localhost:8082/api/v1/drop/check', obj, {
                withCredentials: true
            })
            .then(response =>
                response.data
            )
            .catch(error => {
                console.log("There was an error!", error);
            });

        ctx.commit('DROP_ANALYTICS', inf)
        ctx.commit('STATUS_LINK_DROP', item)
        ctx.dispatch('DATA_SUCFUL_PAYMENTS_CHART')
        ctx.commit('SUMM_KEY')
    }

}
