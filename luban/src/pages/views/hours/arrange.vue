<template>
    <div class="wrapper">
        <div class="wrapper panel panel-default bg-white ng-scope">
            <div class="row  m-t arrangeover">
                <div id='calendar'></div>
            </div>
        </div>
    </div>
</template>
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
            }]
        }
        return {
            localdata,
        }
    },
    mounted() {
        let vm = this
        $('#calendar').fullCalendar({
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            now: '2017-05-07',
            editable: true,
            aspectRatio: 1.8,
            scrollTime: '00:00',
            header: {
                left: 'arrange today,prev,next',
                center: 'title',
                right: 'agendaDay,agendaWeek,timelineDay,timelineWeek,timelineMonth,listWeek'
            },
            customButtons: {
                arrange: {
                    text: '添加排课',
                    click: function () {
                        vm.handleShowDialog('lb-arrangeedit')
                    }
                }
            },
            defaultView: 'timelineDay',
            views: {
                timelineDay: {
                    buttonText: '日',
                    slotDuration: '00:30'
                }
            },
            navLinks: true,
            resourceAreaWidth: '20%',
            resourceLabelText: '教室',
            resources: function (callback) {
                vm.getTableApidata('sclasses').then(function (obj) {
                    let res = []
                    for (var item of obj.data.data) {
                        let resitem = {}
                        resitem.id = item._id
                        resitem.title = item.class_name
                        res.push(resitem)
                    }
                    callback(res)
                })
            },
            events: function (start, end, timezone, callback) {
                vm.getTableApidata('arrange').then(function (obj) {
                    console.log(obj.data.data)
                    let eve = []
                    for (var item of obj.data.data) {
                        let evnitem = {}
                        evnitem.id = item._id
                        evnitem.resourceId = item.sclasses_id
                        evnitem.title = '老师：林祖鑫 班级：音乐五班 教室:wwwwww'//item.classes_id
                        evnitem.start = '2017-05-07T14:40:00'
                        evnitem.end = '2017-05-07T16:00:00'
                        evnitem.description = 'This is a cool event'
                        eve.push(evnitem)
                    }
                    console.log(eve)
                    callback(eve)
                })
            }
            /* [{
                id: '1',
                resourceId: '59643edb3c6f25461ae7f289',
                start: '2017-05-07T02:00:00',
                end: '2017-05-07T07:00:00',
                title: 'event 1'
            }, {
                id: '2',
                resourceId: 'c',
                start: '2017-05-07T05:00:00',
                end: '2017-05-07T22:00:00',
                title: 'event 2'
            }, {
                id: '3',
                resourceId: 'd',
                start: '2017-05-06',
                end: '2017-05-08',
                title: 'event 3'
            }, {
                id: '4',
                resourceId: 'e',
                start: '2017-05-07T03:00:00',
                end: '2017-05-07T08:00:00',
                title: 'event 4'
            }, {
                id: '5',
                resourceId: 'f',
                start: '2017-05-07T00:30:00',
                end: '2017-05-07T02:30:00',
                title: 'event 5'
            }]*/
        })


    },
    computed: {
        getClassesData() {
            let classes = this.$store.state.models.models.classes.data
            return classes
        },
        getSelectName() {
            if (this.$store.state.envs.currDialog == 'lb-selectstudenttpl') {
                if (this.$store.state.envs.currDialogResult) {
                    this.localdata.form.select_name = this.$store.state.envs.currDialogResult.student_name
                    this.localdata.form.select_id = this.$store.state.envs.currDialogResult._id
                } else {
                    this.localdata.form.select_id = ''
                    this.localdata.form.select_name = ''
                }
                this.handleSearch()
            }
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
