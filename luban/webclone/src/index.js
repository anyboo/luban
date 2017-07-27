//import './styles/main.css'
//import './styles/scheduler.min.css'
//import LbCom from './components/'
import App from './pages/app'
//import routes from './router'
//import stores from './stores'
//import mixin from './mixins/mixin'

//Vue.use(Vuex)
//Vue.use(VueRouter)
//Vue.use(VueResource)

//Vue.use(LbCom)
//Vue.mixin(mixin)

//let store = new Vuex.Store(stores)
//Vue.component(component.name, component)

new Vue({
    el: '#app',
    //store,
    //router,
    render: h => h(App)
})