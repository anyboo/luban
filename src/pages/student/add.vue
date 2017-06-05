<template>
    <div class="ng-scope">
        <div class="wrapper ng-scope">
            <form name="form1" class="form form-horizontal form-validation ng-pristine ng-invalid ng-invalid-required ng-valid-pattern">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <i class="fa fa-user"></i>学员档案录入
                        <a @click="lbShowdialog($event,'lb-import')">
                            <i class="glyphicon glyphicon-import"></i>从Excel导入
                        </a>
                    </div>
                    <div class="panel-body">
                        <div class="wrapper-xs ng-scope">
                            <p class="text-muted ng-scope">注意:“确认”按钮默认是禁用的，只有所有输入项都合法完整后才可以点击,请注意选择性别.</p>
                            <div class="form-group ng-scope">
                                <label class="col-xs-12 col-md-2 control-label">
                                    <span class="text-danger">*</span>姓名:
                                </label>
                                <div class="col-xs-12 col-md-10">
                                    <div class="inline va-m w-sm">
                                        <input type="text" name="student_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.student_name.errorStatus}" placeholder="输入学员姓名" v-model.trim.lazy="localdata.form.student_name" @change="validate('student_name')">
                                    </div>
                                    <lb-buttongroup :group-data="localdata.sex" v-model="localdata.form.sex"></lb-buttongroup>
                                    <div class="error ng-hide" v-if="localdata.validator.fields.student_name.errorStatus">
                                        <span class="text-warning">学员姓名必须填写</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="col-xs-12 col-md-2 control-label">
                                    <span class="text-danger">*</span>联系方式:
                                </label>
                                <div class="col-xs-12 col-md-10">
                                    <div class="inline va-m w-sm">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.first_tel.errorStatus}" placeholder="输入手机号" v-model.trim.lazy="localdata.form.first_tel" @change="validate('first_tel')">
                                    </div>
                                    <div class="inline va-m w-xs m-l-xs">
                                        <select class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.first_rel_rel">
                                            <option value selected>关系</option>
                                            <option value="0">本人</option>
                                            <option value="1">爸爸</option>
                                            <option value="2">妈妈</option>
                                        </select>
                                    </div>
                                    <div class="inline va-m w-xs m-l-xs" v-if="localdata.form.first_rel_rel!='0'">
                                        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="姓/名" v-model="localdata.form.first_rel_name">
                                    </div>
                                    <div class="error ng-hide" v-if="localdata.validator.fields.first_tel.errorStatus">
                                        <span class="text-warning">手机号必须填写且为11位</span>
                                    </div>
                                    <div class="contact-list m-t-xs ng-scope ng-hide" v-for="item,index in localdata.form.relations">
                                        <div class="inline va-m w-sm">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="输入手机号" v-model="item.tel">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" v-model="item.relation">
                                                <option value selected>关系</option>
                                                <option value="0">本人</option>
                                                <option value="1">爸爸</option>
                                                <option value="2">妈妈</option>
                                            </select>
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs" v-if="item.relation!='0'">
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="姓/名" v-model="item.name">
                                        </div>
                                        <div class="inline va-m m-l-xs ng-hide">
                                            <a @click="localdata.form.relations.splice(index, 1)">
                                                <i class="icon-close"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <a @click="localdata.form.relations.push({relation:'',name:'',tel:''})">
                                            <i class="icon-plus"></i>增加联系方式
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ng-scope">
                                <label class="control-label col-sm-2 col-xs-12">
                                    来源渠道:
                                </label>
                                <div class="col-md-10 col-xs-12">
                                    <lb-buttongroup :group-data="localdata.track_from" v-model="localdata.form.track_from"></lb-buttongroup>
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
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" placeholder="小名或英文名" v-model="localdata.form.nickname">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-2 col-xs-12">出生日期:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-sm">
                                            <lb-date-picker type="date" name="birth" v-model="localdata.form.birth"></lb-date-picker>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope">
                                    <label class="control-label col-md-2 col-xs-12">家庭住址:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline w-lg">
                                            <input type="text" name="home_address" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.home_address">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope">
                                    <label class="control-label col-md-2 col-xs-12">就读学校:</label>
                                    <div class="col-md-10 col-xs-12">
                                        <div class="inline va-m w ng-scope" ng-if="have_field('school')">
                                            <input type="text" name="school" class="form-control ng-pristine ng-untouched ng-valid" placeholder="学校" v-model="localdata.form.school">
                                        </div>
                                        <div class="inline va-m w-xs m-l-xs ng-scope">
                                            <select class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.grade">
                                                <option value class>年级</option>
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
                                            <select class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.class">
                                                <option value class>年级</option>
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
                                            <textarea name="note" v-model="localdata.form.note" rows="2" class="form-control ng-pristine ng-untouched ng-valid"></textarea>
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
        let localdata = {
            'form': {
                'student_name': '',
                'sex': '0',
                'first_tel': '',
                'first_rel_rel': '',
                'first_rel_name': '',
                'relations': [],
                'track_from': '其他',
                'nickname': '',
                'birth': '',
                'home_address': '',
                'school': '',
                'grade': '',
                'class': '',
                'note': '',
                'region_oe_id': '0',
                'purpose': '0',
                'isdel': false
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'student_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'first_tel': {
                        'type': 'string',
                        'len': 11,
                        'required': true,
                        'errorStatus': false
                    },
                    'birth': {
                        'type': 'date',
                    }
                }
            },
            'sex': [{
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
            'track_from': [{
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
            localdata,
            expand: true,
            model: 'student'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            vm.localdata.form.birthstr = vm.getDateNumFormat(vm.localdata.form.birth)
            vm.handleSave().then((response) => {
                vm.$store.state.envs.currStudent = response
                vm.handleShowDialog('lb-finishadd')
            }, (e) => {
                console.log(e)
            })
        }
    }
}
</script>
