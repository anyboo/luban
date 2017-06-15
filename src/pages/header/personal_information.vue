<template>
    <div>
        <div ui-butterbar="" class="butterbar hide"><span class="bar"></span></div>
        <a href="" class="off-screen-toggle hide" ui-toggle-class="off-screen" data-target=".app-aside"></a>
        <div class="app-content-body fade-in-up ng-scope" ui-view="">
            <div class="bg-white ng-scope" ng-controller="MainProfileCtrl" uploader="uploader">
                <div document-title="'个人资料'" style="background:url(/assets/images/bg.jpg) center center; background-size:cover">
                    <div class="wrapper-lg bg-white-opacity">
                        <div class="row m-t">
                            <div class="col-sm-7">
                                <a class="thumb-lg pull-left m-r" href=""><img class="img-circle" ng-src="img/a0.jpg" src="/assets/images/a0.jpg"></a>
                                <div class="clear m-b">
                                    <div class="m-b-xs m-t-sm">
                                        <span class="h3 text-black ng-binding ng-scope" ng-if="user.name">张英乙</span>
                                    </div>
                                    <button class="btn btn-default btn-xs" ng-click="$util.open('tpl/main/photo.modal.html',lg,user)">更换图像</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-md m-t" ng-switch="$action" v-if="status==0">
                    <div ng-switch-when="profile" class="ng-scope">
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>登录账号</dt>
                            <dd class="ng-binding">15080555304</dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>账号密码</dt>
                            <dd>********* <a class="link pull-right" @click="status=3">修改密码</a>
                                <p class="text-muted">修改密码请点击右边"修改密码"链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>真实姓名</dt>
                            <dd class="ng-binding">张英乙 <a class="link pull-right" @click="status=1">修改姓名</a>
                                <p class="text-muted">修改姓名请点击右边"修改姓名"" 链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt>生日</dt>
                            <dd class="ng-binding">- <a class="link pull-right" @click="status=2">设置生日</a>
                                <p class="text-muted">设置出生日期请点击右边"设置生日" 链接</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt><i class="fa fa-mobile"></i> 手机绑定</dt>
                            <dd>
                                <p class="text-success ng-binding ng-scope" ng-if="profile.is_mobile_bind == '1'">已绑定手机号 15080555304</p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt><i class="fa fa-envelope"></i> 邮箱绑定</dt>
                            <dd>
                                <p class="text-muted ng-scope" ng-if="profile.is_email_bind != '1'">未绑定邮箱 <a class="btn btn-success btn-sm pull-right" ng-click="bind_email()"><i class="fa fa-envelope"></i> 绑定邮箱</a></p>
                            </dd>
                        </dl>
                        <dl class="dl-horizontal b-b padder-v">
                            <dt><i class="fa fa-weixin"></i> 微信绑定</dt>
                            <dd>
                                <p class="text-muted ng-scope" ng-if="profile.is_weixin_bind != '1'">未绑定微信号 <a class="btn btn-success btn-sm pull-right" ng-click="bind_weixin()"><i class="fa fa-weixin"></i> 绑定微信</a></p>
                                <p class="text-muted">绑定微信之后，可以用微信登录本系统，还可以接收微信通知.</p>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="wrapper-md m-t" v-if="status==3">
                    <form name="edit_pwd_form" class="form-horizontal form-validation ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-validator" ng-switch-when="edit_pwd" novalidate="">
                        <h4 class="b-b m-b padder-v">修改登录密码</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">原密码:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" ng-model="edit.pwd.old_pwd" placeholder="输入原来密码" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">新密码:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" ng-model="edit.pwd.new_pwd" placeholder="输入新密码" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">重复一遍:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="password" name="new_pwd_repeat" ng-model="edit.pwd.new_pwd_repeat" placeholder="重复输入新密码" class="form-control ng-pristine ng-untouched ng-valid-validator ng-invalid ng-invalid-required" ui-validate=" '$value==edit.pwd.new_pwd' " ui-validate-watch=" 'edit.pwd.new_pwd' " required="">
                            </div>
                            <div class="col-xs-12 col-md-3 ng-hide" ng-show="edit_pwd_form.new_pwd_repeat.$error.validator">两次输入密码不一致</div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" type="submit" ng-disabled="edit_pwd_form.$invalid || saving" ng-click="save_edit_pwd()" disabled="disabled">修改密码</button> <a class="link m-l" @click="status=0">返回</a></div>
                        </div>
                    </form>
                </div>
                <div class="wrapper-md m-t" v-if="status==1">
                    <form name="edit_name_form" class="form-horizontal form-validation ng-pristine ng-valid ng-scope ng-valid-required ng-valid-parse" ng-switch-when="edit_name" novalidate="">
                        <h4 class="b-b m-b padder-v">修改姓名</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">姓名:</label>
                            <div class="col-xs-12 col-md-3">
                                <input type="text" ng-model="edit.name.name" placeholder="输入真实姓名" class="form-control ng-pristine ng-untouched ng-valid ng-valid-required ng-valid-parse" required="">
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" type="submit" ng-disabled="edit_name_form.$invalid || saving" ng-click="save_profile('name')">确认修改</button> <a class="link m-l" @click="status=0">返回</a></div>
                        </div>
                    </form>
                </div>
                <div class="wrapper-md m-t" v-if="status==2">
                    <form name="edit_birth_form" class="form-horizontal form-validation ng-pristine ng-valid ng-scope" ng-switch-when="edit_birth" novalidate="">
                        <h4 class="b-b m-b padder-v">修改生日</h4>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-md-2">生日:</label>
                            <div class="col-xs-12 col-md-3">
                                <div class="w-sm">
                                    <input type="text" name="birth" class="form-control input-sm ng-pristine ng-untouched ng-valid" ng-model="edit.birth.birth" datetimepicker="date">
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-t">
                            <div class="col-xs-12 col-md-offset-2">
                                <button class="btn btn-primary" type="button">确认修改</button> <a class="link m-l" @click="status=0">返回</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'personal_information',
    data() {
        let localdata = {}
        return {
            localdata,
            status: 0
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
