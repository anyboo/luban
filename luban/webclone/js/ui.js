
window.lubanui = function () {
    var style = document.createElement("style")
    style.innerHTML = ".addcss{ border:1px solid blue;}"
    var e = document.createElement("div");
    e.innerHTML = "<div id='Form1'><form>名称：<input  name='sss' type='text'  value=''/><br/>密码：<input type='password'  value=''><br><input type='button' value='提 交'><input  type='button' value='重新加载'><input id='fulei' type='button' value='父类'></form><div id='close' >X</div></div>"
    document.head.appendChild(style)
    document.body.appendChild(e)
    $('#Form1').css({
        width: '600px',
        height: '400px',
        border: '1px solid #dddddd',
        position: 'fixed',
        top: '25%',
        left: '25%',
        zIndex: '5000',
        textAlign: 'center',
        display: 'none',
        paddingTop: '30px',
        background: 'transparent',
        boxShadow: '0 0 2px 2px #dddddd',
    })
    $('#Form1>form>input').css({
        border: '1px solid black',
        padding: '2px',
        marginTop: '50px',
        borderRadius: '5px'
    })
    $("#close").css({
        width: '20px',
        height: '20px',
        background: 'rgb(248,141,134)',
        position: 'absolute',
        top: '0',
        right: '0',
        color: 'white',
        borderRadius: '2px'

    })
    function handleClick(e) {
        if (e.target == e.currentTarget) {
            $('.addcss').removeClass('addcss')
            $(this).addClass('addcss')
            $('#Form1').css('display', 'block')

        }
    }
    function handleClickParent() {
        let cssparent = $('.addcss').parent()
        $('.addcss').removeClass('addcss')
        cssparent.addClass('addcss')
    }
    $("*").bind('click', handleClick)
    $("#fulei").unbind('click', handleClick)
    $('#fulei').bind('click', handleClickParent)
    $("#close").click(function (e) {
        e.stopPropagation();
        $('#Form1').css('display', 'none')
    })
}