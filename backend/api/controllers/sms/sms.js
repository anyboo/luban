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
const querystring = require('querystring')
var net = require('../../unit/net')
var db = require('../../unit/db')

module.exports.smssend = function* smssend() {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '200kb'
    })
    console.log(model)
    //网址：http://dx.106msg.com/login.htm
    //账号：bullstech
    //密码：gaoqihao@bullstech.cn
    //接口网关：8b6bf7b
    let smsdata = {
        type: 'send',
        username: 'bullstech',
        password: 'FC6E673470BA5628D26430089C52D18C',
        gwid: '8b6bf7b',
        mobile: model.mobile,
        rece: 'json',
        message: '【' + model.title + '】' + model.message
    }
    let body = querystring.stringify(smsdata)

    let options = {
        hostname: 'jk.106api.cn',
        port: 80,
        path: '/smsUTF8.aspx',
        method: 'POST',
        agent: false,
        rejectUnauthorized: false,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            'Content-Length': body.length,
        }
    }
    let smssendinfo = {}
    smssendinfo = yield net.ajaxhttp(options, body)
    var db = yield MongoClient.connect(db.getdbstr(model.db))
    let smssends = yield db.collection('smssend').insert(
        {
            smssendinfo,
            model
        })
    this.body = yield smssendinfo
}

module.exports.getsmssend = function* getsmssend() {
    if ('GET' != this.method) return yield next
    let access_smssend = {}
    let get_options = {
        hostname: 'jk.106api.cn',
        port: 80,
        path: '/statusApi.aspx?type=query&username=18960828505&password=A750A4CDD88D39140D81D71615824272&rece=json',
        method: 'GET',
    }
    access_smssend = yield net.ajaxhttp(get_options)
    this.body = yield access_smssend
}
