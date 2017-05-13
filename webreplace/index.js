import filemanage from '../webmake/filemanage.js'
import cheerio from 'cheerio'

class WebReplace {
    main() {
        filemanage.on('ready', () => {
            for (let fileitem of filemanage) {
                let xmlroot = '<root>' + fileitem.data +'</root>'
                console.log(fileitem.path,cheerio.parseHTML(xmlroot, false))
                break
            }
        })
    }
}

export default new WebReplace()
