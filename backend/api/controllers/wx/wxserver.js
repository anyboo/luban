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

module.exports.wxservice = function* wxservice() {
    if ('POST' != this.method) return yield next
    let access_options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wx30db7ec1537d9afc&secret=6a3a743d25071d06f82153d029dee8cf',
        method: 'GET',
    }
    let access_info = {}
    access_info = yield net.ajax(access_options)
    var model = yield parse(this, {
        limit: '200kb'
    })
    let body = JSON.stringify(model)
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/customservice/kfaccount/add?access_token=' + access_info.access_token,
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