<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header ng-scope">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span>×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-user"></i>请选择学员
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div class="ng-scope">
                    <div class="row wrapper no-gutter bg-light">
                        <div class="col-xs-12">
                            <div class="input-group w-full">
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
                            <br>
                            <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" @input="handleSearch"></lb-buttongroup>
                            <lb-buttongroup :group-data="localdata.view_mode" v-model="localdata.form.view_mode"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="wrapper list-student bg-light lter">
                        <div class="row ng-scope text-center " v-if="localdata.form.view_mode == 'image'">
                            <template v-for="item in getTablesData()">
                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 m-b ng-scope">
                                    <div class="b-a r-2x list-student-item box-shadow" :class="getCheckRowClass(item._id)" @click="handleListChange(item)">
                                        <div class="face ng-scope ">
                                            <a>
                                                <div class="avatar-wrapper adres-css " style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px;">
                                                    <img :src="makeImage(item.student_name,80)" style="vertical-align:top;" width="100%" height="">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="name m-t">
                                            <span class="ng-binding">
                                                <i class="fa" :class="{'fa-female':item.sex=='0','fa-male':item.sex!='0'}"></i>
                                            </span>{{ item.student_name }}
                                        </div>
                                        <div class="tel m-t"><span class="ng-binding">{{ item.nickname }}&nbsp;</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="table-responsive ng-scope " v-if="localdata.form.view_mode == 'list'">
                        <el-table :data="getTablesData()" stripe highlight-current-row ref="singleTable" @current-change="handleRowChange">
                            <el-table-column width="30" prop="data" label class="ng-scope">
                                <template scope="scope">
                                    <input type="radio" name="selectid" :checked="getCheckRow(scope.row._id)">
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <span class="ng-binding">{{ scope.row.student_name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="性别">
                                <template scope="scope">
                                    <span class="ng-binding"> {{ getButtongroupText(localdata.sex,scope.row.sex)}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="data" label="英文名">
                                <template scope="scope">
                                    {{scope.row.nickname}}
                                </template>
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
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" @click="handleSelectStudent">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import base64 from '~/api/base64.js'
import makeimage from '~/api/makeImage.js'
export default {
    name: 'selectStudentTpl',
    data() {
        let localdata = {
            'form': {
                'search_value': '',
                'status': '',
                'view_mode': 'list'
            },
            'sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }, {
                'value': '0',
                'iclass': 'fa fa-question-circle',
                'text': '待确定'
            }],
            'status': [{
                'value': '',
                'text': '所有学员'
            }, {
                'value': '0',
                'text': '未报读'
            }, {
                'value': '1',
                'text': '已报读'
            }],
            'view_mode': [{
                'value': 'image',
                'iclass': 'fa fa-image',
                'text': '头像'
            }, {
                'value': 'list',
                'iclass': 'fa fa-list',
                'text': '列表'
            }],
            'search': {
                'fields': [{
                    'name': 'student_name',
                    'value': '姓名'
                }, {
                    'name': 'first_tel',
                    'value': '手机号'
                }, {
                    'name': 'home_address',
                    'value': '住址'
                }, {
                    'name': 'nickname',
                    'value': '英文名'
                }, {
                    'name': 'card_no',
                    'value': '学员卡号'
                }],
                'search_key': 'student_name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            tables: ['student'],
            alias: 'selstudent',
            makeImage: makeimage,
            currentRow: null
        }
    },
    computed: {

    },
    watch: {},
    methods: {
        handleSelectStudent() {
            this.lbClosedialog()
            this.$store.state.envs.currDialogResult = this.currentRow
            this.$store.state.envs.currDialog = 'lb-selectstudenttpl'
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
            this.localdata.search.search_value = _.find(this.localdata.search.fields, {
                'name': value
            }).value
            this.handleSearch()
        },
        handleRowChange(row) {
            this.currentRow = row
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
                'key': 'isdel',
                'value': false,
                'type': ''
            })
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
