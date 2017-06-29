<template>
    <div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppablea">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppableb">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppablec">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppabled">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppablee">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppablef">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppableg">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
        <div class="hte-shortcut ui-draggable ui-draggable-handle ui-droppableh">
            <div class="hte-shortcut-icon"><img src="/assets/images/logo.png"></div>
            <div class="hte-shortcut-name">快递100</div>
        </div>
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

.ui-droppablea {
    top: 85px;
    left: 30px;
    opacity: 1;
}

.ui-droppableb {
    top: 185px;
    left: 30px;
    opacity: 1;
}

.ui-droppablec {
    top: 285px;
    left: 30px;
    opacity: 1;
}

.ui-droppabled {
    top: 385px;
    left: 30px;
    opacity: 1;
}

.ui-droppablee {
    top: 85px;
    left: 120px;
    opacity: 1;
}

.ui-droppablef {
    top: 185px;
    left: 120px;
    opacity: 1;
}

.ui-droppableg {
    top: 285px;
    left: 120px;
    opacity: 1;
}

.ui-droppableh {
    top: 385px;
    left: 120px;
    opacity: 1;
}

.hte-shortcut {
    position: absolute;
    height: 72px;
    width: 72px;
    color: #fff;
    cursor: pointer;
    transition-property: transform, left, top;
    transition-duration: .2s;
}

.hte-shortcut-icon img {
    width: 40px;
    height: 40px;
}

.hte-shortcut .hte-shortcut-name {
    margin-top: 5px;
    margin-left: -5px;
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
    methods: {}
}
</script>
