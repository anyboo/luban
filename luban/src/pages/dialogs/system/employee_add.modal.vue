<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>{{title}}员工
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-valid-minlength ng-dirty">
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">姓名:</label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="name" class="form-control w-sm ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" required v-model="localdata.form.name">
                            </div>
                        </div>
                        <div class="error ng-hide" v-if="localdata.validator.fields.name.errorStatus">
                            <span class="text-warning">姓名必须填写</span>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">
                                账号(手机):
                            </label>
                            <div class="col-md-10 col-xs-12">
                                <input type="text" name="tel" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.tel">
                            </div>
                        </div>
                        <div class="error ng-hide" v-if="localdata.validator.fields.tel.errorStatus">
                            <span class="text-warning">手机号必须填写且为11位</span>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">性别:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">类型:</label>
                            <div class="col-md-10 col-xs-12">
                                <lb-buttongroup :group-data="localdata.is_part_time" v-model="localdata.form.is_part_time"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">角色:</label>
                            <div class="col-md-10 col-xs-12">
                                <el-select v-model="localdata.form.roles_id" multiple placeholder="请选择">
                                    <el-option v-for="item in getroleData" :key="item._id" :label="item.name" :value="item._id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
    
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                            <div class="col-md-10 col-xs-12">
                                <div class="inline w-sm">
                                    <el-date-picker type="date" name="birth" v-model="localdata.form.birth"></el-date-picker>
                                </div>
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
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'employee_add',
    data() {
        let localdata = {
            'form': {
                'name': '',
                'sex': '1',
                'roles_id': [],
                'is_part_time': '0',
                'tel': '',
                'email': '',
                'lock': false,
                'birth': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'tel': {
                        'type': 'string',
                        'len': 11,
                        'required': true,
                        'errorStatus': false
                    },
                    'birth': {
                        'type': 'date',
                    }
                }
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
            model: 'employee',
            title: '添加'
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        }
        this.getTableApidata('role')
    },
    computed: {
        getroleData() {
            let role = this.$store.state.models.models.role.data
            return role
        },
    },
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: this.title + '成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialogResult = this.currentRow
                this.$store.state.envs.currDialog = 'lb-employee'
            }, (e) => {
            })
        }
    }
}
</script>
