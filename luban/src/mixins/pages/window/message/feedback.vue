<template>
    <div class="messager-body">
        我们迫切希望得到您有价值的反馈，有您的反馈，我们会做的更好！
        <div class="messager-inputs">
            <input data-name="email" value="" style="width:100%;margin:5px 0px;" type="email" class="messager-input form-control " placeholder="联系方式">
            <textarea data-name="content" value="" rows="5" style="width:100%;margin:5px 0px;" class="messager-input form-control " placeholder="反馈意见"></textarea>
        </div>
        <div class="messager-buttons">
            <div class="messager-tip" style="display: inline-block;"></div>
            <button class="btn messager-btn btn-default" @click="handleClick">确定</button>
            <button class="btn hte-messager-btn btn-default" @click="handleClick">取消</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'feedback',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    methods: {
         handleClick() {
            this.$emit('messageclose')
        }
    }
}
</script>