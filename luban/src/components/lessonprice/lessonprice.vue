<template>
    <div>
        <p>
            课程单价:{{getToFixed(lessonData[typeData.unit_price])}}元/次
        </p>
        <p>
            <label>课程售价:</label>
            <span class="label bg-info">{{getToFixed(lessonData[typeData.price])}}</span>元
        </p>
    </div>
</template>
<script>
export default {
    name: 'LbLessonprice',
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
