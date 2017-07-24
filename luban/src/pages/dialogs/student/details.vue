<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div >
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>
                        <span class="badge bg-info"></span>{{ getLookUp(currrecord.student,'student_name') }}比赛 详情
                    </h3>
                </div>
                <div class="modal-body">
                    <ul class="list-group">
                        <li class="list-group-item">参赛日期:  {{getDateFormat(currrecord.creattime)}}</li>
                        <li class="list-group-item">赛事名称:{{currrecord.match_name}}</li>
                        <li class="list-group-item">比赛成绩:{{currrecord.result}}</li>
                        <li class="list-group-item">赛事详情:{{currrecord.info}}</li>
                    </ul>
                    <div class="wrapper" ng-bind-html="vm.input.match.detail"></div>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary" @click="lbClosedialog($event)">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'details',
    data() {
        let localdata = {
        }
        return {
            localdata,
            currrecord:{}
        }
    },
    mounted() {
        this.currrecord = this.$store.state.dialogs.dailogdata
    },
    computed: {

    },
    watch: {},
    methods: {}
}
</script>
