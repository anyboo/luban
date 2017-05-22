<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div oc-lazy-load="['js/modules/hours.js']" class="ng-scope"></div>
            <div ng-controller="remove_class_attendance" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>撤销
                        <span class="label bg-info ng-binding">11</span>的考勤记录
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择考勤记录</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.确认撤销</h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==1">
                        <div class="row"></div>
                        <p class="text-center text-muted ng-scope" ng-if="attendances_rest.$loaded && attendances_rest.$list.length == 0">没有可供撤销的已考勤记录!</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <a ng-show="step > 1" class="btn btn-link ng-hide" ng-click="go_step(1)">返回</a>
                    <button class="btn btn-primary" ng-show="step == 1" ng-disabled="!ocat_id" ng-click="go_step(2)" disabled="disabled">下一步</button>
                    <button class="btn btn-primary ng-hide" ng-show="step == 2" ng-click="remove_attendance()">确认撤销</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'remove_class_attendance.modal',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>