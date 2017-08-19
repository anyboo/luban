const state = {
    classid:''
}
const getters = {
    classids(state){
        return state.classid
    }
}
const actions = {}
const mutations = {
     getclassid(state,data){
        state.classid=data
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}