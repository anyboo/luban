<template>
    <el-input :placeholder="getSelectStudentName" :disabled="true">
        <el-button slot="append" icon="search" @click="handleShowDialog(showdialog)"></el-button>
    </el-input>
</template>
<script>
export default {
    name: 'LbSelectesearch',
    props: ['value', 'selected', 'default', 'showdialog', 'searchfield','table'],
    data() {
        return {
            defaultvalue: this.default,
            search_id: this.value
        }
    },
    watch: {
        value: function (val) {
            if (val == '') {
                this.defaultvalue = this.default
            }
            this.search_id = val
        }
    },
    mounted() {
        if (this.table&&this.search_id&&this.search_id.length>0){
            this.handleGetTableID(this.table,this.search_id).then((obj)=>{
               if (obj.data.length>0){
                   this.defaultvalue = obj.data[0][this.searchfield]
               }
            })
        }
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == this.showdialog) {
                if (this.selected == '') {
                    let searchId = ''
                    if (this.$store.state.envs.currDialogResult) {
                        let fieldValue = this.searchfield.trim()
                        this.defaultvalue = this.$store.state.envs.currDialogResult[fieldValue]
                        searchId = this.$store.state.envs.currDialogResult._id
                    } else {
                        searchId = ''
                        this.defaultvalue = this.default
                    }
                    this.$store.state.envs.currDialog = ''
                    if (this.search_id != searchId) {
                        this.search_id = searchId
                        this.$emit('input', searchId)
                    }
                }
            }
            return this.defaultvalue
        },
    }
}
</script>
