<template>
    <div class="wallpaper">
        <img class="wallpaper-image" src="/assets/wallpager/wood.jpg"  @click="handleClick">
        <img class="wallpaper-image-back">
    </div>
</template>
<style>
.wallpaper {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: -100;
}

.wallpaper-image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.wallpaper-image-back {
    position: absolute;
    display: none;
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
        }
    },
    methods: {
        handleClick() {
            this.$emit('dockhidden')
        }
    }
}
</script>