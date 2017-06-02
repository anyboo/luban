<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="icon-lock"></i>已封存学员档案列表
                </h3>
            </div>
            <div class="wrapper bg-white ng-scope" xo-rest="students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,isdelete:1}}" xo-rest-ctrl="trash">
                <div ng-if="$action == 'list'" class="ng-scope">
                    <div class="padder">
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
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model.lazy="localdata.form.lb_search_value" @change="handleSearch">
                                <span class="input-group-btn">
                                <button class="btn btn-sm btn-default" type="button" @click="handleSearch">搜索</button>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive m-t">
                        <lb-table :data="getTablesData()" stripe>
                            <lb-table-column prop="data" label="学生姓名">
                                <template scope="scope">
                                    <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':scope.row.sex=='0','fa-male':scope.row.sex!='0'}"></i>
                                </span>{{ scope.row.student_name }}
                                    <span v-if="scope.row.nickname != ''" class="ng-binding ng-scope">{{ scope.row.nickname }}</span>
                                </template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="联系电话">
                                <template scope="scope">{{ scope.row.first_tel }}</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="建档日期">
                                <template scope="scope">2017-05-13</template>
                            </lb-table-column>
                            <lb-table-column prop="data" label="操作">
                                <template scope="scope">
                                    <a class="link" ng-click="do_recover(item)">
                                        <i class="icon-lock-open"></i>恢复
                                    </a>
                                    <a class="link" ng-click="confirm_delete(item)" ui-per="student.delete">
                                        <i class="fa fa-times"></i>删除
                                    </a>
                                </template>
                            </lb-table-column>
                        </lb-table>
                        <div class="grid-data-result"></div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-4 text-center">
                                <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 条记录">共 1 条记录</small>
                            </div>
                            <div class="col-sm-8 text-right text-center-xs">
                                <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lodash from 'lodash'
import base64 from '~/api/base64.js'
export default {
    name: 'trash',
    data() {
        let localdata = {
            'form': {
                'lb_search_value': ''
            },
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
                }],
                'search_key': 'student_name',
                'search_value': '姓名'
            }
        }
        return {
            localdata,
            lb_tables: ['student']
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = lodash.find(this.localdata.search.fields, {
                'name': value
            }).value
        },

        handleSearch() {
            let filterObj = []
            let search_value = this.localdata.form.lb_search_value.trim()
            if (search_value.length > 0) {
                filterObj.push({
                    'key': this.localdata.search.search_key,
                    'value': search_value,
                    'type': 'like'
                })
            }
            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
