const https = require('https')
const http = require('http')
const BufferHelper = require('bufferhelper')

module.exports.ajax = function (options, body, html = false, encoding = 'utf-8') {
    return new Promise(function (resolve) {
        var bufferHelper = new BufferHelper()
        const req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', (d) => {
                bufferHelper.concat(d)
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
                let data = []
                if (encoding != 'utf-8') {
                    data = iconv.decode(bufferHelper.toBuffer(), encoding)
                } else {
                    data = bufferHelper.toString()
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