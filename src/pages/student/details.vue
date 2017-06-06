<template>
    <div>
        <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
            <div class="modal-content" modal-transclude="">
                <div class="panel panel-default ng-scope">
                    <div class="panel-heading ng-binding" v-model="localdata.form.match_name">qq1dd参加wqsedqwd比赛 详情</div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item ng-binding">参赛日期:2017年00月DD日</li>
                            <li class="list-group-item ng-binding" v-model="localdata.form.result">比赛成绩:999</li>
                        </ul>
                        <div class="wrapper ng-binding" ng-bind-html="vm.input.match.detail"></div>
                    </div>
                    <div class="panel-footer text-center"><a class="btn btn-default" @click="lbClosedialog($event)">关闭</a></div>
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
                'result':''

              
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
