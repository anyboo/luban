<template>
    <div ui-view class="ng-scope wrapper">
        <div class="wrapper-xs ng-scope">
            <div ui-view class="ng-scope">
                <div class="panel panel-default ng-scope" :class="{result:getSelectStudentName}">
                    <div class="row wrapper">
                        <div class="col-xs-12 col-md-3 m-t">
                            <el-date-picker v-model="localdata.form.daterange" type="daterange"></el-date-picker>
                        </div>
                        <div class="col-xs-12 col-md-5 m-t">
                            <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status"></lb-buttongroup>
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="localdata.form.student_name">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                            <i class="taskbar-action-icon glyphicon glyphicon-user"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4 m-t">
                            <button class="btn btn-primary pull-right" @click="handSelectStudent(true)">
                                <i class="icon-plus glyphicon glyphicon-user"></i>停课登记
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="操作">
                                <template scope="scope">hello</template>
                            </el-table-column>
                            <el-table-column prop="data" label="停课学员">
                                <template scope="scope">张三</template>
                            </el-table-column>
                            <el-table-column prop="data" label="停课时间">
                                <template scope="scope">{{ scope.row.value1 }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="复课时间">
                                <template scope="scope">{{ scope.row.value2 }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="停课课程">
                                <template scope="scope"></template>
                            </el-table-column>
                            <el-table-column prop="data" label="停课原因">
                                <template scope="scope">{{ scope.row.suspend_reason }} </template>
                            </el-table-column>
                            <el-table-column prop="data" label="停课状态">
                                <template scope="scope"></template>
                            </el-table-column>
                            <el-table-column prop="data" label="登记时间">
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
    </div>
</template>
<script>
export default {
    name: 'suspends',
    data() {
        let localdata = {
            'status': [{
                'value': '',
                'text': '所有'
            }, {
                'value': '1',
                'text': '停课中'
            }, {
                'value': '0',
                'text': '待停课'
            }, {
                'value': '2',
                'text': '已复课'
            }],
            'form': {
                'status': '',
                'student_name': ''
            }
        }
        return {
            localdata,
            tables: ['suspend'],
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selStudentAddInquiry) {
                        let student = this.$store.state.envs.currDialogResult
                        this.$store.state.envs.currStudent = student
                        this.handleShowDialog('lb-suspendshours', student)
                    } else {
                        this.student_name = this.$store.state.envs.currDialogResult.student_name
                        this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                        this.handleSearch()
                    }
                } else {
                    if (!this.selStudentAddInquiry) {
                        this.localdata.form.student_id = ''
                        this.student_name = '学员'
                        // this.handleSearch()
                    }
                }
            }
            if (this.$store.state.envs.currDialog == 'lb-inquiry') {
                // this.handleSearch()
            }
            return true
        },
    },
    watch: {},
    methods: {
        handSelectStudent(add) {
            this.selStudentAddInquiry = add
            if (add) {
                this.$store.state.envs.currDialog = ''
                this.$store.state.envs.currDialogResult = null
            }
            this.handleShowDialog('lb-selectstudenttpl')
        },
    }
}
</script>
