import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import {
    DatePicker,
    Table,
    TableColumn,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Upload
} from 'element-ui'

DatePicker.name = 'lb-date-picker'
Table.name = 'lb-table'
TableColumn.name = 'lb-table-column'
Dropdown.name = 'lb-dropdowns'
DropdownMenu.name = 'lb-dropdown-menu'
DropdownItem.name = 'lb-dropdown-item'
Upload.name = 'lb-upload'
const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    buttongroup,
    DatePicker,
    Table,
    TableColumn,
    Upload
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
    DatePicker,
    Table,
    TableColumn,
    Upload
}
