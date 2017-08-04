export default {
    menuTitle: '收支',
    menuIcon: 'fa-tachometer',
    menu: [{
        menuTitle: '流水',
        to: '/iae/flow',
        menuIcon: 'fa fa-google-wallet',
        action: [{
            'text': '记一笔',
            'action': 'iaeflow'
        }]
    }, {
        menuTitle: '收入明细',
        to: '/iae/income',
        menuIcon: 'fa fa-yen',
    }, {
        menuTitle: '支出明细',
        to: '/iae/expenses',
        menuIcon: 'fa fa-paypal',
    }]
}