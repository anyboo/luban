<template>
    <div>
        <div ui-butterbar="" class="butterbar hide">
            <span class="bar"></span>
        </div>
        <a href="" class="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside"></a>
        <div class="app-content-body fade-in-up ng-scope" ui-view="">
            <div class="bg-white ng-scope" ng-controller="MainProfileCtrl" uploader="uploader">
                <div document-title="'个人资料'" style="background:url(img/c4.jpg) center center; background-size:cover">
                    <div class="wrapper-lg bg-white-opacity">
                        <div class="row m-t">
                            <div class="col-sm-7">
                                <a class="thumb-lg pull-left m-r" href="">
                                    <img class="img-circle" ng-src="img/a0.jpg" src="img/a0.jpg">
                                </a>
                                <div class="clear m-b">
                                    <div class="m-b-xs m-t-sm">
                                        <span class="h3 text-black ng-binding ng-scope" ng-if="user.name">林三金</span>
                                    </div>
                                    <button class="btn btn-default btn-xs" ng-click="$util.open('tpl/main/photo.modal.html',lg,user)">更换图像</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-md m-t" ng-switch="$action">
                    <div ng-switch-when="profile" class="ng-scope">
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>登录账号</dt>
                            <dd class="ng-binding">18960828505</dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>账号密码</dt>
                            <dd>
  ********* 
                                <a class="link pull-right" ng-click="edit_pwd()">修改密码</a>
                                <p class="text-muted">修改密码请点击右边"修改密码"链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>真实姓名</dt>
                            <dd class="ng-binding">
  林三金 
                                <a class="link pull-right" ng-click="edit_name()">修改姓名</a>
                                <p class="text-muted">修改姓名请点击右边"修改姓名"" 链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>生日</dt>
                            <dd class="ng-binding">
  - 
                                <a class="link pull-right" ng-click="edit_birth()">设置生日</a>
                                <p class="text-muted">设置出生日期请点击右边"设置生日" 链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>
                                <i class="fa fa-mobile"></i>  手机绑定 
                            </dt>
                            <dd>
                                <p class="text-success ng-binding ng-scope" ng-if="profile.is_mobile_bind == '1'">已绑定手机号 18960828505</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>
                                <i class="fa fa-envelope"></i>  邮箱绑定 
                            </dt>
                            <dd>
                                <p class="text-muted ng-scope" ng-if="profile.is_email_bind != '1'">
  未绑定邮箱 
                                    <a class="btn btn-success btn-sm pull-right" ng-click="bind_email()">
                                        <i class="fa fa-envelope"></i>  绑定邮箱 
                                    </a>
                                </p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>
                                <i class="fa fa-weixin"></i>  微信绑定 
                            </dt>
                            <dd>
                                <p class="text-muted ng-scope" ng-if="profile.is_weixin_bind != '1'">
  未绑定微信号 
                                    <a class="btn btn-success btn-sm pull-right" ng-click="bind_weixin()">
                                        <i class="fa fa-weixin"></i>  绑定微信 
                                    </a>
                                </p>
                                <p class="text-muted">绑定微信之后，可以用微信登录本系统，还可以接收微信通知.</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'content',
    data() {
        return {

        }
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>