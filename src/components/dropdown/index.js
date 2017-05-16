import LbDropdown from './dropdown.vue'
import LbDropdownButton from './dropdownbutton.vue'
import LbDropdownMenu from './dropdownmenu.vue'
import LbDropdownMenuItem from './dropdownmenuitem.vue'

LbDropdown.install = function(Vue) {
    Vue.component(LbDropdown.name, LbDropdown)
}

export default { LbDropdown, LbDropdownButton, LbDropdownMenu, LbDropdownMenuItem }
