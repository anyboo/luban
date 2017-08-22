<template>
    <el-input placeholder="请输入数字" v-model="numbervalue" @blur="changeNum" @change="updateValue">
        <template slot="append">{{text}}</template>
    </el-input>
</template>
<script>
export default {
    props: ['value','text'],
    name: 'LbNumberinput',
    data() {
        return {
            numbervalue: Number(this.value)
        }
    },
    watch: {
        value: function (val) {
            this.numbervalue = Number(val)
            if (this.numbervalue < 0) {
                this.numbervalue = 0
            }
        }
    },
    methods: {
        changeNum() {
            this.numbervalue = Number(this.numbervalue)
        },
        updateValue() {
            if (Number(this.numbervalue) < 0) {
                this.numbervalue = 0
            }
            this.$emit('input', this.numbervalue)
            this.$emit('change', this.numbervalue)
        }
    },

    computed: {
    }
}
</script>
