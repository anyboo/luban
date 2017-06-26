const state = {
    wallpaper: 'wood.jpg',
    id: '',
    name: '',
    face: '',
    login: false,
    theme: 'rgba(208, 150, 21, 0.8)'
}
const getters = {}
const actions = {}

const mutations = {
    wallpaper: (state, obj) => {
        state.wallpaper = obj
    },
    theme: (state, obj) => {
        state.theme = obj
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}