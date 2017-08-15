<template>
    <div>
        <p>
            <label>单次课时长:</label>
            <el-tag type="primary">{{lessonData.unit_hours}}</el-tag>时
        </p>
        <p>
            <label>课程包含:</label>
            <template v-if="lessonData.lesson_type=='0'&&lessonData.price_model=='0'">
                <el-tag type="primary">{{lessonData.inc_times}}</el-tag>次
            </template>
            <el-tag type="primary">{{lessonData.inc_hours}}</el-tag>课时
        </p>
    </div>
</template>
<script>
export default {
    name: 'LbLessonhours',
    props: ['lessonData'],
    data() {
        return {
        }
    },
    watch: {
    },
    methods: {
    },
    computed: {
    }
}
</script>
