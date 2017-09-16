let apiUrl = 'http://app.bullstech.cn/'

function getLoginUrl() {
    return apiUrl + 'login/'
}

function getApiUrl() {
    return apiUrl + window.db + '/api/'
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

function getUrl(model) {
    return getApiUrl() + model + '/'
}

function getUrlById(model, id) {
    return getApiUrl() + model + '/' + id
}

function getUrlField(model, fields) {
    return getApiUrl() + model + '/?fields=' + encodeURIComponent(fields.join())
}

function getUrlFilter(model, filter, prepage, page) {
    return getApiUrl() + model + '/?page=' + page + '&prepage=' + prepage + '&filter=' + filter
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
