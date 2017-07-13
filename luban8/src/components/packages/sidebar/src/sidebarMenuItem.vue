<template>
    <li :class="getMenuClass" >
        <a @click="handleClick">
        <i class="fa" :class="menu.menuIcon"></i>
        <span >{{menu.menuTitle}}</span>
        </a>
        <slot></slot>
    </li>
</template>
<style>
    .cssStyle{
        color:#e74c3c;
    }
    .activeBg{
        background:#e74c3c;
    }
    .activeColor{
        color:#e74c3c;
    } 

    /* hover */
    .lbSdebarMenu>a:hover {
        background: #e74c3c;
        transition: 0.3s all ease-in-out;
    }
    .lbSdebarMenu.isActivec>a {
        background: #e74c3c;
        transition: 0.3s all ease-in-out;
    }
    .lbSdebarMenuItem {
        background: #2a3b4c;
    }
    .lbSdebarMenuItem>a{
        padding-top: 14px; 

    }
   .lbSdebarMenuItem>a i{
       margin-left:40px;
   } 
    .lbSdebarMenu.isActivec ul{
        display:block;
    }
    .lbSdebarMenu ul{
        display:none;
    }
    .lbSdebarMenuItem>a:hover{
        color:#e74c3c;
        transition: 0.3s all ease-in-out;
    }

    .lbSdebarMenuItem.isActivec>a {
        color: #e74c3c;
        transition: 0.3s all ease-in-out;
    }
</style>
<script>
export default{
    name:'sidebarMenuItem',
    componentName: 'MenuItem',
    props: ['menu'],
    data(){
        return{
        }
    },
    computed:{
        getMenuClass(){
            let css = {}
            css[this.menu.cssStyle] = true
            css.isActivec = this.menu.isActive
            return css
        }
    },
    methods:{
          handleClick() {
            this.$emit('menuchange',this.menu.index)
          }     
    }
}
</script>