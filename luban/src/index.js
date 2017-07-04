import './styles/main.css'
import './styles/css/font-awesome.min.css'
import App from './pages/app/app.vue'
import routes from './router'
import stores from './stores'
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    //mode: 'history',
    base: __dirname,
    //hashbang: false,
    //history: true,
    routes
})

let store = new Vuex.Store(stores)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})