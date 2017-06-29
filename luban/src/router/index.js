var routes = []
import web from '~/pages/web/app/app.vue'
import windowweb from '~/pages/window/app/app.vue'

routes.push({
    path: '/window',
    component: windowweb
})
routes.push({
    path: '/web',
    component: web
})

export default routes