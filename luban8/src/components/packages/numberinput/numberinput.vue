<template>
    <el-input type="number" :disabled="disabled" placeholder="请输入数字" :value="numbervalue" @change="updateValue">
        <template slot="append">
            <div>{{text}}</div>
        </template>
    </el-input>
</template>
<script>
export default {
    props: ['value', 'text', 'field', 'disabled', 'min', 'max'],
    name: 'LbNumberinput',
    data() {
        return {
            numbervalue: Number(this.value),
            newnumbervalue:Number(this.value),
            nummin: this.min ? this.min : 0,
            nummax: this.max ? this.max : Number.MAX_VALUE
        }
    },
    watch: {
        value: function(val) {
            this.newnumbervalue = val
            this.changeNumber(val)
        },
        max:function(val){
            this.nummax = val
             this.changeNumber(this.newnumbervalue)
        }
    },
    methods: {
        changeNumber(val) {
            this.numbervalue = Number(val)
        console.log(this.numbervalue)
            if (Number.isNaN(this.numbervalue)) {
                this.numbervalue = ''
            } else if (this.numbervalue < this.nummin) {
                this.numbervalue = ''//this.nummin
            } else if (this.numbervalue > this.nummax) {
                this.numbervalue = ''//this.nummax
            }
        },
        updateValue(val) {
            this.changeNumber(val)
            this.$emit('input', this.numbervalue)
            this.$emit('change', { val: this.numbervalue, field: this.field })
        }
    }
}
</script>
