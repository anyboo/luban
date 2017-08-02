<template>
    <div class="wrapper bg-light ng-scope">
        <div class="wrapper b-a r-5x bg-white box-shadow">
            <button tooltip="VIP会员拥有更多学员数、校区数、账号数" class="btn btn-info pull-right r ng-scope">
                <i class="fa fa-arrow-circle-up"></i> 升级成VIP会员</button>
            <h4>
                <i class="icon-badge"></i>会员身份:
                <span class="label bg-gray ng-scope">免费会员</span>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r">
                <i class="fa fa-money"></i> 充值</button>
            <h4>
                <i class="fa fa-cny"></i> 系统余额:
                <span class="label bg-info ng-binding">￥0.00</span>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r">
                <i class="icon-basket"></i> 购买</button>
            <h4>
                <i class="fa fa-mobile"></i> 短信剩余:
                <span class="label bg-info ng-binding">10</span>
                <small class="text-muted m-l ng-binding">已使用:0 条</small>
            </h4>
        </div>
        <div class="wrapper b-a r-5x bg-white box-shadow m-t">
            <button class="btn btn-default pull-right r">
                <i class="icon-basket"></i> 购买</button>
            <button class="btn btn-default pull-right m-r">
                <i class="fa fa-book"></i> 我的订单</button>
            <h4>
                <i class="fa fa-th-large"></i> 配套硬件及服务:
                <small class="text-muted m-l">刷卡考勤机、考勤卡、小票打印机等</small>
            </h4>
        </div>
        <div class="row m-t ng-scope" ng-if="system.level < 2">
            <div class="col-xs-12 col-sm-4">
                <div class="wrapper-sm r box-shadow bg-teal-gradient">
                    <h4 class="text-center m-b">
                        <i class="fa fa-building"></i> 校区数量</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label class="text-black">限额:</label>
                            <label class="badge bg-info ng-binding">1</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">当前:</label>
                            <label class="badge bg-info ng-binding">1</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">剩余:</label>
                            <label class="badge bg-info ng-binding">0</label>
                        </li>
                    </ul>
                    <button class="btn btn-block btn-default">
                        <i class="icon-plus"></i> 增加校区数量</button>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="wrapper-sm r box-shadow bg-aqua-gradient">
                    <h4 class="text-center m-b">
                        <i class="fa fa-user"></i> 账号数量</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label class="text-black">限额:</label>
                            <label class="badge bg-info ng-binding">5</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">当前:</label>
                            <label class="badge bg-info ng-binding">1</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">剩余:</label>
                            <label class="badge bg-info ng-binding">4</label>
                        </li>
                    </ul>
                    <button ng-disabled="system.teacher_num_limit == 0" class="btn btn-block btn-default">
                        <i class="icon-plus"></i> 增加账号数量</button>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="wrapper-sm r box-shadow bg-blue-gradient">
                    <h4 class="text-center m-b">
                        <i class="icon-user"></i> 学员数量</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <label class="text-black">限额:</label>
                            <label class="badge bg-info ng-binding">50</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">当前:</label>
                            <label class="badge bg-info ng-binding">7</label>
                        </li>
                        <li class="list-group-item">
                            <label class="text-black">剩余:</label>
                            <label class="badge bg-info ng-binding">43</label>
                        </li>
                    </ul>
                    <button class="btn btn-block btn-default">
                        <i class="icon-plus"></i> 增加学员数量</button>
                </div>
            </div>
        </div>
        <p class="text-center m-t">
            <a class="link">保密协议</a> |
            <a class="link">服务协议</a>
        </p>
    </div>
</template>
<style>
.btn-info {
    color: #fff!important;
    background-color: #4d90fe;
    border-color: #4d90fe;
}
.r-5x {
    border-radius: 10px;
}

.r {
    border-radius: 1px 1px 1px 1px;
}

.wrapper-sm {
    padding: 10px;
}

.box-shadow {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}

.bg-teal-gradient {
    color: #fff;
    background: #39cccc!important;
}

.r {
    border-radius: 1px 1px 1px 1px;
}

.wrapper-sm {
    padding: 10px;
}

.box-shadow {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}

.bg-aqua-gradient {
    color: #fff;
    background: #00c0ef!important;
}

.bg-gray {
    color: #000;
    background-color: #d2d6de!important;
}

.badge,
.label {
    font-weight: bold;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    border-radius: .25em;
}
.r {
    border-radius: 1px 1px 1px 1px;
}
.wrapper-sm {
    padding: 10px;
}
.box-shadow {
    box-shadow: 0 2px 2px rgba(0,0,0,0.05), 0 1px 0 rgba(0,0,0,0.05);
}
.bg-blue-gradient {
    color: #fff;
    background: #0073b7!important;
}
</style>
<script>
export default {
    name: 'systems',
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
