import page1 from '~/pages/dialog/dialog.vue'
import page2 from '~/pages/directive/selectteachertpl.vue'
import page3 from '~/pages/widget/attendance/no_arrange_explain.modal.vue'
import page4 from '~/pages/lesson/lesson/new_lesson.modal.vue'
import page5 from '~/pages/lesson/classes/open_class.modal.vue'
import page6 from '~/pages/directive/selectstudenttpl.vue'
import page7 from '~/pages/student/order/pay_now.modal.vue'
import page8 from '~/pages/student/order/pay_reg.modal.vue'
import page9 from '~/pages/student/order_unpay_clear.modal.vue'
import page10 from '~/pages/public/feature.modal.vue'
import page11 from '~/pages/directive/selectsclasstpl.vue'
import page12 from '~/pages/lesson/classes/lesson_arrange.modal.vue'
import page13 from '~/pages/widget/attendance.modal.vue'
import page14 from '~/pages/hours/view_lesson_amount.modal.vue'
import page15 from '~/pages/iae/flow.add.modal.vue'
import page16 from '~/pages/iae/set_odi.modal.vue'
import page17 from '~/pages/lesson/classes/edit_class.modal.vue'
import page18 from '~/pages/lesson/classes/input_student.modal.vue'
import page19 from '~/pages/lesson/classes/reg_performance.modal.vue'
import page20 from '~/pages/lesson/classes/lesson_dispatch.modal.vue'
import page21 from '~/pages/lesson/classes/end_class.modal.vue'
import page22 from '~/pages/hours/reg_class_attendance.modal.vue'
import page23 from '~/pages/hours/remove_class_attendance.modal.vue'
import page25 from '~/pages/lesson/contracts/add_performance.modal.vue'
import page26 from '~/pages/lesson/contract/edit.modal.vue'
import page27 from '~/pages/lesson/contracts/lesson_arrange.modal.vue'
import page28 from '~/pages/lesson/contracts/lesson_dispatch.modal.vue'
import page29 from '~/pages/lesson/contracts/lesson_end.modal.vue'
import page30 from '~/pages/lesson/contracts/lesson_delete.modal.vue'
import page31 from '~/pages/lesson/lesson/cate.vue'
import page33 from '~/pages/lesson/sclasses/new_sclass.modal.vue'
import page35 from '~/pages/student/edit_photo.modal.vue'
import page36 from '~/pages/student/order.modal.vue'
import page37 from '~/pages/student/add_track.modal.vue'
import page38 from '~/pages/student/import.vue'
import page39 from '~/pages/directive/selectclasstpl.vue'
import page40 from '~/pages/directive/selectlessontpl.vue'
import page41 from '~/pages/student/orders.modal.vue'
import page42 from '~/pages/student/trash.vue'
import page43 from '~/pages/student/edit_info.modal.vue'
import page44 from '~/pages/student/reg_student_attendances.modal.vue'
import page45 from '~/pages/student/change_class.modal.vue'
import page46 from '~/pages/student/wechat.modal.vue'
import page47 from '~/pages/student/reg_student_match.modal.vue'
import page48 from '~/pages/student/order/refund.modal.vue'
import page49 from '~/pages/student/endlesson.modal.vue'
import page50 from '~/pages/student/change_branch.modal.vue'
import page51 from '~/pages/student/region_set.modal.vue'
import page52 from '~/pages/student/purpose_set.modal.vue'
import page53 from '~/pages/student/view_course.modal.vue'
import page54 from '~/pages/student/order/unpay_clear.modal.vue'
import page55 from '~/pages/student/edit_contact.modal.vue'
import page56 from '~/pages/system/dict/dict_items.vue'
import page57 from '~/pages/system/groups.vue'
import page58 from '~/pages/system/employee/employee_add.modal.vue'
import page60 from '~/pages/system/employee/employee_edit.modal.vue'
import page61 from '~/pages/system/employee/lock.modal.vue'
import page62 from '~/pages/system/employee/reset_account.modal.vue'
import page63 from '~/pages/system/employee/change_account.modal.vue'
import page64 from '~/pages/lesson/classes/teacher_arranges.modal.vue'
import page65 from '~/pages/lesson/package/add_subject.modal.vue'
import page66 from '~/pages/lesson/order/order_refund.modal.vue'
import page67 from '~/pages/system/branch/add_modal.vue'
import page68 from '~/pages/lesson/end_sclass_modal.vue'
import page69 from '~/pages/lesson/sclasses/students_modal.vue'

var pages = {}
pages['lb-dialog'] = page1
pages['lb-selectteachertpl'] = page2
pages['lb-noarrangeexplainmodal'] = page3
pages['lb-newlessonmodal'] = page4
pages['lb-openclassmodal'] = page5
pages['lb-selectstudenttpl'] = page6
pages['lb-paynowmodal'] = page7
pages['lb-payregmodal'] = page8
pages['lb-orderunpayclearmodal'] = page9
pages['lb-featuremodal'] = page10
pages['lb-selectsclasstpl'] = page11
pages['lb-lessonarrangemodal'] = page12
pages['lb-attendancemodal'] = page13
pages['lb-viewlessonamountmodal'] = page14
pages['lb-flowaddmodal'] = page15
pages['lb-setodimodal'] = page16
pages['lb-editclassmodal'] = page17
pages['lb-inputstudentmodal'] = page18
pages['lb-regperformancemodal'] = page19
pages['lb-lessondispatchmodal'] = page20
pages['lb-endclassmodal'] = page21
pages['lb-regclassattendancemodal'] = page22
pages['lb-removeclassattendancemodal'] = page23
pages['lb-addperformancemodal'] = page25
pages['lb-editmodal'] = page26
pages['lb-lessonarrangemodal'] = page27
pages['lb-lessondispatchmodal'] = page28
pages['lb-lessonendmodal'] = page29
pages['lb-lessondeletemodal'] = page30
pages['lb-cate'] = page31
pages['lb-newsclassmodal'] = page33
pages['lb-photomodal'] = page35
pages['lb-editphotomodal'] = page35
pages['lb-ordermodal'] = page36
pages['lb-addtrackmodal'] = page37
pages['lb-import'] = page38
pages['lb-selectclasstpl'] = page39
pages['lb-selectlessontpl'] = page40
pages['lb-ordersmodal'] = page41
pages['lb-trash'] = page42
pages['lb-editinfomodal'] = page43
pages['lb-regstudentattendancesmodal'] = page44
pages['lb-changeclassmodal'] = page45
pages['lb-wechatmodal'] = page46
pages['lb-regstudentmatchmodal'] = page47
pages['lb-refundmodal'] = page48
pages['lb-endlessonmodal'] = page49
pages['lb-changebranchmodal'] = page50
pages['lb-regionsetmodal'] = page51
pages['lb-purposesetmodal'] = page52
pages['lb-viewcoursemodal'] = page53
pages['lb-unpayclearmodal'] = page54
pages['lb-editcontactmodal'] = page55
pages['lb-dictitems'] = page56
pages['lb-groups'] = page57
pages['lb-employeeaddmodal'] = page58
pages['lb-employeeeditmodal'] = page60
pages['lb-lockmodal'] = page61
pages['lb-resetaccountmodal'] = page62
pages['lb-changeaccountmodal'] = page63
pages['lb-teacherarrangesmodal'] = page64
pages['lb-addsubjectmodal'] = page65
pages['lb-orderrefundmodal'] = page66
pages['lb-addmodal'] = page67
pages['lb-endsclassmodal'] = page68
pages['lb-studentsmodal'] = page69
export default pages