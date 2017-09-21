
var ObjectID = require('mongodb').ObjectID
var dbstr = 'mongodb://localhost/'

function checkId(id) {
    let result = false
    if (id && (id.length == 12 || id.length == 24)) {
        result = true
    }
    return result
}

module.exports.getdbstr = function (db) {
    let dbtemp = "lubandemo"
    if (db && db.length > 0) {
        dbtemp = db
    }
    return dbstr + dbtemp
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
