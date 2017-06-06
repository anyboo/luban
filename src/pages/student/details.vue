<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span>×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-user"></i>编辑
                        <span class="badge bg-info ng-binding">{{localdata.form.student_name }}</span>比赛 详情
                    </h3>
                </div>
                <div class="modal-body">
                    <ul class="list-group">
                        <li class="list-group-item ng-binding">参赛日期:2017年00月DD日</li>
                        <li class="list-group-item ng-binding" v-model="localdata.form.result">比赛成绩:999</li>
                    </ul>
                    <div class="wrapper ng-binding" ng-bind-html="vm.input.match.detail"></div>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-primary"  @click="lbClosedialog($event)">确定</button>
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
            'form': {
                'match_name': '',
                'result': ''


            },
        }
        return {
            localdata,
            lb_tables: ['recording'],
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
