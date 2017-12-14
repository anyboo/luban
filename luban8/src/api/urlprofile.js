let apiUrl = 'http://api.luban8.cn:8888/'

function getLoginUrl() {
    return apiUrl + 'login/'
}

function getApiUrl(db) {
    let dbstr = window.db
    if (db) {
        dbstr = db
    }
    return apiUrl + dbstr + '/api/'
}
function getSmsUrl() {
    return apiUrl + window.db + '/sms/'
}
function getUrlQccode(id) {
    return apiUrl + window.db + '/wxqrcode/' + id
}

function getUrls(model) {
    return apiUrl + window.db + '/apis/' + model + '/'
}

function getUrl(model, db) {
    return getApiUrl(db) + model + '/'
}

function getUrlById(model, id, db) {
    return getApiUrl(db) + model + '/' + id
}

function getUrlField(model, fields, db) {
    return getApiUrl(db) + model + '/?fields=' + encodeURIComponent(fields.join())
}

function getUrlFilter(model, filter, prepage, page, db) {
    return getApiUrl(db) + model + '/?page=' + page + '&prepage=' + prepage + '&filter=' + filter
}

export default {
    getUrl,
    getUrls,
    getUrlField,
    getUrlById,
    apiUrl,
    getUrlFilter,
    getLoginUrl,
    getUrlQccode,
    getSmsUrl
}
