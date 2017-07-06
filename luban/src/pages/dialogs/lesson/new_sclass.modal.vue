<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-flag-checkered"></i>{{title}}教室</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">教室名称：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" name="class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.class_name.errorStatus}" v-model="localdata.form.class_name" @change="validate('class_name')">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">最大人数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.max_student_num">
                                    <span class="input-group-addon">人</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newsclass',
    data() {
        let localdata = {
            'form': {
                'class_name': '',
                'max_student_num': '',
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'class_name': {
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
            model: 'sclasses',
            title: '创建',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-newsclass'
            })
        }
    }
}
</script>
