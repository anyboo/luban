import lodash from 'lodash'
const state = {
    dailoglist: [],
    modalbackdrop: false,
    modalbackdropzindex: 1997
}

const getters = {}


const actions = {}

const mutations = {
    popdialog: (state) => {
        state.dailoglist = lodash.dropRight(state.dailoglist)
        if (state.dailoglist.length == 0) {
            state.modalbackdrop = false
        } else {
            state.modalbackdropzindex = state.dailoglist.length * 2 + 1997
        }
    },
    pushdialog: (state, obj) => {
        state.dailoglist.push(obj)
        state.modalbackdropzindex = state.dailoglist.length * 2 + 1997
        state.modalbackdrop = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
