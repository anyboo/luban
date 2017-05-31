<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="wrapperpanel panel-default bg-white ng-scope" page-controller="hours_warning_index">
                    <div class="row no-gutter">
                        <div class="col-xs-12 col-md-3">
                            <lb-buttongroup :group-data="lb_localdata.lb_lesson_type" v-model="lb_localdata.form.lb_lesson_type"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="m-t ng-scope" xo-rest="class_hours_warning" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" ng-if="lesson_type == 0" xo-rest-ctrl="hours_warning">
                        <div class="table-responsive">
                            <lb-table :data="getTableData" stripe>
                                <lb-table-column prop="data" label="学生姓名">
                                    <template scope="scope">
                                        <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-female"></i>
                                </span>小兵
                                    </template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="联系电话">
                                    <template scope="scope">18952565452</template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="学校">
                                    <template scope="scope">未登记</template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="所在班级">
                                    <template scope="scope">
                                        <a class="link ng-binding" ng-click="params.oc_id=item.oc_id" tooltip="点击班级名查看该班级所有告警">3期班</a>
                                    </template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="校区">
                                    <template scope="scope">
                                        <label class="badge bg-info badge-xm">福州布尔培训</label>
                                    </template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="报名课次">
                                    <template scope="scope">60</template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="已上课次">
                                    <template scope="scope">1</template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="剩余课次">
                                    <template scope="scope">
                                        <span class="badge bg-danger ng-binding">59</span>
                                    </template>
                                </lb-table-column>
                            </lb-table>
                            <div class="grid-data-result"></div>
                        </div>
                        <div class="panel-footer ">
                            <div class="row ">
                                <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                                </lb-pagination>
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
    name: 'warning',
    data() {
        let lb_localdata = {
            'lb_lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '10',
                'text': '课时包'
            }],
            'form': {
                'lb_lesson_type': ''
            }
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
