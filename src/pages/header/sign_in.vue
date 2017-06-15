<template>
    <div class="modal-over bg-black ng-scope" style="z-index: 99999999;" ng-show="app.is_lock">
        <div class="modal-center animated fadeInUp text-center" style="width:200px;margin:-100px 0 0 -100px">
            <div class="thumb-lg"><img class="img-circle" ng-src="img/a0.jpg" src="img/a0.jpg"></div>
            <p class="h4 m-t m-b">
                <span ng-if="user.name" class="ng-binding ng-scope">张英乙</span>
            </p>
            <div class="input-group">
                <input type="password" ng-model="app.pwd" class="form-control text-sm btn-rounded no-border ng-pristine ng-untouched ng-valid" placeholder="输入密码解锁"> <span class="input-group-btn"><a ng-click="unlock()" class="btn btn-success btn-rounded no-border"><i class="fa fa-arrow-right"></i></a></span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'signIn',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
