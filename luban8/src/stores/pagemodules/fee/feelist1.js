export default {
    'pageName': 'feelist1',
    'pageLable': '缴费明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }, {
        'localField': 'order_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'order'
    }],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'searchfunction': function (form, vm) {
                let filterObj = []
                if (form && form.length == 2) {
                    let startTime = vm.getDatetime(form[0])
                    let endTime = vm.getDatetime(form[1])
                    if (startTime > 0) {
                        if (startTime == endTime) {
                            endTime = vm.getDatetimeEndOf(form[1])
                        }
                        filterObj.push({
                            'key': 'createtime',
                            'value': startTime,
                            'type': 'gt'
                        })
                        filterObj.push({
                            'key': 'createtime',
                            'value': endTime,
                            'type': 'lt'
                        })
                    }
                }
                return filterObj
            },
            'fields': [{}]
        },
        {
            'type': 'selectSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let searchValue = form + ''
                if (searchValue.length > 0) {
                    filterObj.push({
                        'key': 'student_id',
                        'value': searchValue,
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [
                {
                    'text': '请选择学员',
                    'showdialog': 'selectstudentdialog',
                    'search': 'student_name'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'createtime'
        },
        {
            'type': 'getToFixed',
            'label': '金额',
            'prop': 'money_pay_amount',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'tabletext',
            'label': '订单号',
            'table': 'order',
            'prop': 'order_no'
        },
        {
            'type': 'tabletext',
            'label': '订单内容',
            'table': 'order',
            'prop': 'body'
        },
        {
            'type': 'dicttext',
            'label': '付款方式',
            'prop': 'region_oe_id',
        },
        {
            'type': 'getButtongrouplookupText',
            'label': '类型',
            'color': 'gray',
            'table': 'order',
            'prop': 'order_type',
            'othertype': [{
                'value': 1,
                'text': '报名费'
            }, {
                'value': 2,
                'text': '预交费'
            }, {
                'value': 3,
                'text': '学杂费'
            }],
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'order_remark'
        }
    ],
    'pageTable': 'pay',
    'pageTemplate': 'table1',
    'pagePath': ''
}