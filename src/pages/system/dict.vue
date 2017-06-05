<template>
    <div class="wrapper bg-white ng-scope" ui-view>
        <div class="panel panel-default ng-scope" xo-rest="dicts" xo-rest-grid="{params:{pagesize:100,page:1}}" loading-container=".list-group" loading-text="正在加载字典..." empty-text="没有符合条件的字典!">
            <div class="panel-heading">字典列表</div>
            <ul class="list-group">
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">联系人关系</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">收款方式</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">学员来源</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">沟通方式</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">杂费项目</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">意向程度</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">收入类别</h4>
                </li>
                <li class="list-group-item clear ng-scope" ng-repeat="item in grid.data" ng-if="!loading">
                    <span class="pull-right">
                        <a class="btn btn-xs btn-danger ng-isolate-scope" confirm-text="确定要删除该字典项目吗?" confirm-action="rest_remove(item,'od_id','dicts',remove_callback);" ng-disabled="item.og_id==0" disabled="disabled">删除</a>
                        <a ng-click="$util.open('tpl/system/dict/dict_items.html','md',item)" @click="lbShowdialog($event,'lb-dictitems')">编辑</a>
                    </span>
                    <h4 class="list-group-item-head ng-binding text-danger" ng-bind="item.name" ng-class="{'text-danger':item.og_id==0}">支出类别</h4>
                </li>
                <div class="grid-data-result"></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dict',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>