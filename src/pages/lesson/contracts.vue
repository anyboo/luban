<template>
    <div class="wrapper-xs ng-scope" xo-rest="contracts" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,ob_id:user.gv.ob_id}}" xo-rest-ctrl="contract" loading-text="正在加载1对1合同..." empty-text="没有符合条件的1对1合同!">
        <div class="panel panel-default">
            <div class="row wrapper no-gutter">
                <div class="col-xs-12 col-md-4 m-t">
                    <div class="inline w va-m">
                        <select class="form-control ng-pristine ng-untouched ng-valid" name="ol_id" ui-jq="chosen" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:cur_branch|filter:filter_contract" style="display: none;" v-model="lb_localdata.form.lb_params_ol_id">
                            <option value class>选择课程</option>
                            <option value="0">古典吉他初级</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 200px;" title>
                            <a class="chosen-single" tabindex="-1">
                                <span>选择课程</span>
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
                    <div class="inline w va-m">
                        <div class="input-group ng-valid" select-title="请选择学员" ng-model="params.os_id" select-params="{ob_id:user.gv.ob_id}">
                            <input type="text" placeholder="学员" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly" v-model="lb_localdata.form.lb_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员" @click="lbShowdialog($event,'lb-selectstudenttpl')">
                                    <i class="icon-user"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 m-t">
                    <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status"></lb-buttongroup>
                    <lb-buttongroup :group-data="lb_localdata.lb_params_pay_status" v-model="lb_localdata.form.lb_params_pay_status"></lb-buttongroup>
                    <a ng-click="$util.open('tpl/app/lesson/contracts/add_performance.modal.html','md',grid.data)" @click="lbShowdialog($event,'lb-addperformancemodal')">
                        <i class="icon-plus"></i>登记成绩
                    </a>
                </div>
            </div>
            <div class="table-responsive">
                <lb-table :data="getTableData" stripe>
                    <lb-table-column prop="data" label="学员">
                        <template scope="scope">
                            <a class="link ng-binding" ui-sref="student.view({os_id:item.os_id})" ui-per="student.view" href="#/student/63899">
                                <span ng-bind-html="item.student.sex|sex:0" class="ng-binding">
                                    <i class="fa fa-male"></i>
                                </span>威锋
                            </a>
                            <br>
                            <i class="fa fa-phone"></i>
                            <span ng-bind="item.student.first_tel" class="ng-binding">13605557745</span>
                            <br>
                            <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-info btn-xs" button-tooltip="操作">
                                    <i class="fa fa-cog ng-scope"></i>
                                    <span class="ng-scope">操作</span>
                                    <span class="caret"></span>
                                </lb-dropdown-button>
                            </lb-dropdown>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label>
                        <template scope="scope">
                            <ul class="list-unstyled">
                                <li>
                                    <label class="inline w-xs">合同号:</label>
                                    <span>
                                        <a class="link ng-binding" tooltip="合同详情" ui-sref="lesson.contract({oct_id:item.oct_id})" href="#/lesson/contract/11635">C1161217130540023959331</a>
                                    </span>
                                </li>
                                <li class="m-t-xs">
                                    <label class="inline w-xs">缴费情况:</label>
                                    <div class="inline w va-m">
                                        <div class="progress ng-isolate-scope" style="margin:0" max="item.contract_amount" value="item.pay_amount" type="info">
                                            <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="2000.00" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude style="width: 0%;">
                                                <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0.00 / 2000.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <label class="inline w-xs">课耗单价:</label>
                                    <span class="ng-binding">￥100.00</span>
                                </li>
                            </ul>
                        </template>
                    </lb-table-column>
                    <lb-table-column prop="data" label>
                        <template scope="scope">
                            <ul class="list-unstyled">
                                <li>
                                    <label class="inline w-xs">课程:</label>
                                    <span class="ng-binding">古典吉他初级</span>
                                </li>
                                <li class="m-t-xs">
                                    <label class="inline w-xs">排课情况:</label>
                                    <div class="inline w va-m">
                                        <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.arrange_times" type="info">
                                            <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude style="width: 0%;">
                                                <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="m-t-xs">
                                    <label class="inline w-xs">课耗情况:</label>
                                    <div class="inline w va-m">
                                        <div class="progress ng-isolate-scope" style="margin:0" max="item.lesson_times" value="item.use_times" type="info">
                                            <div class="progress-bar progress-bar-info" ng-class="type && 'progress-bar-' + type" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="20" ng-style="{width: percent + '%'}" aria-valuetext="0%" ng-transclude style="width: 0%;">
                                                <span style="white-space:nowrap;padding-left:20px" class="ng-binding ng-scope">0 / 20</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </lb-table-column>
                </lb-table>
                <div class="grid-data-result"></div>
            </div>
            <div class="panel-footer ">
                <div class="row ">
                    <lb-pagination class="pull-right" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-sizes="pagination.pagesizes" :page-size="pagination.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
                    </lb-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contracts',
    data() {
        let lb_localdata = {
            'form': {
                'lb_params_ol_id': '',
                'lb_name': '',
                'lb_params_status': '',
                'lb_params_pay_status': ''
            },
            'lb_params_status': [{
                'value': '1',
                'text': '已开课'
            }, {
                'value': '0',
                'text': '未开课'
            }, {
                'value': '2',
                'text': '已结课'
            }],
            'lb_params_pay_status': [{
                'value': '2',
                'text': '已缴费'
            }, {
                'value': '1',
                'text': '部分缴费'
            }, {
                'value': '0',
                'text': '未缴费'
            }],
            'dropDownMenu': [{
                'url': 'lb-editmodal',
                'icon': 'fa fa-pencil',
                'text': '修改课耗单价'
            }, {
                'url': 'lb-lessonarrangemodal',
                'icon': 'fa fa-calendar text-info',
                'text': '排课'
            }, {
                'url': 'lb-lessondispatchmodal',
                'icon': 'fa fa-calendar text-warning',
                'text': '调课'
            }, {
                'url': 'lb-lessonendmodal',
                'icon': 'fa fa-calendar text-danger',
                'text': '结课'
            }, {
                'url': 'lb-lessondeletemodal',
                'icon': 'fa fa-trash-o',
                'text': '合同删除'
            }]
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
