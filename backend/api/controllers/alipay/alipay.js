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
const accessKeyId = 'ACSFUX7fLUMpBZM1'
const secretAccessKey = 'qsGNrvuGnu'
const queueName = 'Alicom-Queue-1420938370661882-'
const smsdb = 'lubansms'
const querystring = require('querystring')
var net = require('../../unit/net')


var privatePem = fs.readFileSync(path.resolve('controllers/alipay/', 'private_key.pem'))
var publicPem = fs.readFileSync(path.resolve('controllers/alipay/', 'alipay_public_key.pem'))

var AlipayConfig = {
    "gateway": "https://openapi.alipay.com/gateway.do",
    "app_id": "2017082808427000",
    "private_key": privatePem,
    "format": "json",
    "charset": "utf-8",
    "alipay_public_key": publicPem,
    "sign_type": "RSA2"
}
module.exports.alipay = function* alipay() {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '200kb'
    })
    let option = {
        out_trade_no: model.order,
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: model.amount,
        subject: model.name,
        body: model.body,
        timeout_express: '15m',
    }
    let aliinfo ={}
    let time = (new Date()).Format("yyyy-MM-dd hh:mm:ss")
    var body = JSON.stringify(options)
    let ali_options = {
        hostname: 'openapi.alipay.com',
        port: 443,
        path: '/gateway.do',
        app_id: AlipayConfig.app_id,
        method: 'alipay.trade.page.pay',
        format: AlipayConfig.format,
        charset: AlipayConfig.charset,
        sign_type: AlipayConfig.sign_type,
        /*签名  sign */
        timestamp: time,
        version: '1.0',
        /* biz_content:,
        业务请求参数的集合，最大长度不限，
        除公共参数外所有请求参数都必须放在这个参数中传递，
        具体参照各产品快速接入文档
        */
        headers: {
            "content-type": "application/json",
            'Content-Length': body.length,
        }
    }

    aliinfo = yield net.ajax(ali_options, body)
    this.body = yield aliinfo
}