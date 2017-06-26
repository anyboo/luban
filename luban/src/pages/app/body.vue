<template>
    <div class="grid">
        <div class="grid-item">...</div>
        <div class="grid-item grid-item--width2">...</div>
        <div class="grid-item">...</div>
    </div>
</template>
<script>
export default {
   name: 'login',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    methods: {
        handleClick(action){
            this.$emit('viewChange',action)
        }
    }
}
</script>