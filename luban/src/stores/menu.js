export default [{
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
        menuIcon: 'fa fa-id-card-o',
    }, {
        menuTitle: '赛事记录',
        to: '/student/recording',
        menuIcon: 'fa fa-vcard-o',
        action: [{
            'text': '添加赛事记录',
            'action': 'studentrecording'
        }]
    }]
}, {
    menuTitle: '课程',
    menuIcon: 'fa-book',
    menu: [{
        menuTitle: '教室设置',
        to: '/lesson/sclasses',
        menuIcon: 'fa fa-certificate',
        dropDownMenu: [{
            'url': 'lb-newsclassmodal',
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
        menuTitle: '班级设置',
        to: '/lesson/classes',
        menuIcon: 'fa fa-gear',
        dropDownMenu: [{
            'url': 'lb-openclassmodal',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
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
        }],
    }]
}, {
    menuTitle: '学费',
    menuIcon: 'fa-money',
    menu: [{
        menuTitle: '缴费明细',
        to: '/fee/list1',
        menuIcon: 'fa fa-battery',
        dropDownMenu: [{
            'url': 'lb-paynowmodal',
            'icon': 'icon-wallet',
            'text': '现场缴费'
        }, {
            'url': 'lb-unpayclearmodal',
            'icon': 'icon-ban',
            'text': '欠费清除'
        }]
    }, {
        menuTitle: '欠费明细',
        to: '/fee/list3',
        menuIcon: 'fa fa-battery-0',
        dropDownMenu: [{
            'url': 'lb-paynowmodal',
            'icon': 'icon-wallet',
            'text': '现场缴费'
        }, {
            'url': 'lb-unpayclearmodal',
            'icon': 'icon-ban',
            'text': '欠费清除'
        }]
    }, {
        menuTitle: '退费明细',
        to: '/fee/list4',
        menuIcon: 'fa fa-battery-half',
    }]
}, {
    menuTitle: '课时',
    menuIcon: 'fa-battery',
    // menuShow: 0,
    menu: [{
        menuTitle: '排课',
        to: '/hours/arrange',
        menuIcon: 'fa fa-file',
    }, {
        menuTitle: '考勤',
        to: '/hours/attendance',
        menuIcon: 'fa fa-file-sound-o',
    }, {
        menuTitle: '教师课耗',
        to: '/hours/teacher',
        menuIcon: 'fa fa-file-zip-o',
        menuShow: 0,
    }, {
        menuTitle: '学员课耗',
        to: '/hours/student',
        menuIcon: 'fa fa-vcard',
        menuShow: 0,
    }, {
        menuTitle: '课时预警',
        to: '/hours/warning',
        menuIcon: 'fa fa-heartbeat',
        menuShow: 0,
    }, {
        menuTitle: '缺课记录',
        to: '/hours/absences',
        menuIcon: 'fa fa-book',
        menuShow: 0,
    }, {
        menuTitle: '请假管理',
        to: '/hours/leaves',
        menuIcon: 'fa fa-briefcase',
        dropDownMenu: [{
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }]
    }, {
        menuTitle: '停课管理',
        to: '/hours/suspends',
        menuIcon: 'fa fa-minus-square',
        dropDownMenu: [{
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }]
    }]
}, {
    menuTitle: '收支',
    menuIcon: 'fa-tachometer',
    menu: [{
        menuTitle: '流水',
        to: '/iae/flow',
        menuIcon: 'fa fa-google-wallet',
    }, {
        menuTitle: '收入明细',
        to: '/iae/income',
        menuIcon: 'fa fa-yen',
    }, {
        menuTitle: '支出明细',
        to: '/iae/expenses',
        menuIcon: 'fa fa-paypal',
    }]
}, {
    menuTitle: '家校',
    menuIcon: 'fa-university',
    menuShow: 0,
    menu: [{
        menuTitle: '短信通知',
        to: '/has/sms',
        menuIcon: 'fa fa-file-text-o',
    }, {
        menuTitle: '公告发布',
        to: '/has/news',
        menuIcon: 'fa fa-file',
    }]
}, {
    menuTitle: '设置',
    menuIcon: 'fa-cog',
    menu: [{
        menuTitle: '参数配置',
        to: '/system/config',
        menuIcon: 'fa fa-wrench',
        menuShow: 0,
    }, {
        menuTitle: '个人信息',
        to: '/system/personal_information',
        menuIcon: 'fa-address-book-o fa',
        action: [{
                'text': '修改密码',
                'action': 'systempersonapassword'
            },
            {
                'text': '修改姓名',
                'action': 'systempersonaname'
            }, {
                'text': '设置生日',
                'action': 'systempersonabirthd'
            }
        ]
    }, {
        menuTitle: '角色权限',
        to: '/system/roles',
        menuIcon: 'fa fa-unlock',
        action: [{
                'text': '删除',
                'action': 'systemrolesdelete'
            },
            {
                'text': '编辑',
                'action': 'systemrolesedit'
            }, {
                'text': '权限设置',
                'action': 'systemrolesset'
            },
            {
                'text': '添加角色',
                'action': 'systemrolesroles'
            },
            {
                'text': '保存',
                'action': 'systemrolessave'
            }
        ]
    }, {
        menuTitle: '员工管理',
        to: '/system/employee',
        menuIcon: 'fa fa-tasks',
        dropDownMenu: [{
            'url': 'lb-employeeaddmodal',
            'icon': 'fa fa-pencil',
            'text': '编辑资料',

        }, {
            'action': 'unlock',
            'icon': 'fa fa-unlock',
            'text': '账号解封',
            'menuctrl': 'lock',
            'menuvalue': true
        }, {
            'action': 'lock',
            'icon': 'fa fa-lock',
            'text': '离职封存',
            'menuctrl': 'lock',
            'menuvalue': false
        }, {
            'url': 'lb-resetaccountmodal',
            'icon': 'fa fa-key',
            'text': '重置密码'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除',
            'menuctrl': 'lock',
            'menuvalue': true
        }],
        action: [{
            'text': '添加',
            'action': 'systememployeeadd'
        }]
    }, {
        menuTitle: '数据字典管理',
        to: '/system/dict',
        menuIcon: 'fa fa-keyboard-o',
        action: [{
            'text': '编辑',
            'action': 'systememdictedit'
        }]
    }, {
        menuTitle: '机构校区设置',
        to: '/system/org',
        menuIcon: 'fa fa-institution',
        dropDownMenu: [{
            'url': 'lb-addmodal',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
                'text': '保存',
                'action': 'systememorgsave'
            },
            {
                'text': '添加新校区',
                'action': 'systememorgsavestudent'
            }
        ]
    }, {
        menuTitle: '日志',
        menuIcon: 'fa fa-picture-o',
        menuShow: 0,

    }, {
        menuTitle: '系统状态',
        menuIcon: ' fa fa-th',
        menuShow: 0,
    }]
}, ]