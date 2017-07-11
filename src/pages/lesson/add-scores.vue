<template>
    <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10, display: 'block'}" ng-click="close($event)" modal-window size="md" index="0" animate="animate" style="z-index: 1050; display: block;">
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
                        <form name="form1" class="form-validation form-horizontal ng-pristine ng-invalid ng-invalid-required">
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">测验名称:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="inline w-md">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="exam_name" required v-model="localdata.form.performance_exam_name">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">科目:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="inline w">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="exam_course" required v-model="localdata.form.performance_exam_course">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">日期:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="w-sm">
                                        <lb-date-picker type="date" name="exam_date" v-model="localdata.form.performance_exam_date"></lb-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <lb-table :data="getTableData" stripe>
                                    <lb-table-column width="100" prop="data" label="学员">
                                        <template scope="scope">
                                            <label class="checkbox-inline i-checks">
                                                <input type="checkbox" name="selected" ng-true-value="1" ng-false-value="0" class="ng-pristine ng-untouched ng-valid" v-model="localdata.form.item_$$inputed">
                                                <i></i>
                                            </label>
                                            <span class="va-m inline ng-binding">小林</span>
                                        </template>
                                    </lb-table-column>
                                    <lb-table-column width="200" prop="data" label="成绩">
                                        <template scope="scope">
                                            <input type="number" ng-disabled="!item.$$inputed" class="form-control w-xs ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="localdata.form.item_exam_score">
                                        </template>
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
    </div>
</template>
<script>
export default {
    name: 'add-scores',
    data() {
        let localdata = {
            'form': {
                'performance_exam_name': '',
                'performance_exam_course': '',
                'performance_exam_date': '',
                'item_$inputed': '',
                'item_exam_score': ''
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