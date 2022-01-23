
export default {
    namespaced: true,
    state: {
        arrayErrors: []

    },

    getters: {
        arrayErrors(state) {
            return state.arrayErrors
        }
    },

    mutations: {
        ADDING_ERROR: (state, message) => {
            let textMessage
            switch (message.status) {
                case 401 : {
                    textMessage = 'Unauthorized'
                    break
                }
                case 500 : {
                    textMessage = 'Server internal error'
                    break
                }
                case 404 : {
                    textMessage = 'Request failed'
                    break
                }
                case 400 : {
                    textMessage = message.data.message
                    break
                }
            }
            const obj = {
                text: textMessage + ' !',
                id: Date.now().toLocaleString()
            }
            state.arrayErrors.push(obj)
            if (state.arrayErrors.length) {
                setTimeout(() => {
                    state.arrayErrors.splice(0, 1)
                }, 4500)
            }
        },
    },

    actions: {
        ADDING_ERROR: (ctx, message) => {
            ctx.commit('ADDING_ERROR', message)
        },
    }
}
