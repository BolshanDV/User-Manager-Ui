
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
            let time = 6000
            let style
            switch (message.status) {
                case 401 : {
                    textMessage = 'Unauthorized'
                    style = 'error'
                    break
                }
                case 500 : {
                    textMessage = 'Server internal error'
                    style = 'error'
                    break
                }
                case 404 : {
                    textMessage = 'Request failed'
                    style = 'error'
                    break
                }
                case 400 : {
                    textMessage = 'Request failed'
                    style = 'error'
                    break
                }
                case 202 :
                case 200 : {
                    textMessage = message.text
                    style = 'success'
                    break
                }
            }
            const obj = {
                text: textMessage + ' !',
                id: Date.now().toLocaleString(),
                style : style
            }
            state.arrayErrors.push(obj)
            if (state.arrayErrors.length) {
                setTimeout(() => {
                    state.arrayErrors.splice( 0, 1)
                }, time)
            }
        },

        DELETE_PUSH_UP: (state, id) => {
            state.arrayErrors.splice(id, 1)
        }
    },

    actions: {
        ADDING_ERROR: (ctx, message) => {
            ctx.commit('ADDING_ERROR', message)
        },
        DELETE_PUSH_UP: (ctx, id) => {
            console.log(id)
            ctx.commit('DELETE_PUSH_UP', id)
        }
    }
}
