export default {
    menuTitle: '学费',
    menuIcon: 'fa-money',
    menu: [{
        menuTitle: '缴费明细',
        to: '/fee/list1',
        menuIcon: 'fa fa-battery',
        dropDownMenu: [{
            'url': 'paynowform',
            'icon': 'icon-wallet',
            'text': '现场缴费'
        }, {
            'url': 'unpayclearform',
            'icon': 'icon-ban',
            'text': '欠费清除'
        }]
    }, {
        menuTitle: '欠费明细',
        to: '/fee/list3',
        menuIcon: 'fa fa-battery-0',
        dropDownMenu: [{
            'url': 'paynowform',
            'icon': 'icon-wallet',
            'text': '现场缴费'
        }, {
            'url': 'unpayclearform',
            'icon': 'icon-ban',
            'text': '欠费清除'
        }]
    }, {
        menuTitle: '退费明细',
        to: '/fee/list4',
        menuIcon: 'fa fa-battery-half', 
    }, {
        menuTitle: '订单信息',
        to: '/order/infoorder',
        menuIcon: 'fa fa-user-circle',
        menuShow: 0,
        dropDownMenu: [{
            'url': 'lessonorderform',
            'icon': 'fa fa-pencil',
            'text': '修改订单'
        }]
    }

    ]
}