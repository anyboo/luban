<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-flag-checkered"></i>{{title}}班级</h3></div>
                <div class="modal-body" :class='{result:changeSelectTeacher}'>
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">班级名称：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                             <input type="text" name="class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.class_name.errorStatus}" v-model="localdata.form.class_name" @change="validate('class_name')">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">班级简称：</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <input type="text" placeholder="简短易记的名称或编号" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="short_name" v-model="localdata.form.short_name" required="">
                                
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">主教老师：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" placeholder="请选择主教老师" v-model="teacher_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" readonly="readonly"> <span class="input-group-btn"><button type="button" class="btn btn-default" @click="selectTeacher(false)"><i class="fa fa-user"></i>选择老师</button></span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">助教老师：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" v-model="localdata.form.has_second_oe_id" class="ng-valid ng-dirty ng-valid-parse ng-touched"> <i></i></label>
                                <div class="input-group ng-scope" v-if="localdata.form.has_second_oe_id">
                                    <input type="text" placeholder="请选择助教老师" v-model="second_teacher_name" class="form-control ng-pristine ng-untouched ng-valid" readonly="readonly"> <span class="input-group-btn"><button type="button" class="btn btn-default" @click="selectTeacher(true)"><i class="fa fa-user"></i>选择老师</button></span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">开课日期：</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="inline w-sm">
                                    <lb-date-picker type="date" name="open_time" v-model="localdata.form.open_time"></lb-date-picker>
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
                'short_name': '',
                'track_time': '',
                'teacher_id': '',
                'open_time': '',
                'has_second_oe_id': false,
                'second_teacher_id': '',
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
            selSecondTeacher: false,
            'teacher_name': '',
            'second_teacher_name': '',
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
    computed: {
        changeSelectTeacher() {
            let result = false
            if (this.$store.state.envs.currDialog == 'lb-selectteachertpl') {
                if (this.$store.state.envs.currDialogResult) {
                    if (this.selSecondTeacher) {
                        this.second_teacher_name = this.$store.state.envs.currDialogResult.name
                        this.localdata.form.second_teacher_id = this.$store.state.envs.currDialogResult._id
                    } else {
                        this.teacher_name = this.$store.state.envs.currDialogResult.name
                        this.localdata.form.teacher_id = this.$store.state.envs.currDialogResult._id
                    }
                } else {
                    if (this.selSecondTeacher) {
                        this.second_teacher_name = '请选择老师'
                        this.localdata.form.second_teacher_id = ''
                    } else {
                        this.teacher_name = '请选择助教老师'
                        this.localdata.form.teacher_id = ''

                    }
                }
                result = true
            }
            return result
        },
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id,
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        selectTeacher(selSecond) {
            this.selSecondTeacher = selSecond
            this.handleShowDialog('lb-selectteachertpl')
        },
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
