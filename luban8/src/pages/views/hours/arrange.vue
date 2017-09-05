<template>
    <div class="classes">
        <div id='calendar' :class="{result:getSelectName}" style="background:white;">
        </div>
    </div>
</template>
<style>
.classes{
    width:100%;
    padding:12px 12px 0 12px;
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
}

</style>

<script>
export default {
    name: 'arrange',
    data() {
        let localdata = {
            'form': {
                'duration': '',
                'select_name': '',
                'select_id': '',
                'show_type': '老师'
            },
            'duration': [{
                'value': 'day',
                'text': '今日'
            }, {
                'value': 'week',
                'text': '本周'
            }, {
                'value': 'month',
                'text': '本月'
            }],
            'show_type': [{
                'value': '老师',
                'text': '按老师显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '教室',
                'text': '按教室显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '班级',
                'text': '按班级显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '课程',
                'text': '按课程显示',
                'show': 'lb-selectstudenttpl'
            }, {
                'value': '学员',
                'text': '按学员显示',
                'show': 'lb-selectstudenttpl'
            }],
            'lookupclasses': {
                'localField': 'classes_id',
                'from': 'classes',
                'foreignField': '_id',
                'as': 'classes'
            },
            'lookupsclasses': {
                'localField': 'sclasses_id',
                'from': 'sclasses',
                'foreignField': '_id',
                'as': 'sclasses'
            },
            'lookuptech': {
                'localField': 'teacher_id',
                'from': 'employee',
                'foreignField': '_id',
                'as': 'employee'
            }
        }
        return {
            localdata,
            tables: ['coursescheduling'],
        }
    },
    mounted() {
        let vm = this
        $('#calendar').fullCalendar({
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            nowIndicator: true,
            editable: false,
            aspectRatio: 1.8,
            scrollTime: '07:00',
            header: {
                left: 'arrange today,prev,next',
                center: 'title',
                right: 'agendaDay,agendaWeek,month,listWeek'
            },
            allDaySlot: false,
            defaultView: 'agendaDay',
            views: {
                timelineDay: {
                    buttonText: '日',
                    slotDuration: '00:30'
                }
            },
            navLinks: true,
            resourceAreaWidth: '20%',
            resourceLabelText: '教室',
            resources: function(callback) {
                vm.getTableApidata('sclasses').then(function(obj) {
                    let res = []
                    console.log(obj)
                    for (var item of obj.data.data) {
                        let resitem = {}
                        resitem.id = item._id
                        resitem.title = item.class_name
                        res.push(resitem)
                    }
                    callback(res)
                })
            },
            eventClick: function(calEvent, jsEvent, view) {
                vm.handleGetTableID('coursescheduling',calEvent._id).then(obj=>{
                    vm.handleShowDialog('arrangeeditform', obj)
                })
            },
            events: function(start, end, timezone, callback) {
                let filterObj = []
                let startTime = vm.getDatetimeStartEndOf(start._d)
                let endTime = vm.getDatetimeStartEndOf(end._d, end)
                filterObj.push({
                    'key': 'start',
                    'value': startTime,
                    'type': 'gte'
                })
                filterObj.push({
                    'key': 'lookup',
                    'value': vm.localdata.lookupclasses,
                    'type': 'lookup'
                })
                filterObj.push({
                    'key': 'lookup',
                    'value': vm.localdata.lookupsclasses,
                    'type': 'lookup'
                })
                filterObj.push({
                    'key': 'lookup',
                    'value': vm.localdata.lookuptech,
                    'type': 'lookup'
                })
                let filterTxt = vm.base64.encode(JSON.stringify(filterObj))
                vm.pagination.pagesize = 500
                vm.handleGetFilterTableTable('coursescheduling', filterTxt).then(function(obj) {
                    let eve = []
                    for (var item of obj.data.data) {
                        let evnitem = {}
                        evnitem.id = item._id
                        evnitem.resourceId = item.sclasses_id
                        evnitem.title = ''
                        if (item.employee && item.employee.length > 0) {
                            evnitem.title = '老师：' + item.employee[0].name
                        }
                        if (item.classes && item.classes.length > 0) {
                            evnitem.title += ' 班级：' + item.classes[0].class_name
                        }
                        if (item.sclasses && item.sclasses.length > 0) {
                            evnitem.title += ' 教室：' + item.sclasses[0].class_name
                        }

                        evnitem.start = vm.getDatetimeFormat(item.start)
                        evnitem.end = vm.getDatetimeFormat(item.end)
                        eve.push(evnitem)
                    }
                    callback(eve)
                })
            }
        })
    },
    computed: {
        getClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
        getSelectName() {
            /*
            if (this.$store.state.envs.currDialog == 'lb-arrange') {
                $('#calendar').fullCalendar('refetchEvents')
                this.$store.state.envs.currDialog = ''
            }*/
            return true
        },
    },
    watch: {},
    methods: {
        handleSelect() {
            let obj = this.lodash.find(this.localdata.show_type, {
                'value': this.localdata.form.show_type
            })
            if (obj) {
                this.handleShowDialog(obj.show)
            }
        },
        selectShowType() {
            this.localdata.form.select_name = ''
            this.localdata.form.select_id = ''
            this.handleSearch()
        },
        handleDuration() {
            let duration = this.localdata.form.duration.trim()
            let start = this.getDatetimeStartOf(duration)
            const end = this.getDatetimeStartOf('day', true)
            this.localdata.form.daterange = [start, end]
            //this.handleSearch()
        },
        handleSearch() {
            //let filterObj = []
            //let filterTxt = this.base64.encode(JSON.stringify(filterObj))
            //this.handleGetFilterTable(filterTxt)
        }
    }
}
</script>
