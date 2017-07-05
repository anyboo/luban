import studentadd from '~/pages/views/student/add.vue'
import studentlist from '~/pages/views/student/list.vue'
//import studentlist1 from '~/pages/views/student/list1.vue'
//import studentlist2 from '~/pages/views/student/list2.vue'
import studentlist0 from '~/pages/views/student/list0.vue'
import studentbirthdays from '~/pages/views/student/birthdays.vue'
import studentrecording from '~/pages/views/student/recording.vue'
import studentlost from '~/pages/views/student/lost.vue'
import studenttracks from '~/pages/views/student/tracks.vue'

var pages = {}
pages['lb-studentadd'] = studentadd
pages['lb-studentlist'] = studentlist
    //pages['lb-studentlist1'] = studentlist1
    //pages['lb-studentlist2'] = studentlist2
pages['lb-studentlist0'] = studentlist0
pages['lb-studentbirthdays'] = studentbirthdays
pages['lb-studentrecording'] = studentrecording
pages['lb-studentlost'] = studentlost
pages['lb-studenttracks'] = studenttracks
export default pages
