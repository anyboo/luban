<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="expenses" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="expenses">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <button class="btn btn-default ng-isolate-scope" export="expenses" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-expenses" style="display:none;">
                                <form name="export_form_expenses" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                                    <input type="hidden" name="resource" value="expenses">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="日期">
                                <template scope="scope">{{ getDateFormat(scope.row.create_time) }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span class="badge bg-danger ng-binding">-30.00</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="备注">
                                <template scope="scope">李哥订单退款,订单号:OB1161217170444033750849</template>
                            </el-table-column>
                            <el-table-column prop="data" label="经办人">
                                <template scope="scope">陈佳木</template>
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
    name: 'expenses',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'type':''
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
            tables: ['flow'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleSearch() {
            let filterObj = []
            if (this.localdata.form.daterange && this.localdata.form.daterange.length == 2) {
                let startTime = this.getDatetime(this.localdata.form.daterange[0])
                let endTime = this.getDatetime(this.localdata.form.daterange[1])
                if (startTime > 0) {
                    if (startTime == endTime) {
                        endTime = this.getDatetimeEndOf(this.localdata.form.daterange[1])
                    }
                    filterObj.push({
                        'key': 'create_time',
                        'value': startTime,
                        'type': 'gt'
                    })
                    filterObj.push({
                        'key': 'create_time',
                        'value': endTime,
                        'type': 'lt'
                    })

                }
            }
            let status = this.localdata.form.type.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'type',
                    'value': status,
                    'type': ''
                })
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        }
    }
}
</script>
