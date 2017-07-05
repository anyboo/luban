<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class=" wrapper panel panel-default bg-white ng-scope" page-controller="list2index">
                <div class="row no-gutter">
                    <div class="col-xs-12 ">
                        <lb-buttongroup :group-data="localdata.lesson_type" v-model="localdata.form.lesson_type"></lb-buttongroup>
                    </div>
                </div>
                <div class="m-t ng-scope" xo-rest="class_end_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" ng-if="lesson_type == 0" xo-rest-ctrl="list21">
                    <div class="row no-gutter">
                        <div class="col-xs-12">
                            <div class="inline w-sm va-m m-l-xs">
                                <div class="input-group">
                                    <input type="text" :placeholder="getSelectStudentName" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly">
                                    <span class="input-group-btn">
                                    <button class="btn btn-default" @click="handleSelectStudent">
                                        <i class="icon-user"></i>
                                    </button>
                                </span>
                                </div>
                            </div>
                            <lb-buttongroup :group-data="localdata.pay_status" v-model="localdata.form.pay_status"></lb-buttongroup>
                            <div class="inline w-md m-l-xs ng-scope" ng-if="class_rest.$loaded">
                                <div class="chosen-container chosen-container-single" style="width: 240px;" title>
                                    <el-select v-model="localdata.form.classes_id" filterable placeholder="请选择班级">
                                        <lb-option v-for="item in getClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                                        </lb-option>
                                    </el-select>
                                </div>
                            </div>
                            <button class="btn btn-default m-l-xs ng-isolate-scope" export="class_end_students" export-params="params">
                                <i class="glyphicon glyphicon-export"></i>导出
                            </button>
                            <div id="fct-class_end_students" style="display:none;">
                                <form name="export_form_class_end_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                                    <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                                    <input type="hidden" name="resource" value="class_end_students">
                                    <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                                    <input type="hidden" name="pagesize" value="20" ng-repeat="(key,value) in params" class="ng-scope">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row m-t">
                        <el-table :data="getTablesData()" stripe>
                            <el-table-column prop="data" label="学生姓名">
                                <template scope="scope">
                                    <a class="link ng-binding" @click="handleRouter($event,scope.row)">
                                        <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':scope.row.sex=='2','fa-male':scope.row.sex=='1'}"></i>
                                </span>{{ scope.row.student_name }}
                                        <span v-if="scope.row.nickname != ''" class="ng-binding ng-scope">{{ scope.row.nickname }}</span>
                                    </a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="联系电话">
                                <template scope="scope">{{ scope.row.first_tel }}</template>
                            </el-table-column>
                            <el-table-column prop="data" label="所在班级">
                                <template scope="scope">
                                    <a class="link ng-binding" tooltip="点击班级名查看该班级所有学员">11</a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="授课老师">
                                <template scope="scope">张英乙</template>
                            </el-table-column>
                            <el-table-column prop="data" label="报班日期">
                                <template scope="scope">2017-05-13</template>
                            </el-table-column>
                            <el-table-column prop="data" label="结课日期">
                                <template scope="scope">2017-05-15</template>
                            </el-table-column>
                            <el-table-column prop="data" label="报读课次">
                                <template scope="scope">4</template>
                            </el-table-column>
                            <el-table-column prop="data" label="实际消耗">
                                <template scope="scope">
                                    1
                                    <a ng-click="$util.open('tpl/app/student/view_course.modal.html','lg',{ocs_id:item.ocs_id,lesson_type:'0'})" @click="lbShowdialog($event,'lb-viewcoursemodal')">
                                        <i class="icon-eye"></i>
                                    </a>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="缴费状态">
                                <template scope="scope">
                                    <span class="label bg-success ng-scope" ng-if="item.pay_status == '2'">已缴清</span>
                                </template>
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
    name: 'list2',
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
                'student_name': '学员',
                'student_id': '',
            },
            'pay_status': [{
                'value': '2',
                'text': '已缴清'
            }, {
                'value': '1',
                'text': '部分缴费'
            }, {
                'value': '0',
                'text': '未缴费'
            }]
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
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == 'el-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.localdata.form.student_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.student_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.localdata.form.student_id = ''
                    this.localdata.form.student_name = '学员'
                }
                this.handleSearch()
            }
            return this.localdata.form.student_name
        },
    },
    watch: {},
    methods: {
        handleSelectStudent() {
            //this.$store.state.envs.currDialog = ''
            //this.$store.state.envs.currDialogResult = null
            this.handleShowDialog('el-selectstudenttpl')
        },
        handleRouter(event, item) {
            this.$router.push('/student/info/' + item._id)
            event.stopPropagation()
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
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
