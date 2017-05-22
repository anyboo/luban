<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content" modal-transclude>
            <div page-controller="edit_info" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
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
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required" placeholder="输入学员姓名" required v-model="lb_localdata.form.lb_info_student_name">
                                <lb-buttongroup :group-data="lb_localdata.lb_info_sex" v-model="lb_localdata.form.lb_info_sex"></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-md-2 control-label">昵称:</label>
                            <div class="col-xs-12 col-md-5">
                                <div class="inline w-sm">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" v-model="lb_localdata.form.lb_info_nickname">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                            <div class="col-md-5 col-xs-12">
                                <div class="w-sm">
                                    <lb-date-picker type="date" name="birth_date" v-model="lb_localdata.form.lb_info_birth_date"></lb-date-picker>
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
                                <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_info_home_address">
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('school')">
                            <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                            <div class="col-md-5 col-xs-12">
                                <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_info_school">
                            </div>
                        </div>
                        <div class="form-group ng-scope" ng-if="have_field('class')">
                            <label class="control-label col-md-2 col-xs-12">年级:</label>
                            <div class="col-md-5 col-xs-12">
                                <select class="form-control ng-pristine ng-untouched ng-valid" ui-jq="chosen" name="grade" ng-options="item.value as item.text for item in $const.grades" style="display: none;" v-model="lb_localdata.form.lb_info_grade">
                                    <option value class>请选择</option>
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
                                <div class="chosen-container chosen-container-single" style="width: 353px;" title>
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
                                <input type="text" name="class" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_info_class">
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
                    <button class="btn btn-primary" ng-disabled="form1.$invalid || saving" ng-click="do_ok();" @click="handleClick">确定</button>
                    <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'edit_info',
    data() {
        let lb_localdata = {
            'form': {
                'lb_info_student_name': '',
                'lb_info_sex': '',
                'lb_info_nickname': '',
                'lb_info_birth_date': '',
                'lb_info_home_address': '',
                'lb_info_school': '',
                'lb_info_grade': '',
                'lb_info_class': ''
            },
            'lb_info_sex': [{
                'value': '1',
                'iclass': 'fa fa-male',
                'text': '男'
            }, {
                'value': '2',
                'iclass': 'fa fa-female',
                'text': '女'
            }, {
                'value': '0',
                'iclass': 'fa fa-question-circle',
                'text': '待确定'
            }]
        }
        return {
            lb_localdata,
            model: 'modify'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                alert('做完数据提交数据库了')
            })
        }
    }
}
</script>