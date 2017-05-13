import filemanage from '../webmake/filemanage.js'
import cheerio from 'cheerio'
import util from 'util'

class WebReplace {
    main() {
        filemanage.on('ready', () => {
            for (let fileitem of filemanage) {
                //let xmlroot = '<root>' + fileitem.data + '</root>'

                var template = fileitem.data.toString().match(/<template>([\s\S]*)<\/template>/)
                var script = fileitem.data.toString().match(/<script>([\s\S]*)<\/script>/)
                template = template[0].replace(/[\n\r]|<!--[^>]*>|\s+/g, ' ').replace(/>\s+</g, '><')
                util.inspect(cheerio.parseHTML(template, false), { showHidden: false, depth: null })

                
               //script
                console.log(fileitem.path, ss.length, ss[1].replace(/[\n\r]|<!--[^>]*>|\s+/g, ' ').replace(/>\s+</g, '><'))
                //console.log(util.inspect(cheerio.parseHTML(xmlroot, false), { showHidden: true, depth: null }))
                //xmlroot = xmlroot.replace(/[\n\r]/g, ' ')
                //xmlroot = xmlroot.replace(/<!--[\s\S]*-->/g, ' ')
                //xmlroot = xmlroot.replace(/\s+/g, ' ')

                //filemanage.writeFile(fileitem.path + '1', util.inspect(cheerio.parseHTML(xmlroot, false), { showHidden: false, depth: null }))
                break
            }
        })
    }
}

export default new WebReplace()
