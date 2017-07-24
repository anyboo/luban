<template>
    <div class="wrapper">
        <div class="wrapper panel panel-default bg-white">
            <div class="row">
                <div class="col-xs-12 col-md-3 m-t " :class="{result:getSelectName}">
                    <div class="inline">
                        <el-date-picker v-model="localdata.form.daterange" type="daterange" @change="handleSearch"></el-date-picker>
                    </div>
                </div>
                <div class="col-xs-12 col-md-7 m-t">
                    <lb-buttongroup :group-data="localdata.duration" v-model="localdata.form.duration" @input="handleDuration"></lb-buttongroup>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <input type="text" placeholder="请选择" class="form-control" readonly="readonly" v-model="localdata.form.select_name">
                            <span class="input-group-btn">
                                <button class="btn btn-default" @click="handleSelect">
                                    {{localdata.form.show_type}}
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="inline w-sm va-m m-l-xs">
                        <div class="input-group">
                            <select class="form-control" v-model="localdata.form.show_type" @change="selectShowType">
                                <template v-for="item in localdata.show_type">
                                    <option :value="item.value">{{item.text}}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
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
        $('#calendar').fullCalendar({
            schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
            now: '2017-05-07',
            editable: true,
            aspectRatio: 1.8,
            scrollTime: '00:00',
            header: {
                left: 'today prev,next',
                center: 'title',
                right: 'timelineDay,timelineWeek,timelineMonth,basicWeek,agendaWeek,listWeek'
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
            resourceLabelText: 'Rooms',
            resources: [
                { id: 'a', title: 'Auditorium A' },
                { id: 'b', title: 'Auditorium B', eventColor: 'green' },
                { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
                {
                    id: 'd', title: 'Auditorium D', children: [
                        { id: 'd1', title: 'Room D1' },
                        { id: 'd2', title: 'Room D2' }
                    ]
                },
                { id: 'e', title: 'Auditorium E' },
                { id: 'f', title: 'Auditorium F', eventColor: 'red' },
                { id: 'g', title: 'Auditorium G' },
                { id: 'h', title: 'Auditorium H' },
                { id: 'i', title: 'Auditorium I' },
                { id: 'j', title: 'Auditorium J' },
                { id: 'k', title: 'Auditorium K' },
                { id: 'l', title: 'Auditorium L' },
                { id: 'm', title: 'Auditorium M' },
                { id: 'n', title: 'Auditorium N' },
                { id: 'o', title: 'Auditorium O' },
                { id: 'p', title: 'Auditorium P' },
                { id: 'q', title: 'Auditorium Q' },
                { id: 'r', title: 'Auditorium R' },
                { id: 's', title: 'Auditorium S' },
                { id: 't', title: 'Auditorium T' },
                { id: 'u', title: 'Auditorium U' },
                { id: 'v', title: 'Auditorium V' },
                { id: 'w', title: 'Auditorium W' },
                { id: 'x', title: 'Auditorium X' },
                { id: 'y', title: 'Auditorium Y' },
                { id: 'z', title: 'Auditorium Z' }
            ],
            events: [
                { id: '1', resourceId: 'b', start: '2017-05-07T02:00:00', end: '2017-05-07T07:00:00', title: 'event 1' },
                { id: '2', resourceId: 'c', start: '2017-05-07T05:00:00', end: '2017-05-07T22:00:00', title: 'event 2' },
                { id: '3', resourceId: 'd', start: '2017-05-06', end: '2017-05-08', title: 'event 3' },
                { id: '4', resourceId: 'e', start: '2017-05-07T03:00:00', end: '2017-05-07T08:00:00', title: 'event 4' },
                { id: '5', resourceId: 'f', start: '2017-05-07T00:30:00', end: '2017-05-07T02:30:00', title: 'event 5' }
            ]
        })

        this.getTableApidata('classes')
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
