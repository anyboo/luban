<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
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
                                    <input type="text" class="form-control ng-dirty ng-valid-parse ng-touched ng-valid ng-valid-required" name="exam_name" ng-model="performance.exam_name" required="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">科目:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w">
                                    <input type="text" class="form-control ng-pristine ng-invalid ng-invalid-required ng-touched" name="exam_course" ng-model="performance.exam_course" required="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">日期:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="w-sm">
                                    <input type="text" name="exam_date" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="performance.exam_date" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td width="100">学员</td>
                                        <td width="200">成绩</td>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
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
    name: 'add_performance.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>