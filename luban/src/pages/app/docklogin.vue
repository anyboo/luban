<template>
    <div class="col-md-3 col-xs-12 col-sm-6 hte-dock hte-side hte-dock-animate hte-dock-transform" style="z-index: 9999; transform: translate3d(0px, 0px, 0px); display: block;">
        <div class="hte-dock-inner">
            <header class="hte-dock-header">
                <h3>
                    <span>我的HteOS</span>
                    <span class="icon-circle-arrow-right smaller hte-dock-close-btn"></span>
                </h3>
            </header>
            <div class="hte-dock-body">
                <div class="hte-dock-content">
                    <div class="hte-dock-item" style="padding: 20px;" v-if="loginstaus==0">
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
                                <button id="login-btn" class="btn btn-success btn-block" type="submit" @click="loginstaus=2">登&nbsp;&nbsp;录</button>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <button data-toggle="register" class="btn btn-primary btn-block" @click="loginstaus=1">注&nbsp;&nbsp;册</button>
                            </div>
                            <!--
                                                                <div class="col-xs-12 col-sm-12 col-md-12" style="margin-top: 8px">
                                                                    <button id="qlogin-btn" class="btn btn-success btn-block" type="button" data-loading-text="">
                                                                        <img src="/images/qq.png" style="max-height: 20px;margin-right:5px; margin-top: -3px;">使用QQ登录</button>
                                                                </div>
                                                                -->
                        </div>
                    </div>
                    <div class="hte-dock-item active" style="padding: 20px;" v-if="loginstaus==1">
                        <div id="register-alert" class="alert alert-danger alert-dismissable" style="display: none;">
                            <span id="register-error-tip"></span>
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
                                <button class="btn btn-primary btn-block" type="button" @click="loginstaus=2">注&nbsp;&nbsp;册</button>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <button class="btn btn-success btn-block" @click="loginstaus=0">登&nbsp;&nbsp;录</button>
                            </div>
                        </div>
                    </div>
                    <div class="hte-profile" v-if="loginstaus==2">
                        <div class="hte-profile-inner">
                            <div class="hte-profile-content ">
                                <div id="profile-info" class="hte-profile-panel active" style="margin-top: 80px;text-align: center">
                                    <div class="hte-profile-face" style="margin-bottom: 25px;">
                                        <img id="hte-profile-face-img" alt="" src="/assets/images/face_150.png">
                                    </div>
                                    <h4>欢迎您：Linzuxin</h4>
                                    <p>位置：福建 - 福州</p>
                                </div>
                                <div id="profile-face-upload" class="hte-profile-panel">
                                    <div class="hte-profile-face" style="margin-bottom: 15px;">
                                        <img alt="" src="/assets/images/face_150.png">
                                    </div>
                                    <iframe id="profile-face-upload-frame" name="profile-face-upload-frame" style="display: none;"></iframe>
                                    <form id="face-upload-form" action="/account/face/upload" method="post" target="profile-face-upload-frame" enctype="multipart/form-data">
                                        <input id="profile-face-input" name="face" type="file" class="form-control" style="display: none">
                                        <div id="profile-face-name" style="margin-bottom: 10px;width: 100%;overflow: hidden;word-break:break-all"></div>
                                        <button id="selectFaceBtn" type="button" class="btn btn-default" style="margin-bottom:10px;">选择头像图片</button>
                                        <div id="face-upload-tip" style="margin-bottom:10px;"></div>
                                        <div id="upload-preloader" style="margin-bottom: 8px;display: none;width: 100%;">
                                            <div class="col-sm-12 col-xs-12 col-md-12" style="text-align: center;">
                                                <img alt="" src="/assets/images/preloader.gif" height="24px;">
                                            </div>
                                        </div>
                                        <div id="upload-buttons">
                                            <button id="faceUploadBtn" type="button" class="btn btn-success">
                                                上传</button>
                                            <button id="faceUploadCancelBtn" type="button" class="btn btn-danger">取消</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="hte-profile-footer row">
                                <!-- 
                                <div id="profile-edit-action" class="col-md-4 col-sm-4 col-xs-4 hte-profile-action">
                                    <a href="#" style="text-decoration: none"><span class="glyphicon glyphicon-edit"></span>
                                        <br />个人信息
                                    </a>
                                </div>
                                -->
                                <div id="profile-lock-action" class="col-md-6 col-sm-6 col-xs-6 hte-profile-action">
                                    <a href="#" >
                                        <span class="icon-unchecked"></span>
                                        <br>锁定屏幕
                                    </a>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6 hte-profile-action">
                                    <a href="#" @click="loginstaus=1">
                                        <span class="icon-off"></span>
                                        <br>退出
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.hte-profile {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 10px 20px 20px 20px;
}

.hte-profile-inner {
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
}

.hte-profile-footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 0px;
    z-index: 1;
    width: 100%;
}

.hte-profile-action {
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 6px;
}

.hte-profile-action .glyphicon {
    font-size: 20px;
}

.hte-profile-action>a {
    width: 100%;
    color: #fff;
    line-height: 1.5;
}

.hte-profile-content {
    padding-bottom: 85px;
    height: 100%;
    position: relative;
}

.hte-profile-panel {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 80px;
    width: 100%;
    display: none;
    overflow: auto;
}

.hte-profile-panel.active {
    display: block;
}

.hte-profile-face>img {
    max-height: 120px;
    max-width: 120px;
}

.hte-dock-animate {
    -webkit-transition: all .2s;
    -webkit-transition-delay: 0;
    transition: all .2s;
    transition-delay: 0;
    -ms-transition: all .2s;
    -ms-transition-delay: 0;
    -webkit-transition-timing-function: ease-out;
}

.hte-dock-transform {
    transform: translate3d(600px, 0px, 0px);
}

.hte-dock {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    background-color: rgba(208, 150, 21, 0.98);
    z-index: 1000;
    overflow: hidden;
    padding: 0px;
    box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.2);
}

.hte-dock-inner {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
}

.hte-dock-header {
    position: absolute;
    padding-left: 20px;
    z-index: 1;
    top: 0px;
}

.hte-dock-body {
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 50px;
}

.hte-dock-close-btn {
    cursor: pointer;
    display: inline-block;
}

@media screen and (min-width: 680px) {
    .hte-dock-close-btn {
        display: none;
    }
}

.hte-dock-close-btn:hover {
    color: #ccc;
}

.smaller {
    width: 32px;
    height: 32px;
    display: inline-block;
    text-align: right;
    margin-right: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: 'Microsoft YaHei', 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma, 'Hiragino Sans GB', STHeiti;
}

.h1,
.h2,
.h3,
h1,
h2,
h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}

.h3,
h3 {
    font-size: 24px;
}
</style>
<script>
export default {
    name: 'docklogin',
    data() {
        let localdata = {}
        return {
            localdata,
            loginstaus: 0,    //1登录,0注册 2.用户信息
        }
    }
}
/*	$("#login-form").submit(function(e) {
		$("#login-buttons").hide();
		$("#login-preloader").show();
		$.ajax({
			url : "/login/asyn",
			method : "POST",
			data :  $(this).serialize(),
			success : function(data){
				if(data.success){
					window.location.reload();
				}else{
					$("#login-buttons").show();
					$("#login-preloader").hide();
					$("#error-tip").html(data.message);
				}
			},error : function(){
				$("#error-tip").html("登录失败，请稍候再试");
				$("#login-buttons").show();
				$("#login-preloader").hide();
			}
		});
		return false;
	});
	
	$("#register-form").submit(function(e) {
		$("#register-buttons").hide();
		$("#register-preloader").show();
		$.ajax({
			url : "/register/asyn",
			method : "POST",
			data :  $(this).serialize(),
			success : function(data){
				if(data.success){
					$("#register-success").show();
					$("#login-alert").hide();
					$(".hte-dock-content").find(".active").removeClass("active").fadeOut();
					$("#login-panel").addClass("active").fadeIn();
				}else{
					$("#register-alert").show();
					$("#register-buttons").show();
					$("#register-preloader").hide();
					$("#register-error-tip").html(data.message);
				}
			},error : function(){
				$("#register-alert").show();
				$("#register-error-tip").html("注册失败，请稍候再试");
				$("#register-buttons").show();
				$("#register-preloader").hide();
			}
		});
		return false;
	});
	
	$("#login-panel").fadeIn();
	$("[data-toggle='register']").click(function() {
		$(".hte-dock-content").find(".active").removeClass("active").fadeOut();
		$("#register-panel").addClass("active").fadeIn();
	});
	$("[data-toggle='login']").click(function() {
		$(".hte-dock-content").find(".active").removeClass("active").fadeOut();
		$("#login-panel").addClass("active").fadeIn();
	});*/
</script>