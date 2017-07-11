<template>
    <ul class='lbSdebarUlStyle'>
            <li>
                <i class="fa fa-users"></i>
                <span>学员</span>
                <lb-menu class="lbSdebarMenu lbSdebarMenuF"> </lb-menu>
            </li>
            <li>
                <i class="fa fa-book"></i>
                <span>课程</span>
                <lb-menu class="lbSdebarMenu  lbSdebarMenuF"> </lb-menu>
            </li>
            <li>
                <i class="fa fa-money"></i>
                <span>学费</span>
                <lb-menu class="lbSdebarMenu"> </lb-menu>
            </li>
            <li>
                <i class="fa fa-tachometer"></i>
                <span>收支</span>
                <lb-menu class="lbSdebarMenu"> </lb-menu>
            </li>
            <li>
                <i class="fa fa-cog"></i>
                <span>设置</span>
                <lb-menu class="lbSdebarMenu"> </lb-menu>
            </li>
        </ul>
</template>
<style>
.lbSdebarUlStyle {
    width: 100%;
    padding: 0px;
    margin: 0px;
}
.lbSdebarUlStyle li {
    width: 100%;
    padding-top: 12px;
    color: white;
    border-bottom: 1px solid #374d63;
    cursor: pointer;
}
.lbSdebarUlStyle li:hover {
    background: #e74c3c;
    transition: 0.3s all ease-in-out;
}
.lbSdebarUlStyle li i {
    margin-left: 15px;
}
.lbSdebarUlStyle li span {
    display: inline-block;
    margin-left: 10px;
    padding-bottom: 12px;
}
.lbSdebarMenu {
    padding: 0;
    margin: 0;
    background: #2a3b4c;
}
.lbSdebarMenuT {
    display: block;
}
.lbSdebarMenuF {
    display: none;
}
.lbSdebarMenu li {
    padding-bottom: 12px;
}
.lbSdebarMenu li i {
    margin-left: 45px;
}
.lbSdebarMenu li span {
    padding: 1.5px 0;
}
</style>
<script>
import menu from '../menu/menu.vue'
export default {
    name: 'mensidebarItem',
    data() {
        return {
        }
    },
    components: {
        'lb-menu': menu,
    },
    methods: {
    }
}
</script>