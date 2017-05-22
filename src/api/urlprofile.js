const apiUrl = 'http://www.bullstech.cn:9999/api/'

function getUrl(model) {
    return apiUrl + model + '/'
}

function getUrlById(model, id) {
    return apiUrl + model + '/' + id
}

function getUrlField(model, fields) {
    return apiUrl + model + '/?fields=' + encodeURIComponent(fields.join())
}

function getUrlFilter(model, filter, prepage, page) {
    return apiUrl + model + '/?page=' + page + '&prepage=' + prepage + '&filter=' + filter
}

export default {
    getUrl,
    getUrlField,
    getUrlById,
    apiUrl,
    getUrlFilter
}
