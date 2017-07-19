<template>
    <div ui-view class="ng-scope wrapper ">
        <div class="wrapper-xs ng-scope">
            <div class=" wrapper panel panel-default bg-white ng-scope" xo-rest="lost_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,lost_marked:'0',ob_id:user.gv.ob_id}}" xo-rest-ctrl="lost_students">
                <div class="row no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                            <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                            <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <lb-buttongroup :group-data="localdata.lost_marked" v-model="localdata.form.lost_marked"></lb-buttongroup>
                    </div>
                </div>
                <div class="row m-t">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column prop="data" label="学生姓名">
                            <template scope="scope">{{ scope.row.student_name }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="学校">
                            <template scope="scope"></template>
                        </el-table-column>
                        <el-table-column prop="data" label="校区">
                            <template scope="scope"></template>
                        </el-table-column>
                        <el-table-column prop="data" label="来源渠道">
                            <template scope="scope"></template>
                        </el-table-column>
                        <el-table-column prop="data" label="建档日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="最后课程">
                            <template scope="scope"></template>
                        </el-table-column>
                        <el-table-column prop="data" label="流失时间">
                            <template scope="scope"></template>
                        </el-table-column>
                    </el-table>
                    <div class="grid-data-result">
                        <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                            <i class="fa fa-frown-o"></i>无相关数据!
                        </p>
                    </div>
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
</template>
<script>
export default {
    name: 'lost',
    data() {
        let localdata = {
            'form': {
                'date_start': '',
                'daterange': '',
                'date_end': '',
                'lost_marked': '',
                'duration': '',
                'type':''
            },
            'lost_marked': [{
                'value': '0',
                'text': '准流失'
            }, {
                'value': '1',
                'text': '已确认流失'
            }],
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
            tables: ['student'],
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
                        'key': 'creattime',
                        'value': startTime,
                        'type': 'gt'
                    })
                    filterObj.push({
                        'key': 'creattime',
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
