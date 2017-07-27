import App from './pages/app'
//import stores from './stores'
//import mixin from './mixins/mixin'
//Vue.use(Vuex)
Vue.use(VueResource)
//Vue.mixin(mixin)
//let store = new Vuex.Store(stores)
new Vue({
    el: '#app',
    //store,
    render: h => h(App)
})