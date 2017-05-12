<template>
    <div class="wrapper m-t">
        <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">0/50</span> <span class="hidden-folded">学员数</span></div>
        <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" max="user.gv.org.student_num_limit" type="info">
            <div class="progress-bar progress-bar-info" style="width: 0%;"></div>
        </div>
        <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">1/5</span> <span class="hidden-folded">账号数</span></div>
        <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" type="primary">
            <div class="progress-bar progress-bar-primary" style="width: 20%;"></div>
        </div>
        <div class="text-center-folded"><span class="pull-right pull-none-folded ng-binding">1/1</span> <span class="hidden-folded">校区数</span></div>
        <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" type="warning">
            <div class="progress-bar progress-bar-warning" style="width: 100%;"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homestat',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
