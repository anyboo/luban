<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button type="button" @click="lbClosedialog($event)" class="close  ">
                        <span class="text-right" style="float:right">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i>排课</i>
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-horizontal ng-pristine ng-invalid ng-invalid-required">
                        <div class="form-group">
                            <span>
                                <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                     <span style="color: #fa846f;font-weight: 700;">*</span>班级:
                                </label>
                            </span>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <div class="btn-group ng-scope">
<<<<<<< HEAD
                                    <span style="position:relative;top:9px;">
                                            <label class="ng-pristine ng-untouched ng-valid ng-binding ng-scope">
                                           高中一班
                                        </label>
                                       </span>
                                </div> 
=======
                                    <el-select v-model="localdata.form.sclasses_id" filterable placeholder="请选择班级">
                                        <el-option v-for="item in getsClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                                        </el-option>
                                    </el-select>
                                </div>
>>>>>>> 967569acf8046174b1ef94af40056c87c92b333a
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label" style="position:relative;top;-23px;left:4px">上课时间：</label>
                            <div class="col-sm-9" style="width: 463px;border: 1px solid rgba(12,12,12,.12);height:70px;position:relative;left:15px;">
                                <div class="form-group col-sm-12" style="padding-top: 0;margin-bottom: 0;margin-top:5px;">
                                    <div class="weekWidth" style="float:left">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" v-model="localdata.form.day_1" @click="daychange">
                                            <span>星期一</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth" style="float:left">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" v-model="localdata.form.day_2" @click="daychange">
                                            <span>星期二</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth" style="float:left">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" v-model="localdata.form.day_3" @click="daychange">
                                            <span>星期三</span>
                                        </label>
                                    </div>
                                    <div class="weekWidth" style="float:left">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" v-model="localdata.form.day_4" @click="daychange">
                                            <span>星期四</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" v-model="localdata.form.day_5" @click="daychange">
                                            <span>星期五</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth helpchoose" style="float:right;position:relative;top:-28px;display:1px solid #ddd;">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" @click="workchange" v-model="workday">
                                            <span>工作日</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col-sm-12" style="margin-top: 5px;padding-top: 0;margin-bottom: 0;">
                                    <div class="weekWidth helpchoose" style="float:right;position:relative;top:-32px;left:-13px;">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" @click="workchange" v-model="weekday">
                                            <span>周末</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth" style="float:left;position:relative;top:-28px ">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" @click="daychange" v-model="localdata.form.day_6">
                                            <span>星期六</span>
                                        </label>
                                    </div>
                                    <div class=" weekWidth" style="float:left;position:relative;top:-28px">
                                        <label class="checkbox-inline checkbox-styled">
                                            <input type="checkbox" @click="daychange" v-model="localdata.form.day_7">
                                            <span>星期日</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span style="color: #fa846f;font-weight: 700;">*</span>上课日期:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <el-date-picker v-model="localdata.form.daterange" type="daterange" placeholder="选择日期"></el-date-picker>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span style="color: #fa846f;font-weight: 700;">*</span>上课时间:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <el-time-picker v-model="localdata.form.timerange" placeholder="选择时间" is-range>
                                </el-time-picker>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-xs-12 col-sm-3 col-md-2 control-label">
                                <span style="color: #fa846f;font-weight: 700;">*</span>上课教室:</label>
                            <div class="col-xs-12 col-sm-9 col-md-10">
                                <el-select v-model="localdata.form.classes_id" filterable placeholder="请选择教室">
                                    <el-option v-for="item in getClassesData" :key="item._id" :label="item.class_name" :value="item._id">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button @click="save" class="btn btn-primary">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
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
        let localdata = {
            form: {
                day_1: false,
                day_2: false,
                day_3: false,
                day_4: false,
                day_5: false,
                day_6: false,
                day_7: false,
                daterange: '',
                classes_id: '',
                sclasses_id: '',
                timerange: ''
            }
        }
        return {
            localdata,
            model: 'arrange',
            workday: false,
            weekday: false,
            classes: [],
            sclasses: []
        }
    },
    mounted() {
        this.getTableApidata('classes')
        this.getTableApidata('sclasses')
    },
    computed: {
        getClassesData() {
            this.classes = this.$store.state.models.models.classes.data
            return this.classes
        },
        getsClassesData() {
            this.sclasses = this.$store.state.models.models.sclasses.data
            return this.sclasses
        },
    },
    watch: {},
    methods: {
        workchange() {
            this.localdata.form.day_1 = this.workday
            this.localdata.form.day_2 = this.workday
            this.localdata.form.day_3 = this.workday
            this.localdata.form.day_4 = this.workday
            this.localdata.form.day_5 = this.workday
            this.localdata.form.day_6 = this.weekday
            this.localdata.form.day_7 = this.weekday
        },
        save() {
            let vm = this
            vm.handleSave().then(() => {
                vm.$message({
                    message: '操作成功',
                    type: 'success'
                })
                vm.lbClosedialog()
                this.$store.state.envs.currDialog = 'lb-arrange'
            }, (e) => {
                console.log(e)
            })
        },
        daychange() {
            let form = this.localdata.form
            this.workday = form.day_1 && form.day_2 && form.day_3 && form.day_4 && form.day_5
            this.weekday = form.day_6 && form.day_7
        }
    }
}
</script>
