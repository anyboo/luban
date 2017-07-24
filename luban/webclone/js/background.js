setTimeout(function () {
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
        onehtml.classList = all.classList
        onehtml.tagName = all.tagName
        //console.log(onehtml.tagName)
        onehtml.children = []
        if (all.children) {
            for (var i = 0; i < all.children.length; i++) {
                getHtml(all.children[i], onehtml.children)
            }
        }
        newhtml.push(onehtml)
    }
    getHtml(all[0], html)
    console.log(html,count)
}, 5000)
