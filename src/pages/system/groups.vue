<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div class="hbox hbox-auto-xs hbox-auto-sm ng-scope" xo-rest="groups" xo-rest-root="">
                <div class="col">
                    <div class="wrapper-xs ng-scope" ng-controller="SystemGroupsCtrl">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span ng-bind="res.groups.data[0].group_name" class="ng-binding">福州布尔培训</span>
                                <a class="pull-right btn btn-danger btn-xs m-r-xs" ng-click="vm.dismiss()" @click="lbClosedialog($event)">关闭</a>
                                <a class="pull-right btn btn-info btn-xs m-r-xs" ng-click="new_root()">新增分组</a>
                            </div>
                            <div class="panel-body wrapper-xs">
                                <div ui-tree="{dropped:onDrop}" id="group-root" data-clone-enabled="true" class="ng-scope angular-ui-tree">
                                    <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes="" ng-model="res.groups.data[0].nodes">
                                        <li ng-repeat="node in res.groups.data[0].nodes" ui-tree-node="" ng-include="'group_tree.html'" class="ng-scope angular-ui-tree-node" collapsed="false">
                                            <div ui-tree-handle="" class="tree-node tree-node-content ng-scope angular-ui-tree-handle">
                                                <div class="tree-node-content">
                                                    <a class="btn btn-default btn-xs" data-nodrag="" ng-click="toggle(this)">
                                                        <i class="fa fa-minus-square-o" ng-class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                                                    </a>
                                                    <input type="text" ng-model="node.group_name" ng-if="!node.root" ng-change="node._editing=1" class="ng-pristine ng-untouched ng-valid ng-scope">
                                                    <a class="pull-right btn btn-danger btn-xs" ng-click="remove_group(this);" data-nodrag="" tooltip="删除">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                    <a class="pull-right btn btn-info btn-xs m-r-xs" data-nodrag="" ng-click="new_sub(this)">
                                                        <i class="fa fa-plus" tooltip="新增"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}"></ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'groups',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>