import axios from "axios";
import Vue from 'vue'

export default {
    namespaced: true,

    state: {
        users: [],
        newSortUsers: [],
        preloader: true,
        renewalDate: null,
        sorts: {
            previousButton : 'byRenewDate',
            sortIsActive: false,
            byRenewDate: false,
            byLicence: false,
            byRole: false
        }
    },

    getters: {
        allUsers(state) {
            if (state.sorts.sortIsActive) {
                return state.newSortUsers
            } else {
                return state.users
            }
        },

        preloader(state) {
            return state.preloader
        },

    },
    mutations: {
        UPDATE_USERS(state, users) {
            state.users = users
            state.preloader = false
        },

        HANDLE_CLICK(state, id) {
            if (state.sorts.sortIsActive){
                state.newSortUsers[id].flag = !state.newSortUsers[id].flag
            } else {
                state.users[id].flag = !state.users[id].flag;
            }
        },

        addFreeMonth(state, {status, id, dd, mm, yy} ){
            if (status === 200) {
                state.users[id].licenceDTO.renewalDate =  yy + '-' + mm + '-' + dd;
            }
        },

        SORTED_USERS: (state,sortedUsers) => {
            state.newSortUsers = sortedUsers
        },

        NO_SORTING: state => {
            state.sorts.sortIsActive = false;
            state.sorts.byLicence = false;
            state.sorts.byRenewDate = false;
            state.sorts.byRole = false
        }

    },

    actions: {
        async getUsers(ctx) {
            const users = await axios
                .get('http://localhost:8081/api/v1/users/details')
                .then(resObj => {
                    return resObj.data;
                })
                .catch(error => {
                    console.log(error);
                });
            ctx.dispatch('PROCESSING', users)

        },

        PROCESSING: (ctx, users) => {
            {
                for (const user of users) {
                    Vue.set(user, 'flag', false)

                    if (user.billingDTO.cartEnding === null) {
                        user.billingDTO.cartEnding = "~"
                    } else {
                        user.billingDTO.cartEnding = "**** **** **** " + user.billingDTO.cartEnding
                    }

                    if (user.billingDTO.paymentId === null) {
                        user.billingDTO.paymentId = "~"
                    }

                    if ( user.licenceDTO.renewalDate=== null) {
                        user.licenceDTO.renewalDate = "~"
                    }

                    if ( user.licenceDTO.keyBind) {
                        user.licenceDTO.keyBind = "Binded"
                        Vue.set(user, 'keyBindStyle', 'binded')
                    } else {
                        user.licenceDTO.keyBind = "Unbinded"
                        Vue.set(user, 'keyBindStyle', 'unbinded')
                    }

                    if ( user.billingDTO.cartBind) {
                        user.billingDTO.cartBind = "Binded"
                        Vue.set(user, 'cartBindStyle', 'binded')
                    } else {
                        user.billingDTO.cartBind = "Unbinded"
                        Vue.set(user, 'cartBindStyle', 'unbinded')
                    }

                    if (user.licenceTypeDTO.role === "Customer") {
                        Vue.set(user, 'roleStyle', 'customer')
                    }

                    if (user.licenceTypeDTO.role === "Lifetime") {
                        Vue.set(user, 'roleStyle', 'lifeTime')
                    }

                    if (user.licenceTypeDTO.role === "Friends & Family") {
                        user.licenceTypeDTO.role = "F&F"
                        Vue.set(user, 'roleStyle', 'FF')
                    }

                    if (user.licenceTypeDTO.role === "Developer") {
                        Vue.set(user, 'roleStyle', 'developer')
                    }

                    if (user.licenceTypeDTO.role === 'Support Team') {
                        Vue.set(user, 'roleStyle', 'supportTeam')
                    }

                    if (user.licenceTypeDTO.role === 'Beta EN') {
                        Vue.set(user, 'roleStyle', 'en')
                    }

                    if (user.licenceTypeDTO.role === 'Moderator') {
                        Vue.set(user, 'roleStyle', 'moderator')
                    }
                }
            }
            ctx.commit('UPDATE_USERS', users)
        },

        HANDLE_CLICK(ctx, id){
            ctx.commit('HANDLE_CLICK', id)
        },

        async FREE_MONTH(ctx, id){

            ctx.state.renewalDate = new Date((ctx.state.users[id].licenceDTO.renewalDate))
            ctx.state.renewalDate.setMonth(ctx.state.renewalDate.getMonth() + 1)

            let dd = ctx.state.renewalDate.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = ctx.state.renewalDate.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            let yy = ctx.state.renewalDate.getFullYear();
            ctx.state.renewalDate = yy + '-' + mm + '-' + mm + ' 20:45:10.000000'

            const obj = {
                renewalDate: ctx.state.renewalDate,
                id: ctx.state.users[id].id
            }

            const status = await ctx.dispatch('putRequest', obj)

            ctx.commit('addFreeMonth', {
                status,
                id,
                dd,
                mm,
                yy
            })
        },

        async putRequest(ctx, obj) {
            return await axios
                .put(`http://localhost:8081/api/v1/billing/`, obj
                )
                .then(response =>
                    response.status
                )
                .catch(error => {
                    console.log("There was an error!", error);
                });
        },

        SORT_HANDLER: async (ctx, sortType) => {
            if ((sortType === 'byRenewDate') || (sortType === 'byLicence') || sortType === 'byRole') {
                let currentButton = sortType;

                if ((ctx.state.previousButton !== currentButton) && ctx.state.sorts.sortIsActive) {
                    ctx.state.sorts.sortIsActive = false;
                }

                ctx.state.sorts.sortIsActive = !ctx.state.sorts.sortIsActive;
                for (const sort in ctx.state.sorts ) {
                    if (sortType === sort) {
                        let sortedUsers = null;

                        if (!ctx.state.sorts[sort]) {
                            switch (sortType) {
                                case "byRenewDate" : {
                                    sortedUsers = await ctx.dispatch('RENEWAL_DATE_SORT')
                                    break;
                                }
                                case "byLicence" : {
                                    sortedUsers = await ctx.dispatch('PRICE_SORT')
                                    break;
                                }
                                case "byRole" : {
                                    sortedUsers = await ctx.dispatch('ROLE_SORT')
                                    break;
                                }
                            }

                            ctx.commit('SORTED_USERS', sortedUsers);
                            break;
                        }
                    }
                    ctx.state.sorts.previousButton = currentButton;
                }
            }
        },

        RENEWAL_DATE_SORT: async (ctx) => {
            return ctx.state.users.slice().sort((a, b) => {
                a = new Date(a.licenceDTO.renewalDate);
                b = new Date(b.licenceDTO.renewalDate);
                return b - a;
            })
        },

        PRICE_SORT: async (ctx) => {
            return ctx.state.users.slice().sort((a, b) => {
                a = a.licenceTypeDTO.renewalPrice;
                b = b.licenceTypeDTO.renewalPrice;
                return b - a;
            })
        },

        ROLE_SORT: async (ctx) => {
            return ctx.state.users.slice().sort((a, b) => {
                a = a.licenceTypeDTO.role.toLowerCase();
                b = b.licenceTypeDTO.role.toLowerCase();
                if (a < b) //сортируем строки по возрастанию
                    return 1
                if (a > b)
                    return -1
                return 0
            })
        },

        NO_SORTING: ctx => {
            ctx.commit('NO_SORTING')
        }
    },

}