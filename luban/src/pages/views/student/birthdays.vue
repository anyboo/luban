<template>
    <div ui-view class="wrapper">
        <div class="wrapper-xs">
            <div class="panel panel-default" xo-rest="birthday_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="birthday_students">
                <div class="row wrapper">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                    </div>
                </div>
                <div class="table-responsive">
                    <el-table :data="getTablesData()" stripe>
                        <el-table-column prop="data" label="学员">
                            <template scope="scope">
                                <a class="link" @click="handleRouter($event,scope.row)">
                                    <span >
                                        <i class="fa" :class="{'fa-female':scope.row.sex=='2','fa-male':scope.row.sex=='1'}"></i>
                                    </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" >{{ scope.row.nickname }}</span>
                                </a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="出生日期">
                            <template scope="scope">{{getDateFormat(scope.row.birth)}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="年龄">
                            <template scope="scope">
                                <span class="badge bg-info">{{ fromNow(scope.row.birth) }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data" label="建档日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </el-table-column>
                        <el-table-column prop="data" label="已报课程数">
                            <template scope="scope">{{ scope.row.lesson?scope.row.lesson.length:0 }}</template>
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
</template>
<script>
export default {
    name: 'birthdays',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
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
            }],
            'lessonlookup': {
                'localField': '_id',
                'from': 'order',
                'foreignField': 'student_id',
                'as': 'lesson'
            }
        }
        return {
            localdata,
            tables: ['student'],

        }
    },
    computed: {},
    watch: {},
    methods: {
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$router.push('/student/info')
            event.stopPropagation()
        },
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
            filterObj.push({
                'key': 'birthstr',
                'value': -1,
                'type': 'sort'
            })
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lessonlookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt).then((obj) => {
            })
        }
    }
}
</script>
