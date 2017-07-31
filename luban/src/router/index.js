var routes = []
import web from '~/pages/web/app/app.vue'
routes.push({
    path: '/web',
    component: web
})

routes.push({
    path: '*',
    component: web
})

export default routes