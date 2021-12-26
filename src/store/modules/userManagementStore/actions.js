import axios from "axios";
import Vue from "vue";
import sorts from "./sorts";

export default {
    async getUsers(ctx) {
        const response = await axios
            .get('http://localhost:8082/api/v1/users/details', {
                withCredentials: true
            })
            .then(resObj => {
                return {
                    objects: resObj.data,
                    status: resObj.status
                };
            })
            .catch(error => {
                console.log(error);
            });
        ctx.dispatch('PROCESSING', response.objects)
    },

    PROCESSING: (ctx, users) => {
        {
            for (const user of users) {
                Vue.set(user, 'flag', false)
                Vue.set(user, 'kickUserText', 'KICK USER')
                Vue.set(user, 'inputFlagRenewal', false)
                Vue.set(user, 'inputFlagLicence', false)

                if (user.billingDTO.cartEnding === null) {
                    user.billingDTO.cartEnding = "~"
                } else {
                    user.billingDTO.cartEnding = "**** **** **** " + user.billingDTO.cartEnding
                }

                if (user.billingDTO.paymentId === null) {
                    user.billingDTO.paymentId = "~"
                }

                if ((user.licenceDTO.renewalDate === null || (user.licenceDTO.renewalDate === ''))) {
                    user.licenceDTO.renewalDate = 0
                }

                if (user.licenceDTO.keyBind) {
                    user.licenceDTO.keyBind = "Binded"
                    Vue.set(user, 'keyBindStyle', 'binded')
                } else {
                    user.licenceDTO.keyBind = "Unbinded"
                    Vue.set(user, 'keyBindStyle', 'unbinded')
                }

                if (user.billingDTO.cartBind) {
                    user.billingDTO.cartBind = "Binded"
                    Vue.set(user, 'cartBindStyle', 'binded')
                } else {
                    user.billingDTO.cartBind = "Unbinded"
                    Vue.set(user, 'cartBindStyle', 'unbinded')
                }
                switch (user.paymentDTO.paymentState) {
                    case "succeeded": {
                        user.paymentDTO.paymentState = "Successful"
                        Vue.set(user.paymentDTO, 'paymentStateStyle', 'successful ')
                        break
                    }
                    case 'canceled' : {
                        user.paymentDTO.paymentState = "Failed"
                        Vue.set(user.paymentDTO,'paymentStateStyle', "notSuccessful")
                        Vue.set(user.paymentDTO,'paymentStateFailed', "")
                        break
                    }
                    case null : {
                        user.paymentDTO.paymentState = "Failed"
                        Vue.set(user.paymentDTO,'paymentStateStyle', "notSuccessful")
                        Vue.set(user.paymentDTO,'paymentStateFailed', "")
                        break
                    }
                }
                switch (user.licenceTypeDTO.role){
                    case "Customer":  Vue.set(user, 'roleStyle', 'customer')
                        break;
                    case "Lifetime" : Vue.set(user, 'roleStyle', 'lifeTime')
                        break;
                    case "Friends & Family" : {
                        user.licenceTypeDTO.role = "F&F"
                        Vue.set(user, 'roleStyle', 'FF')
                        break;
                    }
                    case "Developer" : Vue.set(user, 'roleStyle', 'developer')
                        break;
                    case "Support Team" :  Vue.set(user, 'roleStyle', 'supportTeam')
                        break
                    case "Beta EN" :  Vue.set(user, 'roleStyle', 'en')
                        break;
                    case "Moderator" : Vue.set(user, 'roleStyle', 'moderator')
                        break;
                }
            }
        }
        ctx.commit('UPDATE_USERS', users)
        ctx.dispatch('sideBar/COUNTING_MEMBERS', users, {root: true})
        ctx.dispatch('licenseManagement/LATEST_ADDITION', users, {root: true})
        ctx.dispatch('customersChart/COUNT_CUSTOMERS', users, {root: true})
    },

    HANDLE_CLICK(ctx, id) {
        ctx.commit('HANDLE_CLICK', id)
    },

    async FREE_MONTH(ctx, id) {
        ctx.state.renewalDate = new Date((ctx.state.users[id].licenceDTO.renewalDate))
        ctx.state.renewalDate.setMonth(ctx.state.renewalDate.getMonth() + 1)

        let dd = ctx.state.renewalDate.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = ctx.state.renewalDate.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = ctx.state.renewalDate.getFullYear();
        ctx.state.renewalDate = yy + '-' + mm + '-' + dd + ' 20:45:10.000000'

        const obj = {
            userId: ctx.state.users[id].userDTO.id,
            licenceKey: ctx.state.users[id].licenceDTO.licenceKey,
            keyBind: ctx.state.users[id].licenceDTO.keyBind,
            renewalDate: ctx.state.renewalDate,
        }

        const status = await ctx.dispatch('putRequest', obj)

        if (status === 200) ctx.dispatch('getUsers')
    },

    async putRequest(ctx, obj) {
        return await axios
            .put(`http://localhost:8082/api/v1/billings/`, obj, {
                    withCredentials: true
                }
            )
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    },

    SORT_HANDLER: async (ctx, sortType) => {
        console.log(sortType)
        if ((sortType === 'byRenewDate') || (sortType === 'byLicence') || (sortType === 'byRole') || (sortType === 'byKeyBind') || (sortType === 'byPaymentState') || (sortType === 'byCartBind')){
            let currentButton = sortType;

            if ((ctx.state.previousButton !== currentButton) && ctx.state.sorts.sortIsActive) {
                ctx.state.sorts.sortIsActive = false;
            }

            ctx.state.sorts.sortIsActive = !ctx.state.sorts.sortIsActive;
            for (const sort in ctx.state.sorts) {
                if (sortType === sort) {
                    let sortedUsers = null;

                    if (!ctx.state.sorts[sort]) {
                        switch (sortType) {
                            case "byRenewDate": {
                                sortedUsers = await sorts.SORT_BY_RENEWAL_DATE(ctx.state.users)
                                break;
                            }
                            case "byLicence": {
                                sortedUsers = await sorts.SORT_BY_RENEWAL_PRICE(ctx.state.users)
                                break;
                            }
                            case "byRole": {
                                sortedUsers = await sorts.SORT_BY_ROLE(ctx.state.users)
                                break;
                            }
                            case "byKeyBind": {
                                sortedUsers = await sorts.SORT_BY_KEY_BINDED(ctx.state.users)
                                break;
                            }
                            case "byPaymentState": {
                                sortedUsers = await sorts.SORT_BY_PAYMENT_STATE(ctx.state.users)
                                break;
                            }
                            case "byCartBind": {
                                sortedUsers = await sorts.SORT_BY_CART_BIND(ctx.state.users)
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

    NO_SORTING: ctx => {
        ctx.commit('NO_SORTING')
    },

    KICK_USER: async (ctx, userID) => {
        const status = await axios
            .delete(`http://localhost:8082/api/v1/users/${userID}`,{
                withCredentials: true
            })
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
        if (status === 202) ctx.dispatch('getUsers')
        ctx.commit('SHOW_POPUP')
    },

    CHANGE_NAME: (ctx, id) => {
        ctx.commit('CHANGE_NAME', id)
    },

    CHANGE_NAME_RETURN: (ctx, id) => {
        ctx.commit('CHANGE_NAME_RETURN', id)
    },

    INPUT_CHANGE_RENEWAL_DATE: (ctx, userId) => {
        ctx.commit('INPUT_CHANGE_RENEWAL_DATE', userId)
    },

    INPUT_CHANGE_LICENCE: (ctx, userId) => {
        ctx.commit('INPUT_CHANGE_LICENCE', userId)
    },

    UPDATE_RENEWAL_DATE: async (ctx, {newRenewalDate, id}) => {
        console.log(id)
        if (newRenewalDate.length === 10) {
            const obj = {
                userId: id,
                renewalDate: newRenewalDate + ' 00:00:00.000000'
            }
            const status = await ctx.dispatch('putRequest', obj)
            if (status === 200) ctx.dispatch('getUsers')

        }
    },

    UPDATE_RENEWAL_PRICE: async (ctx, {renewalPrice, newRole,  id}) => {
        if(newRole === 'Customer' || (newRole === 'Lifetime') || (newRole === 'Support time') || (newRole === 'Moderator') || (newRole === 'Developer') || (newRole === 'Beta EN') || (newRole === 'Friends & Family')) {
            const userId = id
            const obj = {
                renewPrice: renewalPrice,
                majorRoleName: newRole
            }
            const status = await ctx.dispatch('putRequestRenewalPrice', {obj, userId})
            if (status === 200) ctx.dispatch('getUsers')
        }
    },

    async putRequestRenewalPrice(ctx, {obj, userId}) {
        return await axios
            .put(`http://localhost:8082/api/v1/licences/${userId}`, obj,{
                    withCredentials: true
                }
            )
            .then(response =>
                response.status
            )
            .catch(error => {
                console.log("There was an error!", error);
            });
    },

    FILTERED_NAME: (ctx, search) => {
        ctx.commit('FILTERED_NAME', search)
    },

    SHOW_POPUP: (ctx, userId) => {
        ctx.commit('SHOW_POPUP')
        ctx.commit('CHANGE_ID_KICK_USER', userId)
    },
}
