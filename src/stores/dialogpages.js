import dialog from '~/pages/dialog/dialog.vue'
import lbno_arrange_explainmodal from '~/pages/widget/attendance/no_arrange_explain.modal.vue'
import selectteachertpl from '~/pages/directive/selectTeacherTpl.vue'
import selectstudenttpl from '~/pages/directive/selectStudentTpl.vue'
import lbopen_classmodal from '~/pages/lesson/classes/open_class.modal.vue'
import lbpay_nowmodal from '~/pages/student/order/pay_now.modal.vue'
import lbpay_regmodal from '~/pages/student/order/pay_reg.modal.vue'
import lborder_unpay_clearmodal from '~/pages/student/order_unpay_clear.modal.vue'
import lbfeaturemodal from '~/pages/public/feature.modal.vue'
import selectsclasstpl from '~/pages/directive/selectSClassTpl.vue'
import lblesson_arrangemodal from '~/pages/lesson/classes/lesson_arrange.modal.vue'
import lbview_lesson_amountmodal from '~/pages/hours/view_lesson_amount.modal.vue'
import lbflowaddmodal from '~/pages/iae/flow.add.modal.vue'
import lbset_odimodal from '~/pages/iae/set_odi.modal.vue'
import lbadd_performancemodal from '~/pages/lesson/contracts/add_performance.modal.vue'
import lbedit_lessonmodal from '~/pages/lesson/lesson/edit_lesson.modal.vue'
import lbadd_subjectmodal from '~/pages/lesson/package/add_subject.modal.vue'
import lbnew_sclassmodal from '~/pages/lesson/sclasses/new_sclass.modal.vue'
import lbimport from '~/pages/student/import.vue'
import selectclasstpl from '~/pages/directive/selectClassTpl.vue'
import lbordersmodal from '~/pages/student/orders.modal.vue'
import lbedit_photomodal from '~/pages/student/edit_photo.modal.vue'
import lbordermodal from '~/pages/student/order.modal.vue'
import lbadd_trackmodal from '~/pages/student/add_track.modal.vue'
import lbregion_setmodal from '~/pages/student/region_set.modal.vue'
import lbpurpose_setmodal from '~/pages/student/purpose_set.modal.vue'
import lbview_coursemodal from '~/pages/student/view_course.modal.vue'
import lbtrash from '~/pages/student/trash.vue'
import lbedit_infomodal from '~/pages/student/edit_info.modal.vue'
import lbreg_student_attendancesmodal from '~/pages/student/reg_student_attendances.modal.vue'
import lbchange_classmodal from '~/pages/student/change_class.modal.vue'
import lbwechatmodal from '~/pages/student/wechat.modal.vue'
import lbreg_student_matchmodal from '~/pages/student/reg_student_match.modal.vue'
import lbrefundmodal from '~/pages/student/order/refund.modal.vue'
import lbendlessonmodal from '~/pages/student/endlesson.modal.vue'
import lbchange_branchmodal from '~/pages/student/change_branch.modal.vue'
import lbunpay_clearmodal from '~/pages/student/order/unpay_clear.modal.vue'
import selectlessontpl from '~/pages/directive/selectLessonTpl.vue'
import lbdict_items from '~/pages/system/dict/dict_items.vue'
import lbphotomodal from '~/pages/system/employee/photo.modal.vue'
import lbemployee_editmodal from '~/pages/system/employee/employee_edit.modal.vue'
import lblockmodal from '~/pages/system/employee/lock.modal.vue'
import lbreset_accountmodal from '~/pages/system/employee/reset_account.modal.vue'
import lbchange_accountmodal from '~/pages/system/employee/change_account.modal.vue'
import lbend_classmodal from '~/pages/lesson/classes/end_class.modal.vue'
import lbteacher_arrangesmodal from '~/pages/lesson/classes/teacher_arranges.modal.vue'
import lborder_refundmodal from '~/pages/lesson/order/order_refund.modal.vue'

var pages = {}
pages['lb-dialog'] = dialog
pages['lb-lbno_arrange_explainmodal'] = lbno_arrange_explainmodal
pages['lb-selectteachertpl'] = selectteachertpl
pages['lb-selectstudenttpl'] = selectstudenttpl
pages['lb-lbopen_classmodal'] = lbopen_classmodal
pages['lb-lbpay_nowmodal'] = lbpay_nowmodal
pages['lb-lbpay_regmodal'] = lbpay_regmodal
pages['lb-lborder_unpay_clearmodal'] = lborder_unpay_clearmodal
pages['lb-lbfeaturemodal'] = lbfeaturemodal
pages['lb-selectsclasstpl'] = selectsclasstpl
pages['lb-lblesson_arrangemodal'] = lblesson_arrangemodal
pages['lb-lbview_lesson_amountmodal'] = lbview_lesson_amountmodal
pages['lb-lbflowaddmodal'] = lbflowaddmodal
pages['lb-lbset_odimodal'] = lbset_odimodal
pages['lb-lbadd_performancemodal'] = lbadd_performancemodal
pages['lb-lbedit_lessonmodal'] = lbedit_lessonmodal
pages['lb-lbadd_subjectmodal'] = lbadd_subjectmodal
pages['lb-lbnew_sclassmodal'] = lbnew_sclassmodal
pages['lb-lbimport'] = lbimport
pages['lb-selectclasstpl'] = selectclasstpl
pages['lb-lbordersmodal'] = lbordersmodal
pages['lb-lbedit_photomodal'] = lbedit_photomodal
pages['lb-lbordermodal'] = lbordermodal
pages['lb-lbadd_trackmodal'] = lbadd_trackmodal
pages['lb-lbregion_setmodal'] = lbregion_setmodal
pages['lb-lbpurpose_setmodal'] = lbpurpose_setmodal
pages['lb-lbview_coursemodal'] = lbview_coursemodal
pages['lb-lbtrash'] = lbtrash
pages['lb-lbedit_infomodal'] = lbedit_infomodal
pages['lb-lbreg_student_attendancesmodal'] = lbreg_student_attendancesmodal
pages['lb-lbchange_classmodal'] = lbchange_classmodal
pages['lb-lbwechatmodal'] = lbwechatmodal
pages['lb-lbreg_student_matchmodal'] = lbreg_student_matchmodal
pages['lb-lbrefundmodal'] = lbrefundmodal
pages['lb-lbendlessonmodal'] = lbendlessonmodal
pages['lb-lbchange_branchmodal'] = lbchange_branchmodal
pages['lb-lbunpay_clearmodal'] = lbunpay_clearmodal
pages['lb-selectlessontpl'] = selectlessontpl
pages['lb-lbdict_items'] = lbdict_items
pages['lb-lbphotomodal'] = lbphotomodal
pages['lb-lbemployee_editmodal'] = lbemployee_editmodal
pages['lb-lblockmodal'] = lblockmodal
pages['lb-lbreset_accountmodal'] = lbreset_accountmodal
pages['lb-lbchange_accountmodal'] = lbchange_accountmodal
pages['lb-lbend_classmodal'] = lbend_classmodal
pages['lb-lbteacher_arrangesmodal'] = lbteacher_arrangesmodal
pages['lb-lborder_refundmodal'] = lborder_refundmodal
export default pages