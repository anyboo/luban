import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import listtree from './listtree/'
import numberinput from './numberinput/'
import progress from './progress/'
import selecteusersearch from './selecteusersearch/'
import lessonhours from './lessonhours/'
import lessonprice from './lessonprice/'
import lessontype from './lessontype/'

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    buttongroup,
    listtree.LbListTree,
    listtree.LbListtreeItem,
    numberinput,
    progress,
    selecteusersearch,
    lessonhours,
    lessonprice,
    lessontype
]
const install = function(Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}
export default {
    version: '1.0.1',
    install,
    dropdown,
    buttongroup,
    listtree,
    numberinput,
    progress,
    selecteusersearch,
    lessonhours,
    lessonprice,
    lessontype
}