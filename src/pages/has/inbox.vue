<template>
    <div>
        <!-- demo -->
        <div ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}" class="modal-dialog">
            <div modal-transclude="" class="modal-content">
                <div page-controller="flow_add" class="ng-scope">
                    <div class="modal-header">
                        <button type="button" ng-click="$dismiss()" class="close  "><span  class="text-right" style="float:right">×</span> <span class="sr-only">关闭</span></button>
                        <h3 class="modal-title"><i >编辑</i></h3></div>
                    <div class="modal-body">
                        <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                            <div class="form-group">
                                <span>
                                    <label class="col-xs-12 col-sm-3 col-md-2 control-label">班级:
                                </label>
                                </span>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="btn-group ng-scope">
                                        <span style="position:relative;top:9px;">
                                            <label class="ng-pristine ng-untouched ng-valid ng-binding ng-scope">
                                           123
                                        </label>
                                       </span>
                                    </div> 
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">校区:
                                </label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <div class="input-group w-sm">
                                        <span style="position:relative;top:7px;"><label class="ng-pristine ng-untouched ng-valid ng-binding ng-scope">
                                           总校
                                        </label></span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <span style="position:relative;top:16px;left:23px"> <label class=" ">任课老师：</label></span>
                                <span style="position:relative;top:15px;left:45px">廖小龙<a class="operation-link" style="margin-left: 20px;color: #0073B7;">查看空闲时间</a></span>
                                <span style="float:right;position:relative;left:-53px;top:11px;">
                                           <label>老师类别：</label>
                                       
                            <select style="width:176px;height:30px">
                                <option style="display: none;" value="<无>">&lt;无&gt;</option>
                                   <option style="display: none;" value="<无>">&lt;无&gt;</option>
                            </select>
                               </span>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label" style="position:relative;top:23px;left:-4px">助教:</label>
                                <div class="form-group">
                                    <div class="col-xs-12 col-sm-9 col-md-10">
                                        <div class="input-group" style="float:right;width:462px;position:relative;right:-70px;">
                                            <input type="text" name="note" class="form-control ng-pristine ng-untouched ng-valid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label" style="position:relative;top;-23px;left:4px">上课时间：</label>
                                <div class="col-sm-9" style="width: 463px;border: 1px solid rgba(12,12,12,.12);height:70px;position:relative;left:15px;">
                                    <div class="form-group col-sm-12" style="padding-top: 0;margin-bottom: 0;margin-top:5px;">
                                        <div class="weekWidth" style="float:left">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="1"><span>星期一</span></label>
                                        </div>
                                        <div class=" weekWidth" style="float:left">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="2"><span>星期二</span></label>
                                        </div>
                                        <div class=" weekWidth" style="float:left">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="3"><span>星期三</span></label>
                                        </div>
                                        <div class="weekWidth" style="float:left">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="4"><span>星期四</span></label>
                                        </div>
                                        <div class=" weekWidth">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="5"><span>星期五</span></label>
                                        </div>
                                        <div class=" weekWidth helpchoose" style="float:right;position:relative;top:-28px;display:1px solid #ddd;">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox"><span>工作日</span></label>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-12" style="margin-top: 5px;padding-top: 0;margin-bottom: 0;">
                                        <div class="weekWidth helpchoose" style="float:right;position:relative;top:-32px;left:-13px;">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox"><span>周末</span></label>
                                        </div>
                                        <div class=" weekWidth" style="float:left;position:relative;top:-28px ">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="6"><span>星期六</span></label>
                                        </div>
                                        <div class=" weekWidth" style="float:left;position:relative;top:-28px">
                                            <label class="checkbox-inline checkbox-styled">
                                                <input type="checkbox" value="7"><span>星期日</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style="color: #fa846f;font-weight: 700;">*</span>开始时间:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <select class="timeSelect">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style="color: #fa846f;font-weight: 700;">*</span>上课时间:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <select class="timeSelect">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style="color: #fa846f;font-weight: 700;">*</span>结束时间:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <select class="timeSelect">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style="color: #fa846f;font-weight: 700;">*</span>上课教室:</label>
                                <div class="col-xs-12 col-sm-9 col-md-10">
                                    <select class="timeSelect">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button ng-disabled="saving" ng-click="save_fee()" class="btn btn-primary">确定</button>
                        <button  class="btn btn-warning"  @click="lbClosedialog($event)">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.modal-header {
    cursor: grab;
    cursor: -webkit-grab;
    border-bottom: 1px solid #eee;
    color: #fff;
    position: relative;
    background: #1892d1;
    border-radius: 6px 6px 0 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 40px;
    min-height: 42px;
}

.timeSelect {
    width: 160px;
    height: 30px
}
</style>
<script>
export default {
    name: 'footer',
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
