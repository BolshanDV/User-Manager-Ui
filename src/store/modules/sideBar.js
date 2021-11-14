import axios from "axios";

export default {
    namespaced: true,
    state: {
        analytics: [],
        nowDate: [],
        countCustomer: '',
        countLifetime: '',
        links:[
            {title:'Аналитика', url:'/', image: 'free-icon-google-analytics-732035.png', exact: true},
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

        countCustomer(state) {
            return state.countCustomer
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

        UPDATE_MEMBERS: (state, {newCountCustomer, newCountLifetime}) => {
            state.countLifetime = newCountLifetime
            state.countCustomer = newCountCustomer
        }
    },

     actions: {

        CREATURE_DATE: async (ctx, date) => {

            let newDate = new Date(date)
            let dd = newDate.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = newDate.getMonth() - 1;
            if (mm < 10) mm = '0' + mm;

            let yy = newDate.getFullYear();
            newDate = yy + '-' + mm + '-' + dd

            return newDate
        },

         async postAnalytics(ctx) {
             let now = new Date()

             now = await ctx.dispatch('CREATURE_DATE', now)

             const obj = {
                 startDate: now,
                 endDate: now
             }

             const analytics = await ctx.dispatch('ANALYTICS', obj)
             ctx.commit('UPDATE_ANALYTICS', {analytics, now})

         },

         ANALYTICS: async (ctx,obj) => {
             return  await axios
                 .post('http://localhost:8082/api/v1/payments/', obj, {
                     withCredentials: true
                     }
                 )
                 .then(resObj => {
                     return resObj.data;
                 })
                 .catch(error => {
                     console.log(error);
                 });
         },

         COUNTING_MEMBERS: ({commit}, users) => {
             let newCountCustomer = 0
             let newCountLifetime = 0
             for (const user of users) {
                 switch (user.licenceTypeDTO.role){
                     case "Customer": {
                         newCountCustomer++
                         break;
                     }
                     case "Lifetime": {
                         newCountLifetime++
                         break
                     }
                 }
             }
             commit('UPDATE_MEMBERS', {newCountCustomer, newCountLifetime})
         }
     }
}