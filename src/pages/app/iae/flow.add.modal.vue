<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="flow_add" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-money">记账</i></h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span class="text-danger">*</span>类型</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="btn-group">
                                    <label class="btn btn-default ng-pristine ng-untouched ng-valid active" ng-model="fee.type" btn-radio="'0'">支出</label>
                                    <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="fee.type" btn-radio="'1'">收入</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span class="text-danger">*</span>金额</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group w-sm">
                                    <input type="number" name="amount" ng-model="fee.amount" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required=""> <span class="input-group-addon">元</span></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">所属分类</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <!-- ngIf: fee.type == '0' -->
                                <div class="inline w-sm ng-scope" ng-if="fee.type == '0'">
                                    <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" ng-model="fee.odi_id" ng-options="item.odi_id as item.text for item in $gv.dicts[8]" style="display: none;">
                                        <option value="" class="">请选择</option>
                                        <option value="0">日常支出</option>
                                    </select>
                                    <div class="chosen-container chosen-container-single" style="width: 120px;" title=""><a class="chosen-single" tabindex="-1"><span>请选择</span><div><b></b></div></a>
                                        <div class="chosen-drop">
                                            <div class="chosen-search">
                                                <input type="text" autocomplete="off">
                                            </div>
                                            <ul class="chosen-results"></ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- end ngIf: fee.type == '0' -->
                                <!-- ngIf: fee.type == '1' -->
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">备注</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="input-group">
                                    <input type="text" name="note" ng-model="fee.note" class="form-control ng-pristine ng-untouched ng-valid">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">经办人</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w">
                                    <div class="input-group  ng-valid" ng-model="fee.op_name" select-title="请选择经办人" select-params="{ob_id:user.gv.ob_id}">
                                        <input type="text" name="name" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="valueField != 'name'"> <span class="input-group-btn"><button class="btn btn-default " select-tpl="tpl/directive/selectTeacherTpl.html" select-id-field="oe_id" select-title="请选择经办人" on-selected="set_user" select-params="selectParams"><i class="fa fa-user"></i></button></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">日期</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline">
                                    <input type="text" name="create_time" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="fee.create_time" datetimepicker="datetime">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="save_fee()">
                        <!-- ngIf: saving -->确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">关闭</button>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name: 'flow.add.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
