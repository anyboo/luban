<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    <i class="fa fa-flag-checkered"></i>设计</h3>
            </div>
            <div class="modal-body">
                <lb-systemmodule :module="module" :info="true" @tablechange="dialogData"></lb-systemmodule>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="handleOk">确定</button>
                <button class="btn btn-warning m-l-xs" @click="lbClosedialog()">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
import systemmodule from '~/pages/views/system/module.vue'

export default {
    name: 'dialogmodule',
    props: ['module'],
    data() {
        return {
            currentRow: null,
            currDialog: '',
        }
    },
    components: { 'lb-systemmodule': systemmodule },
    methods: {
        dialogData(val) {
            this.currentRow = val.row
            this.currDialog = val.dialog
        },
        handleOk() {
            this.lbClosedialog()
            this.$store.state.envs.currDialogResult = this.currentRow
            this.$store.state.envs.currDialog = this.currDialog
        }
    }
}
</script>
