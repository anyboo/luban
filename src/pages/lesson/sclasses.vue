<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope" xo-rest="sclasses" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="sclasses" loading-text="正在加载班级..." empty-text="没有符合条件的班级!">
            <ul class="breadcrumb bg-white b-a">
                <li>
                    <a ui-sref="lesson.packages" href="#/lesson/packages">
                        <i class="fa fa-suitcase"></i>课时包
                    </a>
                </li>
                <li class="active">班级设置</li>
            </ul>
            <div class="panel panel-default">
                <div class="row wrapper no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="padder">
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
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                            <i class="fa fa-filter"></i>过滤
                        </button>
                        <lb-buttongroup :group-data="lb_localdata.lb_params_is_end" v-model="lb_localdata.form.lb_params_is_end"></lb-buttongroup>
                        <div class="inline w-md m-l-xs ng-scope" ng-if="teacher_rest">
                            <select class="form-control input-sm ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="oe_id" ng-options="item.oe_id as item.name for item in teacher_rest.$list" style="display: none;" v-model="lb_localdata.form.lb_params_oe_id">
                                <option value class>选择老师</option>
                                <option value="0">纪岚雪</option>
                            </select>
                            <div class="chosen-container chosen-container-single" style="width: 240px;" title>
                                <a class="chosen-single" tabindex="-1">
                                    <span>选择老师</span>
                                    <div>
                                        <b></b>
                                    </div>
                                </a>
                                <div class="chosen-drop">
                                    <div class="chosen-search">
                                        <input type="text" autocomplete="off">
                                    </div>
                                    <ul class="chosen-results"></ul>
                                </div>
                            </div>
                        </div>
                        <a ng-click="$util.open('tpl/app/lesson/sclasses/new_sclass.modal.html','md')" @click="lbShowdialog($event,'lb-newsclassmodal')" class="btn btn-primary pull-right">
                            <i class="fa fa-plus"></i>新建班级
                        </a>
                    </div>
                </div>
                <div class="table-responsive m-t" style="min-height:400px">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column width="80" prop="data" label>
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu" :menu-data="scope.row">
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
                            <template scope="scope">{{ scope.row.open_time }}</template>
                        </lb-table-column>
                    </lb-table>
                    <div class="grid-data-result">
                        <p class="text-center ng-binding ng-scope" ng-if="!loading && grid.data.length==0">
                            <i class="fa fa-frown-o"></i>没有符合条件的班级!
                        </p>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 0 个班级">共 0 个班级</small>
                        </div>
                        <div class="col-sm-4 text-right text-center-xs">
                            <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                        </div>
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
        let lb_localdata = {
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
                'search_value': ''
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
            lb_localdata,
            lb_tables: ['setting'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.lb_localdata.search.search_key = value
            this.lb_localdata.search.search_value = this.lodash.find(this.lb_localdata.search.fields, {
                'name': value
            }).value
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
                    'key': 'status',
                    'value': status,
                    'type': ''
                })
            }

            let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
