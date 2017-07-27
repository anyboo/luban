window.lubaninfo = function () {
    let lubanclone = {}
    lubanclone.location = window.location
    let cssAll = document.styleSheets
    console.log($("html"))
    let csstotal = {}
    function getCss(css) {
        var csses = []
        for (var i = 0; i < cssAll.length; ++i) {
            let cssitem = cssAll[i]
            let onecss = {}
            onecss.cssRuleses = []
            onecss.href = cssitem.href
            for (var j = 0; j < cssitem.cssRules.length; ++j) {
                let csssubitem = cssitem.cssRules[j]
                let cssvalue = {}
                cssvalue.cssstyle = []
                cssvalue.cssText = csssubitem.cssText
                cssvalue.selectorText = csssubitem.selectorText
                cssvalue.type = csssubitem.type
                cssvalue.elcount = 0
                if (csssubitem.style) {
                    for (let h = 0; h < csssubitem.style.length; ++h) {
                        let styles = {}
                        styles[csssubitem.style[h]] = csssubitem.style[csssubitem.style[h]]
                        cssvalue.cssstyle.push(styles)
                    }
                }
                onecss.cssRuleses.push(cssvalue)
            }
            csses.push(onecss)
        }
        csstotal = csses
    }
    getCss(cssAll)
    lubanclone.cssall = csstotal
    console.log(csstotal)
    //标记编号
    function getDataCss(all) {
        for (var i = 0; i < all.length; i++) {
            let dataitem = all[i]
            for (var j = 0; j < dataitem.cssRuleses.length; j++) {
                let cssindex = i + "-" + j
                let cssstr = dataitem.cssRuleses[j].selectorText
                if ($(cssstr).length > 0) {
                    let datacss = $(cssstr).attr("data-css")
                    if (datacss) {
                        if (datacss.length == 0) {
                            datacss += cssindex
                        } else {
                            datacss += "|" + cssindex
                        }
                    } else {
                        datacss = cssindex
                    }
                    $(cssstr).attr("data-css", datacss)
                }
            }
        }
    }
    getDataCss(csstotal)
    //获取标签数据
    var all = $("html")
    function getHtml(root) {
        let nodeitem = {}
        nodeitem.tagName = root.tagName ? root.tagName : ''
        nodeitem.nodeType = root.nodeType ? root.nodeType : 0
        nodeitem.id = root.id ? root.id : ''
        nodeitem.data = root.data ? root.data : ''
        if (root.attributes) {
            let attr = []
            for (let i = 0; i < root.attributes.length; i++) {
                let attrvalue = {}
                attrvalue.name = root.attributes[i].name
                attrvalue.value = root.attributes[i].value
                attr.push(attrvalue)
            }
            if (attr != "") {
                nodeitem.attributes = attr
            }
        }
        if (root.classList) {
            let classes = []
            for (let i = 0; i < root.classList.length; i++) {
                let classvalue = {}
                classvalue.value = root.classList[i]
                classes.push(classvalue)
            }
            if (classes != "") {
                nodeitem.classList = classes
            }
        }
        if (root.style) {
            let styles = []
            for (let i = 0; i < root.style.length; i++) {
                let stylevalue = {}
                stylevalue[root.style[i]] = root.style[root.style[i]]
                styles.push(stylevalue)
            }
            if (styles != "") {
                nodeitem.style = styles
            }
        }
        nodeitem.dataset = {}
        if (root.dataset) {
            for (let item in root.dataset) {
                nodeitem.dataset[item] = root.dataset[item]
            }
        }
        nodeitem.children = []
        if (root.children) {
            for (var i = 0; i < root.childNodes.length; i++) {
                if (root.childNodes[i]) {
                    nodeitem.children.push(getHtml(root.childNodes[i]))
                }
            }
        }
        return nodeitem
    }
    let lubanhtml = []
    lubanhtml.push(getHtml(all[0]))
    lubanclone.html = lubanhtml

    console.log(lubanhtml)

    var lubanNodeType = [
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
    let noTag = ['STYLE', 'META', 'BASE', 'TITLE', 'LINK', 'SCRIPT']
    let clssAttr = [{ oldtag: 'ng-class', tag: 'class' }]

    function formatHTML(root) {
        let html = ''
        for (var key in root) {
            let item = root[key]
            if (noTag.indexOf(item.tagName) == -1) {
                let nodetype = lubanNodeType[item.nodeType].type
                if (nodetype == 'Element') {
                    let htmlbegin = '<'
                    let htmlend = '</'
                    htmlbegin += item.tagName
                    htmlend += item.tagName
                    /*
                    let tagClass = ""
                    for (let j = 0; j < html[i].attributes.length; j++) {
                        let index = _.findIndex(clssAttr, { 'oldtag': html[i].attributes[j].name })
                        if (index != -1) {
                            tagClass = `${clssAttr[index].tag}="${html[i].attributes[j].value}"`
                        }
                    }
                    for (var attritem in item.attributes) {
                        htmlbegin += ' '
                        htmlbegin += item.attributes[attritem].name
                        if (item.attributes[attritem]) {
                            htmlbegin += '="'
                            htmlbegin += item.attributes[attritem].value
                            htmlbegin += '"'
                        }
                    }*/
                    htmlbegin += '>'
                    htmlend += '>'
                    var htmlcontext = formatHTML(item.children)
                    htmlbegin += htmlcontext
                    htmlbegin += htmlend
                    html += htmlbegin
                } else if (nodetype == 'Text') {
                    html += item.data.trim()
                } else if (nodetype == 'Comment') {
                }
            }
        }
        return html
    }
    //输出页面
    console.log(formatHTML(lubanhtml))
    return lubanclone
}
