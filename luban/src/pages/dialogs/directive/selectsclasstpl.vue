<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="modal-header">
                <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag"></i>请选择科目班级登记考勤
                </h3>
            </div>
            <div class="modal-body">
    
                <div class="row">
                    <div class="col-xs-12 col-md-7">
                        <div class="input-group w-full">
                            <div class="input-group">
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-sm ng-pristine ng-valid ng-touched" ng-model="grid.search_key" data-html="1" bs-options="item.name as item.value for item in filter.fields" bs-select>
                                        班级名称
                                        <span class="caret"></span>
                                    </button>
                                </div>
                                <input type="text" class="input-sm form-control ng-pristine ng-valid ng-touched" placeholder="关键字" v-model="localdata.form.grid_search_value">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm btn-default" type="button" ng-click="grid.params._field=grid.search_key;grid.params.__field=grid.search_value">搜索</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button class="btn btn-primary"  disabled="disabled">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectSClassTpl',
    data() {
        let localdata = {
            'form': {
                'grid_search_value': ''
            },
            'search': {
                'fields': [{
                    'name': 'class_name',
                    'value': '班级名称'
                }],
                'search_key': 'class_name',
                'search_value': ''
            }
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