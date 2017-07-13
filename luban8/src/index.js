import './style/index.css'
import './style/css/font-awesome.min.css'
import App from './pages/app/app.vue'
import Vue from 'vue'
import lbCom from './components/src'



Vue.use(lbCom)

new Vue({
    el: '#app',

    render: h => h(App)
})