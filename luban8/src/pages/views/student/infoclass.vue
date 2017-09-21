<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="btn-group dropdown" dropdown="">
                    <a class="btn btn-default" @click="handleBack">返回</a>
                </div>
            </div>
            <div>
                <div class="row no-gutter center">
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">班级名:</label>
                        <span>{{classes.class_name}}</span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">老师:</label>
                        <span>{{classes.op_name}}</span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">课程名:</label>
                        <span></span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">所在校区:</label>
                        <span></span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">状态:</label>
                        <span></span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">开课时间:</label>
                        <span>{{ getDateFormat(student.createtime) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" tab-nav-link="student.list">
            <el-tabs type="border-card" @tab-click="showTab">
                <template v-for="(item,index) in moduledata">
                    <el-tab-pane :label="item.pageLable">
                        <template v-if="index==tabIndex">
                            <lb-moduletable :module="item" :info="true" :search-value="$store.state.envs.currStudent._id"></lb-moduletable>
                        </template>
                    </el-tab-pane>
                </template>
            </el-tabs>
        </div>
    </div>
</template>
<style>
.el-table__body-wrapper {
    overflow: hidden;
}

.center {
    margin: 10px 10px
}
</style>

<script>
import pagesmodule from '~/stores/moduleclassesinfo.js'
import getUrl from '~/api/restfulapi.js'
export default {
    name: 'infoclass',
    data() {
        let localdata = {
            'lookup': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            },
        }
        var validateTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号码'))
            } else if (!(/^1\d{10}$/.test(value))) {
                callback(new Error('手机号码必须为数字1开头并为11位!已输入' + value.length + '位。'))
            } else {
                callback()
            }
        }
        return {
            loadstudent: false,
            moduledata: pagesmodule,
            localdata,
            activeName: '1',
            student: {},
            tabIndex: '',
            tables: ['classes'],
            uid: '',
            qrcodeimg: '',
            classes: {}
        }
    },
    mounted() {
        let currClasses = this.$store.state.envs.currClasses
        if (currClasses && currClasses._id && currClasses._id.length > 0) {
            this.uid = currClasses._id
            this.$store.commit('classes', this.uid)
            this.handleSearch()
        } else {
            this.uid = this.$store.state.system.currClassesID
            if (this.uid) {
                this.handleSearch()
            }
        }
        console.log('fd', currClasses)
    },
    computed: {},
    watch: {},
    methods: {
        showTab(tab, event) {
            this.tabIndex = tab.index
        },
        handleBack() {
            this.$store.commit('router', this.$store.state.system.routerback)
        },
        handleSearch() {
            if (this.uid && this.uid.length > 0) {
                let filterObj = []
                let classes_id = this.uid
                if (classes_id.length > 0) {
                    filterObj.push({
                        'key': '_id',
                        'value': classes_id,
                        'type': ''
                    })
                }
                filterObj.push({
                    'key': 'lookup',
                    'value': this.localdata.lookup,
                    'type': 'lookup'
                })
                let filterTxt = this.base64.encode(JSON.stringify(filterObj))
                this.handleGetFilterTable(filterTxt).then((obj) => {
                    console.log('dsg', obj.data.data[0])
                    if (obj.data.data && obj.data.data.length > 0) {
                        this.classes = obj.data.data[0]
                    }
                })
            }
        }
    }
}
</script>


