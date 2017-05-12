<template>
    <li @click="handerClick" class="ng-scope" :class="{'active':active}">
        <!-- ngIf: !item.sub -->
        <!-- ngIf: item.sub --><a ng-if="item.sub" class="auto ng-scope"><span class="pull-right text-muted"><i class="fa fa-fw fa-angle-right text"></i> <i class="fa fa-fw fa-angle-down text-active"></i></span> <!-- ngIf: item.class --><i ng-if="item.class" class="fa fa-users"></i><!-- end ngIf: item.class --> <span class="font-normal ng-binding">学员</span></a>
        <!-- end ngIf: item.sub -->
        <!-- ngIf: item.sub -->
        <ul ng-if="item.sub" class="nav nav-sub dk ng-scope">
            <li class="nav-sub-header"><a href=""><span class="ng-binding">学员</span></a></li>
            <!-- ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.add" href="#/student/add"><span class="ng-binding">档案录入</span> <!-- ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.list" href="#/student/list"><span class="ng-binding">学员管理</span> <!-- ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.list1" href="#/student/list1"><span class="ng-binding">在读学员</span> <!-- ngIf: subitem.class --><span ng-if="subitem.class" class="pull-right text-muted ng-scope"><i class="fa fa-users text-success"></i></span><!-- end ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.list2" href="#/student/list2"><span class="ng-binding">已结课学员</span> <!-- ngIf: subitem.class --><span ng-if="subitem.class" class="pull-right text-muted ng-scope"><i class="fa fa-users text-warning"></i></span><!-- end ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.list0" href="#/student/list0"><span class="ng-binding">咨询管理</span> <!-- ngIf: subitem.class --><span ng-if="subitem.class" class="pull-right text-muted ng-scope"><i class="fa fa-users text-info"></i></span><!-- end ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.lost" href="#/student/lost"><span class="ng-binding">流失名单</span> <!-- ngIf: subitem.class --><span ng-if="subitem.class" class="pull-right text-muted ng-scope"><i class="fa fa-users text-danger"></i></span><!-- end ngIf: subitem.class --></a></li>
            <!-- end ngIf: !subitem.sub -->
            <!-- end ngRepeat: subitem in item.sub -->
            <!-- ngIf: !subitem.sub -->
            <li ui-sref-active="active" ng-if="!subitem.sub" ng-repeat="subitem in item.sub" class="ng-scope"><a ui-sref="student.birthdays" href="#/student/birthdays"><span class="ng-binding">生日学员</span> <!-- ngIf: subitem.class --></a></li>
        </ul>
        <!-- end ngIf: item.sub -->
    </li>
</template>
<script>
export default {
    name: 'sidebarmenuitem',
    data() {
        return {
            active: false
        }
    },
    computed: {
        getMenuFlag() {

        }
    },
    watch: {},
    methods: {
        handerClick() {
            this.active = !this.active
        }
    }
}
</script>
