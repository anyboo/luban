const https = require('https')
const http = require('http')

module.exports.ajax = function (options, body, html) {
    return new Promise(function (resolve) {
        let data = ''
        const req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', (d) => {
                data+=d.toString()
            })
        })
        if (options.method == 'POST') {
            req.write(body)
        }
        req.on('error', (e) => {
            console.error(e)
        });
        req.end(() => {
            try {
                console.log()
                let reqdata = data
                if (html) {
                    
                } else {
                    reqdata = JSON.parse(data.toString())
                }
                resolve(data)
            } catch (e) {
                console.log(e)
            }
        })
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