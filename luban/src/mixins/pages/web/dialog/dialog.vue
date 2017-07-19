<template>
    <div tabindex="-1" class="modal fade in" :style="{ 'z-index': zindex, 'display': 'block'}">
        <slot>未加载</slot>
    </div>
</template>
<script>
export default {
    name: 'dialog',
    props: ['zindex'],
    data() {
        return {
        }
    }
}
</script>