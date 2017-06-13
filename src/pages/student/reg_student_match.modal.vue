<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button type="button" ng-click="$dismiss()" class="close" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        登记
                        <span class="label bg-info ng-binding">{{getStudentName()}}</span>的赛事记录
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赛事名称:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="inline w-md">
                                    <input type="text" name="match_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.match_name.errorStatus}" v-model="localdata.form.match_name" @change="validate('match_name')">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">参赛日期:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="w-sm">
                                    <lb-date-picker type="date" name="join_date" v-model="localdata.form.join_date"></lb-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">赛事成绩:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <input type="text" name="result" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength" :class="{'ng-dirty':localdata.validator.fields.result.errorStatus}" v-model="localdata.form.result" @change="validate('result')">
                            </div>
                        </div>
                        <div class="panel panel-default no-border">
                            <div class="panel-heading">赛事详情记录</div>
                            <div class="panel-body no-padder">
                                <textarea class="form-control ng-untouched ng-valid ng-isolate-scope ng-dirty ng-valid-parse" v-model="localdata.form.info"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button ng-disabled="form1.$invalid || saving" ng-click="do_ok()" class="btn btn-primary" @click="handleClick">登记</button>
                    <button ng-click="$dismiss()" class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg_student_match',
    data() {
        let localdata = {
            'form': {
                'match_name': '',
                'join_date': '',
                'result': '',
                'info': '',
                'student_id': this.getStudentId()
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'match_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'result': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },
                    'join_date': {
                        'type': 'date',
                    }

                }
            },
        }
        return {
            localdata,
            model: 'recording',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.$store.state.envs.currStudent = this.$store.state.dialogs.dailogdata
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
                this.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-recording'
            })
        }
    }
}
</script>
