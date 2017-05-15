<template>
    <div class="wrapper bg-white ng-scope" ui-view="">
        <div class="wrapper-xs ng-scope" ng-controller="SystemConfigParamsCtrl">
            <form name="form1" class="form-horizontal form-validation ng-pristine ng-valid">
                <div class="b-b">
                    <p>
                        <strong>自动流失名单定义</strong>
                    </p>
                    <p>
  报过名的学员，在课程结束后 
                        <input type="number" name="lost_days" class="form-control text-center input-xs no-padder inline w-xxs ng-pristine ng-untouched ng-valid" ng-model="params.lost_days">
  天没有继续报名，自动进入流失名单 
                    </p>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>课时预警</strong>
                    </p>
                    <p>
  当剩余课次少于等于 
                        <input type="number" name="lost_days" class="form-control text-center input-xs no-padder inline w-xxs ng-pristine ng-untouched ng-valid" ng-model="params.lesson_warning_times">
  次，进入课时预警名单 
                    </p>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>请假次数限制</strong>
                    </p>
                    <label class="i-switch m-t-xs m-r">
                        <input name="leave_times_limit" type="checkbox" ng-true-value="1" ng-model="params.leave_times_limit" class="ng-pristine ng-untouched ng-valid">
                        <i></i>
                    </label>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>考勤登记限制</strong>
                    </p>
                    <div class="m-b">
  同一学员同一上课时间段登记考勤限制: 
                        <div class="btn-group">
                            <label btn-radio="1" ng-model="params.same_time_att_limit" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid active">无论如何只允许一次考勤记录</label>
                            <label btn-radio="2" ng-model="params.same_time_att_limit" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid">不同班级相同时间段允许考勤</label>
                        </div>
                    </div>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>缺课记录设置</strong>
                    </p>
                    <div class="m-b">
  登记考勤时未勾选也未填写缺课原因: 
                        <div class="btn-group">
                            <label btn-radio="1" ng-model="params.no_reason_record_absence" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid active">记录缺课</label>
                            <label btn-radio="2" ng-model="params.no_reason_record_absence" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid">忽略,不记录缺课</label>
                        </div>
                    </div>
                </div>
                <div class="m-t b-b">
                    <p>
                        <strong>学习管家设置</strong>
                    </p>
                    <div class="m-b">
  是否显示剩余课次: 
                        <div class="btn-group">
                            <label btn-radio="0" ng-model="params.has_hide_lesson_times" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid active">显示</label>
                            <label btn-radio="1" ng-model="params.has_hide_lesson_times" class="btn btn-default btn-radius ng-pristine ng-untouched ng-valid">不显示</label>
                        </div>
                        <p class="alert alert-info m-t-xs">此设置仅对课时包并且有时间限制的课时包课程有效</p>
                    </div>
                </div>
            </form>
            <div class="b-t padder-v">
                <button type="submit" ng-disabled="form1.$invalid || saving" class="btn btn-primary" ng-click="save_config()">
                    <i class="fa fa-spinner fa-spin ng-hide" ng-show="saving"></i>  保存配置 
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'config',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>