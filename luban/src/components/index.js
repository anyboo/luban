import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import listtree from './listtree/'
<<<<<<< HEAD
import numberinput from './numberinput/'
=======
import progress from './progress/'
>>>>>>> e313092cb237d11500fbd8e4e6a61262153cd9ed

const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    buttongroup,
    listtree.LbListTree,
    listtree.LbListtreeItem,
<<<<<<< HEAD
    numberinput
=======
    progress
>>>>>>> e313092cb237d11500fbd8e4e6a61262153cd9ed
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
<<<<<<< HEAD
    numberinput
=======
    progress
>>>>>>> e313092cb237d11500fbd8e4e6a61262153cd9ed
}