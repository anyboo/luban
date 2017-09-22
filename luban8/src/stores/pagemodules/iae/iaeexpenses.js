export default {
    'pageName': 'iaeicome',
    'pageLable': '支出明细',
    'tableSearch': [{
        'localField': 'op_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee',
        
    },{
        'key': 'type',
        'value': 0,
        'type':''
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
                            endTime = this.getDatetimeEndOf(vm.localdata.form.daterange[1])
                        }
                        filterObj.push({
                            'key': 'create_time',
                            'value': startTime,
                            'type': 'gt'
                        })
                        filterObj.push({
                            'key': 'create_time',
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
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '未对账',
                    'icon': ''
                },
                {
                    'label': '已对账',
                    'icon': ''
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'create_time'
        },
        {
            'type': 'negativeTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
        },
        {
            'type': 'text',
            'label': '类别',
            'prop': 'sel',
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'note',
        },
        {
            'type': 'tabletext',
            'label': '经办人',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'checkstatus',
            'statutype': 'accountcheck',
            'label': '对账状态'
        },
        {
            'type': 'checkstatus',
            'statutype': 'checkAccount',
            'label': '操作'
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}