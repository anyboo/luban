'use strict'
var crypto = require('crypto')
var parse = require('co-body')
var uploadparse = require('co-busboy')
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID
const jwt = require('jsonwebtoken')
var fs = require('fs')
var Buffer = require('buffer').Buffer
var path = require('path')
var dbstr = 'mongodb://localhost/'
const querystring = require('querystring')
var net = require('../../unit/net')

module.exports.wx = function* wx() {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '200kb'
    })
    console.log(model)
    let wxinfo = {}
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/sns/oauth2/access_token?appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf&code=' + model.code + '&grant_type=authorization_code',
        method: 'GET'
    }
    wxinfo = yield net.ajax(options)
    let wxobj = {}
    if (wxinfo) {
        wxobj.openid = wxinfo.openid
    }
    this.body = yield wxobj
}

module.exports.wxqrcode = function* wxqrcode(db, id, next) {
    if ('GET' != this.method) return yield next
    let wxinfo = {}
    let qcdata = { "action_name": "QR_LIMIT_SCENE", "action_info": { "scene": { "scene_id": id } } }
    let body = JSON.stringify(qcdata)
    console.log(body)
    let access_options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf',
        method: 'GET',
    }
    let access_info = {}
    access_info = yield net.ajax(access_options)
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/qrcode/create?access_token=' + access_info.access_token,
        method: 'POST',
        json: true,
        headers: {
            "content-type": "application/json",
            'Content-Length': body.length,
        }
    }
    wxinfo = yield net.ajax(options, body)
    this.body = yield wxinfo
}

module.exports.wxmenus = function* wxmenus() {
    if ('GET' != this.method) return yield next
        let access_smssend = {}
    let access_options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf',
        method: 'GET',
    }
    let access_info = {}
    access_info = yield net.ajax(access_options)
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/ticket/getticket?access_token=' + access_info.access_token+'&type=jsapi',
        method: 'GET',
    }
    access_smssend = yield net.ajax(options)
    this.body = yield access_smssend
    /*    let wx_item = {
        "button": [
            {
                "name": "教育资讯",
                "sub_button": [
                    {
                        "type": "view_limited",
                        "name": "关于培训",
                        "media_id": "Jx3yEcQbBtg3ZmMBXGQGCHLsznYJdr2b6mZoE1RHjtw"
                    }
                ]
            },
            {
                "name": "关于鲁班",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "关于产品",
                        "url": "http://www.bullstech.cn/product.html"
                    },
                    {
                        "type": "view",
                        "name": "学生端",
                        "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx30db7ec1537d9afc&redirect_uri=http://wx.bullstech.cn/&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
                    }
                ]
            },
            {
                "type": "view_limited",
                "name": "关于公司",
                "media_id": "Jx3yEcQbBtg3ZmMBXGQGCDW1u1Goc0aRdOdcAL1sQgc"
            }
        ]
    }
    let body = JSON.stringify(wx_item)
    console.log(body) */
    /*  let options = {
         hostname: 'api.weixin.qq.com',
         port: 443,
         path: '/cgi-bin/menu/create?access_token=' + access_info.access_token,
         method: 'POST',
         json: true,
         headers: {
             "content-type": "application/json",
             'Content-Length': body.length,
         }
     }
     let wxinfo = yield net.ajax(options, body) */
    /*  this.body = yield { access_info, wxinfo } */

}

module.exports.wxregpost = function* wxregpost() {
    if ('POST' != this.method) return yield next
    var model = this.req.body.xml
    var signature = this.query.signature
    var timestamp = this.query.timestamp
    var nonce = this.query.nonce
    var openid = this.query.openid
    var echostr = this.query.echostr
    var token = 'bullstech'
    /*   console.log('signature:' + signature, 'timestamp:' + timestamp, 'nonce:' + nonce, 'echostr:' + echostr, 'token' + token) */
    /*  加密/校验流程如下： */
    //1. 将token、timestamp、nonce三个参数进行字典序排序
    var array = new Array(token, timestamp, nonce)
    array.sort()
    var str = array.toString().replace(/,/g, '')
    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    var sha1Code = crypto.createHash('sha1')
    var code = sha1Code.update(str, 'utf-8').digest('hex')

    let access_options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf',
        method: 'GET',
    }
    //欢迎关注布尔斯科技,如果你要登陆学生端,请点击菜单关于鲁班到学生端,查看你的信息吧
    net.ajax(access_options).then(access_info => {
        let textdata = `{
            "touser":"${openid}",
            "msgtype":"text",
            "text":{
                 "content":"欢迎关注布尔斯科技"
            }
        }`
        let options = {
            hostname: 'api.weixin.qq.com',
            port: 443,
            path: '/cgi-bin/message/custom/send?access_token=' + access_info.access_token,
            method: 'POST',
            headers: {
                "content-type": "application/json",
                'Content-Length': textdata.length,
            }
        }
        console.log(textdata, textdata.length)
        let texts = net.ajax(options, textdata)

        console.log(texts)

    })

    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if (code === signature) {
        this.body = ''
    } else {
        this.body = 'error'
    }
}
module.exports.wxreg = function* wxreg() {
    if ('GET' != this.method) return yield next
    var signature = this.query.signature
    var timestamp = this.query.timestamp
    var nonce = this.query.nonce
    var echostr = this.query.echostr
    var token = 'bullstech'
    console.log('signature:' + signature, 'timestamp:' + timestamp, 'nonce:' + nonce, 'echostr:' + echostr, 'token' + token)

    /*  加密/校验流程如下： */
    //1. 将token、timestamp、nonce三个参数进行字典序排序
    var array = new Array(token, timestamp, nonce)
    array.sort()
    var str = array.toString().replace(/,/g, '')

    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    var sha1Code = crypto.createHash('sha1')
    var code = sha1Code.update(str, 'utf-8').digest('hex')

    console.log(code, signature, code === signature)
    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if (code === signature) {
        this.body = echostr
    } else {
        this.body = 'error'
    }
}
module.exports.wxmedia = function* wxmedia() {
    if ('POST' != this.method) return yield next
    let access_options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf',
        method: 'GET',
    }
    let access_info = yield net.ajax(access_options)
    var model = yield parse(this, {
        limit: '200kb'
    })
    let body = JSON.stringify(model)
    console.log(body)
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/material/batchget_material?access_token=' + access_info.access_token,
        method: 'POST',
        json: true,
        headers: {
            "content-type": "application/json",
            'Content-Length': body.length,
        }
    }
    let wxinfo = yield net.ajax(options, body)
    this.body = yield wxinfo
}
module.exports.wxtoken = function* wxtoken() {

}