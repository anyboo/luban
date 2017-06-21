import './styles/main.css'
import './styles/css/font-awesome.min.css'
import App from './pages/app/app.vue'
import router from './router'
import stores from './stores'
Vue.use(Vuex)
let store = new Vuex.Store(stores)
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})