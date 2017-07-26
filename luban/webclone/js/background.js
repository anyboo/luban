setTimeout(function() {
    //$.get('http://app.bullstech.cn:9999/api/glassmanage', function(data) {
    //    console.log(data)
    //})
    //提取css数据
    let lubanclone = {}
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
    var html = []

    function getHtml(all, newhtml) {
        $('*').bind('click', function() { $(this).css("color", "green") })
        let onehtml = {}
        onehtml.tagName = all.tagName
        onehtml.id = all.id
        if (all.attributes) {
            let attr = []
            for (let i = 0; i < all.attributes.length; i++) {
                let attrvalue = {}
                attrvalue.name = all.attributes[i].name
                attrvalue.value = all.attributes[i].value
                attr.push(attrvalue)
            }
            if (attr != "") {
                onehtml.attributes = attr
            }
        }
        if (all.classList) {
            let classes = []
            for (let i = 0; i < all.classList.length; i++) {
                let classvalue = {}
                classvalue.value = all.classList[i]
                classes.push(classvalue)
            }
            if (classes != "") {
                onehtml.classList = classes
            }
        }
        if (all.style) {
            let styles = []
            for (let i = 0; i < all.style.length; i++) {
                let stylevalue = {}
                stylevalue[all.style[i]] = all.style[all.style[i]]
                styles.push(stylevalue)
            }
            if (styles != "") {
                onehtml.style = styles
            }
        }
        onehtml.dataset = {}
        if (all.dataset) {
            for (let item in all.dataset) {
                onehtml.dataset[item] = all.dataset[item]
            }
        }
        onehtml.children = []
        if (all.children) {
            for (var i = 0; i < all.children.length; i++) {
                getHtml(all.children[i], onehtml.children)
            }
        }
        newhtml.push(onehtml)

    }
    getHtml(all[0], html)
    lubanclone.html = html
    console.log(html)

}, 5000)