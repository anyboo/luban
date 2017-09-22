export default {
    menuTitle: '课程',
    menuIcon: 'fa-book',
    menu: [{
        menuTitle: '教室设置',
        to: '/lesson/sclasses',
        menuIcon: 'fa fa-certificate',
        dropDownMenu: [{
            'url': 'sclassesform',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
            'text': '新建表单',
            'action': 'lessonsclasses'
        }]
    }, {
        menuTitle: '课程设置',
        to: '/lesson/manage',
        menuIcon: 'fa fa-gears',
        dropDownMenu: [{
            'url': 'lb-newlessonmodal',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
            'text': '添加课程',
            'action': 'lessonmanageadd'
        }, {
            'text': '课程分类',
            'action': 'lessonmanageles'
        }]
    }, {
        menuTitle: '班级信息',
        to: '/lesson/infoclass',
        menuIcon: 'fa fa-user-circle',
        menuShow: 0,
        dropDownMenu: [{
            'url': 'classesform',
            'icon': 'fa fa-pencil',
            'text': '修改资料'
        }]
    },
    {
        menuTitle: '订单信息',
        to: '/order/infoorder',
        menuIcon: 'fa fa-user-circle',
        menuShow: 0,
        dropDownMenu: [{
            'url': 'classesform',
            'icon': 'fa fa-pencil',
            'text': '修改资料'
        }]
    },
    {
        menuTitle: '班级设置',
        to: '/lesson/classes',
        menuIcon: 'fa fa-gear',
        dropDownMenu: [{
            'url': 'classesform',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        },  {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
            'text': '开班',
            'action': 'lessonclasses'
        }]
    }, {
        menuTitle: '订单',
        to: '/lesson/orders',
        menuIcon: 'fa fa-envelope-o',
        dropDownMenu: [{
            'url': 'lb-refunds',
            'icon': 'fa fa-reply',
            'text': '办理退款',
            'menuctrl': 'pay_status',
            'menuvalue': [1, 2]
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除',
            'menuctrl': 'pay_status',
            'menuvalue': 0
        }, {
            'url': 'lb-printerorder',
            'icon': 'fa fa-print',
            'text': '打印收据',
        }],
    }]
}