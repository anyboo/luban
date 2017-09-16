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
var moment = require('moment')

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

//将支付宝发来的数据生成有序数列
function getParams(params) {
    var sPara = [];
    if (!params) return null;
    for (var key in params) {
        if ((!params[key]) || key == "sign") {
            continue;
        };
        sPara.push([key, params[key]]);
    }
    sPara = sPara.sort();
    var prestr = '';
    for (var i2 = 0; i2 < sPara.length; i2++) {
        var obj = sPara[i2];
        if (i2 == sPara.length - 1) {
            prestr = prestr + obj[0] + '=' + obj[1] + '';
        } else {
            prestr = prestr + obj[0] + '=' + obj[1] + '&';
        }
    }
    return prestr;
}

//签名
function getSign(params) {
    try {
        var key = privatePem.toString()
        var prestr = getParams(params)
        const sign = crypto.createSign('RSA-SHA256')
        sign.update(prestr)
        let hash = sign.sign(key).toString('base64')
       /*  console.log(hash) */
        return hash
    } catch (err) {
        console.log('getSign err', err)
    }
}

module.exports.alipay = function* alipay() {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '200kb'
    })
    let options = {
        out_trade_no: model.order,
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: model.amount,
        subject: model.name,
        body: model.body,
        timeout_express: '15m',
    }
    let aliinfo = {}
    let time = moment().format("YYYY-MM-DD HH:mm:ss")
    var biz_content = JSON.stringify(options)
    //签名参数
    let sign_options = {
        app_id: AlipayConfig.app_id,
        method: 'alipay.trade.page.pay',
        sign_type: AlipayConfig.sign_type,
        charset: AlipayConfig.charset,
        timestamp: time,
        version: '1.0',
        biz_content: biz_content
    }
    let signs = getSign(sign_options)
    let body_options = {
        app_id: AlipayConfig.app_id,
        method: 'alipay.trade.page.pay',
        format: AlipayConfig.format,
        charset: AlipayConfig.charset,
        sign_type: AlipayConfig.sign_type,
        sign: signs,
        timestamp: time,
        version: '1.0',
        biz_content: biz_content
    }
    var body = JSON.stringify(body_options)
    let queryopt = querystring.stringify(body_options)
    console.log(body,queryopt)
    let ali_options = {
        hostname: 'openapi.alipay.com',
        port: 443,
        path: '/gateway.do?'+queryopt,
        method: 'POST',
        headers: {
            "content-type": "application/json",
            'Content-Length': body.length,
        }
    }
    aliinfo = yield net.ajaxgb2312(ali_options, body)
    console.log(aliinfo)
    this.body = aliinfo
}