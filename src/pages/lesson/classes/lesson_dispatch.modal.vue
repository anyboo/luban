<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="lesson_dispatch" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>调整
                        <span class="label bg-info ng-binding">11</span>的排课记录
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter">
                        <div class="col-xs-4 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择排课记录</h4>
                        </div>
                        <div class="col-xs-4 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.确定调整策略</h4>
                        </div>
                        <div class="col-xs-4 bg-light lter" ng-class="{'bg-success':step==3}">
                            <h4 class="padder">3.确定通知策略</h4>
                        </div>
                    </div>
                    <form name="step1" class="form-validation form-horizontal m-t ng-pristine ng-valid" ng-show="step==1">
                        <p class="alert alert-info">以下是班级的未考勤的排课记录,请选择单条或多条记录进行调整</p>
                        <div class="table-responsive">
                            <lb-table :data="getTableData" stripe>
                                <lb-table-column prop="data" label="课次">
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="日期">
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="时间段">
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column prop="data" label="老师">
                                    <template scope="scope"></template>
                                </lb-table-column>
                                <lb-table-column prop="data" label>
                                    <template scope="scope"></template>
                                </lb-table-column>
                            </lb-table>
                            <div style="position:relative;height:400px" ui-jq="perfectScrollbar" class="ps-container ps-theme-default" data-ps-id="e63db38e-da45-326f-6fa2-6f4f8142f183">
                                <lb-table :data="getTableData" stripe></lb-table>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px;">
                                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form name="step2" class="form-validation m-t ng-pristine ng-valid ng-hide ng-valid-required ng-valid-pattern ng-valid-number" ng-show="step == 2">
                        <p class="text-info">将对以下排课进行调整</p>
                        <ul class="list-group"></ul>
                        <p class="text-info">调整方案如下:</p>
                        <lb-buttongroup :group-data="localdata.dispatch_type" v-model="localdata.form.dispatch_type"></lb-buttongroup>
                        <div class="form-group m-t ng-scope" ng-if="dispatch.type == '1' || dispatch.type == '2'">
                            <label class="control-label">后移天数</label>
                            <div>
                                <div class="input-group w-sm">
                                    <input type="number" name="days" ng-pattern="/^[0-9]+$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-pattern ng-valid-number" required v-model="localdata.form.dispatch_days">
                                    <span class="input-group-addon">天</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <label class="control-label">调课原因:</label>
                            <div>
                                <input type="text" name="reason" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.dispatch_reason">
                            </div>
                        </div>
                    </form>
                    <form name="step3" class="form-validation m-t ng-pristine ng-valid ng-hide" ng-show="step==3">
                        <p class="m-t text-info">是否需要通知相关老师</p>
                        <lb-buttongroup :group-data="localdata.dispatch_notify_teacher" v-model="localdata.form.dispatch_notify_teacher"></lb-buttongroup>
                        <div ng-hide="dispatch.notify_teacher == '0'">
                            <p class="m-t text-info">通知内容预览</p>
                            <div class="form-group">
                                <textarea class="form-control ng-pristine ng-untouched ng-valid" ng-model="dispatch.notify_teacher_content" rows="2"></textarea>
                            </div>
                        </div>
                        <p class="m-t text-info">是否需要通知学生</p>
                        <lb-buttongroup :group-data="localdata.dispatch_notify_student" v-model="localdata.form.dispatch_notify_student"></lb-buttongroup>
                        <div ng-hide="dispatch.notify_student == '0'">
                            <p class="m-t text-info">通知内容预览</p>
                            <div class="form-group">
                                <textarea class="form-control ng-pristine ng-untouched ng-valid" ng-model="dispatch.notify_student_content" rows="2"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button ng-show="step == 1" class="btn btn-primary" ng-disabled="selected_count == 0" ng-click="go_step2()" disabled="disabled">下一步</button>
                    <button ng-show="step == 2" class="btn btn-default ng-hide" ng-click="step = 1">上一步</button>
                    <button ng-show="step == 2" class="btn btn-primary ng-hide" ng-disabled="step2.$invalid" ng-click="go_step3()">下一步</button>
                    <button ng-show="step == 3" class="btn btn-default ng-hide" ng-click="step = 2">上一步</button>
                    <button ng-show="step == 3" class="btn btn-primary ng-hide" ng-disabled="saving" ng-click="do_ok()">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lesson_dispatch',
    data() {
        let localdata = {
            'dispatch_type': [{
                'value': '1',
                'text': '选中排课整体后移'
            }, {
                'value': '2',
                'text': '本次及以后排课整体后移'
            }, {
                'value': '3',
                'text': '调整到指定日期(针对单次)'
            }],
            'form': {
                'dispatch_type': '',
                'dispatch_days': '',
                'dispatch_reason': '',
                'dispatch_notify_teacher': '',
                'dispatch_notify_student': ''
            },
            'dispatch_notify_teacher': [{
                'value': '1',
                'text': '需要'
            }, {
                'value': '0',
                'text': '不需要'
            }],
            'dispatch_notify_student': [{
                'value': '1',
                'text': '需要'
            }, {
                'value': '0',
                'text': '不需要'
            }]
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>