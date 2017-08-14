<template>
    <div>
        <p>
            <label>单次课时长:</label>
            <span class="label bg-info">{{lessonData[typeData.unit_hours]}}</span>时
        </p>
        <p>
            <label>课程包含:</label>
            <template v-if="lessonData[typeData.lesson_type]=='0'&&lessonData[typeData.price_model]=='0'">
                <span class="label bg-info">{{lessonData[typeData.inc_times]}}</span>次
            </template>
            <span class="label bg-info">{{lessonData[typeData.inc_hours]}}</span>课时
        </p>
    </div>
</template>
<script>
export default {
    name: 'LbLessonhours',
    props: ['lessonData','typeData'],
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
