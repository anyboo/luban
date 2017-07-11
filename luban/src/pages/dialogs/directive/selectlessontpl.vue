<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-flag"></i>请选择课时包
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="lessons" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-group" loading-text="正在加载课程..." empty-text="没有符合条件的课程!" xo-rest-ctrl="select_lesson_tpl" class="ng-scope">
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
                        <div class="col-xs-12 col-md-5">
                            <button @click="lbShowdialog($event,'lb-newlessonmodal')" class="btn btn-primary pull-right ng-click-active">
                                <i class="fa fa-plus"></i>添加课程
                            </button>
                        </div>
                    </div>
                    <ul class="list-group m-t">
                        <template v-for="item in getTablesData()">
                            <li class="list-group-item ng-scope" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                                <h4 class="list-group-item-heading ng-binding">{{item.lesson_name}}<span class="label bg-warning pull-right ng-binding ng-scope" ng-if="item.lesson_type == '1'">1对1</span></h4>
                                <p class="list-group-item-text text-muted ng-binding">课程编号:<span class="text-danger ng-binding">{{item.lesson_no}}</span>,课程售价:<span class="text-success ng-binding">{{item.price}}</span>,课程单价:8.00,总课次:123</p>
                            </li>
                        </template>
                        <div class="grid-data-result">
                        </div>
                    </ul>
                    <div class="panel-footer ">
                        <div class="row ">
                            <el-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" @click="handleSelectLesson">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectLessonTpl',
    data() {
        let localdata = {
            'form': {
                'grid_search_value': '',
                'search_value': '',
                'status': '',
            },
            'search': {
                'fields': [{
                    'name': 'lesson_name',
                    'value': '课程名'
                }, {
                    'name': 'lesson_no',
                    'value': '课程编号'
                }],
                'search_key': 'lesson_name',
                'search_value': '课程名'
            }
        }
        return {
            localdata,
            tables: ['course'],
            currentRow: null
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleSelectLesson() {
            this.lbClosedialog()
            this.$store.state.envs.currDialogResult = this.currentRow
            this.$store.state.envs.currDialog = 'lb-selectlessontpl'
        },
        getCheckRowClass(rowid) {
            let classStr = ''
            if (this.getCheckRow(rowid)) {
                classStr = 'active'
            }
            return classStr
        },
        handleListChange(row) {
            this.currentRow = row
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
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
