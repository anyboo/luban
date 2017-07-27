export default {
    name: 'webapp',
    render: function (createElement) {
        return createElement(
            this.flag, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    data() {
        return {
            appdata: {}
        }
    },
    mounted() {
        this.$http.get('http://app.bullstech.cn:8888/webclone/api/eqxiu').then((req) => {
            if (req.data) {
                if (req.data && req.data.count > 0) {
                    this.unzip(req.data.data[0].info)
                }
            }
        })
    },
    props: {
        flag: {
            type: String,
            default: 'h1'
        }
    },
    methods: {
        unzip(data) {
            try {
                JSZip.loadAsync(data, { base64: true })
                    .then((zip) => {
                        return zip.file("info.dat").async("string")
                    })
                    .then((info) => {
                        this.appdata = JSON.parse(info)
                        this.startapp()
                        console.log(this.appdata)
                    }, (e) => {
                        console.log(e)
                    });
            } catch (e) {
                console.log(e)
            }
        },
        startapp() {

        }
    }
}
