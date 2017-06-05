<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
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
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="localdata.lb_params_is_end" v-model="localdata.form.lb_params_is_end"></lb-buttongroup>
                        <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                            
                        </div>
                        <a @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                            <i class="fa fa-plus"></i>新建班级
                        </a>
                    </div>
                </div>
                <div class="table-responsive m-t" style="min-height:400px">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column width="80" prop="data" label>
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="localdata.dropDownMenu" :menu-data="scope.row">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="简称">
                            <template scope="scope">{{ scope.row.class_name }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="名称">
                            <template scope="scope">{{ scope.row.short_name }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="科目">
                            <template scope="scope">{{ scope.row.sj_id }}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="级别">
                            <template scope="scope">66</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="已排课次数">
                            <template scope="scope">1</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="已考勤次数">
                            <template scope="scope">1</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="教师">
                            <template scope="scope">{{scope.row.teacher_name}}</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="开课日期">
                            <template scope="scope">{{ getDateFormat(scope.row.open_time) }}</template>
                        </lb-table-column>
                    </lb-table>
                </div>
                  <div class="panel-footer ">
                        <div class="row ">
                            <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                            </lb-pagination>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sclasses',
    data() {
        let localdata = {
            'form': {
                'lb_params_is_end': '',
                'lb_params_oe_id': '',
                'lb_search_value': '',
                'lb_params_status': ''
            },
            'lb_params_is_end': [{
                'value': '0',
                'text': '未结课'
            }, {
                'value': '1',
                'text': '已结课'
            }],
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名'
                }, {
                    'name': 'short_name',
                    'value': '班级简称'
                }],
                'search_key': 'class_name',
                'search_value': '班级名'
            },
            'dropDownMenu': [{
                'url': 'lb-newsclassmodal',
                'icon': 'fa icon-note',
                'text': '编辑班级'
            }, {
                'url': 'lb-editphotomodal',
                'icon': 'fa icon-user',
                'text': '学员管理'
            }, {
                'url': 'lb-ordermodal',
                'icon': 'fa icon-ban',
                'text': '删除班级'
            }, {
                'url': 'lb-ordersmodal',
                'icon': 'fa fa-calendar',
                'text': '结课'
            }],

        }
        return {
            localdata,
            lb_tables: ['sclasses'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.localdata.search.search_key = value
            this.localdata.search.search_value = this.lodash.find(this.localdata.search.fields, {
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
            let status = this.localdata.form.lb_params_status.trim()
            if (status.length > 0) {
                filterObj.push({
                    'key': 'status',
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
