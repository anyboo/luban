<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div page-controller="lesson_cate" class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-book"></i>课程分类设置
                    </h3>
                </div>
                <div class="modal-body">
                    <p>
                        <a class="btn btn-default" @click="handleClick">
                            <i class="fa fa-plus"></i>新增大类
                        </a>
                    </p>
                    <lb-listtree :tree-data="getreeData" ref="listtree">
                    </lb-listtree>
                </div>
                <div class="modal-footer text-center">
                    <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cate',
    data() {
        let localdata = {
            'form': {
                'name': ''
            }
        }
        return {
            localdata,
            lb_tables: ['cate']
        }
    },
    computed: {
        getreeData() {
            return this.$store.state.models.models.cate.data
        }
    },
    watch: {},
    methods: {
        handleClick() {
            this.$refs.listtree.addRoot()
        }
    }
}
</script>
