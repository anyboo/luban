<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" @click="lbClosedialog($event)" class="close  ">
                    <span class="text-right" style="float:right">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i>考勤</i>
                </h3>
            </div>
            <div class="modal-body">
                <el-steps :center="true" :active="1" finish-status="success">
                    <el-step title="选择班级"></el-step>
                    <el-step title="选择排课"></el-step>
                    <el-step title="考勤"></el-step>
                </el-steps>
                <div class="row">
                    <div class="col-xs-12 col-md-7">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <el-dropdown menu-align="start" @command="handleCommand">
                                        <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                            {{localdata.search.search_value}}
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                        <el-dropdown-menu slot="dropdown" style="z-index:3000;">
                                            <template v-for="item in localdata.search.fields">
                                                <el-dropdown-item :command="item.name">{{item.value}}</el-dropdown-item>
                                            </template>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="list-group m-t">
                    <template v-for="item in getTablesData()">
                        <li class="list-group-item ng-scope" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                            <h4 class="list-group-item-heading ng-binding">{{item.class_name}}</h4>
                            <p class="list-group-item-text text-muted ng-binding">老师:{{getLookUp(item.employee, 'name')}},已报人数:3/{{item.max_student_num}},上课次数:0/{{item.total_times}}</p>
                        </li>
                    </template>
                </ul>
                <div class="panel-footer">
                    <div class="row ">
                        <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleSelectClass" :disabled="currentRow==null">下一步</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'suspendshours',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名称'
                }, {
                    'name': 'employee.name',
                    'value': '老师姓名'
                }],
                'search_key': 'class_name',
                'search_value': '班级名称'
            },
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            }
        }
        return {
            status: 0,
            tables: ['classes'],
            currentRow: null,
            localdata
        }
    },
    computed: {},
    watch: {

    },
    methods: {
        handleSelectClass() {
            //this.lbClosedialog()
            //this.$store.state.envs.currDialogResult = this.currentRow
            //this.$store.state.envs.currDialog = 'lb-selectclasstpl'
        },
        handleListChange(row) {
            this.currentRow = row
        },
        getCheckRowClass(rowid) {
            let classStr = ''
            if (this.getCheckRow(rowid)) {
                classStr = 'active'
            }
            return classStr
        },
        getCheckRow(rowid) {
            let result = false
            if (this.currentRow && this.currentRow._id == rowid) {
                result = true
            }
            return result
        },
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
            this.handleSearch()
        },
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-suspendshours'
            })
        },
        handleSearch() {
            let filterObj = []
            this.currentRow = null
            let search_value = this.localdata.form.search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let status = this.localdata.form.status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
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
        }
    }
}
</script>
