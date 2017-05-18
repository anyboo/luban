<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper ng-scope" page-controller="student_add">
            <form name="form1" novalidate="" class="form form-horizontal form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-pattern" ng-submit="do_save()">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <i class="fa fa-user"></i>学员档案录入
                        <a ng-click="$util.open('tpl/app/student/import.html','md',{})" @click="lbShowdialog($event,'lb-import')">
                            <i class="glyphicon glyphicon-import"></i>从Excel导入
                        </a>
                    </div>
                    <div class="panel-body">
                        <div class="wrapper-xs ng-scope" ng-include="'tpl/app/student/basic.block.html'">
                            <p class="text-muted ng-scope">注意:“确认”按钮默认是禁用的，只有所有输入项都合法完整后才可以点击,请注意选择性别.</p>
                            <div class="form-group ng-scope">
                                <label class="col-xs-12 col-md-2 control-label">
                                    <span class="text-danger">*</span>姓名:
                                </label>
                                <div class="col-xs-12 col-md-10">
                                    <div class="inline va-m w-sm">
                                        <input type="text" name="student_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" placeholder="输入学员姓名" required="" v-model="lb_localdata.form.lb_student_student_name">
                                    </div>
                                    <lb-buttongroup :group-data="lb_localdata.lb_student_sex" v-model="lb_localdata.form.lb_student_sex"></lb-buttongroup>
                                    <div class="error ng-hide" ng-show="form1.student_name.$dirty && form1.student_name.$invalid && form1.submitted">
                                        <span class="text-warning" ng-show="form1.student_name.$error.required">学员姓名必须填写</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="col-xs-12 col-md-2 control-label">
                                    <span class="text-danger">*</span>联系方式:
                                </label>
                                <div class="col-xs-12 col-md-10">
                                    <div class="contact-list m-t-xs ng-scope ng-hide" ng-repeat="item in student.relations track by $index" ng-hide="$index == 0">
                                        <div class="inline va-m w-sm">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="输入手机号" v-model="lb_localdata.form.lb_item_tel">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" ng-options="item.value as item.text for item in $const.grades" v-model="lb_localdata.form.lb_student_relation">
                                                <option value="" class="">关系</option>
                                                <option value="0">本人</option>
                                                <option value="1">爸爸</option>
                                                <option value="2">妈妈</option>
                                            </select>
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs" ng-hide="item.name=='本人'">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="姓/名" v-model="lb_localdata.form.lb_student_name">
                                        </div>
                                        <div class="inline va-m m-l-xs ng-hide" ng-show="$index > 0">
                                            <a ng-click="student.relations.splice($index, 1)">
                                                <i class="icon-close"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="clear m-t-xs">
                                        <a ng-click="student.relations.push({relation:'',name:'',tel:''});">
                                            <i class="icon-plus"></i>增加联系方式
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="control-label col-sm-2 col-xs-12">
                                    <span class="text-danger">*</span>来源渠道:
                                </label>
                                <div class="col-md-10 col-xs-12">
                                    <lb-buttongroup :group-data="lb_localdata.lb_student_track_from" v-model="lb_localdata.form.lb_student_track_from"></lb-buttongroup>
                                </div>
                            </div>
                            <div class="m-t m-b b-t text-center ng-scope">
                                <a v-if="!expand" @click="expand=true" class="inline w b-l b-r b-b r-b ng-hide">
                                    <i class="fa fa-arrow-down"></i>展开填写更多资料
                                </a>
                                <a v-if="expand" @click="expand=false" class="inline w b-l b-r b-b r-b">
                                    <i class="fa fa-arrow-up"></i>关闭更多资料
                                </a>
                            </div>
                            <div v-show="expand" class="ng-scope">
                                <div class="form-group">
                                    <label class="col-xs-12 col-md-2 control-label">昵称:</label>
                                    <div class="col-xs-12 col-md-10">
                                        <div class="inline w-sm">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" v-model="lb_localdata.form.lb_student_nickname">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-sm">
                                            <lb-date-picker type="date" name="birth" v-model="lb_localdata.form.lb_student_birth"></lb-date-picker>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="have_field('home_address')">
                                    <label class="control-label col-md-2 col-xs-12">家庭住址:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-lg">
                                            <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_student_home_address">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="have_field('school') || have_field('grade') || have_field('class')">
                                    <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline va-m w ng-scope" ng-if="have_field('school')">
                                            <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" placeholder="学校" v-model="lb_localdata.form.lb_student_school">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs ng-scope">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_student_grade">
                                                <option value="" class="">年级</option>
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
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs ng-scope">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lb_student_class">
                                                <option value="" class="">年级</option>
                                                <option value="0">1</option>
                                                <option value="1">2</option>
                                                <option value="2">3</option>
                                                <option value="3">4</option>
                                                <option value="4">5</option>
                                                <option value="5">6</option>
                                                <option value="6">7</option>
                                                <option value="7">8</option>
                                                <option value="8">9</option>
                                                <option value="9">10</option>
                                                <option value="10">11</option>
                                                <option value="11">12</option>
                                                <option value="12">13</option>
                                            </select>
                                        </div>
                                        <span class="padder">班</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-xs-12">备注:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-lg">
                                            <textarea name="note" ng-model="student.note" rows="2" class="form-control ng-pristine ng-untouched ng-valid"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-t m-b panel-footer">
                        <div class="form-group">
                            <div class="col-xs-12 col-md-10 col-md-offset-2">
                                <button type="button" class="btn btn-primary w" ng-disabled="form1.$invalid || form_invalid() || saving" @click="handleClick">确认</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add',
    data() {
        let lb_localdata = {
            'form': {
                'lb_student_student_name': '',
                'lb_student_sex': '',
                'lb_item_tel': '',
                'lb_student_relation': '',
                'lb_student_name': '',
                'lb_student_track_from': '',
                'lb_student_nickname': '',
                'lb_student_birth': '',
                'lb_student_home_address': '',
                'lb_student_school': '',
                'lb_student_grade': '',
                'lb_student_class': ''
            },
            'lb_student_sex': [{
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
            }],
            'lb_student_track_from': [{
                'value': '上门',
                'text': '上门'
            }, {
                'value': '广告',
                'text': '广告'
            }, {
                'value': '介绍',
                'text': '介绍'
            }, {
                'value': '其他',
                'text': '其他'
            }]
        }
        return {
            lb_localdata,
            expand: false,
            model: 'students'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            this.handleSave().then(() => {
                this.$store.state.envs.currStudent = vm.lb_localdata.form
                vm.handleShowDialog('lb-finishadd')
            })
        }
    }
}
</script>