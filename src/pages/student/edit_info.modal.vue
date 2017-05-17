<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="edit_info" class="ng-scope">
                <div class="modal-header">
                    <button ng-click="$dismiss()" class="close" type="button" @click="lbCloseDailog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="badge bg-info ng-binding">威锋</span>的基本资料
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-pristine ng-valid ng-valid-required">
                        <div class="form-group">
                            <label class="col-xs-12 col-md-2 control-label">姓名:</label>
                            <div class="col-xs-12 col-md-5">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" placeholder="输入学员姓名" ng-model="info.student_name" required="">
                                <div class="btn-group m-t">
                                    <label class="btn btn-default ng-pristine ng-untouched ng-valid active" ng-model="info.sex" btn-radio="'1'">
                                        <i class="fa fa-male"></i>男
                                    </label>
                                    <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="info.sex" btn-radio="'2'">
                                        <i class="fa fa-female"></i>女
                                    </label>
                                    <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="info.sex" btn-radio="'0'">
                                        <i class="fa fa-question-circle"></i>待确定
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-md-2 control-label">昵称:</label>
                            <div class="col-xs-12 col-md-5">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" ng-model="info.nickname">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                            <div class="col-md-5 col-xs-12">
                                <div class="w-sm">
                                    <input type="text" name="birth_date" ng-model="info.birth_date" class="form-control input-sm ng-pristine ng-untouched ng-valid" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="info.inited">
                            <label class="control-label col-md-2 col-xs-12">学员归属:</label>
                            <div class="col-md-5 col-xs-12">
                                <div ng-if="$action != 'set_region'" class="ng-scope">
                                    <p class="form-control-static ng-scope" ng-if="info.region_oe_id == '0'">
                                        未设置归属
                                        <a class="link" ng-click="set_region(info)">设置</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('home_address')">
                            <label class="control-label col-md-2 col-xs-12">家庭住址:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" ng-model="info.home_address">
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('school')">
                            <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" ng-model="info.school">
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('class')">
                            <label class="control-label col-md-2 col-xs-12">年级:</label>
                            <div class="col-md-5 col-xs-12">
                                <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="grade" ng-model="info.grade" ng-options="item.value as item.text for item in $const.grades" style="display: none;">
                                    <option value="" class="">请选择</option>
                                    <option value="0">不确定</option>
                                    <option value="1">一年级</option>
                                    <option value="2">二年级</option>
                                    <option value="3">三年级</option>
                                    <option value="4">四年级</option>
                                    <option value="5">五年级</option>
                                    <option value="6">六年级</option>
                                    <option value="7">初一</option>
                                    <option value="8">初二</option>
                                    <option value="9">初三</option>
                                    <option value="10">高一</option>
                                    <option value="11">高二</option>
                                    <option value="12">高三</option>
                                </select>
                                <div class="chosen-container chosen-container-single" style="width: 353px;" title="">
                                    <a class="chosen-single" tabindex="-1">
                                        <span>请选择</span>
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
                        <div class="form-group ng-scope" ng-if="have_field('class')">
                            <label class="control-label col-md-2 col-xs-12">班级:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="class" class="form-control ng-pristine ng-untouched ng-valid" ng-model="info.class">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">备注:</label>
                            <div class="col-md-5 col-xs-12">
                                <textarea name="note" ng-model="info.note" placeholder="备注信息" rows="3" class="form-control ng-pristine ng-untouched ng-valid"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok();">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbCloseDailog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_info.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>