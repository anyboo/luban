<template>
    <div>
        <div class="wrapper ng-scope" page-controller="student">
            <div class="page-bar row m-b">
                <div class="col-xs-12 col-md-2">
                    <div class="btn-group dropdown" dropdown=""><a class="btn btn-default" href="javascript:history.back();">返回</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-10 text-right">
                    <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="getStudentInfo">
                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-default m-b-xs" button-tooltip="操作">
                            <i class="fa fa-cog ng-scope"></i><span class="ng-scope"> 操作</span></ng-transclude><span class="caret"></span>
                        </lb-dropdown-button>
                    </lb-dropdown>
                    <button class="btn btn-danger btn-danger m-b-xs ng-isolate-scope" @click="deleteStudent"><i class="fa fa-trash-o"></i> 封存档案</button>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading"><i class="fa fa-user"></i> 学员信息</div>
                <div class="panel-body">
                    <div class="bg-white row no-gutter ng-scope">
                        <div class="col-xs-12 col-md-4 ng-scope">
                            <div class="text-center clear">
                                <div class="face ng-scope" style="width:120px;margin:0 auto">
                                    <a @click="handleShowDialog('lb-editphotomodal',student)">
                                        <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 120px; width:120px; height:120px; "> <img :src="makeImage(student.student_name,80)" style="vertical-align:top;" width="100%" height=""></div>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-xs m-t-xs m-b-xs" @click="handleShowDialog('lb-editphotomodal',student)">更换头像</a>
                            </div>
                            <p class="text-center">
                                <span class="text-2x ng-binding">{{ student.student_name }}</span>
                                <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':student.sex=='0','fa-male':student.sex!='0'}"></i>
                                </span>
                            </p>
                            <ul class="list-unstyled">
                                <li>
                                    <label class="field">昵称/英文名:</label><span class="ng-binding">{{ student.nickname }}</span></li>
                                <li class="m-t-xs">
                                    <label class="field">账户余额:</label><span class="label bg-danger ng-binding">￥0.00</span> <a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/view/amount_history.modal.html','md',student)">余额详情</a> <a class="btn btn-xs btn-default" ng-click="$util.open('tpl/app/student/view/amount_withdraw.modal.html','md',student)" ng-disabled="student.amount <= 0" ui-per="student.amount_withdraw" disabled="disabled">余额提现</a></li>
                                <li class="m-t-xs">
                                    <label class="field">微信绑定:</label>
                                    <span class="badge bg-gray ng-scope" ng-if="student.wb_id == '0'">未绑定</span>
                                </li>
                                <li class="m-t-xs ng-scope">
                                    <label class="field">学员归属:</label><span class="label bg-info ng-binding">{{getEmployeeName}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-md-8 ng-scope">
                            <div class="panel panel-default">
                                <div class="panel-heading"><i class="icon-info"></i> 基础信息</div>
                                <div class="panel-body">
                                    <div class="row no-gutter">
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">校区:</label><span ng-bind-html="student.ob_id|branch_name" class="ng-binding"><label class="badge bg-info badge-xm">呵呵</label></span></div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">住址:</label><span class="ng-binding">{{ student.home_address }}</span></div>
                                        <div class="col-xs-12 col-md-6">
                                            <label class="inline w-xs text-right">备注:</label><span class="ng-binding">{{ student.note }}</span></div>
                                        <div class="col-xs-12 col-md-6 ng-scope">
                                            <label class="inline w-xs text-right">学校:</label><span class="ng-binding">{{ student.school }}</span></div>
                                        <div class="col-xs-12 col-md-6 ng-scope">
                                            <label class="inline w-xs text-right">年级:</label><span class="ng-binding">{{ student.grade }}</span></div>
                                        <div class="col-xs-12 col-md-6 ng-scope">
                                            <label class="inline w-xs text-right">班级:</label><span class="ng-binding">{{ student.class }}</span></div>
                                        <div class="col-xs-12 col-md-6 ng-scope">
                                            <label class="inline w-xs text-right">建档日期:</label><span class="ng-binding">{{ getDateFormat(student.creattime) }}</span>
                                        </div>
                                        <div class="col-xs-12 col-md-6 ng-scope">
                                            <label class="inline w-xs text-right">生日:</label><span class="text-info ng-scope">{{ getDateFormat(student.birth) }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading"><a class="btn btn-xs btn-default pull-right" ui-per="student.edit" ng-click="$util.open('tpl/app/student/add_contact.modal.html','sm',student)"><i class="fa fa-plus"></i> 添加联系人</a> <i class="icon-users"></i> 联系人</div>
                                <table class="table table-striped m-b-none">
                                    <thead>
                                        <tr>
                                            <th>电话</th>
                                            <th class="hidden-xs">称呼</th>
                                            <th class="hidden-xs">姓名</th>
                                            <th class="hidden-xs">学习管家账号</th>
                                            <th class="hidden-xs">微信绑定</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="item in student.relations" class="ng-scope">
                                            <td class="ng-binding">
                                                <i class="fa fa-star text-warning ng-scope" tooltip="第1联系人" ng-if="item.is_main == '1'"></i>11111111111</td>
                                            <td class="hidden-xs ng-binding">爸爸</td>
                                            <td class="hidden-xs ng-binding">未填写</td>
                                            <td class="hidden-xs">
                                                <span class="label bg-info ng-scope" ng-if="item.ou_id != '0'">已开通</span>
                                            </td>
                                            <td class="hidden-xs">
                                                <span class="badge bg-gray ng-scope" ng-if="item.wb_id == '0'">未绑定</span>
                                            </td>
                                            <td><a ng-disabled="item.is_main == '1'" class="btn btn-xs btn-danger ng-isolate-scope" confirm-action="remove_relation($index,item)" confirm-text="确定要删除该联系人吗?" tooltip="删除" disabled="disabled"><i class="icon-close"></i></a> <a class="btn btn-xs btn-info m-l-xs" ng-click="$util.open('tpl/app/student/edit_contact.modal.html','md',{student:student,contact:item})" tooltip="编辑"><i class="fa fa-pencil"></i></a> <a class="btn btn-xs btn-info m-l-xs" ng-click="$util.open('tpl/app/student/wxbind_qrcode.modal.html','md',{student:student,contact:item})" tooltip="微信绑定二维码"><i class="fa fa-qrcode"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {
            'form': {
                'student_id': '',
            },
            'dropDownMenu': [{
                'url': 'lb-editinfomodal',
                'icon': 'fa fa-pencil',
                'text': '修改资料'
            }, {
                'url': 'lb-editphotomodal',
                'icon': 'fa fa-image',
                'text': '更换头像'
            }, {
                'url': 'lb-ordermodal',
                'icon': 'fa fa-shopping-cart',
                'text': '报名'
            }, {
                'url': 'lb-ordersmodal',
                'icon': 'fa fa-money',
                'text': '缴费'
            }, {
                'url': 'lb-regstudentattendancesmodal',
                'icon': 'fa fa-calendar-o',
                'text': '登记考勤'
            }, {
                'url': 'lb-changeclassmodal',
                'icon': 'fa fa-exchange'
            }, {
                'url': 'lb-wechatmodal',
                'icon': 'fa fa-weixin',
                'text': '微信对话'
            }, {
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
            }, {
                'url': 'lb-endlessonmodal',
                'icon': 'fa fa-stop',
                'text': '结课'
            }, {
                'url': 'lb-changebranchmodal',
                'icon': 'icon-shuffle',
                'text': '转校区'
            }],
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
        }
        return {
            localdata,
            student: {},
            tables: ['student']
        }
    },
    computed: {
        getEmployeeName() {
            let name = '未设定'
            if (this.student.employee && this.student.employee.length > 0) {
                name = this.getLookUp(this.student.employee, 'name')
            }
            return name
        },
        getStudentInfo() {
            return this.student
        },
    },
    watch: {},
    methods: {
        deleteStudent() {
            let vm = this
            this.$confirm('确定要封存该学员档案吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                vm.updateTeble('student', vm.student._id, {
                    'isdel': true
                }).then(() => {
                    vm.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    history.back()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })

        },
        handleSearch() {
            let filterObj = []
            let student_id = this.$route.params.id
            if (student_id.length > 0) {
                filterObj.push({
                    'key': '_id',
                    'value': student_id,
                    'type': ''
                })
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            console.log(this.$route.params.id, filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then(() => {
                console.log(this.$store.state.models.models.student.data)
                this.student = this.$store.state.models.models.student.data[0]
            })
        },
    }
}
</script>
