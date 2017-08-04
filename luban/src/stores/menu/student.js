export default {
    menuTitle: '学员',
    menuIcon: 'fa-users',
    menu: [{
        menuTitle: '档案录入',
        to: '/student/add',
        menuIcon: 'fa fa-user-plus',
    }, {
        menuTitle: '学员管理',
        to: '/student/list',
        menuIcon: 'fa fa-user-circle',
        dropDownMenu: [{
            'url': 'lb-editinfomodal',
            'icon': 'fa fa-pencil',
            'text': '修改资料'
        }
            /*, {
                            'url': 'lb-editphotomodal',
                            'icon': 'fa fa-image',
                            'text': '更换头像'
                        }*/
            , {
            'url': 'lb-ordermodal',
            'icon': 'fa fa-shopping-cart',
            'text': '报名'
        }, {
            'url': 'lb-refundmodal',
            'icon': 'fa fa-money',
            'text': '缴费'
        }
            /*, {
                            'url': 'lb-changeclassmodal',
                            'icon': 'fa fa-exchange',
                            'text': '转班'
                        }*/
            , {
            'url': 'lb-addtrackmodal',
            'icon': 'fa fa-phone-square',
            'text': '跟踪回访'
        }, {
            'url': 'lb-regstudentmatchmodal',
            'icon': 'fa fa-flag-o',
            'text': '登记赛事记录'
        }, {
            'url': 'lb-refundmodal',
            'icon': 'fa fa-reply',
            'text': '退费'
        },
            /* {
                            'url': 'lb-endlessonmodal',
                            'icon': 'fa fa-stop',
                            'text': '结课'
                        }, {
                            'url': 'lb-changebranchmodal',
                            'icon': 'icon-shuffle',
                            'text': '转校区'
                        }*/
        ],
        action: [{
            'text': '已封存档案',
            'action': 'studentlist'
        }]

    },
    {
        menuTitle: '在读学员',
        to: '/student/list1',
        menuIcon: 'fa fa-envelope-open',
    },
    {
        menuTitle: '已结课学员',
        to: '/student/list2',
        menuIcon: 'fa fa-envelope-open-o',
    }, {
        menuTitle: '学员信息',
        to: '/student/info',
        menuIcon: 'fa fa-user-circle',
        menuShow: 0,
        dropDownMenu: [{
            'url': 'lb-editinfomodal',
            'icon': 'fa fa-pencil',
            'text': '修改资料'
        }
            /*, {
                            'url': 'lb-editphotomodal',
                            'icon': 'fa fa-image',
                            'text': '更换头像'
                        }*/
            , {
            'url': 'lb-ordermodal',
            'icon': 'fa fa-shopping-cart',
            'text': '报名'
        }, {
            'url': 'lb-refundmodal',
            'icon': 'fa fa-money',
            'text': '缴费'
        }
            /*, {
                            'url': 'lb-changeclassmodal',
                            'icon': 'fa fa-exchange',
                            'text': '转班'
                        }*/
            , {
            'url': 'lb-addtrackmodal',
            'icon': 'fa fa-phone-square',
            'text': '跟踪回访'
        }, {
            'url': 'lb-regstudentmatchmodal',
            'icon': 'fa fa-flag-o',
            'text': '登记赛事记录'
        }, {
            'url': 'lb-refundmodal',
            'icon': 'fa fa-reply',
            'text': '退费'
        }
            /*, {
                            'url': 'lb-endlessonmodal',
                            'icon': 'fa fa-stop',
                            'text': '结课'
                        },{
                            'url': 'lb-changebranchmodal',
                            'icon': 'icon-shuffle',
                            'text': '转校区'
                        }*/
        ],
    }, {
        menuTitle: '在读学员',
        to: '/student/list1',
        menuIcon: 'fa fa-user',
        menuShow: 0,
    }, {
        menuTitle: '已结课学员',
        to: '/student/list2',
        menuIcon: 'fa-address-book-o fa',
        menuShow: 0,
    }, {
        menuTitle: '咨询管理',
        to: '/student/list0',
        menuIcon: 'glyphicon glyphicon-list',
        dropDownMenu: [{
            'url': 'lb-regionsetmodal',
            'icon': 'icon-rocket',
            'text': '学员归属设定'
        }, {
            'url': 'lb-purposesetmodal',
            'icon': 'icon-heart',
            'text': '意向程度设置'
        }, {
            'url': 'lb-addtrackmodal',
            'icon': 'fa fa-phone-square',
            'text': '跟踪回访'
        }]
    }, {
        menuTitle: '流失名单',
        to: '/student/lost',
        menuIcon: 'fa fa-address-card-o',
        menuShow: 0,
    }, {
        menuTitle: '跟踪回访记录',
        to: '/student/tracks',
        menuIcon: 'fa fa-drivers-license',
        action: [{
            'text': '跟踪回访登记',
            'action': 'studenttracksadd'
        }]
    }, {
        menuTitle: '生日学员',
        to: '/student/birthdays',
        menuIcon: 'fa fa-bold',
    }, {
        menuTitle: '赛事记录',
        to: '/student/recording',
        menuIcon: 'fa fa-vcard-o',
        action: [{
            'text': '添加赛事记录',
            'action': 'studentrecording'
        }]
    }
    ]
}