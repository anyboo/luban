import courseRecord from './pagemodules/courseRecord'
import payRecord from './pagemodules/payRecord'
import callbackRecord from './pagemodules/callbackRecord'
import lessonleaveRecord from './pagemodules/lessonleaveRecord'
import eventsRecord from './pagemodules/eventsRecord'
import salaryRecord from './pagemodules/attendance'
import classes from './pagemodules/classes'
import classes1 from './pagemodules/classes1'

let pages = {}
pages['courseRecord']= courseRecord
pages['courseRecordclasses']= classes
pages['payRecord']= payRecord
pages['callbackRecord']= callbackRecord
pages['lessonleaveRecord']= lessonleaveRecord
pages['eventsRecord']= eventsRecord
pages['salaryRecord']= salaryRecord
pages['classes1']= classes1

export default pages