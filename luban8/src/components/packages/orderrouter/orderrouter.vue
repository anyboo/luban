<template>
    <a class="link" @click="handleRouter2($event,lessonData)" v-if="lessonData">
        <span>
            <i class="fa" :class="{'fa-female ':lessonData.sex=='2','fa-male':lessonData.sex=='1'
            ,'mans':lessonData.sex=='1','woman':lessonData.sex=='2'}"></i>
        </span>
        <span>{{lessonData.order_no}}</span>        
        <span v-if="lessonData.nickname != ''">{{ lessonData.nickname}}</span>
    </a> 
</template>
<script>
export default {
    name: 'LbOrderrouter',
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
