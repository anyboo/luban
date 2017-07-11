import './style/index.css'
import './style/css/font-awesome.min.css'
import App from './pages/app/app.vue'
import _ from 'lodash'
import Vue from 'vue'

new Vue({
    el: '#app',

    render: h => h(App)
})