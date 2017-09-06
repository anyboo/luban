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
    var model = yield parse(this, {
        limit: '200kb'
    })
    let wx_item = {
        "kf_account": "test1@test",
        "nickname": "鲁班小一",
        "password": "lbtech1",
    }
    let body = JSON.stringify(wx_item)

}