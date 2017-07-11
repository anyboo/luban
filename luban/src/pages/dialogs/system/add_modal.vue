<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div page-controller="branch_add" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
                    <h3 class="modal-title"><i class="icon-plus"></i> {{title}}新校区</h3></div>
                <div class="modal-body">
                    <form name="form1" class="form-validation ng-invalid ng-invalid-required ng-valid-minlength ng-dirty ng-valid-parse">
                        <p>*校区名:</p>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" v-model="localdata.form.branch_name" ng-minlength="2" required="">
                        <p class="m-t">校区简称:</p>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" v-model="localdata.form.short_name" ng-minlength="1" required="">
                        <p class="m-t">联系电话:</p>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.branch_tel">
                        <p class="m-t">所在地区:</p>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.group_name">
                        <p class="m-t">详细地址(有长度限制最少5个字符):</p>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.branch_address">
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" @click="handleClick">
                        确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'add_modal',
    data() {
        let localdata = {
            'form': {
                'group_name': '',
                'branch_name': '',
                'short_name': '',
                'branch_tel': '',
                'city': '',
                'branch_address': ''

            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'branch_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    }
                }
            },
        }
        return {
            localdata,
            model: 'campus',
            title: '创建',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
    },
    computed: {
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id, 
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            })
        }
    }
}
</script>
