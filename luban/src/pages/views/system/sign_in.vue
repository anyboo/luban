<template>
    <div class="modal-over bg-black ng-scope" style="z-index: 99999999;    margin: -100px 0px 0px -100px;">
        <div class="modal-center animated fadeInUp text-center" style="width:200px;margin:-100px 0 0 -100px">
            <div class="thumb-lg"><img class="img-circle" src="/assets/images/a0.jpg"></div>
            <p class="h4 m-t m-b">
                <span ng-if="user.name" class="ng-binding ng-scope">张英乙</span>
            </p>
            <div class="input-group">
                <input type="text" v-model="localdata.form.user" class="form-control text-sm  no-border ng-pristine ng-untouched ng-valid" placeholder="请输入账号" style="width:198px;    border-top-left-radius: 50px;border-top-right-radius: 50px;border-bottom-right-radius: 50px;border-bottom-left-radius: 50px;"> <span class="input-group-btn "></span></div>
            <br>
            <div class="input-group">
                <input type="password" v-model="localdata.form.pwd" class="form-control text-sm btn-rounded no-border ng-pristine ng-untouched ng-valid" placeholder="请输入密码解锁"> <span class="input-group-btn"><a @click="login" class="btn btn-success btn-rounded no-border"style="height:34px"><i class="fa fa-arrow-right"></i></a></span></div>
        </div>
    </div>
</template>
<style >
    .modal-center {
    position: absolute;
    top: 50%;
    left: 50%;
}
.bg-black {
    color: #7793a7;
    background-color: #1c2b36;
}
</style>
<script>
export default {
    name: 'signIn',
    data() {
        let localdata = {
            form: {
                user: '',
                pwd: ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {
        login() {
            let vm = this
            vm.$store.dispatch(this.types.LOGIN_API, this.localdata.form).then((data) => {
                if (data.code == 0) {
                    this.$router.push('/web')
                }
            })
        }
    }
}
</script>
