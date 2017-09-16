const https = require('https')
const http = require('http')

module.exports.ajax = function (options, body, html = false, encoding = 'utf-8') {
    return new Promise(function (resolve) {
        var arrBuf = []
        var bufLength = 0
        const req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', (d) => {
                arrBuf.push(d)
                bufLength += d.length
            })
        })
        if (options.method == 'POST') {
            req.write(body)
        }
        req.on('error', (e) => {
            console.error(e)
        })
        req.on('close', (e) => {
            try {
                var chunkAll = Buffer.concat(arrBuf, bufLength);
                var data = ''
                if (encoding != 'utf-8') {
                    data = iconv.decode(chunkAll, encoding); // 汉字不乱码
                } else {
                    data = chunkAll
                }
                console.log(data)
                let reqdata = data
                if (html) {

                } else {
                    reqdata = JSON.parse(data.toString())
                }
                resolve(reqdata)
            } catch (e) {
                console.log(e)
            }
        })
        req.end()
    })
}
module.exports.ajaxhttp = function (options, body) {
    return new Promise(function (resolve) {
        const req = http.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', (d) => {
                try {
                    let data = JSON.parse(d.toString())
                    console.log(data)
                    resolve(data)
                } catch (e) {
                    resolve({})
                }
            })
        })
        if (options.method == 'POST') {
            req.write(body)
        }

        req.on('error', (e) => {
            console.error(e)
        });
        req.end()
    });
}