function makeImage(str, width) {
    width = width 
    var canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = width
    var ctx = canvas.getContext('2d')

    var chart = '空'

    if (str && str.length > 0) {
        chart = str[0]
    }
    ctx.fillStyle = '#5bc0de' //+ ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    ctx.font = '30px arial'
    ctx.textAlign = 'center'
    ctx.fillText(chart, 25, 35)
    var dataurl = canvas.toDataURL('image/png')

    return dataurl
}
export default makeImage
