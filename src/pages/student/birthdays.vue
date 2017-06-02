<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default ng-scope" xo-rest="birthday_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="birthday_students">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <lb-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></lb-date-picker>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <button class="btn btn-default ng-isolate-scope" export="birthday_students" export-params="params">
                            <i class="glyphicon glyphicon-export"></i>导出
                        </button>
                    </div>
                </div>
                <div class="table-responsive">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column prop="data" label="学员">
                            <template scope="scope">{{ scope.row.student_name }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="出生日期">
                            <template scope="scope">{{getDateFormat(scope.row.birth)}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="年龄">
                            <template scope="scope">
                                <span class="badge bg-info ng-binding">{{ fromNow(scope.row.birth) }}</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="建档日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="在读课程数">
                            <template scope="scope">2</template>
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
</template>
<script>
export default {
    name: 'birthdays',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'duration': ''
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
            }]
        }
        return {
            localdata,
            lb_tables: ['student'],

        }
    },
    computed: {},
    watch: {},
    methods: {
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            this.handleSearch()
        },
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
                        'key': 'birthstr',
                        'value': this.getDateNumFormat(startTime),
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'birthstr',
                        'value': this.getDateNumFormat(endTime),
                        'type': 'lte'
                    })
                }
            }
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
