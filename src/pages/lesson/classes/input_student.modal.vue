<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div ng-controller="ClassInputStudentsCtrl" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        为
                        <span class="label bg-info ng-binding">11</span>批量报名
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-parse ng-valid-number" novalidate>
                        <lb-table :data="getTableData" stripe>
                            <lb-table-column class="text-center" width="40" prop="data" label="No.">
                                <template scope="scope">1</template>
                            </lb-table-column>
                            <lb-table-column class="text-center" prop="data" label="学员">
                                <template scope="scope">
                                    <div class="inline w-xxs va-m">
                                        <input type="text" class="form-control input-sm no-padder text-center ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" ng-readonly="item.os_id" placeholder="姓名" required v-model="lb_localdata.form.lb_item_name">
                                    </div>
                                    <div class="inline w-xs va-m">
                                        <lb-buttongroup :group-data="lb_localdata.lb_item_sex" v-model="lb_localdata.form.lb_item_sex"></lb-buttongroup>
                                    </div>
                                    <div class="inline w-xs va-m">
                                        <input type="text" class="form-control input-sm no-padder text-center ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" placeholder="联系电话" ng-readonly="item.os_id" required v-model="lb_localdata.form.lb_item_tel">
                                    </div>
                                </template>
                            </lb-table-column>
                            <lb-table-column class="text-center" width="100" prop="data" label="报名课次">
                                <template scope="scope">
                                    <input type="number" class="form-control input-sm w-xxs no-padder text-center ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-number" required v-model="lb_localdata.form.lb_item_lesson_times">
                                </template>
                            </lb-table-column>
                            <lb-table-column width="120" prop="data" label>
                                <template scope="scope">
                                    <a class="btn btn-danger btn-xs" ng-click="input.students.splice($index,1)">删除</a>
                                </template>
                            </lb-table-column>
                        </lb-table>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" ng-disabled="input.students.length == 0 || saving" ng-click="save_input_students();">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'input_student.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_item_name': '',
                'lb_item_sex': '',
                'lb_item_tel': '',
                'lb_item_lesson_times': ''
            },
            'lb_item_sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }],
            'dropDownMenu': [{
                'icon': 'fa fa-plus',
                'text': '新增学员'
            }]
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>