<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" xo-rest="fees" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="fees">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <lb-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></lb-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <lb-buttongroup :group-data="localdata.type" v-model="localdata.form.type" @input="handleSearch"></lb-buttongroup>
                            <button class="btn btn-default ng-isolate-scope" export="flow" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出Excel
                            </button>
                            <div id="fct-flow" style="display:none;">
                                <form name="export_form_flow" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="3fcd68790fbf79751a57ca8fbda8b037">
                                    <input type="hidden" name="resource" value="flow">
                                    <input type="hidden" name="date_end" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="date_start" value="2017-05-12" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="ob_id" value="11091" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                            <a ng-click="$util.open('tpl/app/iae/flow.add.modal.html','md',{})" @click="lbShowdialog($event,'lb-flowaddmodal')" class="btn btn-primary pull-right ng-click-active">
                                <i class="fa fa-pencil"></i>记一笔
                            </a>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <lb-table :data="getTablesData()" stripe>
                            <lb-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <a class="btn btn-danger btn-xs ng-isolate-scope" confirm-action="do_delete(item)" confirm-text="确定要撤销流水账吗?" ui-per="iae.delete">
                                        <i class="fa fa-reply"></i>撤销
                                    </a>
                                    <a ng-click="$util.open('tpl/app/iae/set_odi.modal.html','sm',item)" @click="lbShowdialog($event,'lb-setodimodal')">设置分类</a>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="日期">
                                <template scope="scope">{{ getDateFormat(scope.row.create_time) }}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span ng-if="item.amount < 0" class="badge bg-warning ng-binding ng-scope">{{scope.row.amount}}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="类型">
                                <template scope="scope">
                                    <span ng-if="item.type == '0'" class="badge bg-warning ng-scope">{{scope.row.type}}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="分类">
                                <template scope="scope">
                                    <span ng-if="item.type == '0'" class="label bg-info ng-binding ng-scope">未设置</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="备注">
                                <template scope="scope">
                                    <span ng-bind-html="item.note" class="ng-binding">{{scope.row.note}}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="经办人">
                                <template scope="scope">{{scope.row.name}}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="录入日期">
                                <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
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
</template>
<script>
export default {
    name: 'flow',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': '',
                'type': ''
            },
            'duration': [{
                'value': 'day',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'type': [{
                'value': '',
                'text': '所有'
            }, {
                'value': '0',
                'text': '支出'
            }, {
                'value': '1',
                'text': '收入'
            }]
        }
        return {
            localdata,
            tables: ['flow']
        }
    },
    computed: {

    },
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
