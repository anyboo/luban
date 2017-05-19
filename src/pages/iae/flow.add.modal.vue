<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="flow_add" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-money">记账</i>
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span class="text-danger">*</span>类型
                            </label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <lb-buttongroup :group-data="lb_localdata.lb_fee_type" v-model="lb_localdata.form.lb_fee_type"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span class="text-danger">*</span>金额
                            </label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group w-sm">
                                    <input type="number" name="amount" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required v-model="lb_localdata.form.lb_fee_amount">
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">所属分类</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w-sm ng-scope" ng-if="fee.type == '0'">
                                    <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" ng-options="item.odi_id as item.text for item in $gv.dicts[8]" style="display: none;" v-model="lb_localdata.form.lb_fee_odi_id">
                                        <option value class>请选择</option>
                                        <option value="0">日常支出</option>
                                    </select>
                                    <div class="chosen-container chosen-container-single" style="width: 120px;" title>
                                        <a class="chosen-single" tabindex="-1">
                                            <span>请选择</span>
                                            <div>
                                                <b></b>
                                            </div>
                                        </a>
                                        <div class="chosen-drop">
                                            <div class="chosen-search">
                                                <input type="text" autocomplete="off">
                                            </div>
                                            <ul class="chosen-results"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">备注</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" name="note" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_fee_note">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">经办人</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w">
                                    <div class="input-group ng-valid" ng-model="fee.op_name" select-title="请选择经办人" select-params="{ob_id:user.gv.ob_id}">
                                        <input type="text" name="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="valueField != 'name'" v-model="lb_localdata.form.lb_name">
                                        <span class="input-group-btn">
                                            <button class="btn btn-default " select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择经办人" on-selected="set_user" select-params="selectParams" @click="lbShowdialog($event,'lb-selectteachertpl')">
                                                <i class="fa fa-user"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">日期</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline">
                                    <input type="text" name="create_time" class="form-control input-sm ng-pristine ng-untouched ng-valid" datetimepicker="datetime" v-model="lb_localdata.form.lb_fee_create_time">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="save_fee()">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'flow.add.modal',
    data() {
        let lb_localdata = {
            'lb_fee_type': [{
                'value': '0',
                'text': '支出'
            }, {
                'value': '1',
                'text': '收入'
            }],
            'form': {
                'lb_fee_type': '',
                'lb_fee_amount': '',
                'lb_fee_odi_id': '',
                'lb_fee_note': '',
                'lb_name': '',
                'lb_fee_create_time': ''
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