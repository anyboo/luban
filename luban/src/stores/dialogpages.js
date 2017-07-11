import dialog from '~/pages/web/dialog/dialog.vue'
import finishadd from '~/pages/dialogs/student/finishadd.vue'
import selectstudenttpl from '~/pages/dialogs/directive/selectstudenttpl.vue'
import page15 from '~/pages/dialogs/iae/flow.add.modal.vue'
import page31 from '~/pages/dialogs/lesson/cate.vue'
import page5 from '~/pages/dialogs/lesson/open_class.modal.vue'
import page4 from '~/pages/dialogs/lesson/new_lesson.modal.vue'
import page33 from '~/pages/dialogs/lesson/new_sclass.modal.vue'
import page38 from '~/pages/dialogs/student/import.vue'
import page42 from '~/pages/dialogs/student/trash.vue'
import page53 from '~/pages/dialogs/student/view_course.modal.vue'
import page58 from '~/pages/dialogs/system/employee_add.modal.vue'
import page35 from '~/pages/dialogs/student/edit_photo.modal.vue'
import page7 from '~/pages/dialogs/student/pay_now.modal.vue'
import page54 from '~/pages/dialogs/student/unpay_clear.modal.vue'
import page18 from '~/pages/dialogs/lesson/input_student.modal.vue'
import page43 from '~/pages/dialogs/student/edit_info.modal.vue'
import page36 from '~/pages/dialogs/student/order.modal.vue'
import page48 from '~/pages/dialogs/student/refund.modal.vue'
import page45 from '~/pages/dialogs/student/change_class.modal.vue'
import page37 from '~/pages/dialogs/student/add_track.modal.vue'
import page47 from '~/pages/dialogs/student/reg_student_match.modal.vue'
import page49 from '~/pages/dialogs/student/endlesson.modal.vue'
import page51 from '~/pages/dialogs/student/region_set.modal.vue'
import page50 from '~/pages/dialogs/student/change_branch.modal.vue'
import page52 from '~/pages/dialogs/student/purpose_set.modal.vue'
import page62 from '~/pages/dialogs/system/reset_account.modal.vue'
import page67 from '~/pages/dialogs/system/add_modal.vue'
import page68 from '~/pages/dialogs/student/details.vue'
import page69 from '~/pages/dialogs/system/dict_items.vue'
import page39 from '~/pages/dialogs/directive/selectclasstpl.vue'
import page40 from '~/pages/dialogs/directive/selectlessontpl.vue'
import page2 from '~/pages/dialogs/directive/selectteachertpl.vue'
import page11 from '~/pages/dialogs/directive/selectsclasstpl.vue'
import page72 from '~/pages/dialogs/student/refunds.vue'

var pages = {}
pages['lb-dialog'] = dialog
pages['lb-finishadd'] = finishadd
pages['lb-selectstudenttpl'] = selectstudenttpl
pages['lb-flowaddmodal'] = page15
pages['lb-cate'] = page31
pages['lb-openclassmodal'] = page5
pages['lb-newlessonmodal'] = page4
pages['lb-newsclassmodal'] = page33
pages['lb-import'] = page38
pages['lb-trash'] = page42
pages['lb-viewcoursemodal'] = page53
pages['lb-employeeaddmodal'] = page58
pages['lb-photomodal'] = page35
pages['lb-paynowmodal'] = page7
pages['lb-unpayclearmodal'] = page54
pages['lb-inputstudentmodal'] = page18
pages['lb-editinfomodal'] = page43
pages['lb-editphotomodal'] = page35
pages['lb-ordermodal'] = page36
pages['lb-refundmodal'] = page48
pages['lb-changeclassmodal'] = page45
pages['lb-addtrackmodal'] = page37
pages['lb-regstudentmatchmodal'] = page47
pages['lb-endlessonmodal'] = page49
pages['lb-regionsetmodal'] = page51
pages['lb-changebranchmodal'] = page50
pages['lb-purposesetmodal'] = page52
pages['lb-resetaccountmodal'] =page62
pages['lb-addmodal'] = page67
pages['lb-details'] = page68
pages['lb-dictitems'] = page69
pages['lb-selectteachertpl'] = page2
pages['lb-selectsclasstpl'] = page11
pages['lb-selectclasstpl'] = page39
pages['lb-selectlessontpl'] = page40
pages['lb-refunds'] = page72

export default pages
