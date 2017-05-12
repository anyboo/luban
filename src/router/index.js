import Vue from 'vue'
import VueRouter from 'vue-router'
if (!window.VueRouter) Vue.use(VueRouter)

const routes = [
]
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hashbang: false,
    history: true,
    routes
})

export default router
