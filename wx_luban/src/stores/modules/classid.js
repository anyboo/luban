const state = {
    classid:''
}
const getters = {
    classids(state){
        return state.classid
    }
}
const actions = {
    getclassid(context,data){
        context.commit('getclassid', data)
    }
}
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