<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/hours.js']" class="ng-scope"></div>
            <div ng-controller="reg_class_attendance" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>  登记 
                        <span class="label bg-info ng-binding">11</span>  的考勤 
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择排课</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.登记考勤</h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" ng-if="step==1">
                        <div class="row no-gutter"></div>
                        <p class="text-center text-muted ng-scope" ng-if="arranges_rest.$loaded && arranges_rest.$list.length == 0">
  没有排课记录，请先进行 
                            <a class="link" ng-click="$util.open('tpl/app/lesson/classes/lesson_arrange.modal.html','lg',class)" ui-per="class.arranges">排课</a>  ! 
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <a ng-show="step > 1" class="btn btn-link ng-hide" ng-click="go_step(1)">返回</a>
                    <button class="btn btn-primary" ng-show="step == 1" ng-disabled="!oca_id" ng-click="go_step(2)" disabled="disabled">下一步</button>
                    <button class="btn btn-primary ng-hide" ng-show="step == 2" ng-disabled="saving" ng-click="reg_attendance()">登记考勤</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg_class_attendance.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>