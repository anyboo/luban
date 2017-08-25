<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    {{module.pageLable}}</h3>
            </div>
            <div class="modal-body">
                <el-steps :center="true" :active="steps" finish-status="success">
                    <template v-for="item in module.stepsInfo">
                        <el-step  :title="item"></el-step>
                    </template>
                </el-steps>
                <template v-for="item in module.stepData"></template>
                <div v-if="item.step==1">
                    <lb-systemmodule :module="item.tableData" :info="true" @tablechange="dialogData"></lb-systemmodule>
                </div>
                <div v-if="item.step==2">
                    <lb-systemmodule :module="item.tableData" :info="true" @tablechange="dialogData"></lb-systemmodule>
                </div>
                <div v-if="item.step==3">
                    <lb-systemmodule :module="item.tableData" :info="true" @tablechange="dialogData"></lb-systemmodule>
                </div>
            </div>
            <div class="modal-footer">
                <el-button class="btn btn-primary" @click="handleSelectClass(false)" :disabled="getDisabled">上一步</el-button>
                <el-button class="btn btn-primary" @click="handleSelectClass(true)" :disabled="getDisabled">下一步</el-button>
                <el-button class="btn btn-warning" @click="lbClosedialog($event)">关闭</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import systemmodule from '~/pages/views/system/module.vue'
import modulestep from '~/stores/modulestep.js'

export default {
    name: 'modulestep',
    props: ['module'],
    components: { 'lb-systemmodule': systemmodule},
    data() {
        return {
            steps: 1,
            stepCount:this.module.stepData?this.module.stepData.length:1
        }
    },
    
    created() {
        
    },
    computed: {
        getDisabled(){

        }
    },
    methods: {
    }
}
</script>
