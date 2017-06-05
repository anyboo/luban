<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header ng-scope" :class='{result:changeTeacher}'>
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-flag"></i>请选择班级
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div class="ng-scope">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="input-group w-full">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <lb-dropdowns menu-align="start" @command="handleCommand">
                                            <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                {{localdata.search.search_value}}
                                                <span class="caret"></span>
                                            </lb-dropdown-button>
                                            <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                <template v-for="item in localdata.search.fields">
                                                    <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                </template>
                                            </lb-dropdown-menu>
                                        </lb-dropdowns>
                                    </div>
                                    <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.search_value" @change="handleSearch">
                                    <span class="input-group-btn">
                                            <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <a @click="lbShowdialog($event,'lb-openclassmodal')" class="btn btn-primary btn-sm ng-click-active">
                                <i class="fa fa-plus"></i>新班级
                            </a>
                        </div>
                    </div>
                    <ul class="list-group m-t">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope" :class="getCheckRowClass(item._id)" @click="handleListChange(item)" ng-repeat="item in grid.data" ng-if="!loading">
                                <h4 class="list-group-item-heading ng-binding">{{item.class_name}}</h4>
                                <p class="list-group-item-text text-muted ng-binding">老师:{{getLookUp(item.employee, 'name')}},已报人数:3/{{item.max_student_num}},上课次数:0/{{item.total_times}}</p>
                            </li>
                        </template>
                        <div class="grid-data-result"></div>
                    </ul>
                    <div class="panel-footer">
                        <div class="row ">
                            <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </lb-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" @click="handleSelectClass">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import base64 from '~/api/base64.js'
export default {
    name: 'selectClassTpl',
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
                    'name': 'master',
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
            localdata,
            lb_tables: ['classes'],
            currentRow: null
        }
    },
    computed: {
        changeTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-selectteachertpl') {
                this.handleSearch()
            }
            return result
        },
    },
    watch: {},
    methods: {
        handleSelectClass() {
            this.lbClosedialog()
            this.$store.state.envs.currDialogResult = this.currentRow
            this.$store.state.envs.currDialog = 'lb-selectclasstpl'
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
        handleSearch() {
            let filterObj = []
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
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
