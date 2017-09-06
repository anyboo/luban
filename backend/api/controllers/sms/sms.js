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
const SMSClient = require('./smsclient.js')
var dbstr = 'mongodb://localhost/'
const accessKeyId = 'ACSFUX7fLUMpBZM1'
const secretAccessKey = 'qsGNrvuGnu'
const queueName = 'Alicom-Queue-1420938370661882-'
const https = require('https')
const http = require('http')
const smsdb = 'lubansms'
const querystring = require('querystring')
var net = require('../../unit/net')

module.exports.smssend = function* smssend() {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '200kb'
    })
    console.log(model)
    let smsdata = {
        type: 'send',
        username: '18960828505',
        password: 'A750A4CDD88D39140D81D71615824272',
        gwid: '408fbb2',
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
    var db = yield MongoClient.connect(getdbstr(model.db))
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
