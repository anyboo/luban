const https = require('https')
const http = require('http')

module.exports.ajax = function (options, body,html) {
    return new Promise(function (resolve) {

        const req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', (d) => {
                try {
                    console.log(d.toString())
                    let data = {}
                    if (html){
                        data = d.toString()
                    }else{
                        data = JSON.parse(d.toString())
                    }
                    resolve(data)
                } catch (e) {
                    console.log(e)
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