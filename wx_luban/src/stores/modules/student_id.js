const state = {
    student_id:''
}
const getters = {
    student(state){
        return state.student_id
    }
}
const actions = {
}
const mutations = {
     student(state,id){
        state.student_id=id
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}