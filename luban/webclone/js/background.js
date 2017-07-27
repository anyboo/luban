setTimeout(function () {
    let webInfo = window.lubaninfo()
    window.lubanui()
    window.lubandomchange('html')
    var zip = new JSZip()
    zip.file("info.dat", JSON.stringify(webInfo))
        .generateAsync({ type: "base64" })
        .then(function (base64) {
            $.post('http://app.bullstech.cn:8888/webclone/api/eqxiu', { info: base64 }, function (data) {
                console.log(data)
            })
        })

}, 3000)
