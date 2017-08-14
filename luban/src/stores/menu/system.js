export default {
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
            menuTitle: '数据字典管理',
            to: '/system/dict',
            menuIcon: 'fa fa-keyboard-o',
            action: [{
                'text': '编辑',
                'action': 'systememdictedit'
            }]
        }, {
            menuTitle: '日志',
            menuIcon: 'fa fa-picture-o',
            menuShow: 0,

        }, {
            menuTitle: '系统状态',
            menuIcon: ' fa fa-th',
            to: '/system/systems',
            // menuShow: 0,
        },
        {
            menuTitle: '收费模块',
            menuIcon: 'fa fa-strikethrough',
            to: '/system/charge_module',
            // menuShow: 0,
            dropDownMenu: [{
                'url': 'lb-addmodule',
                'icon': 'fa fa-pencil',
                'text': '编辑'
            }, {
                'action': 'delete',
                'icon': 'fa fa-times',
                'text': '删除'
            }]
        }
    ]
}