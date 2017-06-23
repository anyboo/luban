<template>
    <div class="dock-content">
        <div class="profile">
            <div class="profile-inner">
                <div class="profile-content ">
                    <div class="profile-panel active" style="margin-top: 80px;text-align: center">
                        <div class="profile-face" style="margin-bottom: 25px;">
                            <img alt="" src="/assets/images/face_150.png">
                        </div>
                        <h4>欢迎您：Linzuxin</h4>
                        <p>位置：福建 - 福州</p>
                    </div>
                    <div class="profile-panel">
                        <div class="profile-face" style="margin-bottom: 15px;">
                            <img alt="" src="/assets/images/face_150.png">
                        </div>
                        <input name="face" type="file" class="form-control" style="display: none">
                        <div style="margin-bottom: 10px;width: 100%;overflow: hidden;word-break:break-all"></div>
                        <button type="button" class="btn btn-default" style="margin-bottom:10px;">选择头像图片</button>
                        <div style="margin-bottom:10px;"></div>
                        <div style="margin-bottom: 8px;display: none;width: 100%;">
                            <div class="col-sm-12 col-xs-12 col-md-12" style="text-align: center;">
                                <img alt="" src="/assets/images/preloader.gif" height="24px;">
                            </div>
                        </div>
                        <div id="upload-buttons">
                            <button type="button" class="btn btn-success">
                                上传</button>
                            <button type="button" class="btn btn-danger">取消</button>
                        </div>
                    </div>
                </div>
                <div class="profile-footer row">
                    <div class="col-md-6 col-sm-6 col-xs-6 profile-action">
                        <a href="#">
                            <span class="icon-unchecked"></span>
                            <br>锁定屏幕
                        </a>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 profile-action">
                        <a href="#" @click="handleClick('lb-login')">
                            <span class="icon-off"></span>
                            <br>退出
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.profile {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 10px 20px 20px 20px;
}

.profile-inner {
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
}

.profile-footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin: 0px;
    z-index: 1;
    width: 100%;
}

.profile-action {
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 6px;
}

.profile-action .glyphicon {
    font-size: 20px;
}

.profile-action>a {
    width: 100%;
    color: #fff;
    line-height: 1.5;
}

.profile-content {
    padding-bottom: 85px;
    height: 100%;
    position: relative;
}

.profile-panel {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 80px;
    width: 100%;
    display: none;
    overflow: auto;
}

.profile-panel.active {
    display: block;
}

.profile-face>img {
    max-height: 120px;
    max-width: 120px;
}
</style>
<script>
export default {
    name: 'profile',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    methods: {
        handleClick(action) {
            this.$emit('viewChange', action)
        }
    }
}
</script>