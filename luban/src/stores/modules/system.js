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
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    theme: (state, obj) => {
        state.theme = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    system: (state, obj) => {
        console.log(obj.wallpaper, obj.theme)
        state.wallpaper = obj.wallpaper
        state.theme = obj.theme
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}