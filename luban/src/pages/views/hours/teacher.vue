<template>
    <div ui-view class="wrapper">
        <div class="wrapper-xs">
            <div ui-view >
                <div class="panel panel-default" xo-rest="teacher_hours" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="teacher_hours">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="   ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="  " style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div> 
                      
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="教师">
                                <template scope="scope">
                                    <a class="link" ng-click="params.oe_id=item.oe_id;params_teacher_name=item.teacher_name">{{scope.row.student_name }}</a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="授课时间">
                                <template scope="scope">2017-05-12 11:00</template>
                            </el-table-column>
                            <el-table-column prop="data" label="学生数">
                                <template scope="scope">1</template>
                            </el-table-column>
                            <el-table-column prop="data" label="类型">
                                <template scope="scope">1对1</template>
                            </el-table-column>
                            <el-table-column prop="data" label="班级">
                                <template scope="scope">李达康</template>
                            </el-table-column>
                            <el-table-column prop="data" label="课程金额">
                                <template scope="scope">
                                    <a ng-click="$util.open('tpl/app/hours/view_lesson_amount.modal.html','md',item)" @click="lbShowdialog($event,'lb-viewlessonamountmodal')">
                                        <span class="label bg-info">￥100.00</span>
                                    </a>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
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
    name: 'teacher',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'oe_id': ''
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
            tables:['student']
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
