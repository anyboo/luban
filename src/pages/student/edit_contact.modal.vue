<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div page-controller="edit_contact" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="badge bg-info ng-binding">陈集</span>的联系人
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid ng-valid-required ng-valid-pattern">
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">手机号:</label>
                            <div class="col-xs-12 col-md-5">
                                <input type="text" ng-readonly="info.is_has_open" class="form-control w-sm ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-pattern" placeholder="输入手机号" ng-pattern="/^1\d{10}$/" required readonly="readonly" v-model="lb_localdata.form.lb_info_tel">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">称呼:</label>
                            <div class="col-xs-12 col-md-5">
                                <div class="inline w-xs">
                                    <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" ng-options="item.text as item.text for item in $gv.dicts[1]" style="display: none;" v-model="lb_localdata.form.lb_info_relation">
                                        <option value class>称呼</option>
                                        <option value="0" selected="selected">本人</option>
                                        <option value="1">爸爸</option>
                                        <option value="2">妈妈</option>
                                    </select>
                                    <div class="chosen-container chosen-container-single" style="width: 90px;" title>
                                        <a class="chosen-single" tabindex="-1">
                                            <span>本人</span>
                                            <div>
                                                <b></b>
                                            </div>
                                        </a>
                                        <div class="chosen-drop">
                                            <div class="chosen-search">
                                                <input type="text" autocomplete="off">
                                            </div>
                                            <ul class="chosen-results"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">姓/名</label>
                            <div class="col-xs-12 col-md-5">
                                <input type="text" class="form-control w-sm ng-pristine ng-untouched ng-valid" placeholder="姓/名" v-model="lb_localdata.form.lb_info_name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2"></label>
                            <div class="col-xs-12 col-md-10">
                                <label class="i-switch bg-primary inline va-m">
                                    <input type="checkbox" ng-true-value="'1'" ng-false-value="'0'" class="ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_info_is_has_open">
                                    <i></i>
                                </label>
                                <span class="inline va-m">是否开通家校互联账号</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2"></label>
                            <div class="col-xs-12 col-md-10">
                                <label class="i-switch bg-info inline va-m">
                                    <input type="checkbox" ng-true-value="'1'" ng-false-value="'0'" ng-disabled="info.is_main == '1'" class="ng-pristine ng-untouched ng-valid" disabled="disabled" v-model="lb_localdata.form.lb_info_is_main">
                                    <i></i>
                                </label>
                                <span class="inline va-m">是否设为第1联系方式</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok();">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_contact.modal',
    data() {
        let lb_localdata = {
            'form': {
                'lb_info_tel': '',
                'lb_info_relation': '',
                'lb_info_name': '',
                'lb_info_is_has_open': '',
                'lb_info_is_main': ''
            }
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>