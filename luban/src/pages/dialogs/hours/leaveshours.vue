<template>
    <div class="modal-dialog">
        <div class="modal-content" modal-transclude="">
            <div page-controller="add_leave" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar">登记学员请假</i>
                        <span class="label bg-info ng-binding">{{getStudentName()}}</span>
                    </h3>
                </div>
                <div class="modal-body">
                    <div class="row no-gutter step1" ng-class="{'step1':step==1,'step2':step==2}">
                        <div class="col-xs-6 bg-light lter bg-success" ng-class="{'bg-success':step==1}">
                            <h4 class="padder">1.选择已报课程</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter" ng-class="{'bg-success':step==2}">
                            <h4 class="padder">2.登记请假 </h4>
                        </div>
                    </div>
                    <div class="m-t ng-scope" @click="status=3" v-if="status==0">
                        <ul class="list-group">
                            <li class="list-group-item ng-binding ng-scope">【课时包】哈哈
                                <span class="badge bg-info ng-binding" tooltip="剩余课次">20</span>
                                <span class="pull-right text-muted">
                                    <i class="fa fa-chevron-right"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <form name="form1" class="form-horizontal ng-pristine ng-valid" v-if="status==3">
                    <div class="form-group">
                        <label class="control-label col-md-2 col-xs-12">课程:</label>
                        <div class="col-md-10 col-xs-12">
                            <p class="form-control-static ng-binding">【课时包】你是觉得好贵</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2 col-xs-12">剩余课次:</label>
                        <div class="col-md-10 col-xs-12">
                            <p class="form-control-static ng-binding">11次</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2 col-xs-12">请假日期:</label>
                        <div class="col-md-5 col-xs-12">
                            <div class="inline w-sm">
                                <el-date-picker v-model="localdata.form.value1" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2 col-xs-12">上课时间:</label>
                        <div class="col-md-5 col-xs-12">
                            <div class="inline">
                                <el-date-picker
      
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2 col-xs-12">请假原因:</label>
                        <div class="col-md-7 col-xs-12">
                            <div class="input-group">
                                <input type="text" name="reason" ng-model="leave.reason" class="form-control ng-pristine ng-untouched ng-valid">
                                <div class="input-group-btn dropdown" dropdown="">
                                    <button type="button" class="btn btn-default" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right">
                                        <li>
                                            <a ng-click="leave.reason='病假'">病假</a>
                                        </li>
                                        <li>
                                            <a ng-click="leave.reason='事假'">事假</a>
                                        </li>
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </form>
                <div class="modal-footer">
                    <div class="modal-footer">
                        <a ng-show="step > 1" class="btn btn-link" @click="status=0" v-if="status==3">返回</a>
                        <button ng-show="step == 2" class="btn btn-primary" v-if="status==3">
                            登记请假</button>
                        <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'suspendshours',
    data() {
        let localdata = {
            'form': {
               value6

            },
        }
        return {
            status: 0,
            model: 'leaves',
            localdata
        }
    },
    computed: {},
    watch: {

    },
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-leaveshours'
            })
        }
    }
}
</script>
