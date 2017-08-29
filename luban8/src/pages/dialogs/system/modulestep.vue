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
                        <el-step :title="item.label"></el-step>
                    </template>
                </el-steps>
                <hr class="hrstyle">
                <template v-if="moduletype==1">
                    <lb-systemmodule :module="moduleobj" :info="true" @tablechange="dialogData" :stepsdata="currobj[steps-1]"></lb-systemmodule>
                </template>
                <template v-if="moduletype==2">
                    <lb-dialogmmoduleform ref="ruleForm" :module="moduleobj"></lb-dialogmmoduleform>
                </template>
                <template v-if="moduletype==3">
                    <lb-blank @blankmounted="blankmounted">
                    </lb-blank>
                </template>
            </div>
            <div class="modal-footer">
                <el-button class="btn btn-primary" @click="back()" :disabled="backDisabled">上一步</el-button>
                <el-button class="btn btn-primary" @click="next()" :disabled="nextDisabled">{{nextTitle}}</el-button>
                <el-button class="btn btn-warning" @click="lbClosedialog($event)">关闭</el-button>
            </div>
        </div>
    </div>
</template>
<style>
.hrstyle{
    margin-bottom:10px;
}

</style>

<script>
import systemmodule from '~/pages/views/system/module.vue'
import dialogmmoduleform from './moduleform.vue'
import pagesmodule from '~/stores/moduledialog.js'
import moduleform from '~/stores/moduleform.js'
import blank from '~/pages/app/blank.vue'
export default {
    name: 'modulestep',
    props: ['module'],
    components: { 'lb-systemmodule': systemmodule, 'lb-dialogmmoduleform': dialogmmoduleform, 'lb-blank': blank },
    data() {
        return {
            steps: 1,
            moduletype: 0,
            modulechange: false,
            moduleobj: {},
            stepCount: this.module.stepsInfo ? this.module.stepsInfo.length : 1,
            currobj: {},
            nextDisabled: true,
            backDisabled: true,
            nextTitle: '下一步'
        }
    },
    mounted() {
        this.getModuleData
    },
    computed: {
        getModuleData() {
            let tomodule = this.module.stepsInfo[this.steps - 1].module
            if (pagesmodule[tomodule]) {
                this.moduleobj = pagesmodule[tomodule]
                if (this.moduletype == 1) {
                    this.moduletype = 3
                } else {
                    this.moduletype = 1
                }
            } else if (moduleform[tomodule]) {
                this.moduleobj = moduleform[tomodule]
                this.moduletype = 2
            }
            return this.moduleobj
        }
    },
    methods: {
        getNextDisabled() {
            let disabled = true
            if (this.steps > 0 && this.steps < this.stepCount) {
                if (this.currobj[this.steps] && this.currobj[this.steps]._id) {
                    disabled = false
                }
            }
            this.nextDisabled = disabled
        },
        getBackDisabled() {
            let disabled = true
            if (this.steps > 1) {
                disabled = false
            }
            this.backDisabled = disabled
        },
        blankmounted() {
            this.moduletype = 1
        },
        dialogData(val) {
            this.currobj[this.steps] = val.row
            this.getNextDisabled()
            //this.currentRow = 
            //this.currDialog = val.dialog
        },
        next() {
            if (this.steps < this.stepCount) {
                this.steps++
                this.getModuleData
            }
            this.getNextDisabled()
            this.getBackDisabled()
        },
        back() {
            if (this.steps > 1) {
                this.steps--
                this.getModuleData
            }
            this.currobj[this.steps] = null
            this.getNextDisabled()
            this.getBackDisabled()
        }
    }
}
</script>
