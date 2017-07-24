<template>
    <div ui-view class="wrapper ">
        <div class="wrapper-xs">
            <div ui-view  :class="{result:getflowchange}">
                <div class="panel panel-default" xo-rest="fees" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="fees">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-4 m-t">
                            <div class="inline">
                                <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="localdata.form.date_start">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                                <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="localdata.form.date_end">
                            </div>
                        </div>
                          <template v-if="getActionOption('iaeflow')">
                        <div class="col-xs-12 col-md-8 m-t">
                            <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                            <lb-buttongroup :group-data="localdata.type" v-model="localdata.form.type" @input="handleSearch"></lb-buttongroup>
                            <a @click="lbShowdialog($event,'lb-flowaddmodal')" class="btn btn-primary pull-right ng-click-active">
                                <i class="fa fa-pencil"></i>记一笔
                            </a>
                        </div>
                    </template>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <!--
                                        <el-table-column prop="data" label="操作">
                                            <template scope="scope">
                                                <a class="btn btn-danger btn-xs ng-isolate-scope" confirm-action="do_delete(item)" confirm-text="确定要撤销流水账吗?" ui-per="iae.delete">
                                                    <i class="fa fa-reply"></i>撤销
                                                </a>
                                                <a ng-click="$util.open('tpl/app/iae/set_odi.modal.html','sm',item)" @click="lbShowdialog($event,'lb-setodimodal')">设置分类</a>
                                            </template>
                                        </el-table-column>
                                           -->
                            <el-table-column prop="data" label="日期">
                                <template scope="scope">{{ getDateFormat(scope.row.create_time) }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="金额">
                                <template scope="scope">
                                    <span class="badge bg-warning">{{getToFixed(scope.row.amount)}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="类型">
                                <template scope="scope">
                                    <span  class="badge bg-warning">{{getButtongroupText(localdata.type,scope.row.type)}}</span>
                                </template>
                            </el-table-column>
                            <!--
                            <el-table-column prop="data" label="分类">
                                <template scope="scope">
                                    <span ng-if="item.type == '0'" class="label bg-info">未设置</span>
                                </template>
                            </el-table-column>
                            -->
                            <el-table-column prop="data" label="备注">
                                <template scope="scope">
                                    <span ng-bind-html="item.note" >{{scope.row.note}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="经办人">
                                <template scope="scope">{{getLookUp(scope.row.employee, 'name')}}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="录入日期">
                                <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                            </el-table-column>
                        </el-table>
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
            }],
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
        }
        return {
            localdata,
            tables: ['flow']
        }
    },
    computed: {
        getflowchange() {
            if (this.$store.state.envs.currDialog == 'lb-flow') {
                this.handleSearch()
            }
            return true
        }
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
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
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
