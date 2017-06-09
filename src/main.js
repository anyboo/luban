import './styles/main.css'
import './styles/layui.css'

import Vue from 'vue'
import LbCom from './components/'
import VueResouse from 'vue-resource'
import App from './pages/app/app.vue'
import router from './router'
import store from './stores'
import mixin from './mixins/mixin'

Vue.use(VueResouse)
Vue.use(LbCom)
Vue.mixin(mixin)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}) 
