<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="add_suspend" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-calendar">登记学员停课</i>
                        <span class="label bg-info ng-binding">{{getStudentName()}}</span>
                    </h3>
                </div>
    
                <div class="modal-body">
                    <div class="row no-gutter step1">
                        <div class="col-xs-6 bg-light lter bg-success">
                            <h4 class="padder">1.选择已报课程</h4>
                        </div>
                        <div class="col-xs-6 bg-light lter">
                            <h4 class="padder">2.登记停课</h4>
                        </div </div>
                        <div class="m-t ng-scope" style="margin-top:40px" @click="status=3" v-if="status==0">
                            <ul class="list-group">
                                <li class="list-group-item ng-binding ng-scope">【课时包】你是觉得好贵
                                    <span class="badge bg-info ng-binding" tooltip="剩余课次">11</span>
                                    <span class="pull-right text-muted">
                                        <i class="fa fa-chevron-right"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <form name="form1" class="form-horizontal ng-pristine ng-valid" v-if="status==3">
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">课程:</label>
                                <div class="col-md-10 col-xs-12">
                                    <p class="form-control-static ng-binding">【课时包】ni'hsi'j'd'h'g你是觉得好贵</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">剩余课次:</label>
                                <div class="col-md-10 col-xs-12">
                                    <p class="form-control-static ng-binding">11次</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">停课开始:</label>
                                <div class="col-md-5 col-xs-12">
                                    <div class="inline w-sm">
                                        <el-date-picker v-model="localdata.form.value1" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">停课结束:</label>
                                <div class="col-md-5 col-xs-12">
                                    <div class="inline w-sm">
                                        <el-date-picker v-model="localdata.form.value2" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-2 col-xs-12">停课原因:</label>
                                <div class="col-md-7 col-xs-12">
                                    <input type="text" name="reason" v-model="localdata.form.suspend_reason" class="form-control ng-pristine ng-untouched ng-vahlid">
                                </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <a class="btn btn-link ng-hide" @click="status=0" v-if="status==3">返回</a>
                            <button class="btn btn-primary ng-hide" v-if="status==3" @click="handleClick">
                                登记停课</button>
                            <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                        </div>
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
                suspend_reason: '',
                value1: '',
                value2: '',

            },
        }
        return {
            status: 0,
            model: 'suspend',
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
                this.$store.state.envs.currDialog = 'lb-suspendshours'
            })
        }
    }
}
</script>
