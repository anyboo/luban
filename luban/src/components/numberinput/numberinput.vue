<template>
    <el-input  placeholder="请输入数字" v-model="numbervalue" @blur="changeNum" @change="updateValue">
        <template slot="append">{{text}}</template>
    </el-input>
</template>
<script>
export default {
    props: ['value', 'text'],
    name: 'LbNumberinput',
    data() {
        return {
            numbervalue: Number(this.value)
        }
    },
    watch: {
        value: function (val) {
            this.numbervalue = Number(val)
            if (Number.isNaN(this.numbervalue)) {
                this.numbervalue = ''
            } else if (this.numbervalue < 0) {
                this.numbervalue = Math.abs(this.numbervalue)
            }
        }
    },
    methods: {
        changeNum() {
            this.numbervalue = Number(this.numbervalue)
            if (Number.isNaN(this.numbervalue)) {
                this.numbervalue = ''
            } else if (this.numbervalue < 0) {
                this.numbervalue = Math.abs(this.numbervalue)
            }
        },
        updateValue(val) {
            this.numbervalue = Number(val)
            if (Number.isNaN(this.numbervalue)) {
                this.numbervalue = ''
            } else if (this.numbervalue < 0) {
                this.numbervalue = Math.abs(this.numbervalue)
            }
            this.$emit('input', this.numbervalue)
            this.$emit('change', this.numbervalue)
        }
    },

    computed: {
    }
}
</script>
