<template>
    <div class="ng-scope">
        <div class="wrapper bg-white ng-scope">
            <div class="row no-gutter">
                <div class="col-xs-12 col-md-4 m-t"></div>
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration" @input="handleSearch"></lb-buttongroup>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly" v-model="lb_localdata.form.student_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <lb-buttongroup :group-data="lb_localdata.track_type" v-model="lb_localdata.form.track_type" @input="handleSearch"></lb-buttongroup>
                    <button class="btn btn-primary pull-right" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                        <i class="icon-plus"></i>跟踪回访登记
                    </button>
                </div>
            </div>
            <div class="table-responsive m-t">
                <lb-table :data="getTablesData()" stripe>
                    <lb-table-column width="100" prop="data" label="学员">
                        <template scope="scope">
                            <a class="link" @click="handleAddTrack(scope.row.student)" tooltip="新增记录"><i class="fa fa-plus"></i></a>
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
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding">共 4 条记录</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid"></ul>
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
                'value': 'day',
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
        handleAddTrack(item) {
            this.$store.state.envs.currStudent = this.getLookUp(item)
            this.handleShowDialog('lb-addtrackmodal')
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
            let lb_duration = this.lb_localdata.form.lb_duration.trim()
            if (lb_duration.length > 0) {
                filterObj.push({
                    'key': 'track_time',
                    'value': this.getDatetimeStartOf(lb_duration),
                    'type': 'gt'
                })
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.lb_localdata.lookup,
                'type': 'lookup'
            })
            console.log(filterObj)
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
