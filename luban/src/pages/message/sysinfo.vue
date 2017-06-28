<template>
    <div class="messager-body">
        <p>感谢您关注HteOS，HteOS是一个全新的Web桌面应用开发框架！</p>
        <ul>
            <li>全新UI设计、多套皮肤，使用动态磁贴技术灵活配置，完美适配PC端和移动端</li>
            <li>模块化开发模式，使用SASS进行CSS皮肤设置，使用Grunt自动编译生成文档</li>
            <li>磁贴和图标两种桌面模式，兼容Chrome、Firefox、Edge、IE8+等主流浏览器</li>
            <li>纯前端框架，不依赖于后台语言，与Java、.NET、PHP等服务器平台无缝集成</li>
        </ul>
        <p>如果您对HteOS有问题或者提出宝贵的意见，联系QQ：17692499
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=17692499&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:17692499:52" alt="购买咨询" title="购买咨询">
            </a>
        </p>
        <div class="messager-buttons">
            <div class="messager-tip" style="display: inline-block;"></div>
            <button class="btn messager-btn btn-default" @click="handleClick">确定</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sysinfo',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    methods: {
         handleClick() {
            this.$emit('messageclose')
        }
    }
}
</script>