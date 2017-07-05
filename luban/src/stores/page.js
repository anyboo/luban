import studentadd from '~/pages/views/student/add.vue'
import studentlist from '~/pages/views/student/list.vue'
import studentlist0 from '~/pages/views/student/list0.vue'
import studentbirthdays from '~/pages/views/student/birthdays.vue'
import studentrecording from '~/pages/views/student/recording.vue'
import studentlost from '~/pages/views/student/lost.vue'
import studenttracks from '~/pages/views/student/tracks.vue'

import systemsign_in from '~/pages/views/system/sign_in.vue'
import systememployee from '~/pages/views/system/employee.vue'
import systemdict from '~/pages/views/system/dict.vue'
import systemorg from '~/pages/views/system/org.vue'


import lessonsclasses from '~/pages/views/lesson/sclasses.vue'
import lessonmanage from '~/pages/views/lesson/manage.vue'
import lessonclasses from '~/pages/views/lesson/classes.vue'
import lessonorders from '~/pages/views/lesson/orders.vue'

import feelist1 from '~/pages/views/fee/list1.vue'
import feelist3 from '~/pages/views/fee/list3.vue'
import feelist4 from '~/pages/views/fee/list4.vue'

import iaeflow from '~/pages/views/iae/flow.vue'
import iaeincome from '~/pages/views/iae/income.vue'
import iaeexpenses from '~/pages/views/iae/expenses.vue'


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
pages['lb-systemdict'] = systemdict
pages['lb-systemorg'] = systemorg 


pages['lb-lessonsclasses'] = lessonsclasses
pages['lb-lessonmanage'] = lessonmanage
pages['lb-lessonclasses'] = lessonclasses
pages['lb-lessonorders'] = lessonorders

pages['lb-feelist1'] = feelist1
pages['lb-feelist3'] = feelist3
pages['lb-feelist4'] = feelist4

pages['lb-iaeflow'] = iaeflow
pages['lb-iaeincome'] = iaeincome 
pages['lb-iaeexpenses'] = iaeexpenses 

export default pages
