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
        UPDATE_USERS(state, res) {
            state.users = res
            for (const user of state.users) {
                Vue.set(user, 'flag', false)

                if (user.billingDTO.cartEnding === null) {
                    user.billingDTO.cartEnding = "empty"
                } else {
                    user.billingDTO.cartEnding = "**** **** **** " + user.billingDTO.cartEnding
                }
                if (user.billingDTO.paymentId === null) {
                    user.billingDTO.paymentId = "empty"
                }
                state.preloader = false
            }
        },

        HANDLE_CLICK(state, id) {
            state.users[id].flag = !state.users[id].flag;
        },

        addFreeMonth(state, {status, id, dd, mm, yy} ){
            if (status === 200) {
                state.users[id].licenceDTO.renewalDate =  yy + '-' + mm + '-' + dd;
            }
        },
        SORTED_USERS: (state,sortedUsers) => {
            state.newSortUsers = sortedUsers
        }

    },

    actions: {
        async getUsers(ctx) {

            const res = await axios
                .get('http://localhost:8081/api/v1/users/details')
                .then(resObj => {
                    return resObj.data;
                })
                .catch(error => {
                    console.log(error);
                });
            ctx.commit('UPDATE_USERS', res)
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
            const response = await axios
                .put(`http://localhost:8081/api/v1/billing/`, obj
                )
                .then(response =>
                    response.status
                )
                .catch(error => {
                    console.log("There was an error!", error);
                });
            return response;
        },

        SORT_HANDLER: async (ctx, sortType) => {
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
                                sortedUsers = await ctx.dispatch('RENEWAL_DATE_PRICE')
                                break;
                            }
                        }

                        ctx.commit('SORTED_USERS', sortedUsers);
                        break;
                    }
                }
                ctx.state.sorts.previousButton = currentButton;
            }
        },

        RENEWAL_DATE_SORT: async (ctx) => {
            return ctx.state.users.slice().sort((a, b) => {
                a = new Date(a.licenceDTO.renewalDate);
                b = new Date(b.licenceDTO.renewalDate);
                return b - a;
            })
        },

        RENEWAL_DATE_PRICE: async (ctx) => {
            return ctx.state.users.slice().sort((a, b) => {
                a = a.licenceTypeDTO.renewalPrice;
                b = b.licenceTypeDTO.renewalPrice;
                return b - a;
            })
        }
    },

}