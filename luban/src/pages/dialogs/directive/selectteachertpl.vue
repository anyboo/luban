t
<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header ng-scope">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">请选择老师</h3>
            </div>
            <div class="modal-body ng-scope">
                <div class="ng-scope">
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
                            <lb-buttongroup :group-data="localdata.is_part_time" v-model="localdata.form.is_part_time" @input="handleSearch"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="row list-student m-t">
                        <template v-for="item in getTablesData()">
                            <div class="col-sm-3 col-xs-4 m-b ng-scope">
                                <div class="list-student-item box-shadow bg-info" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                                    <div class="face">
                                        <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; ">
                                            <img :src="makeImage(item.name,80)" style="vertical-align:top;" width="100%" height="">
                                        </div>
                                    </div>
                                    <div class="name m-t ng-binding">
                                        <i class="fa" :class="{'fa-female':item.sex=='0','fa-male':item.sex!='0'}"></i>
                                        </span>{{item.name}}
                                    </div>
                                </div>
                            </div>
                        </template>
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
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" @click="handleSelectTeacher">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectTeacherTpl',
    data() {
        let localdata = {
            'form': {
                'is_part_time': '',
                'search_value': '',
            },
            'is_part_time': [{
                'value': '0',
                'text': '全职'
            }, {
                'value': '1',
                'text': '兼职'
            }],
            'search': {
                'fields': [{
                    'name': 'name',
                    'value': '姓名'
                }, {
                    'name': 'mobile',
                    'value': '手机号'
                }],
                'search_key': 'name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            tables: ['employee'],
            currentRow: null
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleSelectTeacher() {
            this.lbClosedialog()
            this.$store.state.envs.currDialogResult = this.currentRow
            this.$store.state.envs.currDialog = 'lb-selectteachertpl'
        },
        getCheckRowClass(rowid) {
            let classStr = 'bg-white'
            if (this.getCheckRow(rowid)) {
                classStr = 'bg-info'
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
        handleListChange(row) {
            this.currentRow = row
        },
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
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
            let is_part_time = this.localdata.form.is_part_time.trim()
            if (is_part_time.length > 0) {
                filterObj.push({
                    'key': 'is_part_time',
                    'value': is_part_time,
                    'type': ''
                })
            }
            console.log(filterObj)
            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
