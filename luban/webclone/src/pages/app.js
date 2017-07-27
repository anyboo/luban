export default {
    name: 'webapp',
    render: function (h) {
        console.log('render')
        this.createElement = h
        return h(
            'div',
            this.appdata
        )
    },
    data() {
        return {
            appdata: [],
            createElement: null,
            noTag: ['HTML', 'BODY', 'HEAD', 'STYLE', 'META', 'BASE', 'TITLE', 'LINK', 'SCRIPT', 'CHICKEN', 'EQX-UI-FOOTER'],
            nodeType: [
                { type: 'null', comment: '无元素', node: '' },
                { type: 'Element', comment: '代表元素', node: 'Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference' },
                { type: 'Attr', comment: '代表属性', node: 'Text, EntityReference' },
                { type: 'Text', comment: '代表元素或属性中的文本内容', node: 'None' },
                { type: 'CDATASection', comment: '代表文档中的 CDATA 部分（不会由解析器解析的文本）', node: 'None' },
                { type: 'EntityReference', comment: '代表实体引用', node: 'Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference' },
                { type: 'Entity', comment: '代表实体', node: 'Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference' },
                { type: 'ProcessingInstruction', comment: '代表处理指令', node: 'None' },
                { type: 'Comment', comment: '代表注释', node: 'None' },
                { type: 'Document', comment: '代表整个文档（DOM 树的根节点)', node: 'Element, ProcessingInstruction, Comment, DocumentType' },
                { type: 'DocumentType', comment: '向为文档定义的实体提供接口', node: '	None' },
                { type: 'DocumentFragment', comment: '代表轻量级的 Document 对象，能够容纳文档的某个部分', node: 'Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference' },
                { type: 'Notation', comment: '代表 DTD 中声明的符号', node: 'None' }
            ]
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
    methods: {
        unzip(data) {
            try {
                JSZip.loadAsync(data, { base64: true })
                    .then((zip) => {
                        return zip.file("info.dat").async("string")
                    })
                    .then((info) => {
                        let infodata = JSON.parse(info)
                        this.appdata = this.startapp(infodata.html)
                        this.$forceUpdate()
                    }, (e) => {
                        console.log(e)
                    });
            } catch (e) {
                console.log(e)
            }
        },
        startapp(root) {
            let elementArray = []
            for (var key in root) {
                let item = root[key]
                if (this.noTag.indexOf(item.tagName) == -1) {
                    let nodetype = this.nodeType[item.nodeType] ? this.nodeType[item.nodeType].type : ''
                    if (nodetype == 'Element') {
                        let elementItem = this.createElement(item.tagName, this.startapp(item.children))
                        elementArray.push(elementItem)
                    } else if (nodetype == 'Text') {
                        let elementItem = item.data.trim()
                        elementArray.push(elementItem)
                    } else if (nodetype == 'Comment') {
                    }
                } else {
                    elementArray = elementArray.concat(this.startapp(item.children))
                }
            }
            return elementArray
        }
    }
}
