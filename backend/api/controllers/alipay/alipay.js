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
        if ((!params[key]) || key == "sign" ) {
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
/* app_id=2017082808427000&biz_content={"out_trade_no":"32325858","product_code":"FAST_INSTANT_TRADE_PAY","total_amount":"88","subject":"luban","body":"lubandemo","timeout_express":"15m"}&charset=utf-8&method=alipay.trade.page.pay&sign_type=RSA2&timestamp=2017-09-16 19:37:44&version=1.0
app_id=2017082808427000&biz_content={"out_trade_no":"32325858","product_code":"FAST_INSTANT_TRADE_PAY","total_amount":"88","subject":"luban","body":"lubandemo","timeout_express":"15m"}&charset=utf-8&method=alipay.trade.page.pay&sign_type=RSA2&timestamp=2017-09-16 19:37:44&version=1.0 */
/*
app_id=2017082808427000&
biz_content={"out_trade_no":"32328556","product_code":"FAST_INSTANT_TRADE_PAY","total_amount":"88","subject":"luban","body":"lubandemo","timeout_express":"15m"}
&charset=utf-8
&method=alipay.trade.page.pay
&sign_type=RSA2
&timestamp=2017-09-16 18:33:21
&version=1.0*/
//签名
function getSign(params) {
    try {
        var key = privatePem.toString()
        var prestr = getParams(params)
        //prestr = 'app_id=2017082808427000&biz_content={"out_trade_no":"32325858","product_code":"FAST_INSTANT_TRADE_PAY","total_amount":"88","subject":"luban","body":"lubandemo","timeout_express":"15m"}&charset=utf-8&method=alipay.trade.page.pay&sign_type=RSA2&timestamp=2017-09-16 19:01:59&version=1.0'
        console.log("~~~~~~~~~~~~~?//////////////////////",prestr)
        const sign = crypto.createSign('RSA-SHA256')
        sign.update(prestr)
        //key = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwohUFkgNbwBpWoWdvvTmYfX5ZFrFqXDZzDcFFy0zpw5Lz8DRdhvCEK2sr2NmN+wuh1gKPyD3pslSk0npyfoRT2bayCu4MXDSN/hnAS1xWSE0nmNFkxohXmvY+hAxUZ/k726YuEMW18obh1hfldxx9OoLmEIgRazMMZMthZbaux9RI4USbNoYD4Y3rK6ZQ8xUVtNEmfkcmT9kvmenVa94TeM7RiqbrlE/LB0lbqaHg4NsMiLx0R/Z224z5dCpDdXQ0IP2xT+JVd4+BHgkx0SmIAOhkZh2QYvzsfzgl/wqf5/GG42TmgPPyLW9t9B2LNC/LvaQkhI6sfjy+SvCU6wttAgMBAAECggEAJO6O5K5GA34kQ67V2NhA3bCHpYsIJ4wGWoIqwjQi7dHVvSmhWVjom0oUy4M44eX25azAtl2RDHccGaZkseHgO0QPXiTI5060MmhJ7BoVwXi2oSvjxGV6ho7BJAsqJM/kne5sTb92B3ghWcERGAqSq2B7lC0qtjGq59F/cOr6ioqlw0f1dURHLhrKRn7BHKwzmZVTOxqgyTRgWiCIeM8Vux5oPT4at+vLlVoL/QmMm7Bthr2N3E8YBZgNb6UUh8prKUf68UDFNao6Hclc2zqLlPV1DoVYiMqQr5KBt1wAKA4zUA2egXqGiBOq4HvbmMwX9VPGIdw1OFaEfpBB9iiqQQKBgQD40Dc1murOe7OSAqHbXhrI6N3GfiMEpXd8rWh3pODa5sG2U6Ijdfpi9JDsS3PBN03gPmBmnf2lfNgMhEVLUaM7M4jm4r7tJvOLUCXpZ0SXd1yw1AhIdlvnGrguywhSvq/hLeheYlmSkcKfuKXyb8G6Roq3e3GxT+X8Bv/M3U5XkQKBgQC1vCYmSx9NJjYo3uXT7TwEZxxWN+47wyBCFS+Ct4KmxP1tRwhd+5RK3JjTVnasbEcW2Anyc4AiEmRxPM9KUA3ppYkCLXUrPUj3bmMHjK90Fu/EVWE7RWyYMubdh5599uIs9rbc6NSsv1ZDESa13XwMKhd0CY9hBcP4zqtcZAkgHQKBgFobXcMmBV8d4VxBY8iD/gNAggB+ccQfAHTAgBLEPUJJS2HyS8e31CO+GjXY5WTV2HgbXuIK2W7zFXMC++1Y9VpdQXkMKMTN1Glhbzll0qtf6MuJHi7P3lyFiqo3kR4WPK+55ms4BuRTsT4SqtZvrqL9JQNpyzTBkLKC/mR8yQBhAoGBAJPGHBdDOn6XNa7iIGvFGepSlZ4d+J+ruI1DgNB/u8Mzpwa2nb0eFqUQ30vpoLHvkZansN7uwB/0aKwTUFMS6V01d0TIBeBVAwH/RpMa+IgjJm+1JUz21Kilq0gzQNMYby00p9jVkimto80BI0L6iCW0DEIUi/vOnl2wX3LO/QSZAoGAPD5SAS1WeyWBWUX1EFo3XivDGTIrKTX1sPAgLDfYM4zhBtNtf9TdA34uVRJN/UiXoVAqvPrQOaHMebyjSOmfuUWBNbE0+zHZXqy86BVKXr/wTLdjoEOjyoLmvfAd9pDjMQ8aFivWPVFlggym2DqsmXirRfsnvaaQ7CyVWpQNS8o='
        let hash = sign.sign(key).toString('base64')
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",hash)
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
    let queryarray = []
    for (let item in body_options) {
        let itemstr = item + '=' + encodeURIComponent(body_options[item])
        queryarray.push(itemstr)
    }
    var body = JSON.stringify(body_options)
    let queryopt = queryarray.join('&')
    console.log(body, queryopt)
    let ali_options = {
        hostname: 'openapi.alipay.com',
        port: 443,
        path: '/gateway.do?' + queryopt,
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