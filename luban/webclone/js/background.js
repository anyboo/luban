setTimeout(function () {
    $.get('http://app.bullstech.cn:8888/webclone/api/glassmanage', function(data) {
        console.log(data)
    })
    window.lubaninfo()
    window.lubanui()
    window.lubandomchange('html')
}, 3000)
