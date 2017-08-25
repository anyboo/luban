<template>
    <div class="modal-body">
        <div >
            <div class="row no-gutter">
                <div class="col-xs-4 text-center" @click="switchPage('lb-cc')">
                    <a class="block panel padder-v bg-warning item" style="cursor:pointer;
                ">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-users"></i>报名
                        </span>
                        <span class="text-muted text-sm">课程报名</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center" @click="switchPage('lb-storedValue')">
                    <a class="block panel padder-v bg-olive item" style="cursor:pointer;
                ">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-rmb"></i>预充值
                        </span>
                        <span class="text-muted text-white text-sm">钱包余额:0.00</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center" @click="switchPage('lb-miscellaneousFees')">
                    <a class="block panel padder-v bg-orange item" style="cursor:pointer;
                ">
                        <span class="text-white font-thin h1 block">
                            <i class="fa fa-money"></i>杂费
                        </span>
                        <span class="text-muted text-white text-sm">其他杂费缴费</span>
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
        let localdata = {}
        return {
            localdata,
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
