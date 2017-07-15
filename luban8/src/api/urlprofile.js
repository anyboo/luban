const apiUrl = 'http://app.bullstech.cn:8888/'

function getLoginUrl() {
    return apiUrl + 'login/'
}

function getApiUrl() {
    return apiUrl + 'api/'
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
    getUrlField,
    getUrlById,
    apiUrl,
    getUrlFilter,
    getLoginUrl
}
