import dropdown from './dropdown/'
import buttongroup from './buttongroup/'

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    dropdown.LbDropdownMenu,
    dropdown.LbDropdownMenuItem,
    buttongroup
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
    buttongroup
}
