<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <el-button-group>
                    <el-button @click="handleBack" type="info" size="small">返回</el-button>
                    <el-popover ref="popover" placement="right" trigger="click">
                        <img :src="qrcodeimg">
                    </el-popover>
                </el-button-group>
                <lb-dropdown :drop-menu-data="getMenuOption" :menu-data="getclassesInfo">
                    <el-button type="success" size="small" slot="buttonslot">
                        <i class="fa fa-user"></i> 操作
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                </lb-dropdown>
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
                        <span>{{getLookUp(classes.course,'lesson_name')}}</span>
                    </div>
                    <div class="col-xs-12 col-md-6" v-if="type==checkstatus">
                        <label class="inline w-xs text-right">状态:</label>
                        <span style="display:inline-block">
                            <template>
                                <lb-checkstatus :lessonData="classes" :typeData="{statutype:'openlessonsstatus'}" v-on:search="handleSearch"></lb-checkstatus>
                            </template>
                        </span>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <label class="inline w-xs text-right">开课时间:</label>
                        <span>{{ getDateFormat(classes.createtime) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <el-tabs type="border-card" @tab-click="showTab">
            <template v-for="(item,index) in moduledata">
                <el-tab-pane :label="item.pageLable">
                    <template v-if="index==tabIndex">
                        <lb-moduletable :module="item" :info="true" :searchclassesid="uid"></lb-moduletable>
                    </template>
                </el-tab-pane>
            </template>
        </el-tabs>
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
            'courseData': {
                'localField': 'course_id',
                'from': 'course',
                'foreignField': '_id',
                'as': 'course'
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
            moduledata: pagesmodule,
            localdata,
            activeName: '1',
            tabIndex: '',
            tables: ['classes'],
            uid: '',
            qrcodeimg: '',
            classes: {},
        }
    },
    created() {
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
    computed: {
        getclassesInfo() {
            return this.classes
        },
    },
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
                filterObj.push({
                    'key': 'lookup',
                    'value': this.localdata.courseData,
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


