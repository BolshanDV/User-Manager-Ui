import axios from "axios";
import dateIntervalFilter from "./dateIntervalFilter";

export default {
    namespaced: true,
    state: {
        analytics: [],
        nowDate: [],
        CountMember: '',
        countLifetime: '',
        links:[
            {title:'Аналитика', url:'/analytics', image: 'free-icon-google-analytics-732035.png', exact: true},
            {title:'Управление дропами', url:'/managing', image: 'free-icon-money-493417.png'},
            {title:'Управление пользователями', url:'/user', image: 'free-icon-user-634011.png'},
            {title:'Управление лицензиями', url:'/license', image: 'door-key.png'},
        ]
    },

    getters: {
        links(state) {
            return state.links
        },

        analytics(state) {
            return state.analytics
        },

        nowDate(state) {
            return state.nowDate
        },

        CountMember(state) {
            return state.CountMember
        },

        countLifetime(state) {
            return state.countLifetime
        }
    },

    mutations: {
        UPDATE_ANALYTICS(state, {analytics, now}) {
            state.analytics = analytics
            state.nowDate = now
        },

        UPDATE_MEMBERS: (state, {newCountMember, newCountLifetime}) => {
            state.countLifetime = newCountLifetime
            state.CountMember = newCountMember
        }
    },

     actions: {

         async postAnalytics(ctx) {
             let now = new Date()

             now = await dateIntervalFilter.CREATURE_DATE(now)

             const obj = {
                 startDate: now,
                 endDate: now
             }

             const analytics = await ctx.dispatch('ANALYTICS', obj)
             ctx.commit('UPDATE_ANALYTICS', {analytics, now})

         },

         ANALYTICS: async (ctx,obj) => {
             return  await axios
                 .get(`${process.env.VUE_APP_URL}/api/v1/payments/?startDate=${obj.startDate}&endDate=${obj.endDate}`, {
                     withCredentials: true
                     }
                 )
                 .then(resObj => {
                     return resObj.data;
                 })
                 .catch( error => {
                     ctx.dispatch('toastedStore/ADDING_ERROR', error.response, {root: true})
                     console.log(error);
                 });
         },

         COUNTING_MEMBERS: ({commit}, users) => {
             let newCountMember = 0
             let newCountLifetime = 0
             for (const user of users) {
                 switch (user.licenceTypeDTO.role){
                     case "Member": {
                         newCountMember++
                         break;
                     }
                     case "Lifetime": {
                         newCountLifetime++
                         break
                     }
                 }
             }
             commit('UPDATE_MEMBERS', {newCountMember, newCountLifetime})
         },
     }
}
