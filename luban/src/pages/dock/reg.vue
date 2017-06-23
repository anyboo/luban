<template>
    <div class="dock-content">
        <div class="dock-item active" style="padding: 20px;">
            <div class="alert alert-danger alert-dismissable" style="display: none;">
                <span></span>
            </div>
            <div style="text-align: center;margin-bottom: 30px;">
                <img src="/assets/images/face_150.png" alt="">
            </div>
            <div class="form-group">
                <input type="email" name="account" class="form-control" placeholder="邮箱" required="" autofocus="">
            </div>
            <div class="form-group">
                <input id="password" type="password" name="password" class="form-control" placeholder="密码" required="">
            </div>
            <div class="form-group">
                <input id="confirmPassword" type="password" name="confirmPassword" class="form-control" placeholder="确认密码" required="">
            </div>
            <div class="row" style="margin-top: 8px;display: none">
                <div class="col-sm-12 col-xs-12 col-md-12" style="text-align: center;">
                    <img alt="" src="/assets/images/preloader.gif" height="24px;">
                </div>
            </div>
            <div class="row" style="margin-top: 8px;">
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <button class="btn btn-primary btn-block" type="button" @click="handleClick('lb-profile')">注&nbsp;&nbsp;册</button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <button class="btn btn-success btn-block" @click="handleClick('lb-login')">登&nbsp;&nbsp;录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    methods: {
        handleClick(action){
            this.$emit('viewChange',action)
        }
    }
}
</script>