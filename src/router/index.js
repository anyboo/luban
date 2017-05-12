import Vue from 'vue'
import VueRouter from 'vue-router'
import routerstore from '~/stores/routers/routerstore.js'

if (!window.VueRouter) Vue.use(VueRouter)

console.log(routerstore)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hashbang: false,
    history: true,
    routerstore
})

export default router
