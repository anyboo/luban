<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="branch_add" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-plus"></i> {{title}}新校区</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation ng-invalid ng-invalid-required ng-valid-minlength ng-dirty ng-valid-parse">
                        <p>校区名:</p>
                        <input type="text" name="branch_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" v-model="lb_localdata.form.branch_name" ng-minlength="2" required="">
                        <p class="m-t">校区简称:</p>
                        <input type="text" name="short_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" v-model="lb_localdata.form.short_name" ng-minlength="1" required="">
                        <p class="m-t">联系电话:</p>
                        <input type="text" name="branch_tel" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.branch_tel">
                        <p class="m-t">所在地区:</p>
                        <div class="city-select ng-scope ng-valid ng-dirty ng-valid-parse" ng-class="{'open': $select.open}" v-model="lb_localdata.form.city" on-city-selected="branch_city_changed">
                            <div class="form-control ng-binding" ng-class="{'ng-dirty ng-valid':$select.selected.cn.length > 0}" ng-click="$select.activate()">请选择城市 <span class="caret"></span></div>
                            <div class="city-select-drop">
                                <div class="city-select-tab">
                                    <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope active" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">省份</a>
                                    <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">城市</a>
                                    <a href="javascript:;" ng-repeat="i in $select.panel" class="col-xs-4 ng-binding ng-scope" ng-class="{'active': $select.active == $index}" ng-click="$select.changeTab($index)">县区</a>
                                </div>
                                <div class="city-select-panel" ng-show="$select.active == 0">
                                    <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                        <dt class="col-xs-2 ng-binding">A-G</dt>
                                        <dd class="col-xs-10">
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">安徽</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">北京</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">重庆</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">福建</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">甘肃</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">广东</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">广西</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">贵州</a>
                                        </dd>
                                    </dl>
                                    <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                        <dt class="col-xs-2 ng-binding">H-K</dt>
                                        <dd class="col-xs-10">
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">海南</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">河北</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">黑龙江</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">河南</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">湖北</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">湖南</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">江苏</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">江西</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">吉林</a>
                                        </dd>
                                    </dl>
                                    <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                        <dt class="col-xs-2 ng-binding">L-S</dt>
                                        <dd class="col-xs-10">
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">辽宁</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">内蒙古</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">宁夏</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">青海</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">山东</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">上海</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">山西</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">陕西</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">四川</a>
                                        </dd>
                                    </dl>
                                    <dl class="clearfix ng-scope" ng-repeat="(key, value) in $select.areaData">
                                        <dt class="col-xs-2 ng-binding">T-Z</dt>
                                        <dd class="col-xs-10">
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">天津</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">新疆</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">西藏</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">云南</a>
                                            <a href="javascript:;" class="mb ng-binding ng-scope" ng-class="{'active': $select.isActive(ai[0])}" ng-click="$select.to(1, ai[0])" ng-repeat="ai in value">浙江 </a>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="city-select-panel ng-scope ng-hide" ng-repeat="i in $select.panel" ng-show="$select.active == $index" ng-if="!$first">
                                    <dl class="clearfix">
                                        <dd>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="city-select-panel ng-scope ng-hide" ng-repeat="i in $select.panel" ng-show="$select.active == $index" ng-if="!$first">
                                    <dl class="clearfix">
                                        <dd>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <p class="m-t">详细地址(有长度限制最少5个字符):</p>
                        <input type="text" name="branch_address" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.branch_address">
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" @click="handleClick">
                        确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_modal',
    data() {
        let lb_localdata = {
            'form': {
                'group_name': '',
                'branch_name': '',
                'short_name': '',
                'branch_tel': '',
                'city': '',
                'branch_address': ''

            }
        }
        return {
            lb_localdata,
            model: 'campus',
            title: '创建',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.lb_localdata.form = this.lodash.assign(this.lb_localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
        this.getTabledata('cate')
    },
    computed: {
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id,
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            })
        }
    }
}
</script>
