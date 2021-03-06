import axios from "axios";
import Vue from "vue";
import sorts from "./sorts";
import dateIntervalFilter from "../sideBarStore/dateIntervalFilter";

export default {
    async getUsers(ctx) {
        const response = await axios
            .get(`${process.env.VUE_APP_URL}/api/v1/users/details`, {
                withCredentials: true
            })
            .then(resObj => {
                return {
                    objects: resObj.data,
                    status: resObj.status
                };
            })
            .catch(error => {
                ctx.dispatch('toastedStore/ADDING_ERROR', error.response, {root: true})
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
                    case "Member":  Vue.set(user, 'roleStyle', 'member')
                        break;
                    case "Lifetime" : Vue.set(user, 'roleStyle', 'lifeTime')
                        break;
                    case "F&F" : {
                        // user.licenceTypeDTO.role = "F&F"
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
                    case "Owner" : Vue.set(user, 'roleStyle', 'owner')
                        break;
                }
            }
        }
        ctx.commit('UPDATE_USERS', users)
        ctx.dispatch('sideBar/COUNTING_MEMBERS', users, {root: true})
        ctx.dispatch('customersChart/COUNT_CUSTOMERS', users, {root: true})
    },

    HANDLE_CLICK(ctx, userID) {
        ctx.commit('HANDLE_CLICK', userID)
    },

    async FREE_MONTH(ctx, user) {
        let renewalDate = new Date((user.licenceDTO.renewalDate))
        renewalDate.setMonth(renewalDate.getMonth() + 1)

        const newRenewalDate = await dateIntervalFilter.CREATURE_DATE(renewalDate)

        const obj = {
            userId: user.userDTO.id,
            licenceKey: user.licenceDTO.licenceKey,
            keyBind: user.licenceDTO.keyBind,
            renewalDate: newRenewalDate,
            discordUsername: user.userDTO.discordUsername
        }

        await ctx.dispatch('putRequest', obj)
    },

    async putRequest(ctx, obj) {
        await axios
            .put(`${process.env.VUE_APP_URL}/api/v1/billings/`, obj, {
                    withCredentials: true
                }
            )
            .then(response => {
                    ctx.dispatch('toastedStore/ADDING_ERROR', {text: `FOR "${(obj.discordUsername).toUpperCase()}", the payment date has been changed`, status: response.status}, {root: true})
                    if (response.status === 200) ctx.dispatch('getUsers')
                }
            )
            .catch(error => {
                ctx.dispatch('toastedStore/ADDING_ERROR', error.response, {root: true})
                console.log("There was an error!", error);
            });
    },

    SORT_HANDLER: async (ctx, sortType) => {
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
                                sortedUsers = await sorts.SORT_BY_RENEWAL_DATE(ctx.state.usersSearch)
                                break;
                            }
                            case "byLicence": {
                                sortedUsers = await sorts.SORT_BY_RENEWAL_PRICE(ctx.state.usersSearch)
                                break;
                            }
                            case "byRole": {
                                sortedUsers = await sorts.SORT_BY_ROLE(ctx.state.usersSearch)
                                break;
                            }
                            case "byKeyBind": {
                                sortedUsers = await sorts.SORT_BY_KEY_BINDED(ctx.state.usersSearch)
                                break;
                            }
                            case "byPaymentState": {
                                sortedUsers = await sorts.SORT_BY_PAYMENT_STATE(ctx.state.usersSearch)
                                break;
                            }
                            case "byCartBind": {
                                sortedUsers = await sorts.SORT_BY_CART_BIND(ctx.state.usersSearch)
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

    KICK_USER: async (ctx, user) => {
        const status = await axios
            .delete(`${process.env.VUE_APP_URL}/api/v1/users/${user.id}`,{
                withCredentials: true
            })
            .then(response => {
                ctx.dispatch('toastedStore/ADDING_ERROR', {text: `"${(user.discordUsername).toUpperCase()}" has been kicked`, status: response.status}, {root: true})
                return response.status
            }
    )
            .catch(error => {
                ctx.dispatch('toastedStore/ADDING_ERROR', error.response, {root: true})
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

    UPDATE_RENEWAL_DATE: async (ctx, {newRenewalDate, id, name}) => {
        if (newRenewalDate.length === 10) {
            const obj = {
                userId: id,
                renewalDate: newRenewalDate + ' 00:00:00.000000',
                discordUsername: name
            }
            await ctx.dispatch('putRequest', obj)
        }
    },

    UPDATE_RENEWAL_PRICE: async (ctx, {renewalPrice, newRole,  id}) => {
        if(newRole === 'Member' || (newRole === 'Lifetime') || (newRole === 'Support time') || (newRole === 'Moderator') || (newRole === 'Developer') || (newRole === 'Beta EN') || (newRole === 'Friends & Family')) {
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
            .put(`${process.env.VUE_APP_URL}/api/v1/licences/${userId}`, obj,{
                    withCredentials: true
                }
            )
            .then(response =>{
                response.status
            }

            )
            .catch(error => {
                ctx.dispatch('toastedStore/ADDING_ERROR', error.response, {root: true})
                console.log("There was an error!", error);
            });
    },

    FILTERED_NAME: (ctx, search) => {
        ctx.commit('FILTERED_NAME', search)
    },

    SHOW_POPUP: (ctx, user) => {
        ctx.commit('SHOW_POPUP')
        ctx.commit('CHANGE_ID_KICK_USER', user)
    },
}
