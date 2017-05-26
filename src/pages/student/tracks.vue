<template>
    <div ui-view class="ng-scope">
        <div class="wrapper bg-white ng-scope" xo-rest="student_tracks" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="student_tracks">
            <div class="row no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline va-m">
                        <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                        <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.student_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <lb-buttongroup :group-data="lb_localdata.track_type" v-model="lb_localdata.form.track_type" @input="handleSearch"></lb-buttongroup>
                    <button class="btn btn-primary pull-right" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="add_track" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员进行咨询回访登记" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                        <i class="icon-plus"></i>跟踪回访登记
                    </button>
                </div>
            </div>
            <div class="table-responsive m-t">
                <lb-table :data="getTablesData()" stripe>
                    <lb-table-column width="100" prop="data" label="学员">
                        <template scope="scope">
                            <a class="link" ng-click="add_track(item.student)" tooltip="新增记录"><i class="fa fa-plus"></i></a>
                            <a class="ng-binding" href="#/student/64267">
                                <span class="ng-binding"></span>{{ getLookUp(scope.row.student,'student_name') }}
                            </a>
                            <span class="label bg-success ng-scope" ng-if="item.student.status > 0">已报读</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="沟通内容">
                        <template scope="scope">
                            <pre class="ng-binding">{{ scope.row.detail}}</pre>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="沟通方式">
                        <template scope="scope">{{ scope.row.track_way }}</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="接洽人">
                        <template scope="scope">{{scope.row.op_name}}</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="沟通时间">
                        <template scope="scope">{{getDatetime(scope.row.track_time)}}</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="类型">
                        <template scope="scope">{{ getButtongroupText(lb_localdata.track_type,scope.row.track_type)}}</template>
                    </lb-table-column>
                </lb-table>
               
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 4 条记录">共 4 条记录</small>
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
import base64 from '~/api/base64.js'
export default {
    name: 'tracks',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_params_date_end': '',
                'lb_duration': '',
                'student_name': '',
                'track_type': ''
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
            }],
            'track_type': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }],
            'lookup': {
                'localField': 'student_id',
                'from': 'student',
                'foreignField': '_id',
                'as': 'student'
            }
        }
        return {
            lb_localdata,
            lb_tables: ['inquiry'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        getLookUp(obj, key) {
            let result = ''
            if (obj.length > 0) {
                result = obj[0][key]
            }
            return result
        },
        handleSearch() {
            let filterObj = []
            let status = this.lb_localdata.form.track_type.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
                    'value': status,
                    'type': ''
                })
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.lb_localdata.lookup,
                'type': 'lookup'
            })

            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
