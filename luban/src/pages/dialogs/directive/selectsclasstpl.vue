<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="handleCloseDialog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag"></i>请选择科目班级登记考勤
                </h3>
            </div>
            <div class="modal-body">
                <lb-systemmodule :module="item"></lb-systemmodule>
            </div>
            <div class="modal-footer text-center">
                <button class="btn btn-primary">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectmoulde',
    data() {
        return {
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>