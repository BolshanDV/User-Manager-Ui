import axios from "axios";

export default {
    namespaced: true,
    state: {
        authorized: false,
        discordUserData: '',

    },

    getters: {
        authorized(state) {
            return state.authorized
        },
        discordUserData(state) {
            return state.discordUserData
        }
    },

    mutations: {
        AUTHORIZED: (state, discordUser) => {
            state.authorized = discordUser.status === 200;
            state.discordUserData = discordUser.data.attributes
        }
    },

    actions: {
        GET_DISCORD_USER_DATA: async (ctx) => {
            const discordUser =  await axios
                .get('http://localhost:8082/api/v1/me', {
                    withCredentials: true
                })
                .then(response =>{
                    return {
                        data: response.data,
                        status: response.status
                    }
                })
                .catch(error => {
                    console.log("There was an error!", error);
                });
            ctx.commit('AUTHORIZED', discordUser)
            console.log(discordUser)
        }
    }
}