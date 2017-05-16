<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="end_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar"></i>对
                        <span class="label bg-info ng-binding">11</span>进行结课操作
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="m-t wrapper ng-scope" ng-if="vm.input.remain_times != '0' && vm.input.status != '2' && !in_end_process">
                        <p class="m-t m-b text-danger text-2x ng-binding">
                            <i class="fa fa-exclamation-triangle"></i>系统检测到班级还有2次未上完的课程,是否强制结课?
                        </p>
                        <p class="text-center">
                            <a class="btn btn-danger" ng-click="in_process()">强制结课</a>
                            <a class="btn btn-default m-l" ng-click="vm.dismiss()">关闭</a>
                        </p>
                    </div>
                </div>
                <div class="modal-footer ng-hide" ng-hide="in_end_process == 0">
                    <button class="btn btn-primary" ng-disabled="saving" ng-click="do_ok()">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'end_class.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>