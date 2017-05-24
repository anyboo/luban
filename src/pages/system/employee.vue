<template>
    <div class="wrapper bg-white ng-scope" ui-view>
        <div xo-rest="employees" xo-rest-grid="{maxsize:5,params:{status:'1',pagesize:20,page:1}}" xo-rest-ctrl="employees" loading-container=".list-employee" class="ng-scope">
            <div class="row wrapper">
                <div class="col-xs-12 col-md-4">
                    <div class="padder">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-untouched ng-valid" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                        姓名
                                        <span class="caret"></span>
                                    </button>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-untouched ng-valid" placeholder="关键字" v-model="lb_localdata.form.lb_grid_search_value">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8">
                    <button class="btn btn-default btn-sm" ng-click="open_aside_left('search',{backdrop:false});">
                        <i class="fa fa-filter"></i>过滤
                    </button>
                    <lb-buttongroup :group-data="lb_localdata.lb_params_status" v-model="lb_localdata.form.lb_params_status"></lb-buttongroup>
                    <button ng-click="$util.open('tpl/system/groups.html','lg',{})" @click="lbShowdialog($event,'lb-groups')" class="btn btn-default pull-right">
                        <i class="fa fa-list"></i>分组设置
                    </button>
                    <button ng-click="$util.open('tpl/system/employee/employee_add.modal.html','md')" @click="lbShowdialog($event,'lb-employeeaddmodal')" class="btn btn-primary pull-right">
                        <i class="fa fa-plus"></i>添加
                    </button>
                </div>
            </div>
            <div class="wrapper">
                <div class="row list-employee">
                    <div class="col-xs-12 col-md-6 ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                        <div class="bg-white wrapper b-a m-t box-shadow">
                            <div class="meida">
                                <div class="media-left">
                                    <a ng-click="$util.open('tpl/system/employee/photo.modal.html','lg',item)" @click="lbShowdialog($event,'lb-photomodal')">
                                        <div class="w-xs ng-scope" ng-if="!item.avatar">
                                            <div class="avatar-wrapper adres-css" style="border-radius:0; display:block; overflow:hidden;border-radius: 90px; width:90px; height:90px; ">
                                                
                                            </div>
                                        </div>
                                    </a>
                                    <h4 class="text-center ng-binding" ng-class="{'text-gray':item.status == '0'}">陈佳木</h4>
                                    <ul class="list-unstyled">
                                        <li>
                                            <i class="fa fa-phone"></i>
                                            <span ng-bind="item.tel|empty_replace:'未填写'" class="ng-binding">13609598376</span>
                                        </li>
                                        <li>
                                            <i class="glyphicon glyphicon-envelope"></i>
                                            <span ng-bind="item.email|empty_replace:'未填写'" class="ng-binding">未填写</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="media-body">
                                    <p>
                                        <label>账号:</label>
                                        <span class="m-l-xs ng-binding ng-scope" ng-if="item.oa_id>0">
                                            <i class="fa fa-user ng-scope" ng-if="item.status == '1'"></i>13609598376
                                        </span>
                                    </p>
                                    <p>
                                        <label>类型:</label>
                                        <span class="label bg-info ng-scope" ng-if="item.is_part_time == '0'">全职</span>
                                    </p>
                                    <p>
                                        <label>角色:</label>
                                        <span ng-bind-html="item|roles" class="ng-binding">
                                            <label class="label bg-info m-l-xs">校长</label>
                                            <label class="label bg-info m-l-xs">教师</label>
                                            <label class="label bg-info m-l-xs">前台</label>
                                            <label class="label bg-info m-l-xs">管理员</label>
                                        </span>
                                    </p>
                                    <p></p>
                                    <p>
                                        <label>校区:</label>
                                        <span ng-bind-html="item|branchs" class="ng-binding">
                                            <label class="xlabel">福州布尔培训</label>
                                        </span>
                                    </p>
                                    <p></p>
                                    <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                        <lb-dropdown-button slot="buttonslot" button-class="btn btn-xs btn-default" button-tooltip="操作">
                                            <i class="fa fa-cog"></i>操作
                                            <span class="caret"></span>
                                        </lb-dropdown-button>
                                    </lb-dropdown>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-data-result"></div>
                </div>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="col-sm-4 col-xs-12"></div>
                    <div class="col-sm-4 text-center">
                        <small class="text-muted inline m-t-sm m-b-sm ng-binding" ng-bind-template="共 1 个员工">共 1 个员工</small>
                    </div>
                    <div class="col-sm-4 text-right text-center-xs">
                        <ul class="pagination-sm m-t-none pagination ng-isolate-scope ng-valid" total-items="grid.total" ng-model="grid.params.page" max-size="grid.maxsize" items-per-page="grid.params.pagesize" boundary-links="true" rotate="false"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee',
    data() {
        let lb_localdata = {
            'form': {
                'lb_grid_search_value': '',
                'lb_params_status': ''
            },
            'lb_params_status': [{
                'value': '1',
                'text': '在职'
            }, {
                'value': '0',
                'text': '离职'
            }],
            'dropDownMenu': [{
                'url': 'lb-employeeeditmodal',
                'icon': 'fa fa-pencil',
                'text': '编辑资料'
            }, {
                'url': 'lb-lockmodal',
                'icon': 'fa fa-lock',
                'text': '离职封存'
            }, {
                'url': 'lb-resetaccountmodal',
                'icon': 'fa fa-key',
                'text': '重置密码'
            }, {
                'url': 'lb-changeaccountmodal',
                'icon': 'fa fa-user-md',
                'text': '更换登录账号'
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
                'search_value': ''
            }
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