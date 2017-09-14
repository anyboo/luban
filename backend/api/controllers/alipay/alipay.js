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


var privatePem = fs.readFileSync(path.resolve('controllers/alipay/','private_key.pem'))
var publicPem = fs.readFileSync(path.resolve('controllers/alipay/','alipay_public_key.pem'))

var AlipayConfig = {
    "gateway": "https://openapi.alipay.com/gateway.do",
    "app_id": "2017082808427000",
    "private_key": privatePem,
    "format": "json",
    "charset": "utf-8",
    "alipay_public_key": publicPem,
    "sign_type": "RSA2"
}
/* 设置请求网关(gateway)，应用id(app_id)，
应用私钥(private_key)，编码格式(charset)，支付宝公钥(alipay_public_key)，
签名类型(sign_type)即可， */

//将支付宝发来的数据生成有序数列
function getParams(params) {
    var sPara = [];
    if (!params) return null;
    for (var key in params) {
        if ((!params[key]) || key == "sign" || key == "sign_type") {
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
//验签
function getSign(params) {
    try {
        var privateKey = privatePem.toString();
        var prestr = getParams(params);
        var sign = params['sign'] ? params['sign'] : "";
        var verify = crypto.createVerify('RSA-SHA2');
        verify.update(prestr);
        return verify.verify(privateKey, sign, 'base64')

    } catch (err) {
        console.log('getiSign err', err)
    }
}

//发送订单号

module.exports.sendAlipay = function sendAlipay(req, res) {
    var code = ""
    for (var i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
    }
    //订单号暂时由时间戳与四位随机码生成
    AlipayConfig.out_trade_no = Date.now().toString() + code;
    var myParam = getParams(AlipayConfig);
    var mySign = getSign(AlipayConfig)
    var last = myParam + '&sign="' + mySign + '"&sign_type="RSA2"';
    console.log(last)
    return res.send(last)
}