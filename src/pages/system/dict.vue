<template>
    <div class="ng-scope">
        <div class="wrapper-xs ng-scope">
            <div class="wrapper panel panel-default bg-white ng-scope">
                <div class="panel panel-default ng-scope">
                    <div class="panel-heading">字典列表</div>
                    <ul class="list-group">
                        <li class="list-group-item clear ng-scope" v-for="(item, index) in localdata.dict">
                            <span class="pull-right">
                        <a @click="handleShowDialog('lb-dictitems',item)">编辑</a>
                    </span>
                            <h4 class="list-group-item-head ng-binding text-danger">{{item.text}}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dict',
    data() {
        let localdata = {
            'dict': [{
                'type': '1',
                'text': '联系人关系'
            }, {
                'type': '2',
                'text': '收款方式'
            }, {
                'type': '3',
                'text': '学员来源'
            }, {
                'type': '4',
                'text': '沟通方式'
            }, {
                'type': '5',
                'text': '杂费项目'
            }, {
                'type': '6',
                'text': '意向程度'
            }, {
                'type': '7',
                'text': '收入类别'
            }, {
                'type': '8',
                'text': '支出类别'
            }, ]
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>
