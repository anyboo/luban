<template>
    <div ui-view class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="panel panel-default bg-white ng-scope" xo-rest="inquiry_students" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1}}" xo-rest-ctrl="inquiry_students">
                <div class="row no-gutter">
                    <div class="col-xs-12 col-md-4 m-t">
                        <div class="inline va-m">
                            <input type="text" id="ctl_date_start" range-picker="daterange" pp-end="#ctl_date_end" class="ng-pristine ng-untouched ng-valid ng-isolate-scope" style="display: none;" v-model="lb_localdata.form.lb_params_date_start">
                            <input type="text" id="ctl_date_end" class="ng-pristine ng-untouched ng-valid" style="display: none;" v-model="lb_localdata.form.lb_params_date_end">
                        </div>
                        <div class="inline w-sm va-m m-l-xs">
                            <div class="input-group">
                                <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_param_student_name">
                                <span class="input-group-btn">
                            <button class="btn btn-default" select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="{ob_id:user.gv.ob_id}" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                <i class="icon-user"></i>
                            </button>
                        </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8 m-t">
                        <lb-buttongroup :group-data="lb_localdata.lb_params_region_oe_id" v-model="lb_localdata.form.lb_params_region_oe_id"></lb-buttongroup>
                        <lb-buttongroup :group-data="lb_localdata.lb_duration" v-model="lb_localdata.form.lb_duration"></lb-buttongroup>
                    </div>
                </div>
                <div class="table-responsive m-t">
                    <lb-table :data="getTablesData()" stripe>
                        <lb-table-column width="90" prop="data" label="操作">
                            <template scope="scope">
                                <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                    <lb-dropdown-button slot="buttonslot" button-class="btn btn-default btn-xs" button-tooltip="操作">
                                        <i class="fa fa-cog ng-scope"></i>
                                        <span class="ng-scope">操作</span>
                                        <span class="caret"></span>
                                    </lb-dropdown-button>
                                </lb-dropdown>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="学员">
                            <template scope="scope">
                                <a ui-sref="student.view({os_id:item.os_id})" class="ng-binding" href="#/student/63895">
                                    <span ng-bind-html="item.sex|sex:0" class="ng-binding">
                                <i class="fa fa-female"></i>
                            </span>{{ scope.row.student_name }}
                                </a>
                                <span class="label bg-info ng-binding ng-scope" ng-if="item.age">0岁</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="联系电话">
                            <template scope="scope">{{ scope.row.first_tel }}</template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="学员归属">
                            <template scope="scope">
                                <span class="label bg-gray ng-scope" ng-if="item.region_oe_id == '0'">未设定</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="意向程度">
                            <template scope="scope">
                                <span class="label bg-gray ng-scope" ng-if="item.purpose == '0'">未设置</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column width="100" prop="data" label="来源渠道">
                            <template scope="scope">广告</template>
                        </lb-table-column>
                        <lb-table-column width="150" prop="data" label="建档日期">
                            <template scope="scope">2017-05-13</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="档案备注">
                            <template scope="scope">
                                <p ng-bind-html="item.note" class="ng-binding">dwwqad</p>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="最后跟踪">
                            <template scope="scope">
                                <span class="label bg-danger ng-scope" ng-if="!item.last_track">无跟踪记录</span>
                            </template>
                        </lb-table-column>
                    </lb-table>
                    <div class="wrapper" style="height:80px"></div>
                    <div class="grid-data-result"></div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12"></div>
                        <div class="col-sm-4 text-center">
                            <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 3 条记录">共 3 条记录</small>
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
    name: 'list0',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_date_start': '',
                'lb_params_date_end': '',
                'lb_param_student_name': '',
                'lb_params_region_oe_id': '',
                'lb_duration': ''
            },
            'lb_params_region_oe_id': [{
                'value': '0',
                'text': '未归属'
            }],
            'lb_duration': [{
                'value': 'today',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'dropDownMenu': [{
                'url': 'lb-regionsetmodal',
                'icon': 'icon-rocket',
                'text': '学员归属设定'
            }, {
                'url': 'lb-purposesetmodal',
                'icon': 'icon-heart',
                'text': '意向程度设置'
            }, {
                'url': 'lb-addtrackmodal',
                'icon': 'fa fa-phone-square',
                'text': '跟踪回访'
            }]
        }
        return {
            lb_localdata,
            lb_tables: ['student']
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
