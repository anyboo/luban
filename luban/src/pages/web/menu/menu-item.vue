<template>
    <li :class="{ active: isActive }">
        <a @click="handleClick">
            <i class="fa" :class="menuIcon">
                <div class="icon-bg bg-orange" />
            </i>
            <span :class="submenu">{{ menuTitle }}</span>
            <span v-if="submenu=='menu-title'" class="fa arrow"></span>
        </a>
        <slot></slot>
    </li>
</template>   
<script>
export default {
    name: 'MenuItem',
    componentName: 'MenuItem',
    props: ['menuName', 'menuTitle', 'menuIcon', 'to', 'component', 'componentData', 'submenu'],
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handChange() {
            this.isActive = false
            var obj = this.getSlots()
            if (obj) {
                obj.menuChanged(this.isActive)
                this.changAction(obj, 0)
            }
        },
        getSlots() {
            var obj = null
            if (this.$slots.default && this.$slots.default.length > 0) {
                obj = this.$slots.default[0].componentInstance
            }
            return obj
        },
        changAction(obj, uid) {
            if (obj) {
                obj.$children.forEach(child => {
                    if (child._uid !== uid) {
                        if (typeof (child.handChange) == 'function')
                            child.handChange()
                    }
                })
            }
        },
        handleClick(event) {
            this.isActive = !this.isActive
            this.changAction(this.$parent, this._uid)
            var obj = this.getSlots()
            if (obj) {
                obj.menuChanged(this.isActive)
                if (event) event.preventDefault()
            } else {
                if (this.to) {
                    this.$store.commit('router', this.to)
                }
            }
        }
    }
}
</script>
