import studentadd from '~/pages/views/student/add.vue'
import studentlist from '~/pages/views/student/list.vue'
import studentlist0 from '~/pages/views/student/list0.vue'
import studentbirthdays from '~/pages/views/student/birthdays.vue'
import studentrecording from '~/pages/views/student/recording.vue'
import studentlost from '~/pages/views/student/lost.vue'
import studenttracks from '~/pages/views/student/tracks.vue'

import systemsign_in from '~/pages/views/system/sign_in.vue'
import systememployee from '~/pages/views/system/employee.vue'

var pages = {}
pages['lb-studentadd'] = studentadd
pages['lb-studentlist'] = studentlist
pages['lb-studentlist0'] = studentlist0
pages['lb-studentbirthdays'] = studentbirthdays
pages['lb-studentrecording'] = studentrecording
pages['lb-studentlost'] = studentlost
pages['lb-studenttracks'] = studenttracks

pages['lb-systemsign_in'] = systemsign_in
pages['lb-systememployee'] = systememployee

export default pages
