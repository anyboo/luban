<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="add_performance" class="ng-scope">
                <div class="modal-header">
                    <button type="button" ng-click="$dismiss()" class="close" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="icon-plus"></i>登记考试成绩
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">测验名称:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w-md">
                                    <input type="text" class="form-control ng-dirty ng-valid-parse ng-touched ng-valid ng-valid-required" name="exam_name" required v-model="localdata.form.lb_performance_exam_name">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">科目:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w">
                                    <input type="text" class="form-control ng-pristine ng-invalid ng-invalid-required ng-touched" name="exam_course" required v-model="localdata.form.lb_performance_exam_course">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">日期:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="w-sm">
                                    <lb-date-picker type="date" name="exam_date" v-model="localdata.form.lb_performance_exam_date"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <lb-table :data="getTableData" stripe>
                                <lb-table-column width="100" prop="data" label="学员">
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column width="200" prop="data" label="成绩">
                                    <template scope="scope"></template>
                                </lb-table-column>
                            </lb-table>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button ng-disabled="form1.$invalid || saving" ng-click="do_ok()" class="btn btn-primary" disabled="disabled">登记成绩</button>
                    <button ng-click="$dismiss()" class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_performance',
    data() {
        let localdata = {
            'form': {
                'lb_performance_exam_name': '',
                'lb_performance_exam_course': '',
                'lb_performance_exam_date': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>