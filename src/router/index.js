import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash'
import routercj from '~/stores/routers/routercj'
import routerxq from '~/stores/routers/routerxq'
import routeryk from '~/stores/routers/routeryk'
import routerstore from '~/stores/routers/routerstore.js'

if (!window.VueRouter) Vue.use(VueRouter)

const routes = lodash.concat(routercj, routerxq, routeryk, routerstore)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hashbang: false,
    history: true,
    routes
})

export default router
