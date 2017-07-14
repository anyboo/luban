var routes = []
import test from '~/view/test.vue'


routes.push({
    path: '/lesson/sclasses',
    component: test
})

routes.push({
    path: '*',
    component: test
})

export default routes