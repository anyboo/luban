<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">学员课耗明细</h3>
                </div>
                <div class="modal-body">
                    <div xo-rest="student_hours" xo-rest-grid="{maxsize:5,params:{pagesize:50,page:1,ocs_id:vm.input.ocs_id}}" ng-if="vm.input.lesson_type == '0'" class="ng-scope">
                        <p>
                            <button class="btn btn-default ng-isolate-scope" export="student_hours" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-student_hours" style="display:none;">
                                <form name="export_form_student_hours" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="1e0dc4f9c2db17b4ba866832990057d4">
                                    <input type="hidden" name="resource" value="student_hours">
                                    <input type="hidden" name="ocs_id" value="24721" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="50" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </p>
                        <div class="table-responsive">
                            <table class="table table-striped b-t b-light">
                                <thead>
                                    <tr>
                                        <th>学员</th>
                                        <th>上课时间</th>
                                        <th>班级</th>
                                        <th>课程金额/老师</th>
                                        <th>登记</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="item in grid.data" ng-if="!loading" class="ng-scope">
                                        <td class="ng-binding">小兵</td>
                                        <td class="ng-binding">
                                            05-12 11:00
                                            <span class="bg-info label ng-binding">周五</span>
                                            <br>
                                            <span class="badge bg-success ng-binding">1.00小时</span>
                                        </td>
                                        <td class="ng-binding">
                                            班课
                                            <br>
                                            <span class="label bg-info ng-binding">3期班</span>
                                        </td>
                                        <td class="ng-binding">
                                            陈佳木
                                            <br>
                                            <span class="label bg-info ng-binding">￥0.00</span>
                                        </td>
                                        <td class="ng-binding">
                                            2017-05-12 09:05
                                            <br>
陈佳木
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="grid-data-result"></div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-4 col-xs-12">
                                    课程金额总计:
                                    <span class="label bg-info ng-binding">￥0.00</span>,小计:
                                    <span class="label bg-info ng-binding">￥0</span>
                                </div>
                                <div class="col-sm-4 text-center">
                                    <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small>
                                </div>
                                <div class="col-sm-4 text-right text-center-xs">
                                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                                </div>
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
    name: 'view_course.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>