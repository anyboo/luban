<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div oc-lazy-load="['js/modules/order.js?v=2','xeditable']" class="ng-scope"></div>
            <div class="modal-header ng-scope">
                <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                <h3 class="modal-title"><i class="fa fa-shopping-cart"></i>学员 <span class="label bg-info ng-binding">威锋</span> 报名&amp;缴费</h3></div>
            <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl">
                <!-- ngInclude: 'tpl/app/student/order/'+$action+'.html' -->
                <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
                    <div class="row no-gutter ng-scope">
                        <div class="col-xs-4 text-center"><a ng-click="create_order(0)" class="block panel padder-v bg-warning item"><span class="text-white font-thin h1 block"><i class="fa fa-users"></i> 班组课</span> <span class="text-muted text-sm">排课、考勤跟班走</span></a></div>
                        <div class="col-xs-4 text-center"><a ng-click="create_order(1)" class="block panel padder-v bg-danger item"><span class="text-white font-thin h1 block"><i class="fa fa-user"></i> 一对一</span> <span class="text-muted text-sm">单独排课、考勤</span></a></div>
                        <div class="col-xs-4 text-center"><a ng-click="create_order(10)" class="block panel padder-v bg-info item"><span class="text-white font-thin h1 block"><i class="fa fa-clock-o"></i> 课时包</span> <span class="text-muted text-sm">不排课,按次扣</span></a></div>
                        <div class="col-xs-6 text-center"><a ng-click="create_order(2)" class="block panel padder-v bg-olive item"><span class="text-white font-thin h1 block"><i class="fa fa-rmb"></i> 预充值</span> <span class="text-muted text-sm ng-binding">钱包余额:0.00</span></a></div>
                        <div class="col-xs-6 text-center"><a ng-click="create_order(3)" class="block panel padder-v bg-orange item"><span class="text-white font-thin h1 block"><i class="fa fa-money"></i> 杂费</span> <span class="text-muted text-sm">其他杂费缴费</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'order.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
