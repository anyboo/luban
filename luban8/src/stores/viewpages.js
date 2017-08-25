import studentadd from '~/pages/views/student/add.vue'
import studentinfo from '~/pages/views/student/info.vue'

import systemsign_in from '~/pages/views/system/sign_in.vue'
import systempersonal_information from '~/pages/views/system/personal_information.vue'
import systemdict from '~/pages/views/system/dict.vue'
import systemorg from '~/pages/views/system/org.vue'
import systemroles from '~/pages/views/system/roles.vue'
import systemsystems from '~/pages/views/system/systems.vue'
import systemcharge_module from '~/pages/views/system/charge_module.vue'

import hoursarrange from '~/pages/views/hours/arrange.vue'

var pages = {}
pages['lb-studentadd'] = studentadd
pages['lb-studentinfo'] = studentinfo

pages['lb-systempersonal_information'] = systempersonal_information
pages['lb-systemsign_in'] = systemsign_in
pages['lb-systemdict'] = systemdict
pages['lb-systemorg'] = systemorg
pages['lb-systemroles'] = systemroles
pages['lb-systemsystems'] = systemsystems
pages['lb-systemcharge_module'] = systemcharge_module

pages['lb-hoursarrange'] = hoursarrange

export default pages