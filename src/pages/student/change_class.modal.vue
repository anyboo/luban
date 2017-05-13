<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="change_class" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="fa fa-exchange">办理转班</i><span class="label bg-info ng-binding">(李哥)</span></h3></div>
                <div class="modal-body">
                    <div class="panel panel-default">
                        <div class="panel-heading">转出班级</div>
                        <!-- ngIf: class_rest.$loaded && class_rest.$list.length > 0 -->
                        <ul class="list-group ng-scope" ng-if="class_rest.$loaded &amp;&amp; class_rest.$list.length > 0">
                            <!-- ngRepeat: item in class_rest.$list -->
                            <li class="list-group-item ng-binding ng-scope active" ng-class="{'active':item.lesson_type == occ.lesson_type &amp;&amp; item.oc_id == occ.from_oc_id}" ng-click="select_from_class(item)" ng-repeat="item in class_rest.$list"><i class="fa fa-angle-right"></i> 3期班<span class="badge bg-info ng-binding" tooltip="剩余课次">62</span></li>
                            <!-- end ngRepeat: item in class_rest.$list -->
                        </ul>
                        <!-- end ngIf: class_rest.$loaded && class_rest.$list.length > 0 -->
                        <!-- ngIf: class_rest.$loaded && class_rest.$list.length == 0 -->
                        <!-- ngIf: class_rest.$loading -->
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">转入班级</div>
                        <div class="panel-body">
                            <!-- ngIf: occ.from_oc_id == 0 -->
                            <!-- ngIf: occ.from_oc_id != 0 && occ.lesson_type == 0 -->
                            <div class="form-group ng-scope" ng-if="occ.from_oc_id != 0 &amp;&amp; occ.lesson_type == 0">
                                <div class="input-group">
                                    <input type="text" placeholder="班级" ng-model="occ.selected_class_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-parse" ng-readonly="true" required="" readonly="readonly"> <span class="input-group-btn"><button ng-disabled="occ.from_oc_id == 0" class="btn btn-default" select-tpl="tpl/directive/selectClassTpl.html" select-id-field="oc_id" max-num="1" on-selected="select_to_class" select-params="{ob_id:user.gv.ob_id,t:'order'}" select-title="请选择班级"><i class="fa fa-flag"></i>选择班级</button></span></div>
                            </div>
                            <!-- end ngIf: occ.from_oc_id != 0 && occ.lesson_type == 0 -->
                            <!-- ngIf: occ.from_oc_id != 0 && occ.lesson_type == 10 -->
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" ng-disabled="form_invalid() || saving" ng-click="do_ok()" disabled="disabled">
                        <!-- ngIf: saving -->确认转班</button>
                    <button class="btn btn-warning" ng-click="$dismiss()">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'change_class.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
