<template>
    <div class="messager-body">
        <p>感谢您关注Luban-——与众不同的教育平台</p>
        <ul>
            <li>专门针对教育培训机构运营管理研发的一套全流程信息化管理系统</li>
            <li>涵盖招生、教务、财务、数据分析、家校互通、公众号管理六大模块</li>
            <li>以“学员“为核心，链接老师、家长和培训机构，帮助培训机构科学管理</li>
            <li>有效提升员工产能，降低运营成本，实现全流程可管理、可监控、可追溯的高质量信息化管理体系</li>
        </ul>
        <p>如果您对Luban有问题或者提出宝贵的意见!<!-- ，联系QQ：1234567 -->
           <!--  <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=17692499&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:17692499:52" alt="购买咨询" title="购买咨询">
            </a> -->
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