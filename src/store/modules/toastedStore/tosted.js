
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
            let time
            switch (message.status) {
                case 401 : {
                    textMessage = 'Unauthorized'
                    time = 1000000
                    break
                }
                case 500 : {
                    textMessage = 'Server internal error'
                    time = 4500
                    break
                }
                case 404 : {
                    textMessage = 'Request failed'
                    time = 4500
                    break
                }
                case 400 : {
                    textMessage = message.data.message
                    time = 4500
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
                }, time)
            }
        },
    },

    actions: {
        ADDING_ERROR: (ctx, message) => {
            ctx.commit('ADDING_ERROR', message)
        },
    }
}
