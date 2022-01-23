
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
        ADDING_ERROR: (state) => {
            const obj = {
                text: 'There was some error contact the developers!',
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
        ADDING_ERROR: (ctx) => {
            ctx.commit('ADDING_ERROR')
        },
    }
}
