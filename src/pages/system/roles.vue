<template>
    <div class="wrapper bg-white ng-scope" ui-view="">
        <div class="row ng-scope" xo-rest="roles" xo-rest-root="" xo-rest-ctrl="roles">
            <div class="col-xs-12 col-sm-7 col-md-8">
                <div class="panel panel-default">
                    <div class="panel-heading">角色列表</div>
                    <ul class="list-group">
                        <li class="list-group-item ng-scope" ng-repeat="item in res.roles.data" ng-class="{active:item.or_id == edit_handler.or_id}">
                            <label class="badge badge-sm bg-info pull-right ng-binding" ng-bind="item.role_id">P</label>
                            <label class="label bg-success ng-scope" ng-if="item.og_id==0">系统角色</label>
                            <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.role_name" ng-class="{'text-danger':item.og_id==0}">校长</h4>
                            <p class="list-grpup-item-text text-muted ng-binding">校长(Principal)</p>
                            <p class="list-group-item-text">
                                <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" ng-disabled="item.og_id==0" confirm-text="确定要删除该角色吗?" confirm-action="rest_remove(item,'or_id','roles',save_callback);" ui-per="roles.remove" disabled="disabled">
                                    <i class="fa fa-times"></i>删除
                                </a>
                                <a class="btn btn-xs btn-default" ng-click="rest_edit(item,'role')" ng-disabled="item.og_id==0" ui-per="system.roles.edit" disabled="disabled">编辑</a>
                                <button class="btn btn-xs btn-default" ng-click="per_set(item)" ui-per="system.roles.permission">权限设置</button>
                            </p>
                        </li>
                        <li class="list-group-item ng-scope" ng-repeat="item in res.roles.data" ng-class="{active:item.or_id == edit_handler.or_id}">
                            <label class="badge badge-sm bg-info pull-right ng-binding" ng-bind="item.role_id">T</label>
                            <label class="label bg-success ng-scope" ng-if="item.og_id==0">系统角色</label>
                            <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.role_name" ng-class="{'text-danger':item.og_id==0}">教师</h4>
                            <p class="list-grpup-item-text text-muted ng-binding">老师(Teacher)</p>
                            <p class="list-group-item-text">
                                <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" ng-disabled="item.og_id==0" confirm-text="确定要删除该角色吗?" confirm-action="rest_remove(item,'or_id','roles',save_callback);" ui-per="roles.remove" disabled="disabled">
                                    <i class="fa fa-times"></i>删除
                                </a>
                                <a class="btn btn-xs btn-default" ng-click="rest_edit(item,'role')" ng-disabled="item.og_id==0" ui-per="system.roles.edit" disabled="disabled">编辑</a>
                                <button class="btn btn-xs btn-default" ng-click="per_set(item)" ui-per="system.roles.permission">权限设置</button>
                            </p>
                        </li>
                        <li class="list-group-item ng-scope" ng-repeat="item in res.roles.data" ng-class="{active:item.or_id == edit_handler.or_id}">
                            <label class="badge badge-sm bg-info pull-right ng-binding" ng-bind="item.role_id">R</label>
                            <label class="label bg-success ng-scope" ng-if="item.og_id==0">系统角色</label>
                            <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.role_name" ng-class="{'text-danger':item.og_id==0}">前台</h4>
                            <p class="list-grpup-item-text text-muted ng-binding">前台接待(Receptionist)</p>
                            <p class="list-group-item-text">
                                <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" ng-disabled="item.og_id==0" confirm-text="确定要删除该角色吗?" confirm-action="rest_remove(item,'or_id','roles',save_callback);" ui-per="roles.remove" disabled="disabled">
                                    <i class="fa fa-times"></i>删除
                                </a>
                                <a class="btn btn-xs btn-default" ng-click="rest_edit(item,'role')" ng-disabled="item.og_id==0" ui-per="system.roles.edit" disabled="disabled">编辑</a>
                                <button class="btn btn-xs btn-default" ng-click="per_set(item)" ui-per="system.roles.permission">权限设置</button>
                            </p>
                        </li>
                        <li class="list-group-item ng-scope" ng-repeat="item in res.roles.data" ng-class="{active:item.or_id == edit_handler.or_id}">
                            <label class="badge badge-sm bg-info pull-right ng-binding" ng-bind="item.role_id">M</label>
                            <label class="label bg-success ng-scope" ng-if="item.og_id==0">系统角色</label>
                            <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.role_name" ng-class="{'text-danger':item.og_id==0}">管理员</h4>
                            <p class="list-grpup-item-text text-muted ng-binding">管理员(Master)</p>
                            <p class="list-group-item-text">
                                <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" ng-disabled="item.og_id==0" confirm-text="确定要删除该角色吗?" confirm-action="rest_remove(item,'or_id','roles',save_callback);" ui-per="roles.remove" disabled="disabled">
                                    <i class="fa fa-times"></i>删除
                                </a>
                                <a class="btn btn-xs btn-default" ng-click="rest_edit(item,'role')" ng-disabled="item.og_id==0" ui-per="system.roles.edit" disabled="disabled">编辑</a>
                                <button class="btn btn-xs btn-default" ng-click="per_set(item)" ui-per="system.roles.permission">权限设置</button>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-12 col-sm-5 col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span ng-if="action!='edit'" class="ng-scope">添加角色</span>
                        <button class="btn btn-default btn-xs pull-right ng-hide" ng-click="rest_new('role')" ng-show="action == 'edit'" ui-per="system.roles.add">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div class="panel-body">
                        <form name="form1" class="form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" ng-init="action='add';role.og_id=user.og_id">
                            <input type="hidden" name="og_id" class="ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_role_og_id">
                            <p>角色ID:(仅限2个字符)</p>
                            <input type="text" name="role_id" ng-disabled="role.og_id==0" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" ng-maxlength="2" ng-minlength="1" required="" v-model="lb_localdata.form.lb_role_role_id">
                            <p>角色名称:</p>
                            <input type="text" name="role_name" ng-disabled="role.og_id==0" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" ng-minlength="1" required="" v-model="lb_localdata.form.lb_role_role_name">
                            <p>角色描述:</p>
                            <input type="text" name="role_desc" ng-disabled="role.og_id==0" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_role_role_desc">
                            <div class="m-t m-b">
                                <button type="submit" ng-disabled="form1.$invalid || saving || role.og_id==0" class="btn btn-primary" ng-click="rest_save('role','roles',save_callback)" disabled="disabled">
                                    <i class="fa fa-spinner fa-spin ng-hide" ng-show="saving"></i>保存
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'roles',
    data() {
        let lb_localdata = {
            'form': {
                'lb_role_og_id': '',
                'lb_role_role_id': '',
                'lb_role_role_name': '',
                'lb_role_role_desc': ''
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