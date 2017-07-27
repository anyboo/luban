export default {
    name: 'webapp',
    render: function (createElement) {
        return createElement(
            this.flag, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        flag: {
            type: String,
            default: 'h1'
        }
    }
}
