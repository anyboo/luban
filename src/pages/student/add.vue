<template>
    <div ui-view="" class="ng-scope">
        <div class="wrapper ng-scope" page-controller="student_add">
            <form name="form1" novalidate="" class="form form-horizontal form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-pattern" ng-submit="do_save()">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <i class="fa fa-user"></i>学员档案录入
                        <a ng-click="$util.open('tpl/app/student/import.html','md',{})" @click="lbShowDailog($event,'lb-import')">
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
                                        <input type="text" name="student_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" placeholder="输入学员姓名" ng-model="student.student_name" required="">
                                    </div>
                                    <div class="btn-group m-l-xs">
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="student.sex" btn-radio="'1'">
                                            <i class="fa fa-male"></i>男
                                        </label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="student.sex" btn-radio="'2'">
                                            <i class="fa fa-female"></i>女
                                        </label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="student.sex" btn-radio="'0'">
                                            <i class="fa fa-question-circle"></i>待确定
                                        </label>
                                    </div>
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
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="输入手机号" ng-model="item.tel">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" ng-model="student.grade" ng-options="item.value as item.text for item in $const.grades">
                                                <option value="" class="">关系</option>
                                                <option value="0">本人</option>
                                                <option value="1">爸爸</option>
                                                <option value="2">妈妈</option>
                                            </select>
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs" ng-hide="item.name=='本人'">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="姓/名" ng-model="student.name">
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
                                    <div class="btn-group m-l-xs ng-scope" ng-if="$gv.dicts[3].length < 6">
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope" ng-model="student.track_from" btn-radio="'上门'" ng-repeat="item in $gv.dicts[3]">上门</label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope" ng-model="student.track_from" btn-radio="'广告'" ng-repeat="item in $gv.dicts[3]">广告</label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope" ng-model="student.track_from" btn-radio="'介绍'" ng-repeat="item in $gv.dicts[3]">介绍</label>
                                        <label class="btn btn-default ng-pristine ng-untouched ng-valid ng-binding ng-scope" ng-model="student.track_from" btn-radio="'其他'" ng-repeat="item in $gv.dicts[3]">其他</label>
                                    </div>
                                </div>
                            </div>
                            <div class="m-t m-b b-t text-center ng-scope">
                                <a ng-show="!set.expand" ng-click="set.expand=1" class="inline w b-l b-r b-b r-b ng-hide">
                                    <i class="fa fa-arrow-down"></i>展开填写更多资料
                                </a>
                                <a ng-show="set.expand==1" ng-click="set.expand=0" class="inline w b-l b-r b-b r-b">
                                    <i class="fa fa-arrow-up"></i>关闭更多资料
                                </a>
                            </div>
                            <div ng-show="set.expand==1" class="ng-scope">
                                <div class="form-group">
                                    <label class="col-xs-12 col-md-2 control-label">昵称:</label>
                                    <div class="col-xs-12 col-md-10">
                                        <div class="inline w-sm">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" ng-model="student.nickname">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-sm">
                                            <input type="text" name="birth" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="student.birth" datetimepicker="date">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="have_field('home_address')">
                                    <label class="control-label col-md-2 col-xs-12">家庭住址:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-lg">
                                            <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" ng-model="student.home_address">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="have_field('school') || have_field('grade') || have_field('class')">
                                    <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline va-m w ng-scope" ng-if="have_field('school')">
                                            <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" placeholder="学校" ng-model="student.school">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs ng-scope" ng-if="have_field('grade')">
                                            <select name="grade" class="form-control ng-pristine ng-untouched ng-valid" ng-model="student.grade" ng-options="item.value as item.text for item in $const.grades">
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
                                        <div class="inline va-m w-xxs m-l-xs input-box ng-scope" ng-if="have_field('class')">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="班级" ng-model="student.class">
                                            <span class="caret"></span>
                                            <div class="input-box-addon" style="width:62px">
                                                <ul>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">1</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">2</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">3</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">4</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">5</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">6</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">7</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">8</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">9</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">10</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">11</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">12</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">13</li>
                                                    <li ng-click="student.class=item.text;" ng-repeat="item in $const.classes_list" class="ng-binding ng-scope">14</li>
                                                </ul>
                                            </div>
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
                                <button type="submit" class="btn btn-primary w" ng-disabled="form1.$invalid || form_invalid() || saving" disabled="disabled">确认</button>
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
    return {

    }
  },
}
</script>
