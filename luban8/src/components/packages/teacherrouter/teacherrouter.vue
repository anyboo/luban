<template>
    <a class="link" @click="handleRouter1($event,lessonData)" v-if="lessonData">
        
        <span>{{lessonData.class_name}}</span>        
        <span v-if="lessonData.nickname != ''">{{ lessonData.nickname}}</span>
    </a> 
</template>
<script>
export default {
    name: 'LbTeacherrouter',
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
