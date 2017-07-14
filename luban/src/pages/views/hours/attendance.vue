<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="attendances" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="attendances">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                     <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                </button>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTableData" stripe>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                <i class="fa fa-male"></i>
                            </span>李达康
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="课程/班级">
                                <template scope="scope">古典吉他初级</template>
                            </el-table-column>
                            <el-table-column prop="data" label="上课老师">
                                <template scope="scope">陈佳木</template>
                            </el-table-column>
                            <el-table-column prop="data" label="考勤时间">
                                <template scope="scope">05-12 11:00</template>
                            </el-table-column>
                            <el-table-column prop="data" label="出勤状态">
                                <template scope="scope">
                                    <span class="label bg-success ng-scope" ng-if="item.is_in == '1'">正常出勤</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="考勤方式">
                                <template scope="scope">
                                    <span class="label bg-info ng-scope" ng-if="item.att_way == '0'">后台登记</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="登记时间">
                                <template scope="scope">05-12 09:06</template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer ">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'attendance',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'student_name': ''
            },
            'duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }]
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
