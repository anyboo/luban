import payRecord from './pagemodules/classesinfo/payRecord'
import salaryRecord from './pagemodules/classesinfo/salaryRecord'
import courseRecord from './pagemodules/classesinfo/courseRecord'
import studentOrder from './pagemodules/classesinfo/studentOrder'
import refundRecord from './pagemodules/classesinfo/refundRecord'

let pages =[]
pages.push(studentOrder)
pages.push(courseRecord)
pages.push(salaryRecord)
pages.push(payRecord)
pages.push(refundRecord)

export default pages