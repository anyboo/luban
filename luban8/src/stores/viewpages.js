import studentadd from '~/pages/views/student/add.vue'
import studentinfo from '~/pages/views/student/info.vue'
import infoclass from '~/pages/views/student/infoclass.vue'
import infoorder from '~/pages/views/student/infoorder.vue'

import systemsign_in from '~/pages/views/system/sign_in.vue'
import systempersonal_information from '~/pages/views/system/personal_information.vue'
import systemdict from '~/pages/views/system/dict.vue'
import systemorg from '~/pages/views/system/org.vue'
import systemreg from '~/pages/views/system/reg.vue'
import systemsystems from '~/pages/views/system/systems.vue'

import hoursarrange from '~/pages/views/hours/arrange.vue'

var pages = {}
pages['lb-studentadd'] = studentadd
pages['lb-studentinfo'] = studentinfo
pages['lb-lessoninfoclass'] = infoclass
pages['lb-orderinfoorder'] = infoorder

pages['lb-systempersonal_information'] = systempersonal_information
pages['lb-systemsign_in'] = systemsign_in
pages['lb-systemdict'] = systemdict
pages['lb-systemorg'] = systemorg
pages['lb-systemreg'] = systemreg
pages['lb-systemsystems'] = systemsystems

pages['lb-hoursarrange'] = hoursarrange

export default pages