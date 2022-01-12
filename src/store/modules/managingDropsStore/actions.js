import dateIntervalFilter from '../sideBarStore/dateIntervalFilter';
import axios from "axios";

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

    GET_INF: async (ctx) => {
        const response =  await ctx.dispatch('DROP_ANALYTICS')
        console.log(response)
    },

    DROP_ANALYTICS: async () => {
        return await axios
            .get(`http://localhost:8082/api/v1/drop/?password=sinda`, {
                withCredentials: true
            })
            .then(response => {
                response.status
            }
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    }

}
