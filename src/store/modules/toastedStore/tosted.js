
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
            const obj = {
                text: message + '!',
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
            console.log(message)
        },
    }
}
