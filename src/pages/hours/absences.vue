<template>
    <div ui-view class="ng-scope">
        <div class="panel panel-default ng-scope" xo-rest="attendances" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="attendances">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline">
                        <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                        <lb-date-picker v-model="lb_localdata.form.lb_daterange" type="daterange"></lb-date-picker>
                        <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_param_student_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <button ng-click="$util.open('tpl/app/widget/attendance.modal.html','lg',{})" @click="lbShowdialog($event,'lb-attendancemodal')">
                        <i class="icon-plus"></i>考勤登记
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="学员">
                        <template scope="scope">
                            <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                <i class="fa fa-male"></i>
                            </span>李达康
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="课程/班级">
                        <template scope="scope">古典吉他初级</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="上课老师">
                        <template scope="scope">陈佳木</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="考勤时间">
                        <template scope="scope">05-12 11:00</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="出勤状态">
                        <template scope="scope">
                            <span class="label bg-success ng-scope" ng-if="item.is_in == '1'">正常出勤</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="考勤方式">
                        <template scope="scope">
                            <span class="label bg-info ng-scope" ng-if="item.att_way == '0'">后台登记</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="登记时间">
                        <template scope="scope">05-12 09:06</template>
                    </lb-table-column>
                </lb-table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 2 条记录">共 2 条记录</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'absences',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_daterange': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'lb_param_student_name': ''
            },
            'lb_duration': [{
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
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>