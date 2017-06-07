<template>
    <div class="wrapper bg-white ng-scope" ui-view>
        <div class="wrapper-xs ng-scope" ng-controller="SystemConfigParamsCtrl">
            <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid">
                <div class="b-b">
                    <p>
                        <strong>自动流失名单定义</strong>
                    </p>
                    <p>
                        报过名的学员，在课程结束后
                        <input type="number" name="lost_days" class="form-control text-center input-xs no-padder inline w-xxs ng-pristine ng-untouched ng-valid" v-model="localdata.form.lost_days"> 天没有继续报名，自动进入流失名单
                    </p>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>课时预警</strong>
                    </p>
                    <p>
                        当剩余课次少于等于
                        <input type="number" name="lost_days" class="form-control text-center input-xs no-padder inline w-xxs ng-pristine ng-untouched ng-valid" v-model="localdata.form.lesson_warning_times"> 次，进入课时预警名单
                    </p>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>请假次数限制</strong>
                    </p>
                    <label class="i-switch m-t-xs m-r">
                        <input name="leave_times_limit" type="checkbox" ng-true-value="1" class="ng-pristine ng-untouched ng-valid" v-model="localdata.form.leave_times_limit">
                        <i></i>
                    </label>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>考勤登记限制</strong>
                    </p>
                    <div class="m-b">
                        同一学员同一上课时间段登记考勤限制:
                        <lb-buttongroup :group-data="localdata.same_time_att_limit" v-model="localdata.form.same_time_att_limit"></lb-buttongroup>
                    </div>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>缺课记录设置</strong>
                    </p>
                    <div class="m-b">
                        登记考勤时未勾选也未填写缺课原因:
                        <lb-buttongroup :group-data="localdata.no_reason_record_absence" v-model="localdata.form.no_reason_record_absence"></lb-buttongroup>
                    </div>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>学习管家设置</strong>
                    </p>
                    <div class="m-b">
                        是否显示剩余课次:
                        <lb-buttongroup :group-data="localdata.has_hide_lesson_times" v-model="localdata.form.has_hide_lesson_times"></lb-buttongroup>
                        <p class="alert alert-info m-t-xs">此设置仅对课时包并且有时间限制的课时包课程有效</p>
                    </div>
                </div>
            </form>
            <div class="b-t padder-v">
                <button type="submit" ng-disabled="form1.$invalid || saving" class="btn btn-primary" ng-click="save_config()">
                    <i class="fa fa-spinner fa-spin ng-hide" ng-show="saving"></i>保存配置
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'config',
    data() {
        let localdata = {
            'form': {
                'lost_days': '',
                'lesson_warning_times': '',
                'leave_times_limit': '',
                'same_time_att_limit': '',
                'no_reason_record_absence': '',
                'has_hide_lesson_times': ''
            },
            'same_time_att_limit': [{
                'value': '1',
                'text': '无论如何只允许一次考勤记录'
            }, {
                'value': '2',
                'text': '不同班级相同时间段允许考勤'
            }],
            'no_reason_record_absence': [{
                'value': '1',
                'text': '记录缺课'
            }, {
                'value': '2',
                'text': '忽略,不记录缺课'
            }],
            'has_hide_lesson_times': [{
                'value': '0',
                'text': '显示'
            }, {
                'value': '1',
                'text': '不显示'
            }]
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>