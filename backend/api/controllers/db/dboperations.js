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
var dbunit = require('../../unit/db')
var xlsx = require('node-xlsx')

function loginemployee(user) {
    return new Promise((resolve) => {
        let logindata = { 'login': false }
        MongoClient.connect(dbunit.getdbstr('luban8')).then(db => {
            let table = db.collection('user')
            let options = []
            options.push({
                '$match': {
                    'pwd': user.pwd,
                    'phone': user.user,
                    'lock': false,
                    '_delete': { '$ne': true }
                }
            })
            options.push({ '$limit': 1 })
            let cursor = table.aggregate(options)
            cursor.toArray().then(obj => {
                if (obj.length > 0) {
                    logindata.login = true
                    logindata.user = obj[0].phone
                    logindata.name = obj[0].name
                    logindata.admin = obj[0].admin
                    logindata.db = obj[0].db
                    logindata._id = obj[0]._id
                    resolve(logindata)
                } else {
                    resolve(logindata)
                }
                db.close()
            })
        })
    })
}
module.exports.deletes = function* deletes(db, table, next) {
    if ('GET' != this.method) return yield next
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let collection = db.collection(table)
    let findobj = {}
    for (let item in this.query) {
        let value = this.query[item]
        if (value == 'true') {
            findobj[item] = true
        } else if (value == 'false') {
            findobj[item] = false
        } else {
            findobj[item] = this.query[item]
        }
    }
    console.log(table, findobj, this.query)
    dbunit.changeModelId(findobj)
    var count = yield collection.updateMany(findobj, { $set: { '_delete': true } })
    db.close()

    this.body = count
}
module.exports.count = function* count(db, table, next) {
    if ('GET' != this.method) return yield next
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let collection = db.collection(table)
    let findobj = {}
    for (let item in this.query) {
        let value = this.query[item]
        if (value == 'true') {
            findobj[item] = true
        } else if (value == 'false') {
            findobj[item] = false
        } else {
            findobj[item] = this.query[item]
        }
    }
    findObj['_delete'] = { '$ne': true }
    console.log(table, findobj, this.query)
    dbunit.changeModelId(findobj)
    var count = yield collection.find(findobj).count()
    db.close()

    this.body = count
}
module.exports.id = function* id(db, table, next) {
    if ('GET' != this.method) return yield next
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let collection = db.collection(table)
    let findobj = {}
    for (let item in this.query) {
        let value = this.query[item]
        if (value == 'true') {
            findobj[item] = true
        } else if (value == 'false') {
            findobj[item] = false
        } else {
            findobj[item] = this.query[item]
        }
    }
    findObj['_delete'] = { '$ne': true }
    var model = yield collection.find(findobj).toArray()
    let idlist = []
    for (let item of model) {
        idlist.push(item._id)
    }
    db.close()
    this.body = idlist
}
module.exports.login = function* login(next) {
    if ('POST' != this.method) return yield next
    var user = yield parse(this, {
        limit: '500kb'
    })
    console.log(user)
    var dbmodel = yield loginemployee(user)
    console.log(dbmodel)
    var token = ''
    var code = -1
    var message = '登录失败'
    if (dbmodel.login) {
        token = jwt.sign(dbmodel, 'luban', { expiresIn: 60 * 60 * 24 * 3 })
        code = 0
        message = '登录成功'
    }
    let nowtime = new Date().getTime()
    this.body = {
        code,
        token,
        message,
        account: dbmodel,
        nowtime
    }
}

function verify(token, authtime) {
    let result = false
    console.log(token, authtime)
    if (token) {
        try {
            var profile = jwt.verify(token, 'luban')
            let nowtime = new Date().getTime()
            let authtimebegin = Number(authtime) - 1000 * 60 * 5
            let authtimeend = Number(authtime) + 1000 * 60 * 60
            console.log(profile, nowtime, authtimebegin, authtimeend, authtime)
            if (authtimebegin < nowtime && nowtime < authtimeend) {
                result = true
            }
        } catch (e) {
            console.log(e)
        }
    }
    return result
}
module.exports.all = function* all(db, name, next) {
    if ('GET' != this.method) return yield next
    let token = this.req.headers.authorization
    let authtime = this.req.headers.authtime
    console.log(db)
    if (db != 'webclone' && db != 'test') {
        if (!verify(token, authtime)) {
            this.status = 401
            console.log('Access Forbidden')
            this.body = 'Access Forbidden'
            return
        }
    }
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    let query = this.query
    let limit = Number.parseInt(query.prepage || 30)
    let skip = Number.parseInt(query.page || 0) * limit
    let filter = query.filter
    let findObj = {}
    let sortObj = {}
    let groupobj = {}
    let findsort = false
    let options = []
    console.log(filter)
    if (filter) {
        try {
            let filterObj = JSON.parse(Buffer.from(filter, 'base64').toString())
            if (filterObj) {
                for (var item of filterObj) {
                    let value = item.value
                    let type = item.type
                    let key = item.key
                    if (type == 'sort') {
                        findsort = true
                        sortObj[key] = Number(value)
                    } else if (type == 'like') {
                        let like = new RegExp(value)
                        findObj[key] = like
                    } else if (type == 'unwind') {
                        options.push({ '$unwind': value })
                    } else if (type == 'lookup') {
                        options.push({ '$lookup': value })
                    } else if (type == 'lt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lt'] = value
                        console.log(findObj[key])
                    } else if (type == 'gt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gt'] = value
                        console.log(findObj[key])
                    } else if (type == 'lte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lte'] = value
                        console.log(findObj[key])
                    } else if (type == 'gte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gte'] = value
                        console.log(findObj[key])
                    } else if (type == 'in') {
                        findObj[key] = findObj[key] || {}
                        if (key.indexOf('_id') >= 0) {
                            dbunit.changeArrayModelId(value)
                        }
                        findObj[key]['$in'] = value
                        console.log(findObj[key])
                    } else if (type == 'nin') {
                        findObj[key] = findObj[key] || {}
                        if (key.indexOf('_id') >= 0) {
                            dbunit.changeArrayModelId(value)
                        }
                        findObj[key]['$nin'] = value
                        console.log(findObj[key])
                    } else if (type == 'groupby') {
                        findObj[key] = findObj[key] || {}
                        if (key.indexOf('_id') >= 0) {
                            dbunit.changeArrayModelId(value)
                        }
                        findObj[key]['$nin'] = value
                        console.log(findObj[key])
                    } else {
                        findObj[key] = value
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    dbunit.changeModelId(findObj)
    if (!findsort) {
        sortObj = { '_id': -1 }
    }
    findObj['_delete'] = { '$ne': true }
    //let count = yield table.count(findObj)
    options.push({ '$match': findObj })
    options.push({ '$sort': sortObj })
    options.push({ $group: { _id: null, count: { $sum: 1 } } })

    console.log(options, name)
    let cursor = table.aggregate(options)
    let group = yield cursor.toArray()
    console.log(group)
    options.pop()
    options.push({ '$skip': skip })
    options.push({ '$limit': limit })
    let count = 0
    if (group && group.length > 0) {
        count = group[0].count
    }
    console.log(count)
    let tablecursor = table.aggregate(options)
    let data = yield tablecursor.toArray()
    db.close()
    let nowtime = new Date().getTime()
    this.body = yield {
        'data': data,
        'count': count,
        'name': name,
        'nowtime': nowtime
    }

}
module.exports.upload = function* upload(db, next) {
    if ('POST' != this.method) return yield next
    if (!this.request.is('multipart/*')) return yield next

    var parts = uploadparse(this)

    while ((part = yield parts)) {
        var ext = path.extname(part.filename)
        var filename = parseInt(Math.random() * 100) + Date.parse(new Date()).toString() + ext
        var newPath = path.resolve('public/upload', filename)
        var stream = fs.createWriteStream(newPath)
        part.pipe(stream)
        console.log('uploading %s -> %s', part.filename, stream.path)
    }

    this.body = yield { success: 1, name: filename, url: 'http://www.bullstech.cn:9999/upload/' + filename }
}

module.exports.fetch = function* fetch(db, name, id, next) {
    if ('GET' != this.method) return yield next
    if (!dbunit.checkId(id)) return yield next
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    var model = yield table.find({ '_id': ObjectID(id) }).toArray()
    if (model.length === 0) {
        this.throw(404, 'model with _id = ' + id + ' was not found')
    }
    db.close()
    this.body = yield model
}

module.exports.add = function* add(db, name, next) {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '5000kb'
    })
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    let seqid = yield db.collection('lb_seq_id').findOneAndUpdate({ id: name }, { $inc: { seq: 1 } }, { upsert: true })
    model.lbseqid = seqid.seq
    dbunit.changeModelId(model)
    console.log(model)
    var inserted = yield table.insert(model)
    if (!inserted) {
        this.throw(405, 'The model couldn\'t be added.')
    }
    db.close()
    this.body = yield model
}

module.exports.modify = function* modify(db, name, id, next) {
    if ('PUT' != this.method) return yield next
    if (!dbunit.checkId(id)) return yield next
    var data = yield parse(this, {
        limit: '5000kb'
    })
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    dbunit.changeModelId(data)
    var result = yield table.updateOne({ '_id': ObjectID(id) }, {
        $set: data
    })
    db.close()
    this.body = result
}

module.exports.bulkWrite = function* bulkWrite(db, name, next) {
    if ('POST' != this.method) return yield next
    var model = yield parse(this, {
        limit: '5000kb'
    })
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    let writeobj = []

    model.forEach((element) => {
        dbunit.changeModelId(element)
        let opt = {}
        if (element._id) {
            if (element._delete) {
                //opt.deleteOne = {
                //    filter: { '_id': element._id }
                //}
                opt.updateOne = {
                    filter: { '_id': element._id }
                    , update: { $set: { '_delete': true } }
                }
            } else {
                opt.updateOne = {
                    filter: { '_id': element._id }
                    , update: { $set: element }
                }
            }
        } else {
            opt.insertOne = {
                document: element
            }
        }
        writeobj.push(opt)
    })
    var result = yield table.bulkWrite(writeobj)
    db.close()
    this.body = result
}

module.exports.remove = function* remove(db, name, id, next) {
    if ('DELETE' != this.method) return yield next
    if (!dbunit.checkId(id)) return yield next
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    var removed = yield table.updateOne({ '_id': ObjectID(id) }, { $set: { '_delete': true } })
    db.close()
    if (!removed) {
        this.throw(405, 'Unable to delete.')
    } else {
        this.body = '{"success":1}'
    }
}


module.exports.head = function* () {
    return yield
}

module.exports.options = function* () {
    this.set('Access-Control-Allow-Method', 'HEAD,GET,PUT,DELETE,OPTIONS')
    this.set('Access-Control-Allow-Origin', '*')
    this.status = 204
    this.body = yield 'Allow: HEAD,GET,PUT,DELETE,OPTIONS'
}

module.exports.trace = function* () {
    this.body = yield 'Smart! But you can\'t trace.'
}
module.exports.download = function* download(db, name, next) {
    if ('GET' != this.method) return yield next
    let token = this.req.headers.authorization
    let authtime = this.req.headers.authtime
    console.log(db)
    if (db != 'webclone' && db != 'test') {
        if (!verify(token, authtime)) {
            this.status = 401
            console.log('Access Forbidden')
            this.body = 'Access Forbidden'
            return
        }
    }
    var db = yield MongoClient.connect(dbunit.getdbstr(db))
    let table = db.collection(name)
    let query = this.query
    let limit = Number.parseInt(query.prepage || 30)
    let skip = Number.parseInt(query.page || 0) * limit
    let filter = query.filter
    let findObj = {}
    let sortObj = {}
    let findsort = false
    let options = []
    console.log(filter)
    if (filter) {
        try {
            let filterObj = JSON.parse(Buffer.from(filter, 'base64').toString())
            if (filterObj) {
                for (var item of filterObj) {
                    let value = item.value
                    let type = item.type
                    let key = item.key
                    if (type == 'sort') {
                        findsort = true
                        sortObj[key] = Number(value)
                    } else if (type == 'like') {
                        let like = new RegExp(value)
                        findObj[key] = like
                    } else if (type == 'unwind') {
                        options.push({ '$unwind': value })
                    } else if (type == 'lookup') {
                        options.push({ '$lookup': value })
                    } else if (type == 'lt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lt'] = value
                        console.log(findObj[key])
                    } else if (type == 'gt') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gt'] = value
                        console.log(findObj[key])
                    } else if (type == 'lte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$lte'] = value
                        console.log(findObj[key])
                    } else if (type == 'gte') {
                        findObj[key] = findObj[key] || {}
                        findObj[key]['$gte'] = value
                        console.log(findObj[key])
                    } else {
                        findObj[key] = value
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    dbunit.changeModelId(findObj)
    if (!findsort) {
        sortObj = { '_id': -1 }
    }
    let count = yield table.count(findObj)
    options.push({ '$match': findObj })
    options.push({ '$sort': sortObj })
    //options.push({ '$skip': skip })
    //options.push({ '$limit': limit })
    console.log(options, name, count)
    let cursor = table.aggregate(options)
    let data = yield cursor.toArray()
    db.close()
    let nowtime = new Date().getTime()
    var labelbody = xlsx.build([{ name: "mySheetName", data: data }])
    this.body = labelbody

}

