<template>
     <a class="link" @click="handleRouter($event,lessonData)">
        <span>
            <i class="fa" :class="{'fa-female ':lessonData.sex=='2','fa-male':lessonData.sex=='1'
            ,'mans':lessonData.sex=='1','woman':lessonData.sex=='2'}"></i>
        </span>{{ lessonData.student_name}}
        <span v-if="lessonData.nickname != ''">{{ lessonData.nickname}}</span>
    </a> 
     <!-- <a class="link" @click="handleRouter($event,lessonData)">
        <span>
            <i class="fa" :class="{'fa-female ':lessonData.student[0].sex=='女','fa-male':lessonData.student[0].sex=='男'
            ,'mans':lessonData.student[0].sex=='男','woman':lessonData.student[0].sex=='女'}"></i>
        </span>{{ lessonData.student[0].student_name}}
        <span v-if="lessonData.student[0].nickname != ''">{{ lessonData.student[0].nickname}}</span>
    </a>  -->
</template>
<script>
export default {
    name: 'LbStudentrouter',
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
