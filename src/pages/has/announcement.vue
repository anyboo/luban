<template>
    <div class="modal-dialog modal-lg" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude="">
            <div page-controller="news_post" class="ng-scope">
                <div class="modal-header">
                    <button @click="lbClosedialog($event)" class="close" type="button"><span>×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title">{{title}}新闻公告发布</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                        <div class="form-group">
                            <label ng-model="news.ob_id" btn-radio="11158">范围：</label>
                            <div class="btn-group" style="padding-left: 16px;">
                                <lb-buttongroup :group-data="localdata.status" v-model="localdata.form.status" ></lb-buttongroup>
                            </div>
                        </div>
                        <div class="form-group">
                            <label ng-model="news.ob_id" btn-radio="11158">校区：</label>
                            <div class="btn-group" style="padding-left: 16px;">
                                <lb-buttongroup :group-data="localdata.track_from" v-model="localdata.form.track_from"></lb-buttongroup>
                                </label>
                            </div>
                        </div>
                        <div class="form-group ng-scope">
                            <label class="control-label col-md-1 col-xs-12" style="padding-top: 7px;  margin-left: -14px;">标题：</label>
                            <div class="col-md-11 col-xs-12" style="padding:2px">
                                <div class="inline w-lg" style="width: 340px;">
                                    <input type="text" name="news_title" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.news_title.errorStatus}" placeholder="输入标题" v-model="localdata.form.news_title" @change="validate('news_title')">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label class="control-label col-md-1 col-xs-12" style="padding-top:13px;text-align: right; margin-left: -14px;">备注:</label>
                                <div class="col-md-11 col-xs-12">
                                    <div class="inline w-lg">
                                        <textarea name="note" rows="2" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.news_content"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-success" @click="handleClick">
                        <span ng-if="action=='add'" class="ng-scope">发布</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'announcement',
    data() {
        let localdata = {
            'form': {
                'news_title': '',
                'news_content': '',
                'status': '',
                'track_from': '',



            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'news_title': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },

                }
            },
            'status': [{
                'value': '0',
                'text': '对内'
            }, {
                'value': '1',
                'text': '对外'
            }],
            'track_from': [{
                'value': '',
                'text': '当前校区'
            }, {
                'value': '0',
                'text': '所有校区'
            }]
        }
        return {
            localdata,
            model: 'announcement',
            title: '',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '发布'
        }
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            })
        },
     
    }
}
</script>
