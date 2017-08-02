import studentadd from '~/pages/views/student/add.vue'
import studentlist from '~/pages/views/student/list.vue'
import studentlist0 from '~/pages/views/student/list0.vue'
import studentbirthdays from '~/pages/views/student/birthdays.vue'
import studentrecording from '~/pages/views/student/recording.vue'
import studentlost from '~/pages/views/student/lost.vue'
import studenttracks from '~/pages/views/student/tracks.vue'
import studentinfo from '~/pages/views/student/info.vue'
import studentlist1 from '~/pages/views/student/list1.vue'
import studentlist2 from '~/pages/views/student/list2.vue'

import systemsign_in from '~/pages/views/system/sign_in.vue'
import systempersonal_information from '~/pages/views/system/personal_information.vue'
import systememployee from '~/pages/views/system/employee.vue'
import systemdict from '~/pages/views/system/dict.vue'
import systemorg from '~/pages/views/system/org.vue'
import systemroles from '~/pages/views/system/roles.vue'
import systemsystems from '~/pages/views/system/systems.vue'
import systemcharge_module from '~/pages/views/system/charge_module.vue'

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

import hoursarrange from '~/pages/views/hours/arrange.vue'
import hourssuspends from '~/pages/views/hours/suspends.vue'
import hoursleaves from '~/pages/views/hours/leaves.vue'
import hoursabsences from '~/pages/views/hours/absences.vue'
import hourswarning from '~/pages/views/hours/warning.vue'
import hoursstudent from '~/pages/views/hours/student.vue'
import hoursteacher from '~/pages/views/hours/teacher.vue'
import hoursattendance from '~/pages/views/hours/attendance.vue'
import hoursschedule from '~/pages/views/hours/schedule.vue'

var pages = {}
pages['lb-studentadd'] = studentadd
pages['lb-studentlist'] = studentlist
pages['lb-studentlist0'] = studentlist0
pages['lb-studentbirthdays'] = studentbirthdays
pages['lb-studentrecording'] = studentrecording
pages['lb-studentlost'] = studentlost
pages['lb-studenttracks'] = studenttracks
pages['lb-studentinfo'] = studentinfo
pages['lb-studentlist1'] = studentlist1
pages['lb-studentlist2'] = studentlist2

pages['lb-systempersonal_information'] = systempersonal_information
pages['lb-systemsign_in'] = systemsign_in
pages['lb-systememployee'] = systememployee
pages['lb-systemdict'] = systemdict
pages['lb-systemorg'] = systemorg
pages['lb-systemroles'] = systemroles
pages['lb-systemsystems'] = systemsystems
pages['lb-systemcharge_module'] = systemcharge_module

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

pages['lb-hoursarrange'] = hoursarrange
pages['lb-hourssuspends'] = hourssuspends
pages['lb-hoursleaves'] = hoursleaves
pages['lb-hoursabsences'] = hoursabsences
pages['lb-hourswarning'] = hourswarning
pages['lb-hoursstudent'] = hoursstudent
pages['lb-hoursteacher'] = hoursteacher
pages['lb-hoursattendance'] = hoursattendance
pages['lb-hoursschedule '] = hoursschedule

export default pages