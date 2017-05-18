<template>
    <div class="modal-body ng-scope" ng-controller="OrderIndexCtrl">
        <div ng-include="'tpl/app/student/order/'+$action+'.html'" class="ng-scope">
            <div class="row no-gutter ng-scope">
                <div class="col-xs-4 text-center" @click="switchPage('lb-cc')">
                    <a ng-click="create_order(0)" class="block panel padder-v bg-warning item">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-users"></i>班组课
                        </span>
                        <span class="text-muted text-sm">排课、考勤跟班走</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center" @click="switchPage('lb-onetone')">
                    <a ng-click="create_order(1)" class="block panel padder-v bg-danger item">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-user"></i>一对一
                        </span>
                        <span class="text-muted text-sm">单独排课、考勤</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center" @click="switchPage('lb-ch')">
                    <a ng-click="create_order(10)" class="block panel padder-v bg-info item">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-clock-o"></i>课时包
                        </span>
                        <span class="text-muted text-sm">不排课,按次扣</span>
                    </a>
                </div>
                <div class="col-xs-6 text-center" @click="switchPage('lb-storedValue')">
                    <a ng-click="create_order(2)" class="block panel padder-v bg-olive item">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-rmb"></i>预充值
                        </span>
                        <span class="text-muted text-sm ng-binding">钱包余额:0.00</span>
                    </a>
                </div>
                <div class="col-xs-6 text-center" @click="switchPage('lb-miscellaneousFees')">
                    <a ng-click="create_order(3)" class="block panel padder-v bg-orange item">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-money"></i>杂费
                        </span>
                        <span class="text-muted text-sm">其他杂费缴费</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ordermain',
    data() {
        let lb_localdata = {}
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {
        switchPage(page) {
            if (this.$parent && this.$parent.switchPage) {
                this.$parent.switchPage(page)
            }
        }
    }
}
</script>