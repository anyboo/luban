<template>
    <div>
        web
    </div>
</template>
<style>
</style>
<script>
export default {
    name: 'app',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>
