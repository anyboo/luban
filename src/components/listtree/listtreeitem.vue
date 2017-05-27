<template>
    <li ng-repeat="node in lesson_cates" ui-tree-node="" ng-include="'cate_tree.html'" class="ng-scope angular-ui-tree-node" collapsed="false">
        <div ui-tree-handle="" class="tree-node tree-node-content ng-scope angular-ui-tree-handle">
            <div class="tree-node-content">
                <a class="btn btn-default btn-xs" data-nodrag="" ng-click="toggle(this)">
                    <i class="fa fa-minus-square-o" ng-class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                </a>
                <input class="va-m ng-pristine ng-valid ng-scope ng-touched" type="text" ng-model="node.cate_name" ng-if="!node.root" ng-change="node._editing=1">
                <a class="btn btn-primary btn-xs m-l-xs ng-scope" data-nodrag="" ng-disabled="node._saving" ng-click="save_cate(this)" ng-if="node._editing || node._new" tooltip="保存"><i class="fa fa-spinner fa-spin ng-hide" ng-show="node._saving"></i><i class="fa fa-check" ng-show="!node._saving"></i></a>
                <a class="pull-right btn btn-danger btn-xs" tooltip="删除" data-nodrag="" ng-click="remove_cate(this);"><i class="fa fa-times"></i></a>
                <a class="pull-right btn btn-info btn-xs m-r-xs" tooltip="新增" data-nodrag="" ng-click="new_sub(node)"><i class="fa fa-plus"></i></a>
            </div>
        </div>
        <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}">
        
        </ul>
    </li>
</template>
