<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}" id="app">
        <div class="modal-content" modal-transclude>
            <div page-controller="new_lesson" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-flag"></i>{{title}}课程
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern ng-dirty">
                        <div class="panel panel-default">
                            <div class="panel-heading">基本信息</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程类型:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-buttongroup :group-data="lb_localdata.lesson_type" v-model="lb_localdata.form.lesson_type"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程分类:</label>
                                    <div class="col-md-9 col-xs-12">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程名:</label>
                                    <div class="col-md-9 col-xs-12">
                                       
                                        <input type="text" name="lesson_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':lb_localdata.validator.fields.lesson_name.errorStatus}" placeholder="输入学员姓名" v-model.trim.lazy="lb_localdata.form.lesson_name" @change="validate('lesson_name')">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程编号:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_no" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lesson_no">
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '10'" v-if="this.lb_localdata.form.lesson_type=='2'">
                                    <label class="control-label col-md-3 col-xs-12">科目:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="row no-gutter">
                                            <div class="col-xs-10">
                                                <div class="ui-select-multiple ui-select-bootstrap dropdown form-control ng-valid ng-dirty" ng-class="{open: $select.open}" multiple="multiple" ng-model="lesson.sj_ids" theme="bootstrap">
                                                    <div>
                                                        <span class="ui-select-match" placeholder="选择科目..."></span>
                                                        <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs ng-pristine ng-valid ng-touched" placeholder="选择科目..." ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" style="width: 325px;" v-model="lb_localdata.form.lb_$select_search">
                                                    </div>
                                                    <ul class="ui-select-choices ui-select-choices-content dropdown-menu ng-scope ng-hide" role="menu" aria-labelledby="dLabel" ng-show="$select.items.length > 0" repeat="item.sj_id as item in user.gv.subjects | propsFilter:{subject_name:$select.search}">
                                                        <li class="ui-select-choices-group">
                                                            <div class="divider ng-hide" ng-show="$select.isGrouped && $index > 0"></div>
                                                            <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header ng-binding ng-hide" ng-bind-html="$group.name"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <a ng-click="$util.open('tpl/app/lesson/package/add_subject.modal.html','md',{})" @click="lbShowdialog($event,'lb-addsubjectmodal')">
                                                    <i class="fa fa-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'" v-if="this.lb_localdata.form.lesson_type=='0'">
                                    <label class="control-label col-md-3 col-xs-12">课程时间跨度:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="input-group">
                                            <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=30">1个月</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=90">1个季度</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=180">半年</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.lesson_days=365">1年</a>
                                                    </li>
                                                </ul>
                                            </lb-dropdown>
                                            <input type="text" name="lesson_days" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.lesson_days">
                                            <span class="input-group-addon">天</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">定价</div>
                            <div class="panel-body">
                                <div class="form-group ng-scope" ng-if="lesson.lesson_type == '0'" v-if="this.lb_localdata.form.lesson_type=='0'">
                                    <label class="control-label col-md-3 col-xs-12">收费模式:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-buttongroup :group-data="lb_localdata.price_model" v-model="lb_localdata.form.price_model"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <span class="input-group-addon">￥</span>
                                            <input type="text" name="unit_price" class="form-control ng-pristine ng-untouched ng-valid" ng-change="cacu_price()" v-model="lb_localdata.form.unit_price">
                                            <span ng-if="lesson.price_model=='1'" class="input-group-addon ng-scope">元/次</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">总共:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group ng-scope" ng-if="lesson.price_model=='1'">
                                            <input type="text" name="inc_times" ng-pattern="/^[0-9]+$/" ng-change="cacu_price()" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="lb_localdata.form.inc_times">
                                            <span class="input-group-addon">次</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">售价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="price" class="form-control ng-pristine ng-untouched ng-valid" v-model="lb_localdata.form.price">
                                            <span class="input-group-addon">元</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">内容</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单次课时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group m-b">
                                            <lb-dropdown :drop-menu-data="lb_localdata.dropDownMenu">
                                                <lb-dropdown-button slot="buttonslot" button-class="btn btn-default">
                                                    选择
                                                    <span class="caret"></span>
                                                </lb-dropdown-button>
                                                <ul class="dropdown-menu pull-right">
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=0.75;cacu_hours()">45分钟</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=1.00;cacu_hours()">1个小时</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=1.50;cacu_hours()">1个半小时</a>
                                                    </li>
                                                    <li class="text-right">
                                                        <a href="javascript:;" ng-click="lesson.unit_hours=2.00;cacu_hours()">2小时</a>
                                                    </li>
                                                </ul>
                                            </lb-dropdown>
                                            <input type="text" name="unit_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" ng-change="cacu_hours()" v-model="lb_localdata.form.unit_hours">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程总时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="text" name="inc_hours" ng-pattern="/^[0-9]+(\.[0-9]+)?$/" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="lb_localdata.form.inc_hours">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newLesson',
    data() {
        let lb_localdata = {
            'lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
            'form': {
                'lesson_type': '0',
                'lb_filterkeyword': '',
                'lb_$select_search': '',
                'lesson_name': '',
                'lesson_no': '',
                'lesson_days': '',
                'price_model': '',
                'unit_price': '',
                'inc_times': '',
                'price': '',
                'unit_hours': '',
                'inc_hours': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'lesson_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                  
                    'birth': {
                        'type': 'date',
                    }
                }
            },
            'price_model': [{
                'value': '0',
                'text': '按期收费'
            }, {
                'value': '1',
                'text': '按次收费'
            }]
        }
        return {
            lb_localdata,
            model: 'course',
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
