const state = {
    id: '',
    name: '',
    user: '',
    db: '',
    face: '',
    birth: '',
    admin: false,
    login: false,
    roles_id: [],
    org_id: '',
    user_id: '',
    campus_id: '',
    campusarray_id: [],
    theme: 'rgba(208, 150, 21, 0.8)',
    routerback: '',
    router: '',
    currStudentID: '',
    currClassesID:'',
    isModlues: true,
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
    class: (state, obj) => {
        state.currClassID = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    student: (state, obj) => {
        state.currStudentID = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    classes: (state, obj) => {
        state.currClassesID = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    router: (state, obj) => {
        console.log(obj)
        state.routerback = state.router
        state.router = obj
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    userout: (state, obj) => {
        state.login = false
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    user: (state, obj) => {
        state.login = obj.login
        state.user = obj.user
        state.birth = obj.birth
        state.name = obj.name
        state.id = obj._id
        state.db = obj.db
        state.admin = obj.admin
        state.roles_id = obj.roles_id
        state.user_id = obj.user_id
        state.org_id = obj.org_id
        state.campus_id = obj.campus_id
        state.campusarray_id = obj.campusarray_id
        window.db = obj.db
        window.localStorage.setItem('system', JSON.stringify(state))
    },
    system: (state, obj) => {
        state.routerback = obj.routerback
        state.currStudentID = obj.currStudentID
        state.currClassesID = obj.currClassesID
        state.router = obj.router
        state.wallpaper = obj.wallpaper
        state.theme = obj.theme
        state.login = obj.login
        state.user = obj.user
        state.birth = obj.birth
        state.name = obj.name
        state.id = obj.id
        state.user_id = obj.user_id
        state.db = obj.db
        state.admin = obj.admin
        state.roles_id = obj.roles_id
        state.org_id = obj.org_id
        state.campus_id = obj.campus_id
        state.campusarray_id = obj.campusarray_id
        window.db = obj.db
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}