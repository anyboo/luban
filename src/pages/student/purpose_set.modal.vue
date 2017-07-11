<template>
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="wrapper ng-scope">
                <p class="ng-binding">请设置学员 {{getStudentName }} 的意向程度</p>
                <div class="w-sm">
                    <div class="chosen-container chosen-container-single" style="width: 120px;" title>
                        <div class="chosen-drop">
                            <lb-select v-model="localdata.form.purpose" placeholder="请选择">
                                <lb-option v-for="item in localdata.purpose" :key="item.value" :label="item.text" :value="item.value">
                                </lb-option>
                            </lb-select>
                        </div>
                    </div>
                </div>
                <p class="m-t">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <a class="btn btn-danger m-l-xs" @click="lbClosedialog($event)">取消</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'purpose_set',
    data() {
        let localdata = {
            'form': {
                'purpose': '',
                'student_name': '',
            },
            'purpose': [{
                'value': '0',
                'text': '请选择'
            }, {
                'value': '1',
                'text': '没有意向'
            }, {
                'value': '2',
                'text': '初步意向'
            }, {
                'value': '3',
                'text': '意向强烈'
            }]
        }
        return {
            localdata,
            model: 'student'
        }
    },
    mounted() {
        this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
        this.localdata.form.purpose = this.$store.state.dialogs.dailogdata.purpose
        this.localdata.form.student_name = this.$store.state.dialogs.dailogdata.student_name
    },
    computed: {
        getStudentName(){
            return this.localdata.form.student_name
        }
    },
    watch: {},
    methods: {
        handleClick() {
            let vm = this
            vm.handleSave().then((data) => {
                this.$store.state.dialogs.dailogdata.purpose = data.purpose
                vm.lbClosedialog()
            })
        }
    }
}
</script>
