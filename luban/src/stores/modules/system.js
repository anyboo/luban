const state = {
    wallpaper: '/assets/wallpager/wood.jpg',
    id: '',
    name: '',
    face: '',
    login: false
}
const getters = {}
const actions = {}

const mutations = {
    setWallpaper: (state, obj) => {
        state.wallpaper = obj
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}