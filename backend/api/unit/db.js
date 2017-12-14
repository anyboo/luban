
var ObjectID = require('mongodb').ObjectID
var dbstr = 'mongodb://root:luban8@dds-bp108344997413c41.mongodb.rds.aliyuncs.com:3717,dds-bp108344997413c42.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-4724627 '

function checkId(id) {
    let result = false
    if (id && (id.length == 12 || id.length == 24)) {
        result = true
    }
    return result
}

module.exports.getdbstr = function (db) {
    var host1 = "dds-bp108344997413c41.mongodb.rds.aliyuncs.com"
    var port1 = 3717
    var host2 = "dds-bp108344997413c42.mongodb.rds.aliyuncs.com"
    var port2 = 3717
    var username = "root"
    var password = "luban8"
    var replSetName = "mgset-4724627"
    let demoDb = "lubandemo"
    if (db && db.length > 0) {
        demoDb = db
    }
    // 官方建议使用的方案
    var url = sprintf("mongodb://%s:%s@%s:%d,%s:%d/%s?replicaSet=%s", username,password,host1, port1, host2, port2, demoDb, replSetName);
    console.info("url:", url)
    return url
}
module.exports.checkId = checkId
module.exports.changeArrayModelId = function changeArrayModelId(model) {
    for (var idindex in model) {
        if (checkId(model[idindex])) {
            let monkid = ObjectID(model[idindex])
            model[idindex] = monkid
        }
    }
}
module.exports.changeModelId = function changeModelId(model) {
    for (var item in model) {
        if (typeof item == 'string') {
            if (item.indexOf('_id') >= 0) {
                try {
                    console.log('-----', item, model[item], typeof model[item])
                    if (typeof model[item] === 'object') {
                        let iditem = model[item]
                        for (var idindex in iditem) {
                            if (checkId(iditem[idindex])) {
                                let monkid = ObjectID(iditem[idindex])
                                iditem[idindex] = monkid
                                console.log('-----', iditem[idindex], monkid)
                            }
                        }
                    } else {
                        if (checkId(model[item])) {
                            let monkid = ObjectID(model[item])
                            model[item] = monkid
                        }
                    }

                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
}
