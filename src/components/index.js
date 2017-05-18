import dropdown from './dropdown/'
import buttongroup from './buttongroup/'
import {
    DatePicker,
    Table,
    TableColumn,
} from 'element-ui'

DatePicker.name = 'lb-date-picker'
Table.name = 'lb-table'
TableColumn.name = 'lb-table-column'
const components = [
    dropdown.LbDropdown,
    dropdown.LbDropdownButton,
    dropdown.LbDropdownMenu,
    dropdown.LbDropdownMenuItem,
    buttongroup,
    DatePicker,
    Table,
    TableColumn
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
    TableColumn
}
