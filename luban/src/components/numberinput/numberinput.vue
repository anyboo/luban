<template>
    <input v-model="numbervalue" type="number" @blur="changeNum" @change="updateValue">
</template>
<script>
export default {
    props: ['value'],
    name: 'LbNumberinput',
    data() {
        return {
            numbervalue: this.value
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
