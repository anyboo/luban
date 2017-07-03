<template>
    <div>
        <template v-for="item,index in new Array(8)">
            <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppablea b">
                <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
                <div class="hte-shortcut-name">快递100</div>
            </div>
        jjj
            {{item}}
        </template> 
    </div>
</template>
<style>
.hte-shortcut-icon img {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
}

.hte-shortcut-name {
    margin-top: 20px;
    margin-left: 20px;
}

.hte-shortcut .hte-shortcut-name {
    margin-top: 5px;
    margin-left: 16px;
    font-size: #fff;
}
</style>
<script>
export default {
    name: 'login',
    data() {
        let localdata = {}
        return {
            localdata,
            Array: ''
        }
    },

    mounted() {

    },
    methods: {}
}
</script>
