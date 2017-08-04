<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>设计</h3>
            </div>
            <div class="modal-body">
                <div id="jsoneditor" style="width: 100%; height: 400px;"></div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleClick">确定</button>
                <button class="btn btn-warning m-l-xs" @click="lbClosedialog($event)">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newsclass',
    data() {
        return {
            editor: null
        }
    },
    mounted() {
        this.getTableApidata('lb-table').then((res)=>{
            var json = []
            if (res.data&&res.data.data.length > 0) {
                json = res.data.data[0]
            }
            var container = document.getElementById("jsoneditor")
            var options = {}
            this.editor = new JSONEditor(container, options)

            this.editor.set(json)
        })
        // get json
        // 
    },
    computed: {},
    watch: {},
    methods: {
        handleClick() {
            var json = this.editor.get()
            var obj = []
            obj.push(json)
            this.mx_db_bulkwrite('lb-table',obj).then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            }, (e) => {
                console.log(e)
            })
        }
    }
}
</script>
