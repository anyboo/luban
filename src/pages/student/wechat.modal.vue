<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="box box-success direct-chat direct-chat-success ng-scope" page-controller="wechat">
                <div class="box-header with-border">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="box-title"><i class="fa fa-weixin"></i>与 <span class="label bg-info ng-binding">seis</span> 微信对话</h3></div>
                <!-- ngIf: student.wb_id == '0' -->
                <div class="wrapper ng-scope" ng-if="student.wb_id == '0'">
                    <p class="text-center"><i class="fa fa-frown-o"></i> 该学员还没有绑定微信,无法进行微信对话</p>
                    <p class="m-t b-t padder-v"><strong>微信绑定步骤:</strong></p>
                    <ol>
                        <li>学员用微信搜索公众号 <code>xiao360com</code> 并关注</li>
                        <li>进入公众号界面点击“学生端”菜单，用手机号注册账号</li>
                        <li>登录之后按提示操作即可</li>
                    </ol>
                    <p class="m-t b-t padder-v"><strong>免去注册步骤、帮助开通账号:</strong></p>
                    <table class="table table-striped m-b-none">
                        <thead>
                            <tr>
                                <th>电话</th>
                                <th>称呼</th>
                                <th>姓名</th>
                                <th>学习管家账号</th>
                                <th>微信绑定</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- ngRepeat: item in student.relations -->
                            <tr ng-repeat="item in student.relations" class="ng-scope">
                                <td class="ng-binding">13609989744</td>
                                <td class="ng-binding">本人</td>
                                <td class="ng-binding">未填写</td>
                                <td>
                                    <!-- ngIf: item.ou_id != '0' --><span class="label bg-info ng-scope" ng-if="item.ou_id != '0'">已开通</span>
                                    <!-- end ngIf: item.ou_id != '0' -->
                                    <!-- ngIf: item.ou_id == '0' -->
                                </td>
                                <td>
                                    <!-- ngIf: item.wb_id == '0' --><span class="badge bg-gray ng-scope" ng-if="item.wb_id == '0'">未绑定</span>
                                    <!-- end ngIf: item.wb_id == '0' -->
                                    <!-- ngIf: item.wb_id != '0' -->
                                </td>
                                <td><a ng-disabled="$index == 0" class="btn btn-xs btn-danger ng-isolate-scope" confirm-action="remove_relation($index,item)" confirm-text="确定要删除该联系人吗?" tooltip="删除" disabled="disabled"><i class="icon-close"></i></a> <a class="btn btn-xs btn-info m-l-xs" ng-click="$util.open('tpl/app/student/edit_contact.modal.html','md',{student:student,contact:item})" tooltip="编辑"><i class="fa fa-pencil"></i></a></td>
                            </tr>
                            <!-- end ngRepeat: item in student.relations -->
                            <!-- ngIf: student.relations.length == 0 -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <p class="text-muted">提醒：学习管家账号是手机号，默认密码是手机号后6位</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- end ngIf: student.wb_id == '0' -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'finishadd',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
