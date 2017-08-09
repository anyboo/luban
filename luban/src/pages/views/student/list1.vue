<template>
    <div class="wrapper">
        <div class="wrapper-xs">
            <div class="wrapper panel panel-default bg-white">
                <div class="row no-gutter">
                    <div class="col-xs-12">
                        <lb-buttongroup :group-data="localdata.lesson_type" v-model="localdata.form.lesson_type"></lb-buttongroup>
                    </div>
                </div>
                <div class="m-t">
                    <div class="row no-gutter">
                        <div class="col-xs-12">
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" placeholder="学员" class="form-control" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                              <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <lb-buttongroup :group-data="localdata.pay_status" v-model="localdata.form.pay_status"></lb-buttongroup>
                            <div class="inline w-md m-l-xs" ng-if="class_rest.$loaded">
                                <div class="chosen-container chosen-container-single" style="width: 240px;" title>
                                    <el-select  v-model="localdata.form.classes_id" filterable placeholder="请选择班级">
                                        <el-option v-for="item in getClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <button class="btn btn-default m-l-xs ng-isolate-scope" export="class_students" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-class_students" style="display:none;">
                                <form name="export_form_class_students" action="/api/export" method="post" target="_blank" class="">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                                    <input type="hidden" name="resource" value="class_students">
                                    <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" >
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" >
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row m-t">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="学生姓名">
                                <template scope="scope">
                                    <a class="link" @click="handleRouter($event,scope.row)">
                                        <span >
                                            <i class="fa" :class="{'fa-female ':scope.row.sex=='2','fa-male':scope.row.sex=='1'
                                        ,'mans':scope.row.sex=='1','woman':scope.row.sex=='2'}"></i>
                                        </span>{{ scope.row.student_name }}
                                        <span v-if="scope.row.nickname != ''" >{{ scope.row.nickname }}</span>
                                    </a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="联系电话">
                                <template scope="scope">{{ scope.row.first_tel }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="所在班级">
                                <template scope="scope">
                                    <a class="link" ng-click="params.oc_id=item.oc_id" tooltip="点击班级名查看该班级所有学员">11</a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="授课老师">
                                <template scope="scope">张英乙</template>
                            </el-table-column>
                            <el-table-column prop="data" label="报班日期">
                                <template scope="scope">2017-05-13</template>
                            </el-table-column>
                            <el-table-column prop="data" label="缴费状态">
                                <template scope="scope">
                                    <span class="label bg-warning" ng-if="item.pay_status == '1'">欠费:￥22.00</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="报读课次">
                                <template scope="scope">4</template>
                            </el-table-column>
                            <el-table-column prop="data" label="课次单价">
                                <template scope="scope">
                                    <span class="badge bg-info">￥16.50</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="剩余课次">
                                <template scope="scope">
                                    3
                                    <a @click="lbShowdialog($event,'lb-viewcoursemodal')">
                                        <i class="icon-eye"></i>
                                    </a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="剩余金额">
                                <template scope="scope">
                                    <span class="badge bg-info">￥49.5</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="学员归属">
                                <template scope="scope">
                                    <span class="label" :class="{'bg-info':getEmployeeName(scope.row)!='未设定','bg-gray':getEmployeeName(scope.row)=='未设定'}">{{ getEmployeeName(scope.row) }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="建档日期">
                                <template scope="scope">{{getDateFormat(scope.row.creattime)}}</template>
                            </el-table-column>
                        </el-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
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
    name: 'list1',
    data() {
        let localdata = {
            'lesson_type': [{
                'value': '0',
                'text': '班课学员'
            }, {
                'value': '1',
                'text': '1对1学员'
            }, {
                'value': '10',
                'text': '课时包学员'
            }],
            'form': {
                'lesson_type': '',
                'pay_status': '',
                'oc_id': '',
                'classes_id': '',
                'region_oe_id': '',
                'student_name': '学员',
                'student_id': '',
            },
            'pay_status': [{
                'value': '2',
                'text': '已缴费'
            }, {
                'value': '1',
                'text': '部分缴费'
            }, {
                'value': '0',
                'text': '未缴费'
            }],
            'lookup': {
                'localField': 'region_oe_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
        }
        return {
            localdata,
            tables: ['student']
        }
    },
    mounted() {
        this.getTableApidata('classes')
    },
    computed: {
        getClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
    },
    watch: {},
    methods: {
        handleRouter(event, item) {
            this.$store.state.envs.currStudent = item
            this.$store.commit('router', '/student/info')
            event.stopPropagation()
        },
        getEmployeeName(item) {
            let name = '未设定'
            if (item.employee && item.employee.length > 0) {
                name = this.getLookUp(item.employee, 'name')
            }
            return name
        },
        handleSearch() {
            let filterObj = []
            let student_id = this.localdata.form.student_id.trim()
            if (student_id.length > 0) {
                filterObj.push({
                    'key': '_id',
                    'value': student_id,
                    'type': ''
                })
            }
            filterObj.push({
                'key': 'isdel',
                'value': false,
                'type': ''
            })
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
