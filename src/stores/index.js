import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dailog: [],
        modalbackdrop: false,
        modalbackdropzindex: 1997
    },
    mutations: {
        popdailog: (state) => {
            state.dailog = lodash.dropRight(state.dailog)
            if (state.dailog.length == 0) {
                state.modalbackdrop = false
            } else {
                state.modalbackdropzindex = state.dailog.length * 2 + 1997
            }
        },
        pushdailog: (state, obj) => {
            state.dailog.push(obj)
            state.modalbackdrop = true
        }
    }
})
