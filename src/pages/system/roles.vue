<template>
    <div class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper panel panel-default bg-white ng-scope">
                <div class="row ng-scope" xo-rest="roles" xo-rest-root xo-rest-ctrl="roles">
                    <div class="col-xs-12 col-sm-7 col-md-8">
                        <div class="panel panel-default">
                            <div class="panel-heading">角色列表</div>
                            <ul class="list-group">
                                <template v-for="item in getTablesData()">
                                    <li class="list-group-item ng-scope" ng-class="{active:item.or_id == edit_handler.or_id}">
                                        <label class="badge badge-sm bg-info pull-right ng-binding">{{item.role_id}}</label>
                                        <h4 class="list-group-item-head ng-binding text-danger">{{item.role_name}}</h4>
                                        <p class="list-grpup-item-text text-muted ng-binding">{{item.role_desc}}</p>
                                        <p class="list-group-item-text">
                                            <a class="btn btn-xs btn-default ng-isolate-scope" tooltip-placement="top" tooltip="删除角色" confirm-text="确定要删除该角色吗?" @click="handleDelClick(item._id)">
                                                <i class="fa fa-times"></i>删除
                                            </a>
                                            <a class="btn btn-xs btn-default" @click="handleEditClick(item)">编辑</a>
                                            <button class="btn btn-xs btn-default">权限设置</button>
                                        </p>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-5 col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span ng-if="action!='edit'" class="ng-scope">{{modalsType==types.EDIT_API?'编辑':'添加'}}角色</span>
                                <button class="btn btn-default btn-xs pull-right ng-hide" @click="clearForm" v-if="modalsType==types.APPEND_API">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                            <div class="panel-body">
                                <form name="form1" class="form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" ng-init="action='add';role.og_id=user.og_id">
                                    <p>*角色ID:(仅限2个字符)</p>
                                    <input type="text" name="role_id" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.role_id.errorStatus}" v-model="localdata.form.role_id" @change="validate('role_id')">
                                    <p>*角色名称:</p>
                                    <input type="text" name="role_name" ng-disabled="role.og_id==0" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" v-model="localdata.form.role_name" :class="{'ng-dirty':localdata.validator.fields.role_id.errorStatus}" @change="validate('role_name')">
                                    <p>角色描述:</p>
                                    <input type="text" name="role_desc" ng-disabled="role.og_id==0" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.role_desc">
                                    <div class="m-t m-b">
                                        <button type='button' class="btn btn-primary" @click="handleClick">
                                            保存
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
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
        let localdata = {
            'form': {
                'og_id': '',
                'role_id': '',
                'role_name': '',
                'role_desc': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'role_id': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'role_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    }

                }
            },
        }
        return {
            localdata,
            model: 'role',
            tables: ['role'],
        }
    },
    computed: {},
    watch: {},
    methods: {
        clearForm() {
            this.localdata.form = {
                'og_id': '',
                'role_id': '',
                'role_name': '',
                'role_desc': ''
            }
            this.modalsType = this.types.APPEND_API
        },
        handleEditClick(item) {
            this.setEditModle(item._id)
            this.localdata.form = this.lodash.assign(this.localdata.form, item)
        },
        handleDelClick(id) {
            this.handleDelete(id).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.handleGetTable()
            })
        },
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.clearForm()
                this.handleGetTable()
            }, (e) => {
                console.log(e)
            })
        }
    }
}
</script>
