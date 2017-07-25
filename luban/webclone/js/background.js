setTimeout(function () {
    //$.get('http://app.bullstech.cn:9999/api/glassmanage', function(data) {
    //    console.log(data)
    //})
    let lubanclone = {}
    let cssAll = document.styleSheets
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
    lubanclone.cssall = cssAll
    console.log(csstotal)

    function getData(cssStyle) {
        let oneData = []
        for (let i = 0; i < cssStyle.length; i++) {
            for (let j = 0; j < cssStyle[i].cssRuleses.length; j++) {
                let cssindex = i + '-' + j
                let cssstr = cssStyle[i].cssRuleses[j].selectorText
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
    getData(csstotal)
    //html
    var all = $("html")
    console.log(all)
    var html = []
    function getHtml(all, newhtml) {
        let onehtml = {}
        onehtml.tagName = all.tagName
        onehtml.id = all.id
        onehtml.dataset = {}
        if (all.dataset) {
            for (let item in all.dataset) {
                onehtml.dataset[item] = all.dataset[item]
            }
        }
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
}, 3000)
