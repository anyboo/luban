<template>
    <div>
        <p>
            <label>单次课时长:</label>
            <span class="label bg-info">{{lessonData.unit_hours}}</span>时
        </p>
        <p>
            <label>课程包含:</label>
            <template v-if="lessonData.lesson_type=='0'&&lessonData.price_model=='0'">
                <span class="label bg-info">{{lessonData.inc_times}}</span>次
            </template>
            <span class="label bg-info">{{lessonData.inc_hours}}</span>课时
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
