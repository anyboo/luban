<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div page-controller="open_class" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                        <h3 class="modal-title"><i class="fa fa-flag-checkered"></i>编辑</h3></div>
                    <div class="modal-body">
                        <form name="form1" class="form-validation form-horizontal m-t ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">*班级：</label>
                                <label class="control-label col-md-1 col-xs-12">123</label>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">校区：</label>
                                <label class="control-label col-md-2 col-xs-12 text-right">总校</label>
                            </div>
                            <div class="form-group" >
                                <label class="label-sm ">校区：</label>
                                <div class=" lineHeight2">
                                    总校
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">开课日期:</label>
                                <div class="col-md-10 col-xs-12">
                                    <div class="inline w-sm">
                                        <input type="text" ng-disabled="info.master_oe_id == 0" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="open_time" ng-model="info.open_time" datetimepicker="date" disabled="disabled">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">预计结课:</label>
                                <div class="col-md-10 col-xs-12">
                                    <div class="inline w-sm">
                                        <input type="text" ng-disabled="info.master_oe_id == 0" class="form-control input-sm ng-pristine ng-untouched ng-valid" name="close_time" ng-model="info.close_time" datetimepicker="date" disabled="disabled">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">额定人数:</label>
                                <div class="col-md-3 col-xs-12">
                                    <div class="input-group w-sm">
                                        <input type="number" ng-disabled="info.master_oe_id == 0" name="max_student_num" ng-pattern="/^[0-9]+$/" ng-model="info.max_student_num" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" disabled="disabled"> <span class="input-group-addon">人</span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">授课次数:</label>
                                <div class="col-md-3 col-xs-12">
                                    <div class="input-group w-sm">
                                        <input type="number" ng-disabled="info.master_oe_id == 0" name="total_times" ng-pattern="/^[0-9]+$/" ng-model="info.total_times" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" disabled="disabled"> <span class="input-group-addon">次</span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">单次课时:</label>
                                <div class="col-md-3 col-xs-12">
                                    <div class="input-group">
                                        <input type="text" ng-disabled="info.master_oe_id == 0" name="unit_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" ng-model="info.unit_hours" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="auto_etime()" disabled="disabled"> <span class="input-group-addon">小时</span></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">
                            <!-- ngIf: saving -->确定</button>
                        <button class="btn btn-warning" ng-click="vm.dismiss()">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
