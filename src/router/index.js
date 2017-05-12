import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '~/stores/menu'

if (!window.VueRouter) Vue.use(VueRouter)

var routes = []
var req = require.context('~/pages', true, /^\.\/*\/.*\.vue$/)
menu.forEach((item) => {
    if (item.menu) {
        item.menu.forEach((subitem) => {
            if (subitem.to) {
                var to = '.' + subitem.to + '.vue'
                try {
                    routes.push({
                        path: subitem.to,
                        component: req(`${to}`) //resolve => require([`${to}`], resolve)
                    })
                } catch (err) {
                    console.log(to, err)
                }
            }
        })
    }
})

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hashbang: false,
    history: true,
    routes
})

export default router
