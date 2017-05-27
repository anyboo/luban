<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title ng-binding">
                    <i class="fa fa-user"></i>请选择学员
                </h3>
            </div>
            <div class="modal-body ng-scope">
                <div xo-rest="students" xo-rest-ctrl="modal_select_student" xo-rest-grid="{maxsize:5,params:vm.params}" loading-container=".list-student" loading-text="正在加载学员..." empty-text="没有符合条件的学员!" class="ng-scope">
                    <div class="row wrapper no-gutter bg-light">
                        <div class="col-xs-12">
                            <div class="input-group w-full">
                                <div class="input-group w-full">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <lb-dropdowns menu-align="start" @command="handleCommand">
                                                <lb-dropdown-button class="btn btn-default btn-sm ng-pristine ng-valid ng-touched">
                                                    {{lb_localdata.search.search_value}}
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                    <template v-for="item in lb_localdata.search.fields">
                                                        <lb-dropdown-item :command="item.name">{{item.value}}</lb-dropdown-item>
                                                    </template>
                                                </lb-dropdown-menu>
                                            </lb-dropdowns>
                                        </div>
                                        <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="lb_localdata.form.lb_search_value" @change="handleSearch">
                                        <span class="input-group-btn">
                                            <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status" @input="handleSearch"></lb-buttongroup>
                            <lb-buttongroup :group-data="lb_localdata.lb_view_mode" v-model="lb_localdata.form.lb_view_mode"></lb-buttongroup>
                        </div>
                    </div>
                    <div class="wrapper list-student bg-light lter">
                        <div class="row ng-scope text-center " v-if="lb_localdata.form.lb_view_mode == 'image'">
                            <template v-for="item in getTablesData()">
                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 m-b ng-scope">
                                    <div class="bg-white b-a r-2x list-student-item box-shadow">
                                        <div class="face ng-scope ">
                                            <a href="#/student/64267">
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
                    <div class="table-responsive ng-scope " v-if="lb_localdata.form.lb_view_mode == 'list'">
                        <lb-table :data="getTablesData()" stripe highlight-current-row ref="singleTable" @current-change="handleCurrentChange">
                            <lb-table-column width="30" prop="data" label class="ng-scope">
                                <template scope="scope">
                                    <input type="radio" name="selectid" :checked="getCheckRow(scope.row._id)">
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="学员">
                                <template scope="scope">
                                    <span class="ng-binding">{{ scope.row.student_name }}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="性别">
                                <template scope="scope">
                                    <span ng-bind-html="item.sex|sex:1" class="ng-binding">{{ scope.row.sex }}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="英文名">
                                <template scope="scope">
                                    {{scope.row.nickname}}
                                </template>
                            </lb-table-column>
                        </lb-table>
                    </div>
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
            <div class="modal-footer text-center ng-scope">
                <button class="btn btn-primary ng-binding" @click="handleSelectStudent" :disabled="currentRow==null">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import lodash from 'lodash'
import base64 from '~/api/base64.js'
import makeimage from '~/api/makeImage.js'
export default {
    name: 'selectStudentTpl',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_status': '',
                'lb_view_mode': 'list'
            },
            'lb_params_status': [{
                'value': '',
                'text': '所有学员'
            }, {
                'value': '0',
                'text': '未报读'
            }, {
                'value': '1',
                'text': '已报读'
            }],
            'lb_view_mode': [{
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
            lb_localdata,
            lb_tables: ['student'],
            makeImage: makeimage,
            currentRow: null
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleSelectStudent() {
            this.$store.state.envs.currStudent = this.currentRow
            this.lbClosedialog()
        },
        getCheckRow(rowid) {
            let result = false
            if (this.currentRow) {
                if (this.currentRow._id == rowid) {
                    result = true
                }
            }
            return result
        },
        handleCommand(value) {
            this.lb_localdata.search.search_key = value
            this.lb_localdata.search.search_value = lodash.find(this.lb_localdata.search.fields, {
                'name': value
            }).value
        },
        handleCurrentChange(row) {
            this.currentRow = row
        },
        handleSearch() {
            let filterObj = []
            let search_value = this.lb_localdata.form.lb_search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.lb_localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let status = this.lb_localdata.form.lb_params_status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'track_type',
                    'value': status,
                    'type': ''
                })
            }
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
