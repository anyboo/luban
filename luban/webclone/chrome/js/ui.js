window.lubanui = function () {
    var style = document.createElement("style")
    style.innerHTML = ".addcss{ border:1px solid blue;}"
    var e = document.createElement("div");
    e.innerHTML = "<div id='Form1'><form>名称：<input id='textsss'  name='sss' type='text'  value=''/><br/><input type='button' value='提 交'><input  type='button' value='重新加载'><input id='fulei' type='button' value='父类'></form><div id='close' >X</div></div>"
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
        borderRadius: '2px',
        cursor: 'pointer'

    })
    var getAddcss = function () {
        //获取标签数据
        let noTag = ['STYLE', 'META', 'BASE', 'TITLE', 'LINK', 'SCRIPT']
        function getHtml(root) {
            let nodeitem = {}
            nodeitem.tagName = root.tagName ? root.tagName : ''
            nodeitem.nodeType = root.nodeType ? root.nodeType : 0
            nodeitem.id = root.id ? root.id : ''
            nodeitem.data = root.data ? root.data : ''
            if (root.attributes) {
                let attr = []
                for (let i = 0; i < root.attributes.length; i++) {
                    let attrvalue = {}
                    attrvalue.name = root.attributes[i].name
                    attrvalue.value = root.attributes[i].value
                    attr.push(attrvalue)
                }
                if (attr != "") {
                    nodeitem.attributes = attr
                }
            }
            if (root.classList) {
                let classes = []
                for (let i = 0; i < root.classList.length; i++) {
                    let classvalue = {}
                    classvalue.value = root.classList[i]
                    classes.push(classvalue)
                }
                if (classes != "") {
                    nodeitem.classList = classes
                }
            }
            if (root.style) {
                let styles = []
                for (let i = 0; i < root.style.length; i++) {
                    let stylevalue = {}
                    stylevalue[root.style[i]] = root.style[root.style[i]]
                    styles.push(stylevalue)
                }
                if (styles != "") {
                    nodeitem.style = styles
                }
            }
            nodeitem.dataset = {}
            if (root.dataset) {
                for (let item in root.dataset) {
                    nodeitem.dataset[item] = root.dataset[item]
                }
            }
            nodeitem.children = []
            if (root.children) {
                for (var i = 0; i < root.childNodes.length; i++) {
                    if (root.childNodes[i]) {
                        let tagName = root.childNodes[i].tagName ? root.childNodes[i].tagName : ''
                        if (noTag.indexOf(tagName) == -1) {
                            nodeitem.children.push(getHtml(root.childNodes[i]))
                        }
                    }
                }
            }
            return nodeitem
        }
        let lubanaddcss = []
        lubanaddcss.push(getHtml($('.addcss')[0]))
        console.log(lubanaddcss)
        console.log(lubanaddcss[0].tagName.toLowerCase())
    }
    function handleClick(e) {
        if (e.target == e.currentTarget) {
            $('.addcss').removeClass('addcss')
            $(this).addClass('addcss')
            $('#Form1').css('display', 'block')
            console.log($('.addcss'))
            getAddcss()
        }
    }
    function handleClickParent() {
        let cssparent = $('.addcss').parent()
        $('.addcss').removeClass('addcss')
        cssparent.addClass('addcss')
         getAddcss()
    }
    $("*").bind('click', handleClick)
    $("#fulei").unbind('click', handleClick)
    $('#fulei').bind('click', handleClickParent)
    $("#close").click(function (e) {
        e.stopPropagation();
        $('#Form1').css('display', 'none')
    })
}