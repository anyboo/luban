<template >
    <div class="shortcut-icon" @mousedown='handleMousedown($event)'>
        <div class="shortcut-img">
            <i :style="{'color': $store.state.system.theme}" class="fa fa-2x" :class="icondata.menuIcon"></i>
        </div>
        <div class="shortcut-name">{{icondata.menuTitle}}</div>
    </div>
</template>
 <style>
.shortcut-icon {
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    padding-top: 10px;
    line-height: 35px;
    position: absolute;
    border: 1px solid transparent;
    overflow-y: hidden;
}

div.shortcut-icon:hover {
    border: 1px solid rgba(65, 152, 235, 0.6);
    background: rgba(65, 152, 235, 0.3)
}

.shortcut-img {
    text-align: center;
}

.shortcut-name {
    margin-top: 4px;
    text-align: center;
    color: #fff;
    font-size: 15px;
}
</style>
 <script>

export default {
    name: 'icon',
    props: ['icondata'],
    data() {
        let localdata = {}
        return {
            localdata,
            disx: 0,
            disy: 0,
        }
    },
    mounted() {
        let height = this.$parent.$el.clientHeight
        let index = this.icondata.index
        let col = Math.floor(height / 80)
        let iconcol = index % col
        let iconrow = Math.floor(index / col)
        this.$el.style.left = Math.max(iconrow * 80, 0) + 'px'
        this.$el.style.top = Math.max(iconcol * 80, 0) + 'px'
    },
    methods: {
        addListener(element, e, fn) {
            element.addEventListener ? element.addEventListener(e, fn, false) : element.attachEvent("on" + e, fn)
        },
        removeListener(element, e, fn) {
            element.removeEventListener ? element.removeEventListener(e, fn, false) : element.detachEvent("on" + e, fn)
        },
        handleMousedown: function (ev) {
            console.log('handleMousedown')
            this.disx = ev.clientX - this.$el.offsetLeft || 0
            this.disy = ev.clientY - this.$el.offsetTop || 0
            this.addListener(window, 'blur', this.handleMouseUp)
            this.addListener(document, 'mousemove', this.handleMouseMove)
            this.addListener(document, 'mouseup', this.handleMouseUp)
        },
        handleMouseMove(ev) {
            console.log('handleMouseMove')
            let i_x = ev.clientX - this.disx
            let i_y = ev.clientY - this.disy
            this.$el.style.left = Math.max(i_x, 0) + 'px'
            this.$el.style.top = Math.max(i_y, 0) + 'px'
        },
        handleMouseUp(ev) {
            console.log('handleMouseUp')
            this.removeListener(document, 'mousemove', this.handleMouseMove)
            this.removeListener(document, 'mouseup', this.handleMouseUp)
            this.removeListener(window, "blur", this.handleMouseUp)
        },
    }
}
</script>
 

        
