<template>
    <div class="grid-stack">
   
    </div>
</template>
 <style>
.grid-stack {
    height: 800px;
    z-index: 101;
}

.grid-stack-placeholder .grid-stack-item-content {
    background: #C90;
    z-index: 2;
}

.grid-stack-item-content:hover {
    border-color: hsla(0, 0%, 100%, 0.5);
    cursor: move;
}

.grid-stack-item-content {
    background: #C09;
    border: 2px solid hsla(0, 0%, 0%, 0.5);
}
</style>
<script>
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata
        }
    },
    mounted() {
     
    },
    methods: {
    }
}
</script>