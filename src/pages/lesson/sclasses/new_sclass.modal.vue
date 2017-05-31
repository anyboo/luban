<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="new_sclass" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-flag-checkered"></i>创建新的科目班</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">班级名称：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" placeholder="请输入完整的班级名称" class="form-control ng-pristine ng-invalid ng-invalid-required ng-touched" name="class_name" v-model="lb_localdata.form.class_name" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">班级简称：</label>
                            <div class="col-xs-12 col-sm-9 col-md-5">
                                <input type="text" placeholder="简短易记的名称或编号" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="short_name" v-model="lb_localdata.form.short_name" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">所属科目：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <select class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" name="sj_id" ui-jq="chosen" ng-change="init_level()" v-model="lb_localdata.form.sj_id" ng-options="subject.sj_id as subject.subject_name for subject in $gv.subjects" required="" style="display: none;">
                                    <option value="" class="">选择科目</option>
                                    <option value="0">11</option>
                                    <option value="1">2</option>
                                    <option value="2">d'd</option>
                                    <option value="3">ew</option>
                                </select>
                                <div class="chosen-container chosen-container-single" style="width: 485px;" title=""><a class="chosen-single" tabindex="-1"><span>选择科目</span><div><b></b></div></a>
                                    <div class="chosen-drop">
                                        <div class="chosen-search">
                                            <input type="text" autocomplete="off">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">主教老师：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" placeholder="请选择主教老师" v-model="lb_localdata.form.teacher_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" ng-readonly="true" required="" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" max-num="1" on-selected="select_teacher" select-params="{ob_id:user.gv.ob_id,role_id:2}" select-title="请选择老师"><i class="fa fa-user"></i>选择老师</button></span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">助教老师：</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <label class="i-switch m-t-xs m-r">
                                    <input type="checkbox" ng-true-value="1" ng-disabled="order.ol_id == 0" v-model="lb_localdata.form.has_second_oe_id" class="ng-valid ng-dirty ng-valid-parse ng-touched"> <i></i></label>
                                <div class="input-group ng-scope" ng-if="sclass.has_second_oe_id">
                                    <input type="text" placeholder="请选择助教老师" v-model="lb_localdata.form.second_teacher_name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default" select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" max-num="1" on-selected="select_second_teacher" select-params="{ob_id:user.gv.ob_id}" select-title="请选择老师"><i class="fa fa-user"></i>选择老师</button></span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 col-md-2 control-label">开课日期：</label>
                            <div class="col-sm-9 col-md-5">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="open_time" v-model="lb_localdata.form.open_time" datetimepicker="date">
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
        let lb_localdata = {
            'form': {
                'class_name': '',
                'short_name': '',
                'sj_id': '',
                'track_time': '',
                'teacher_name': '',
                'open_time': '',
                'has_second_oe_id':''
            },
        }
        return {
            lb_localdata,
            model: 'setting'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                alert('数据已经提交数据库了')
            })
        },
    }
}
</script>
