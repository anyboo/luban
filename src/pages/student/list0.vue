<template>
    <div class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper panel panel-default bg-white ng-scope">
                <div class="row no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline">
                            <lb-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></lb-date-picker>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly" v-model="localdata.form.student_name">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                        <i class="icon-user"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <lb-buttongroup :group-data="localdata.region_oe_id" v-model="localdata.form.region_oe_id"></lb-buttongroup>
                    </div>
                </div>
                <div class="row m-t">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column width="90" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="学员">
                            <template scope="scope">
                                <a class="link ng-binding" @click="handleRouter($event,scope.row)">
                                    <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':scope.row.sex=='2','fa-male':scope.row.sex=='1'}"></i>
                                </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" class="ng-binding ng-scope">{{ scope.row.nickname }}</span>
                                </a>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="120" prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </lb-table-column>
                        <lb-table-column width="120" prop="data" label="学员归属">
                            <template scope="scope">
                                <span class="label bg-gray ng-scope">{{ getEmployeeName(scope.row) }}</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="意向程度">
                            <template scope="scope">
                                <span class="label bg-gray ng-scope">{{ getButtongroupText(localdata.purpose,scope.row.purpose)}}</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="来源渠道">
                            <template scope="scope">{{scope.row.track_from}}</template>
                        </lb-table-column>
                        <lb-table-column width="150" prop="data" label="建档日期">
                            <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="档案备注">
                            <template scope="scope">
                                <p ng-bind-html="item.note" class="ng-binding">{{scope.row.note}}</p>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="最后跟踪">
                            <template scope="scope">
                                <span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                            </template>
                        </lb-table-column>
                    </lb-table>
                    <div class="wrapper" style="height:80px"></div>
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
    name: 'list0',
    data() {
        let localdata = {
            'form': {
                'daterange': '',
                'duration': '',
                'region_oe_id': '',
                'student_name': '',
            },
            'region_oe_id': [{
                'value': '1',
                'text': '所有'
            }, {
                'value': '0',
                'text': '未归属'
            }],
            'duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'dropDownMenu': [{
                'url': 'lb-regionsetmodal',
                'icon': 'icon-rocket',
                'text': '学员归属设定'
            }, {
                'url': 'lb-purposesetmodal',
                'icon': 'icon-heart',
                'text': '意向程度设置'
            }, {
                'url': 'lb-addtrackmodal',
                'icon': 'fa fa-phone-square',
                'text': '跟踪回访'
            }],
            'purpose': [{
                'value': '0',
                'text': '请选择'
            }, {
                'value': '1',
                'text': '没有意向'
            }, {
                'value': '2',
                'text': '初步意向'
            }, {
                'value': '3',
                'text': '意向强烈'
            }],
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            }
        }
        return {
            localdata,
            lb_tables: ['student']
        }
    },
    computed: {

    },
    watch: {},
    methods: {
        getEmployeeName(item) {
            let name = '未设定'
            if (item.employee&&item.employee.length>0) {
                name = this.getLookUp(item.employee, 'name')
            }
            return name
        },
        handleRouter(event, item) {
            this.$router.push('/student/info/' + item._id)
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
                        'key': 'creattime',
                        'value': startTime,
                        'type': 'gte'
                    })
                    filterObj.push({
                        'key': 'creattime',
                        'value': endTime,
                        'type': 'lte'
                    })
                }
            }
            filterObj.push({
                'key': 'lookup',
                'value': this.localdata.lookup,
                'type': 'lookup'
            })
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
