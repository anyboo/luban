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
                        <i class="fa fa-user"></i>添加员工
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
                                        <span class="ui-select-match" placeholder="选择角色..."></span>
                                        <input type="text" class="ui-select-search input-xs ng-pristine ng-untouched ng-valid" placeholder="选择角色..." style="width: 469px;" v-model="localdata.form.roles">
                                    </div>
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
                'roles': '',
                'is_part_time': '0',
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
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                })
                this.lbClosedialog()
            }, (e) => {
                console.log(e)
            })
        }
    }
}
</script>
