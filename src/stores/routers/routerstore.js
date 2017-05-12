import menu from '~/stores/menu'

var router = []
menu.forEach((item) => {
    if (item.menu) {
        item.menu.forEach((subitem) => {
            if (subitem.to) {
                var to = '~/pages' + subitem.to + '.vue'
                router.push({
                    path: subitem.to,
                    component: resolve => require([`${to}`], resolve)
                })
            }
        })
    }
})

export default router
