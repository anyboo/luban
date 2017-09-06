var control = require('./controllers/db/dboperations')
var compress = require('koa-compress')
var logger = require('koa-logger')
var serve = require('koa-static')
var route = require('koa-route')
var cors = require('koa-cors')
var koa = require('koa')
var path = require('path')
var xmlparse = require('./unit/xmlparse')
var sms =require('./controllers/sms/sms')
var alisms =require('./controllers/sms/alisms')
var wx  = require('./controllers/wx/wx')
var wxserver  = require('./controllers/wx/wxserver')
var app = module.exports = new koa()

app.use(logger())
app.use(cors())
app.use(xmlparse())

//微信
app.use(route.post('/wxmedia/', wx.wxmedia))
app.use(route.get('/wxmenus/', wx.wxmenus))
app.use(route.post('/wxreg/', wx.wxregpost))
app.use(route.get('/wxreg/', wx.wxreg))
app.use(route.post('/wx/', wx.wx))
app.use(route.get('/:db/wxqrcode/:id', wx.wxqrcode))

//微信服务

app.use(route.post('/wxservice/', wxserver.wxservice))
//短信
app.use(route.post('/smssend/', sms.smssend))
app.use(route.get('/getsmssend/', sms.getsmssend))

//阿里
app.use(route.post('/sms/', alisms.alisms))
app.use(route.post('/checksms/', alisms.alichecksms))

//数据
app.use(route.post('/:db/login/', control.login))
app.use(route.post('/:db/upload', control.upload))
app.use(route.get('/:db/api/:name', control.all))
app.use(route.get('/:db/api/:name/:id', control.fetch))
app.use(route.post('/:db/api/:name', control.add))
app.use(route.post('/:db/apis/:name', control.bulkWrite))
app.use(route.put('/:db/api/:name/:id', control.modify))
app.use(route.delete('/:db/api/:name/:id', control.remove))

app.use(route.options('/', control.options))
app.use(route.trace('/', control.trace))
app.use(route.head('/', control.head))

// Serve static files
app.use(serve(path.join(__dirname, 'public')))

// Compress
app.use(compress())

if (!module.parent) {
    app.listen(8888)
    console.log('listening on port 8888')
}
