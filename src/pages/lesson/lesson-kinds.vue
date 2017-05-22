<template>
    <div tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in" ng-class="{in: animate}" ng-style="{'z-index': 1050 + index*10, display: 'block'}" ng-click="close($event)" modal-window size="lg" index="0" animate="animate" style="z-index: 1050; display: block;">
        <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude>
                <div page-controller="lesson_cate" class="ng-scope">
                    <div class="modal-header">
                        <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">关闭</span>
                        </button>
                        <h3 class="modal-title">
                            <i class="fa fa-book"></i>课程分类设置
                        </h3>
                    </div>
                    <div class="modal-body">
                        <p>
                            <a class="btn btn-default" ng-click="new_root()">
                                <i class="fa fa-plus"></i>新增大类
                            </a>
                        </p>
                        <div ui-tree="{dropped:onDrop}" id="cate-root" data-clone-enabled="true" class="ng-scope angular-ui-tree">
                            <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes ng-model="lesson_cates">
                                <li ng-repeat="node in lesson_cates" ui-tree-node ng-include="'cate_tree.html'" class="ng-scope angular-ui-tree-node" collapsed="false">
                                    <div ui-tree-handle class="tree-node tree-node-content ng-scope angular-ui-tree-handle">
                                        <div class="tree-node-content">
                                            <a class="btn btn-default btn-xs" data-nodrag ng-click="toggle(this)">
                                                <i class="fa fa-minus-square-o" ng-class="{'fa-plus-square-o':collapsed,'fa-minus-square-o':!collapsed}"></i>
                                            </a>
                                            <input class="va-m ng-pristine ng-untouched ng-valid ng-scope" type="text" ng-if="!node.root" ng-change="node._editing=1" v-model="lb_localdata.form.lb_node_cate_name">
                                            <a class="pull-right btn btn-danger btn-xs" tooltip="删除" data-nodrag ng-click="remove_cate(this);">
                                                <i class="fa fa-times"></i>
                                            </a>
                                            <a class="pull-right btn btn-info btn-xs m-r-xs" tooltip="新增" data-nodrag ng-click="new_sub(node)">
                                                <i class="fa fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes" ui-tree-nodes ng-model="node.nodes" ng-class="{hidden: collapsed}"></ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer text-center">
                        <button class="btn btn-warning" ng-click="$dismiss()" @click="lbClosedialog($event)">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lesson-kinds',
    data() {
        let lb_localdata = {
            'form': {
                'lb_node_cate_name': ''
            }
        }
        return {
            lb_localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>