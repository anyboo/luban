<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="employee_edit" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="label bg-info ng-binding">陈佳木</span>的资料
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-valid ng-valid-required ng-valid-minlength ng-valid-parse ng-dirty">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">姓名:</label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="name" class="form-control w-sm ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-minlength ng-valid-parse" ng-minlength="2" ng-change="employee.account=$util.py_account(employee.name)" required v-model="localdata.form.name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">性别:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">角色:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="ui-select-multiple ui-select-bootstrap dropdown form-control ng-valid ng-dirty" ng-class="{open: $select.open}" multiple="multiple" ng-model="employee.or_ids" theme="bootstrap">
                                    <div>
                                        <span class="ui-select-match" placeholder="选择角色...">  </span>
                                        <input type="text" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" v-model="localdata.form.roles">
                                    </div>
                                    <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope ng-hide" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0" repeat="item.or_id as item in user.gv.roles | propsFilter:{role_name:$select.search}">
                                        <li class="ui-select-choices-group">
                                            <div class="divider ng-hide" ng-show="$select.isGrouped && $index > 0"></div>
                                            <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header ng-binding ng-hide" ng-bind-html="$group.name"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">类型:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="localdata.is_part_time" v-model="localdata.form.is_part_time"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">
                                <i class="fa fa-phone"></i>电话:
                            </label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="tel" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.tel">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">
                                <i class="glyphicon glyphicon-envelope"></i>Email:
                            </label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="email" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.email">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee_edit',
    data() {
        let localdata = {
            'form': {
                'name': '',
                'sex': '',
                'roles': '',
                'is_part_time': '',
                'tel': '',
                'email': ''
            },
            'sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }],
            'is_part_time': [{
                'value': '0',
                'text': '全职'
            }, {
                'value': '1',
                'text': '兼职'
            }]
        }
        return {
            localdata,
            model: 'employee'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$store.state.dialogs.dailogdata = this.lodash.assign(this.$store.state.dialogs.dailogdata, this.localdata.form)
                this.lbClosedialog()
            })
        }
    }
}
</script>
