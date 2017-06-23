<template>
    <div class="dock-content">
        <div class="dock-item" style="padding: 20px;">
            <div id="register-success" class="alert alert-success alert-dismissable" style="display: none">
                <span>注册成功，请登录</span>
            </div>
            <div id="login-alert" class="alert alert-danger alert-dismissable">
                <span id="error-tip">您还没有登录，请登录</span>
            </div>
            <div style="text-align: center;margin-bottom: 30px;">
                <img src="/assets/images/face_150.png" alt="">
            </div>
            <div class="form-group">
                <input type="email" name="account" class="form-control" placeholder="邮箱" required="" autofocus="">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="密码" required="">
            </div>
            <div class="input-group" style="width: 100%;">
                <label class="pull-left" style="color: #fff;">
                    <input type="checkbox" name="autoLogin"> 记住我
                </label>
                <a href="#" style="color: #fff;" class="pull-right">忘记密码?</a>
            </div>
            <div class="row" style="margin-top: 8px;">
                <div class="col-sm-12 col-xs-12 col-md-12" style="text-align: center;display: none">
                    <img alt="" src="/assets/images/preloader.gif" height="24px;">
                </div>
            </div>
            <div id="login-buttons" class="row" style="margin-top: 8px;">
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <button id="login-btn" class="btn btn-success btn-block" type="submit" @click="handleClick('lb-profile')">登&nbsp;&nbsp;录</button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                    <button data-toggle="register" class="btn btn-primary btn-block" @click="handleClick('lb-reg')">注&nbsp;&nbsp;册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    methods: {
        handleClick(action){
            this.$emit('viewChange',action)
        }
    }
}
</script>