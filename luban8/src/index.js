import './style/index.css'
import './style/css/font-awesome.min.css'
import App from './pages/app/app.vue'
import lbCom from './components/src'
import routes from './router'

Vue.use(lbCom)
Vue.use(VueRouter)

const router = new VueRouter({
    base: __dirname,
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})