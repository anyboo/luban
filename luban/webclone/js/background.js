setTimeout(function() {
    //console.log(document.all.length, document.styleSheets[0])

    //for (var i in document.styleSheets[0]) {
    //console.log(i)
    //}
    //console.log($("html"))
    //$.get('http://app.bullstech.cn:9999/api/glassmanage', function(data) {
    //    console.log(data)
    //})
    var all = $("html")
    var html = []
    console.log(all)
    let count = 0

    function getHtml(all, newhtml) {
        let onehtml = {}
        count++
        onehtml.tagName = all.tagName
        let attr = []
        for (let i = 0; i < all.attributes.length; i++) {
            let attrvalue = {}
            attrvalue.name = all.attributes[i].name
            attrvalue.value = all.attributes[i].value
            attr.push(attrvalue)
        }
        onehtml.attributes = attr
        if (all.classList) {
            let classes = []
            for (let i = 0; i < all.classList.length; i++) {
                let classvalue = {}
                classvalue.value = all.classList[i]
                classes.push(classvalue)
            }
            onehtml.classList = classes
        }
        if (all.style) {
            let styles = []
            for (let i = 0; i < all.style.length; i++) {
                let stylevalue = {}
                stylevalue[all.style[i]] = all.style[all.style[i]]
                styles.push(stylevalue)
            }
            onehtml.style = styles
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
    console.log(html, count)
}, 5000)
