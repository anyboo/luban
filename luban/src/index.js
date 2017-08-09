import './styles/main.css'
import './styles/scheduler.min.css'
import LbCom from './components/'
import App from './pages/app/app.vue'
import stores from './stores'
import mixin from './mixins/mixin'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.use(LbCom)
Vue.mixin(mixin)

let store = new Vuex.Store(stores)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})