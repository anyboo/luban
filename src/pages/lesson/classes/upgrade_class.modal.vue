<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="upgrade_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>对
                        <span class="label bg-info ng-binding">11</span>进行升级操作
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="alert ng-isolate-scope alert-info alert-dismissable" ng-class="['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]" role="alert" alert="" type="info" close="close_alert()" ng-if="alert_show==1">
                        <button ng-show="closeable" type="button" class="close" ng-click="close()" @click="lbCloseDailog()">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <div ng-transclude="">
                            <h3 class="m-n ng-scope">
                                <i class="fa fa-exclamation-circle"></i>升级操作说明
                            </h3>
                            <ul class="list-unstyled ng-scope">
                                <li class="m-t-xs">班级升级适用于课程升级,班级配置整体不变的情况,如春季班升级到暑假班.</li>
                                <li class="m-t-xs">升级操作需要先对本班级进行结课.</li>
                                <li class="m-t-xs">新创建的班级学员关联到原班级，在批量报名的时候可从原班级导入.</li>
                                <li class="m-t-xs">原来班级的相关记录作为班级快照关联到新的班级.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="m-t wrapper ng-scope" ng-if="vm.input.status != '2'">
                        <p class="m-t m-b text-danger text-2x">
                            <i class="fa fa-exclamation-triangle"></i>系统检测到班级还未结课,是否先要进行结课操作?
                        </p>
                        <p class="text-center">
                            <a ng-click="$util.open('tpl/app/lesson/classes/end_class.modal.html','lg',vm.input)" @click="lbShowDailog('lb-end_classmodal')">立即结课</a>
                            <a class="btn btn-default m-l" ng-click="vm.dismiss()">关闭</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'upgrade_class.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>