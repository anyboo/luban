<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="employee_lock" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>封存
                        <span class="label bg-info ng-binding">陈佳木</span>的资料
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="m-t wrapper">
                        <p class="m-t m-b text-danger text-2x ng-binding">
                            <i class="fa fa-exclamation-triangle"></i>您确定要封存 陈佳木 的资料吗?
                        </p>
                        <p class="text-muted">
                            1,离职封存适用于员工离职之后，封存之后该账号对应的历史记录保留在系统，但是不能再登陆系统.
                            <br> 2,封存之后,自动释放所占用的账号名额.
                            <br> 3,之后如有需要可重新开启,再次开启需要占用新的账号名额.
                        </p>
                        <p class="text-center">
                            <a class="btn btn-danger" ng-disabled="saving" ng-click="do_ok()">确定</a>
                            <a class="btn btn-default m-l" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lock',
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