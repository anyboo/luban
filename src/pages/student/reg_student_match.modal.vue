<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="reg_student_match" class="ng-scope">
                <div class="modal-header">
                    <button type="button" ng-click="$dismiss()" class="close" @click="lbCloseDailog()">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        登记
                        <span class="label bg-info ng-binding">小兵</span>的赛事记录
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赛事名称:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w-md">
                                    <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="match_name" ng-model="match.match_name" required="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">参赛日期:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="w-sm">
                                    <input type="text" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="match.join_date" name="join_date" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赛事成绩:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" name="result" ng-model="match.result" required="">
                            </div>
                        </div>
                        <div class="panel panel-default no-border">
                            <div class="panel-heading">赛事详情记录</div>
                            <div class="panel-body no-padder">
                                <div class="edui-container" style="width: 100%; z-index: 999;">
                                    <div class="edui-toolbar">
                                        <div class="edui-btn-toolbar" unselectable="on" onmousedown="return false">
                                            <div class="edui-btn edui-btn-undo edui-disabled" unselectable="on" onmousedown="return false" data-original-title="撤销">
                                                <div unselectable="on" class="edui-icon-undo edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-redo edui-disabled" unselectable="on" onmousedown="return false" data-original-title="重做">
                                                <div unselectable="on" class="edui-icon-redo edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-separator" unselectable="on" onmousedown="return false"></div>
                                            <div class="edui-btn edui-btn-bold" unselectable="on" onmousedown="return false" data-original-title="加粗">
                                                <div unselectable="on" class="edui-icon-bold edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-italic" unselectable="on" onmousedown="return false" data-original-title="斜体">
                                                <div unselectable="on" class="edui-icon-italic edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-underline" unselectable="on" onmousedown="return false" data-original-title="下划线">
                                                <div unselectable="on" class="edui-icon-underline edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-separator" unselectable="on" onmousedown="return false"></div>
                                            <div class="edui-splitbutton edui-splitbutton-forecolor" unselectable="on" data-original-title="字体颜色">
                                                <div class="edui-btn" unselectable="on">
                                                    <div unselectable="on" class="edui-icon-forecolor edui-icon"></div>
                                                    <div class="edui-splitbutton-color-label"></div>
                                                </div>
                                                <div unselectable="on" class="edui-btn edui-dropdown-toggle">
                                                    <div unselectable="on" class="edui-caret"></div>
                                                </div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-splitbutton edui-splitbutton-backcolor" unselectable="on" data-original-title="背景色">
                                                <div class="edui-btn" unselectable="on">
                                                    <div unselectable="on" class="edui-icon-backcolor edui-icon"></div>
                                                    <div class="edui-splitbutton-color-label"></div>
                                                </div>
                                                <div unselectable="on" class="edui-btn edui-dropdown-toggle">
                                                    <div unselectable="on" class="edui-caret"></div>
                                                </div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-separator" unselectable="on" onmousedown="return false"></div>
                                            <div class="edui-btn edui-btn-link" unselectable="on" onmousedown="return false" data-original-title="超链接">
                                                <div unselectable="on" class="edui-icon-link edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-unlink" unselectable="on" onmousedown="return false" data-original-title="取消链接">
                                                <div unselectable="on" class="edui-icon-unlink edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-separator" unselectable="on" onmousedown="return false"></div>
                                            <div class="edui-btn edui-btn-emotion" unselectable="on" onmousedown="return false" data-original-title="表情">
                                                <div unselectable="on" class="edui-icon-emotion edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-image" unselectable="on" onmousedown="return false" data-original-title="图片">
                                                <div unselectable="on" class="edui-icon-image edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-video" unselectable="on" onmousedown="return false" data-original-title="视频">
                                                <div unselectable="on" class="edui-icon-video edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-separator" unselectable="on" onmousedown="return false"></div>
                                            <div class="edui-btn edui-btn-removeformat" unselectable="on" onmousedown="return false" data-original-title="清除格式">
                                                <div unselectable="on" class="edui-icon-removeformat edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false"></div>
                                                </div>
                                            </div>
                                            <div class="edui-btn edui-btn-source" unselectable="on" onmousedown="return false" data-original-title="源代码">
                                                <div unselectable="on" class="edui-icon-source edui-icon"></div>
                                                <div class="edui-tooltip" unselectable="on" onmousedown="return false" style="z-index: 1000; display: none; top: 22px; left: -10px;">
                                                    <div class="edui-tooltip-arrow" unselectable="on" onmousedown="return false"></div>
                                                    <div class="edui-tooltip-inner" unselectable="on" onmousedown="return false">源代码</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="edui-dialog-container"></div>
                                    </div>
                                    <div class="edui-editor-body">
                                        <div class="form-control ng-pristine ng-untouched ng-valid ng-isolate-scope edui-body-container" style="width: 100%; min-height: 200px; z-index: 999;" contenteditable="true">
                                            <p>
                                                <br>
                                            </p>
                                        </div>
                                        <textarea class="form-control ng-untouched ng-valid ng-isolate-scope ng-dirty ng-valid-parse" id="match-detail" editor="" editor-toolbar="['undo redo | bold italic underline | forecolor backcolor | link unlink | emotion image video | removeformat source']" ng-model="match.detail" style="display: none;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button ng-disabled="form1.$invalid || saving" ng-click="do_ok()" class="btn btn-primary" disabled="disabled">登记</button>
                    <button ng-click="$dismiss()" class="btn btn-warning">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg_student_match.modal',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>