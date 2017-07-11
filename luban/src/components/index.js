import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import listtree from './listtree/'

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    buttongroup,
    listtree.LbListTree,
    listtree.LbListtreeItem,
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
    listtree
}
