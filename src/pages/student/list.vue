<template>
    <div class="panel panel-default ng-scope" xo-rest="students" xo-rest-grid="{maxsize:5,params:{pagesize:12,page:1}}" xo-rest-ctrl="students" loading-container=".list-student" loading-text="正在加载学员..." empty-text="没有符合条件的学员!">
        <div class="row wrapper">
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
                <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status" @input="handleSearch"></lb-buttongroup>
                <lb-buttongroup :group-data="lb_localdata.lb_view_mode" v-model="lb_localdata.form.lb_view_mode"></lb-buttongroup>
                <button class="btn btn-default ng-isolate-scope" ui-per="student.export" export="students" export-params="params">
                    <i class="glyphicon glyphicon-export"></i>导出Excel
                </button>
                <div id="fct-students" style="display:none;">
                    <form name="export_form_students" action="/api/export" method="post" target="_blank" class="ng-pristine ng-valid ng-scope">
                        <input type="hidden" name="X-XSRF-TOKEN" value="30bed37d3e9766e5dc6b3b2b3ee823e0">
                        <input type="hidden" name="resource" value="students">
                        <input type="hidden" name="ob_id" value="11158" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="page" value="1" ng-repeat="(key,value) in params" class="ng-scope">
                        <input type="hidden" name="pagesize" value="12" ng-repeat="(key,value) in params" class="ng-scope">
                    </form>
                </div>
                <a @click="lbShowdialog($event,'lb-trash')">
                    <i class="icon-lock"></i>已封存档案
                </a>
            </div>
        </div>
        <div class="wrapper list-student bg-light lter">
            <div class="row ng-scope" v-if="lb_localdata.form.lb_view_mode == 'image'">
                <template v-for="item in getTablesData()">
                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 m-b ng-scope">
                        <div class="bg-white b-a r-2x list-student-item box-shadow">
                            <div class="face ng-scope">
                                <a href="#/student/64267">
                                    <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 80px; width:80px; height:80px; "><img :src="makeImage(item.student_name,80)" style="vertical-align:top;" width="100%" height=""></div>
                                </a>
                            </div>
                            <div class="name m-t">
                                <a class="link ng-binding">
                                    <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':item.sex=='0','fa-male':item.sex!='0'}"></i>
                                </span>{{ item.student_name }}
                                    <span v-if="item.nickname != ''" class="ng-binding ng-scope">{{ item.nickname }}</span>
                                </a>
                            </div>
                            <div class="tel m-t"><i class="fa fa-phone"></i><span class="ng-binding">{{ item.first_tel }}</span>
                                <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu" class="pull-right">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="table-responsive ng-scope" v-if="lb_localdata.form.lb_view_mode == 'list'">
                <lb-table :data="getTablesData()" stripe>
                    <lb-table-column prop="data" label="操作">
                        <template scope="scope">
                            <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu" :menu-data="scope.row">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="学员">
                        <template scope="scope">
                            <a class="link ng-binding">
                                <span class="ng-binding">
                                    <i class="fa" :class="{'fa-female':scope.row.sex=='0','fa-male':scope.row.sex!='0'}"></i>
                                </span>{{ scope.row.student_name }}
                                <span v-if="scope.row.nickname != ''" class="ng-binding ng-scope">{{ scope.row.nickname }}</span>
                            </a>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="联系电话">
                        <template scope="scope">
                            <span class="ng-binding">{{ scope.row.first_tel }}</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="年龄">
                        <template scope="scope">
                            <span class="ng-binding ng-scope">{{ fromNow(scope.row.birth) }}</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="微信绑定">
                        <template scope="scope">
                            <span ng-if="item.wb_id == 0" class="ng-scope">未绑定</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="考勤卡号">
                        <template scope="scope"></template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="住址">
                        <template scope="scope">{{ scope.row.home_address }}</template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="学员归属">
                        <template scope="scope">
                            <span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label="档案备注">
                        <template scope="scope">
                            <p class="ng-binding">{{ scope.row.note }}</p>
                        </template>
                    </lb-table-column>
                </lb-table>
            </div>
            <div class="grid-data-result"></div>
        </div>
        <div class="panel-footer">
            <div class="row">
            
                <div class="col-sm-3 text-center">
                    <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 4 名学员">共 4 名学员</small>
                </div>
                <div class="col-sm-5 text-right text-center-xs">
                    <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" items-per-page="grid.params.pagesize" max-size="grid.maxsize" boundary-links="true" rotate="false"></ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lodash from 'lodash'
import base64 from '~/api/base64.js'
import makeimage from '~/api/makeImage.js'

export default {
    name: 'list',
    data() {
        let lb_localdata = {
            'form': {
                'lb_search_value': '',
                'lb_params_status': '',
                'lb_view_mode': 'list'
            },
            'lb_params_status': [{
                'value': '',
                'text': '所有学员'
            }, {
                'value': '0',
                'text': '未报读学员'
            }, {
                'value': '1',
                'text': '已报读学员'
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
            'dropDownMenu': [{
                'url': 'lb-editinfomodal',
                'icon': 'fa fa-pencil',
                'text': '修改资料'
            }, {
                'url': 'lb-editphotomodal',
                'icon': 'fa fa-image',
                'text': '更换头像'
            }, {
                'url': 'lb-ordermodal',
                'icon': 'fa fa-shopping-cart',
                'text': '报名'
            }, {
                'url': 'lb-ordersmodal',
                'icon': 'fa fa-money',
                'text': '缴费'
            }, {
                'url': 'lb-regstudentattendancesmodal',
                'icon': 'fa fa-calendar-o',
                'text': '登记考勤'
            }, {
                'url': 'lb-changeclassmodal',
                'icon': 'fa fa-exchange'
            }, {
                'url': 'lb-wechatmodal',
                'icon': 'fa fa-weixin',
                'text': '微信对话'
            }, {
                'url': 'lb-addtrackmodal',
                'icon': 'fa fa-phone-square',
                'text': '跟踪回访'
            }, {
                'url': 'lb-regstudentmatchmodal',
                'icon': 'fa fa-flag-o',
                'text': '登记赛事记录'
            }, {
                'url': 'lb-refundmodal',
                'icon': 'fa fa-reply',
                'text': '退费'
            }, {
                'url': 'lb-endlessonmodal',
                'icon': 'fa fa-stop',
                'text': '结课'
            }, {
                'url': 'lb-changebranchmodal',
                'icon': 'icon-shuffle',
                'text': '转校区'
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
            makeImage: makeimage
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleCommand(value) {
            this.lb_localdata.search.search_key = value
            this.lb_localdata.search.search_value = lodash.find(this.lb_localdata.search.fields, {
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

            let filterTxt = base64.encode(JSON.stringify(filterObj))
            this.handleGetFilterTable(filterTxt, 6, 0)
        }
    }
}
</script>
