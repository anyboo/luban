<template>
<ul :class="classObject">
    <slot></slot>
</ul>
</template>
<script>
export default{
    name:'sidebarMenu',
    componentName: 'Menu',
    props: ['navlevel', 'collapse', 'menuname'],
    data(){
        return{
            classObject: {
                'nav-second-level ': (this.navlevel == '1'),
                'nav-third-level ': (this.navlevel == '2'),
                'collapse': this.collapse
            }
        }
    },
    methods:{
         menuChanged(isActive) {
            this.classObject.collapse = !isActive
        }
    }
}
</script>