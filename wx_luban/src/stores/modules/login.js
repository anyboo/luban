const state = {
    currentView:'lb-verification'
}
const getters = {
    yes(state){
        return state.currentView
    }
}
const actions = {}
const mutations = {
     homes(state,view){
        state.currentView=view
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}