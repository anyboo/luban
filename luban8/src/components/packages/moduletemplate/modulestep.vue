<template>
    <div class="modal-dialog">
        <div class="modal-content" style='height:auto;'>
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog()">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    {{title}}</h3>
            </div>
            <div class="modal-body" style='height:auto;'>
                <el-steps :center="true" :active="steps" finish-status="success">
                    <template v-for="item in module.stepsInfo">
                        <el-step :title="item.label"></el-step>
                    </template>
                </el-steps>
                <hr class="hrstyle">
                <template v-if="moduletype==1">
                    <lb-moduletable ref="table" :module="moduleobj" :info="true" @tablechange="dialogData" :stepsdata="currobj[steps-1]"></lb-moduletable>
                </template>
                <template v-if="moduletype==2">
                    <lb-moduleform ref="ruleForm" :module="moduleobj" :stepsdata="currobj[steps-1]"></lb-moduleform>
                </template>
                <template v-if="moduletype==3">
                    <lb-blank @blankmounted="blankmounted">
                    </lb-blank>
                </template>
                <template v-if="moduletype==4">
                    <component v-bind:is="view" :stepsdata="currobj[steps-1]"></component>
                </template>
            </div>
            <div class="modal-footer">
                <el-button class="btn btn-primary" @click="back()" v-if="backDisabled">上一步</el-button>
                <el-button class="btn btn-primary" @click="next()" v-if="nextDisabled">下一步</el-button>
                <template v-for="button in buttons">
                    <el-button class="btn btn-primary" @click="buttonExec(button)">{{button.text}}</el-button>
                </template>
                <el-button class="btn btn-warning" @click="lbClosedialog($event)">关闭</el-button>
            </div>
        </div>
    </div>
</template>
<style>
.hrstyle {
    margin-bottom: 10px;
}
</style>

<script>
import pagesmodule from '~/stores/moduledialog.js'
import moduleform from '~/stores/moduleform.js'
import blank from '~/pages/app/blank.vue'
import dialogpages from '~/stores/dialogpages.js'

dialogpages['lb-blank'] = blank

export default {
    name: 'LbModulestep',
    props: ['module'],
    components: dialogpages,
    data() {
        return {
            steps: 1,
            moduletype: 0,
            modulechange: false,
            moduleobj: {},
            stepCount: this.module.stepsInfo ? this.module.stepsInfo.length : 1,
            currobj: {},
            nextDisabled: false,
            backDisabled: false,
            buttons: [],
            view: ''
        }
    },
    mounted() {
        this.getModuleData
        this.getNextDisabled()
    },
    computed: {
        title() {
            let text = this.module.pageLable
            if (this.module.student) {
                text = this.getStudentName() + '学员' + this.module.pageLable
            }
            return text
        },
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
            } else {
                this.view = tomodule
                this.moduletype = 4
            }
            return this.moduleobj
        }
    },
    methods: {
        getButtons() {
            let buttons = []
            if (this.module.stepsInfo[this.steps - 1].buttons) {
                buttons = this.module.stepsInfo[this.steps - 1].buttons
            }
            this.buttons = buttons

            console.log(this.buttons)
        },
        buttonExec(button) {
            if (button.exec) {
                button.exec(this)
            }
        },
        getNextDisabled() {
            let disabled = false
            if (this.steps > 0 && this.steps < this.stepCount) {
                if (this.currobj[this.steps] && this.currobj[this.steps]._id) {
                    disabled = true
                }
                if (this.moduletype == 2) {
                    disabled = false
                }
            }
            this.nextDisabled = disabled
        },
        getBackDisabled() {
            let disabled = false
            if (this.steps > 1) {
                disabled = true
            }
            if (this.moduletype == 4) {
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
                if (this.moduletype == 2) {
                    this.$refs['ruleForm'].append().then(obj => {
                        this.currobj[this.steps] = obj
                        this.steps++
                        this.getModuleData
                        this.getNextDisabled()
                        this.getBackDisabled()
                        this.getButtons()
                    })
                } else {
                    this.steps++
                    this.getModuleData
                    this.getNextDisabled()
                    this.getBackDisabled()
                    this.getButtons()
                }
            }
        },
        back() {
            if (this.steps > 1) {
                this.steps--
                this.getModuleData
            }
            this.currobj[this.steps] = null
            this.getNextDisabled()
            this.getBackDisabled()
            this.getButtons()
        }
    }
}
</script>
