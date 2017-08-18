const state = {
    openid:''
}
const getters = {
    openids(state){
        return state.openid
    }
}
const actions = {}
const mutations = {
     getopenid(state,data){
        state.openid=data
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}