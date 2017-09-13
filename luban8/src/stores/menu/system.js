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
        menuTitle: '短信',
        to: 'systemsms',
        menuIcon: 'fa-address-book-o fa',
        action: [{
            'text': '发送学员',
            'action': 'studentsmsform'
        },
        {
            'text': '班级群发',
            'action': 'classsmsdialog'
        },
        {
            'text': '活动推广',
            'action': 'allsmsform'
        }
        ]
    }, {
        menuTitle: '角色权限',
        to: 'systemroles',//'/system/roles', //
        menuIcon: 'fa fa-unlock',
        dropDownMenu: [{
            'url': 'rolesform',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'url': 'lb-authority',
            'icon': 'fa fa-pencil',
            'text': '权限设置'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
            'text': '添加角色',
            'action': 'rolesform'
        }]
    }, {
        menuTitle: '员工管理',
        to: '/system/employee',
        menuIcon: 'fa fa-tasks',
        dropDownMenu: [{
            'url': 'employeeform',
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
        menuTitle: '机构信息',
        to: '/system/org',
        menuIcon: 'fa fa-institution',
        action: [{
            'text': '保存',
            'action': 'systememorgsave'
        }]
    }, {
        menuTitle: '校区管理',
        to: '/system/school',
        menuIcon: 'fa fa-institution',
        dropDownMenu: [{
            'url': 'campusform',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }],
        action: [{
            'text': '添加新校区',
            'action': 'campusform'
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
        menuTitle: '日志',
        menuIcon: 'fa fa-picture-o',
        menuShow: 0,

    }, {
        menuTitle: '系统状态',
        menuIcon: ' fa fa-th',
        to: '/system/systems'
    }, {
        menuTitle: '收费模块',
        menuIcon: 'fa fa-strikethrough',
        to: '/system/charge_module',
        menuShow: 0,
        dropDownMenu: [{
            'url': 'lb-addmodule',
            'icon': 'fa fa-pencil',
            'text': '编辑'
        }, {
            'action': 'delete',
            'icon': 'fa fa-times',
            'text': '删除'
        }]
    },{
        menuTitle: '注册',
        menuIcon: ' fa fa-th',
        to: '/system/reg',
        menuShow: 0,
    }]
}