<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div >
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">学员课耗明细</h3>
                </div>
                <div class="modal-body">
                    <div xo-rest="student_hours" xo-rest-grid="{maxsize:5,params:{pagesize:50,page:1,ocs_id:vm.input.ocs_id}}" ng-if="vm.input.lesson_type == '0'" >
                        <p>
                            <button class="btn btn-default ng-isolate-scope" export="student_hours" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-student_hours" style="display:none;">
                                <form name="export_form_student_hours" action="/api/export" method="post" target="_blank" class="">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="1e0dc4f9c2db17b4ba866832990057d4">
                                    <input type="hidden" name="resource" value="student_hours">
                                    <input type="hidden" name="ocs_id" value="24721" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="pagesize" value="50" ng-repeat="(key,value) in params" >
                                </form>
                            </div>
                        </p>
                        <div class="table-responsive">
                            <el-table :data="getTableData" stripe>
                                <el-table-column prop="data" label="学员">
                                    <template scope="scope">小兵</template>
                                </el-table-column>
                                <el-table-column prop="data" label="上课时间">
                                    <template scope="scope">
                                        05-12 11:00
                                        <span class="bg-info label">周五</span>
                                        <br>
                                        <span class="badge bg-success">1.00小时</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="班级">
                                    <template scope="scope">
                                        班课
                                        <br>
                                        <span class="label bg-info">3期班</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="课程金额/老师">
                                    <template scope="scope">
                                        陈佳木
                                        <br>
                                        <span class="label bg-info">￥0.00</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="data" label="登记">
                                    <template scope="scope">
                                        2017-05-12 09:05
                                        <br> 陈佳木
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="grid-data-result"></div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-4 col-xs-12">
                                    课程金额总计:
                                    <span class="label bg-info">￥0.00</span>,小计:
                                    <span class="label bg-info">￥0</span>
                                </div>
                                <div class="col-sm-4 text-center">
                                    <small class="text-muted inline m-t-sm m-b-sm" ng-bind-template="共 1 条记录">共 1 条记录</small>
                                </div>
                                <div class="col-sm-4 text-right text-center-xs">
                                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope " total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
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
    name: 'view_course',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>