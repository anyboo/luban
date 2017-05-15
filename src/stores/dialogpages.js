import dialog from '~/pages/dialog/dialog.vue'
import selectstudenttpl from '~/pages/directive/selectStudentTpl.vue'
import selectteachertpl from '~/pages/directive/selectTeacherTpl.vue'
import selectsclasstpl from '~/pages/directive/selectSClassTpl.vue'
import selectclasstpl from '~/pages/directive/selectClassTpl.vue'
import selectlessontpl from '~/pages/directive/selectLessonTpl.vue'

var pages = {}
pages['lb-dialog'] = dialog
pages['lb-selectstudenttpl'] = selectstudenttpl
pages['lb-selectteachertpl'] = selectteachertpl
pages['lb-selectsclasstpl'] = selectsclasstpl
pages['lb-selectclasstpl'] = selectclasstpl
pages['lb-selectlessontpl'] = selectlessontpl
export default pages