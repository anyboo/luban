const state = {
    dailoglist: [],
    dailogdata: {},
    currdialg:'',
    modalbackdrop: false,
    modalbackdropzindex: 1457
}

const getters = {}
const actions = {}

const mutations = {
    popdialog: (state) => {
        state.dailoglist = _.dropRight(state.dailoglist)
        if (state.dailoglist.length == 0) {
            state.currdialg = ''
            state.modalbackdrop = false
        } else {
            state.modalbackdropzindex = state.dailoglist.length * 2 + 1457
        }
    },
    pushdialog: (state, obj) => {
        state.dailogdata = obj.menuData
        state.currdialg = obj.url
        state.dailoglist.push(obj.url)
        state.modalbackdropzindex = state.dailoglist.length * 2 + 1457
        state.modalbackdrop = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}