<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div ng-controller="ClassInputStudentsCtrl" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        为
                        <span class="label bg-info ng-binding">11</span>批量报名
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-parse ng-valid-number" novalidate="">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-center" width="40">No.</td>
                                    <td class="text-center">学员</td>
                                    <td class="text-center" width="100">报名课次</td>
                                    <td width="120">
                                        <lb-dropdown>
                                            <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs">
                                                <i class="fa fa-plus"></i>增加
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="menuslot">
                                                <li>
                                                    <a ng-click="add_row()">
                                                        <i class="fa fa-plus"></i>新增学员
                                                    </a>
                                                </li>
                                                <li>
                                                    <a select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="6" on-selected="add_exists_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员档案" @click="lbShowDailog('lb-selectstudenttpl')">
                                                        <i class="fa fa-list"></i>选择已有学员
                                                    </a>
                                                </li>
                                            </lb-dropdown-menu>
                                        </lb-dropdown>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="item in input.students track by $index" class="ng-scope">
                                    <td class="ng-binding">1</td>
                                    <td>
                                        <div class="inline w-xxs va-m">
                                            <input type="text" class="form-control input-sm no-padder text-center ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" ng-readonly="item.os_id" placeholder="姓名" ng-model="item.name" required="">
                                        </div>
                                        <div class="inline w-xs va-m">
                                            <div class="btn-group">
                                                <label class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid active" ng-disabled="item.os_id" ng-model="item.sex" btn-radio="'1'">
                                                    <i class="fa fa-male"></i>男
                                                </label>
                                                <label class="btn btn-default btn-xs ng-pristine ng-untouched ng-valid" ng-disabled="item.os_id" ng-model="item.sex" btn-radio="'2'">
                                                    <i class="fa fa-female"></i>女
                                                </label>
                                            </div>
                                        </div>
                                        <div class="inline w-xs va-m">
                                            <input type="text" class="form-control input-sm no-padder text-center ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" placeholder="联系电话" ng-readonly="item.os_id" ng-model="item.tel" required="">
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control input-sm w-xxs no-padder text-center ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-number" ng-model="item.lesson_times" required="">
                                    </td>
                                    <td>
                                        <a class="btn btn-danger btn-xs" ng-click="input.students.splice($index,1)">删除</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" ng-disabled="input.students.length == 0 || saving" ng-click="save_input_students();">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbCloseDailog()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'input_student.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>