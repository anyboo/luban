import studentform from './formmodules/studentform.js'
import sclassesform from './formmodules/sclassesform.js'
import campusform from './formmodules/campusform.js'
import leavesform from './formmodules/leavesform.js'
import suspendform from './formmodules/suspendform.js'
import inquiryform from './formmodules/inquiryform.js'
import recordingform from './formmodules/recordingform.js'
import employeeform from './formmodules/employeeform.js'


let pages = {}
pages['studentform'] = studentform
pages['sclassesform'] = sclassesform
pages['campusform'] = campusform
pages['leavesform'] = leavesform
pages['suspendform'] = suspendform
pages['inquiryform'] = inquiryform
pages['recordingform'] = recordingform
pages['employeeform'] = employeeform

export default pages