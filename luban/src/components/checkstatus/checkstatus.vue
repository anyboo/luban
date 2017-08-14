<template>
    <div>
        <template v-if="typeData.statutype=='openlessonsstatus'">
            <small class="label bg-success" v-if="getOpen(lessonData,'open')">已开课</small>
            <small class="label bg-red" v-if="getOpen(lessonData,'')">未开课</small>
            <small class="label bg-blue" v-if="getOpen(lessonData,'close')">已结课</small>
        </template>
        <template v-if="typeData.statutype=='accountcheck'">
            <span v-if="lessonData.check_status == '0'" class="badge bg-warning">未对账</span>
            <span v-if="lessonData.check_status == '1'" class="badge bg-success">已对账</span>
        </template>
        <template v-if="typeData.statutype=='checkAccount'">
            <a v-if="lessonData.check_status== '0'" class="btn btn-xs btn-default" @click="handleCheck(lessonData._id)">核对</a>
            <span v-if="lessonData.check_status == '1'" class="info bg-success">已核对</span>
        </template>
    </div>
</template>
<script>
export default {
    name: 'LbCheckstatus',
    props: ['lessonData', 'typeData'],
    data() {
        return {
        }
    },
    watch: {
    },
    methods: {
        handleCheck(id) {
            this.$confirm('是否要核对?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.updateTeble('flow', id, {
                    'check_status': 1
                }).then(() => {
                    this.$message({
                        message: '核对成功',
                        type: 'success'
                    })
                    this.$emit('search')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已确定核对'
                })
            }
                )
        },
    },
    computed: {
    }
}
</script>
