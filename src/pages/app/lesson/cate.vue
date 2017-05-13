<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="lesson_cate" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-book"></i>课程分类设置</h3></div>
                <div class="modal-body">
                    <p><a class="btn btn-default" ng-click="new_root()"><i class="fa fa-plus"></i> 新增大类</a></p>
                    <div ui-tree="{dropped:onDrop}" id="cate-root" data-clone-enabled="true" class="ng-scope angular-ui-tree">
                        <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes="" ng-model="lesson_cates">
                            <!-- ngRepeat: node in lesson_cates -->
                            <!-- ngInclude: 'cate_tree.html' -->
                            <li ng-repeat="node in lesson_cates" ui-tree-node="" ng-include="'cate_tree.html'" class="ng-scope angular-ui-tree-node" collapsed="false">
                                <div ui-tree-handle="" class="tree-node tree-node-content ng-scope angular-ui-tree-handle">
                                    <div class="tree-node-content">
                                        <a class="btn btn-default btn-xs" data-nodrag="" ng-click="toggle(this)">
                                            <i class="fa fa-minus-square-o" ng-class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                                        </a>
                                        <!-- ngIf: !node.root -->
                                        <input class="va-m ng-pristine ng-untouched ng-valid ng-scope" type="text" ng-model="node.cate_name" ng-if="!node.root" ng-change="node._editing=1">
                                        <!-- end ngIf: !node.root -->
                                        <!-- ngIf: node._editing || node._new -->
                                        <a class="pull-right btn btn-danger btn-xs" tooltip="删除" data-nodrag="" ng-click="remove_cate(this);"><i class="fa fa-times"></i></a>
                                        <a class="pull-right btn btn-info btn-xs m-r-xs" tooltip="新增" data-nodrag="" ng-click="new_sub(node)"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}">
                                    <!-- ngRepeat: node in node.nodes -->
                                </ul>
                            </li>
                            <!-- end ngRepeat: node in lesson_cates -->
                        </ul>
                    </div>
                    <!-- ngIf: lesson_cates_rest.$loading -->
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-warning" ng-click="$dismiss()">关闭</button>
                </div>
            </div>
            <script type="text/ng-template" id="cate_tree.html" class="ng-scope">
                <div ui-tree-handle class="tree-node tree-node-content">
                    <div class="tree-node-content">
                        <a class="btn btn-default btn-xs" data-nodrag ng-click="toggle(this)">
                            <i class="fa" ng-class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                        </a>
                        <input class="va-m" type="text" ng-model="node.cate_name" ng-if="!node.root" ng-change="node._editing=1">
                        <a class="btn btn-primary btn-xs m-l-xs" data-nodrag ng-disabled="node._saving" ng-click="save_cate(this)" ng-if="node._editing || node._new" tooltip="保存"><i class="fa fa-spinner fa-spin" ng-show="node._saving"></i><i class="fa fa-check" ng-show="!node._saving"></i></a>
                        <a class="pull-right btn btn-danger btn-xs" tooltip="删除" data-nodrag ng-click="remove_cate(this);"><i class="fa fa-times"></i></a>
                        <a class="pull-right btn btn-info btn-xs m-r-xs" tooltip="新增" data-nodrag ng-click="new_sub(node)"><i class="fa fa-plus"></i></a>
                    </div>
                </div>
                <ul class="list-unstyled" ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}">
                    <li ng-repeat="node in node.nodes" ui-tree-node ng-include="'cate_tree.html'">
                    </li>
                </ul>
            </script>
            <script type="text/ng-template" id="lesson_cates_remove_confirm.html" class="ng-scope">
                <div class="m-t wrapper">
                    <p class="m-t m-b text-danger text-center">
                        <i class="fa fa-exclamation-triangle"></i>是否确定要删除分类?
                    </p>
                    <p class="text-center">
                        <a class="btn btn-danger" ng-click="do_remove_cate()">确认</a>
                        <a class="btn btn-default m-l" ng-click="$dismiss()">关闭</a>
                    </p>
                </div>
            </script>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cate',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
