<template>
    <div>
        <div class="wrapper-xs ng-scope" xo-rest="packages" xo-rest-ctrl="scas_ss" xo-rest-grid="{maxsize:5,params:{pagesize:20,page:1,is_expired:0,assign_class:'0',ob_id:user.gv.ob_id,sj_id:vm.input.sj_id}}" loading-text="正在加载课时包..." empty-text="没有符合条件的课时包!">
            <ul class="breadcrumb bg-white b-a">
                <li><a ng-click="back_sclass_students()" class="ng-binding"><i class="fa fa-users"></i> 高中五班 学员管理</a></li>
                <li class="active">分配学员</li>
            </ul>
            <div class="bg-light lter">
                <p class="wrapper text-center text-muted ng-scope" ng-if="assign.students.length == 0">请在下面筛选并选择学员,点击选择</p>
            </div>
            <div class="row wrapper no-gutter bg-light">
                <div class="col-xs-2">
                    <p>筛选</p>
                    <button class="btn btn-default btn-xs btn-info active" ng-class="{'btn-info':show_en_name,'active':show_en_name}" ng-click="toggle_en_name()" ui-toggle-class="btn-info">英文名</button>
                </div>
                <div class="col-xs-10">
                    <div class="m-b-xs">
                        <select class="form-control ng-pristine ng-untouched ng-valid" name="ol_id" ui-jq="chosen" ng-model="params.ol_id" ng-options="lesson.ol_id as lesson.lesson_name for lesson in $gv.lessons|filter:{'lesson_type':'10'}" style="display: none;">
                            <option value="" class="">选择课程</option>
                            <option value="0">基础民族舞蹈</option>
                        </select>
                        <div class="chosen-container chosen-container-single" style="width: 457px;" title=""><a class="chosen-single" tabindex="-1"><span>选择课程</span><div><b></b></div></a>
                            <div class="chosen-drop">
                                <div class="chosen-search">
                                    <input type="text" autocomplete="off">
                                </div>
                                <ul class="chosen-results"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="m-b">
                        <div class="input-group  ng-valid" select-title="请选择学员" ng-model="params.os_id" select-params="{ob_id:user.gv.ob_id}">
                            <input type="text" placeholder="学员" ng-model="name" class="form-control ng-pristine ng-untouched ng-valid" ng-readonly="true" readonly="readonly"> <span class="input-group-btn"><button class="btn btn-default " select-tpl="tpl/directive/selectStudentTpl.html" select-id-field="os_id" max-num="1" on-selected="select_student" select-params="selectParams" select-title="请选择学员"><i class="icon-user"></i></button></span></div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover b-t b-light">
                    <thead>
                        <tr>
                            <th>学员</th>
                            <th>课程</th>
                            <th>课次</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div class="grid-data-result">
                    <p class="text-center ng-binding ng-scope" ng-if="!loading &amp;&amp; grid.data.length==0"><i class="fa fa-frown-o"></i>没有符合条件的课时包!</p>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-primary" ng-click="do_ok()" ng-disabled="assign.students.length == 0" disabled="disabled">
                    确定</button>
                <button class="btn btn-warning ng-click-active" @click="switchPage('lb-main')">返回</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'management',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {
        switchPage(page) {
            if (this.$parent && this.$parent.switchPage) {
                this.$parent.switchPage(page)
            }
        },
    }
}
</script>
