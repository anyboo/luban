import urlUtil from './urlprofile'

function httpAuth() {
    let token = window.localStorage.getItem('token')
    let tokentime = window.localStorage.getItem('tokentime')
    Vue.http.headers.common['authorization'] = token
    Vue.http.headers.common['authtime'] = tokentime
}

function httpGetUrlQccode(id) {
    let apiUrlGet = urlUtil.getUrlQccode(id)
    httpAuth()
    return Vue.http.get(apiUrlGet)
}

function httpGetFieldsApi(model, fields) {
    let apiUrlGet = urlUtil.getUrlField(model, fields)
    httpAuth()
    return Vue.http.get(apiUrlGet)
}

function httpGetFilterApi({ model, filter, prepage, page, db }) {
    let apiUrl = urlUtil.getUrlFilter(model, filter, prepage, page, db)
    httpAuth()
    return Vue.http.get(apiUrl)
}

function httpGetApi(model) {
    let apiUrl = urlUtil.getUrl(model)
    httpAuth()
    return Vue.http.get(apiUrl)
}

function httpLoginApi(obj) {
    let apiUrl = urlUtil.getLoginUrl()
    let form = obj
    return Vue.http.post(apiUrl, form)
}

function httpAppendApi({ model, form, db }) {
    let apiUrl = urlUtil.getUrl(model, db)
    httpAuth()
    return Vue.http.post(apiUrl, form)
}

function httpSmsApi({ model, form }) {
    let apiUrl = urlUtil.getSmsUrl()
    httpAuth()
    return Vue.http.post(apiUrl, form)
}

function httpBulkApi({ model, form }) {
    let apiUrl = urlUtil.getUrls(model)
    httpAuth()
    return Vue.http.post(apiUrl, form)
}

function httpEditApi({ model, id, form, db }) {
    let apiUrl = urlUtil.getUrlById(model, id, db)
    httpAuth()
    return Vue.http.put(apiUrl, form)
}

function httpGetIdApi({ model, id, db }) {
    let apiUrl = urlUtil.getUrlById(model, id, db)
    httpAuth()
    return Vue.http.get(apiUrl)
}

function httpDeleteApi({ model, id, db }) {
    let apiUrl = urlUtil.getUrlById(model, id, db)
    httpAuth()
    return Vue.http.delete(apiUrl)
}
export default {
    httpGetApi,
    httpGetFieldsApi,
    httpAppendApi,
    httpEditApi,
    httpDeleteApi,
    httpGetIdApi,
    httpGetFilterApi,
    httpLoginApi,
    httpBulkApi,
    httpGetUrlQccode,
    httpSmsApi
}
