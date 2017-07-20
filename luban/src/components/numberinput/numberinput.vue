<template>
    <input v-model="numbervalue" type="number" @blur="changeNum" @change="updateValue">
</template>
<script>
export default {
    props: ['value'],
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
        }
    },

    computed: {
    }
}
</script>
