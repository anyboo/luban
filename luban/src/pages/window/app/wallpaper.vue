<template>
    <div class="wallpaper" @click="handleClick" ondragstart="return false;">
        <img class="wallpaper-image" :src="'/assets/wallpaper/'+$store.state.system.wallpaper">
    </div>
</template>
<style>
.wallpaper {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
}

.wallpaper-image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
</style>
<script>
export default {
    name: 'wallpaper',
    data() {
        let localdata = {}
        return {
            localdata,
            movetime: 60,
            engine: null
        }
    },
    mounted() {
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>