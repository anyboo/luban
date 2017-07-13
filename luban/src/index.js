import './styles/main.css'
import './styles/css/font-awesome.min.css'
import './styles/scheduler.min.css'
import LbCom from './components/'
import App from './pages/app/app.vue'
import routes from './router'
import stores from './stores'
import mixin from './mixins/mixin'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    //mode: 'history',
    base: __dirname,
    //hashbang: false,
    //history: true,
    routes
})

Vue.use(LbCom)
Vue.mixin(mixin)

let store = new Vuex.Store(stores)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})