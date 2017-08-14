<template>
    <div>
        <p>
            <span class="label bg-danger">{{getButtongroupText(typeData.othertype,lessonData[typeData.lesson_type])}}</span>{{lessonData[typeData.lesson_name]}}
            <small class="label bg-info m-l">{{lessonData[typeData.lesson_no]}}</small>
        </p>
    </div>
</template>
<script>
export default {
    name: 'LbLessontype',
    props: ['lessonData', 'typeData'],
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
