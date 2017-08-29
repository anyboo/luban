<template>
    <div class="modal-body" style="padding-bottom: 0px;">
        <div>
            <div class=" no-gutter text-center">
                <div class="col-xs-4 text-center lb_frame" @click="switchPage('lb-cc')">
                    <!-- 'lb-cc'  -->
                    <a class="block  bg_yellow  item Alb_frame yellowborder" style="cursor:pointer;
                        ">
                        <span class="text-white font-thin h1 block Slb_frame">
                            <i class="fa fa-users "></i>报名
                        </span>
                        <span class="text-muted text-sm text-white">课程报名</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center lb_frame " @click="switchPage('lb-storedValue')">
                    <a class="block  padder-v bg-olive item bg_green Alb_frame greenborder" style="cursor:pointer;
                        ">
                        <span class="text-white font-thin h1 block Slb_frame">
                            <i class="fa fa-rmb "></i>预充值
                        </span>
                        <span class="text-muted text-white text-sm">钱包余额:0.00</span>
                    </a>
                </div>
                <div class="col-xs-4 text-center lb_frame" @click="switchPage('lb-miscellaneousFees')">
                    <a class="block bg_orange item Alb_frame orangeborder" style="cursor:pointer;
                        ">
                        <span class="text-white font-thin h1 block Slb_frame">
                            <i class="fa fa-money "></i>杂费
                        </span>
                        <span class="text-muted text-white text-sm">其他杂费缴费</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.lb_frame {
    width: 196px;
    height: 141px;
    padding: 0;
    border-radius: 0;
}

.Alb_frame {
    display: block;
    width: 196px;
    padding: 15px 0;
    margin-bottom: 20px;
    color: #ffffff;
}

.Slb_frame {
    display: block;
    font-weight: 300;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 194px;
    height: 39px;
}

.bg_yellow {
    background-color: #faa937!important;
}

.bg_green {
    background-color: #3d9970!important;
}

.bg_orange {
    background-color: #ff851b!important;
}

.greenborder {
    border: 1px solid #3d9970;
}

.orangeborder {
    border: 1px solid #ff851b;
}

.yellowborder {
    border: 1px solid #faa937;
}

.Alb_frame:hover {
    color: #ffffff;
}



.text-white {
    color: #ffffff !important;
}

.text-center {
    text-align: center;
}
</style>

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
