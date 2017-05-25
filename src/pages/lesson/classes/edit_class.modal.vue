<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="edit_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">编辑班级信息</h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid ng-valid-required ng-valid-minlength ng-valid-parse ng-valid-pattern">
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">课程</label>
                            <div class="col-sm-9 col-md-5 ng-binding">22</div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">班级名称</label>
                            <div class="col-sm-9 col-md-5">
                                <input type="text" name="class_name" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-minlength ng-valid-parse" ng-minlength="1" required v-model="lb_localdata.form.class_name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">开课日期</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="inline w-sm">
                                    <lb-date-picker type="date" name="open_time" v-model="lb_localdata.form.open_time"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">预计结课日期:</label>
                            <div class="col-md-5 col-xs-12">
                                <div class="inline w-sm">
                                    <lb-date-picker type="date" name="close_time" v-model="lb_localdata.form.close_time"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">额定人数</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="input-group w">
                                    <input type="number" name="max_student_num" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="lb_localdata.form.max_student_num">
                                    <span class="input-group-addon">人</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">授课次数:</label>
                            <div class="col-md-3 col-xs-12">
                                <div class="input-group w-sm">
                                    <input type="number" name="total_times" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="lb_localdata.form.total_times">
                                    <span class="input-group-addon">次</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">负责老师</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="input-group">
                                    <input type="text" name="master" class="form-control ng-pristine ng-untouched ng-valid" readonly="true" v-model="lb_localdata.form.master">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择老师" on-selected="select_teacher" select-params="{ob_id:user.gv.ob_id,role_id:2}" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                            <i class="fa fa-user"></i>选择
                                        </button>
                                    </span>
                                </div>
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
    name: 'edit',
    data() {
        let lb_localdata = {
            'form': {
                'class_name': '',
                'open_time': '',
                'close_time': '',
                'max_student_num': '',
                'total_times': '',
                'master': ''
            }
        }
        return {
            lb_localdata,
            model: 'team'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.lb_localdata.form = this.lodash.assign(this.lb_localdata.form, this.$store.state.dialogs.dailogdata)
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$store.state.dialogs.dailogdata = this.lodash.assign(this.$store.state.dialogs.dailogdata, this.lb_localdata.form)
                this.lbClosedialog()
            })
        }
    }
}
</script>
