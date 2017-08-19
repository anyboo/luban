<template>
    <el-input :placeholder="getSelectStudentName" :disabled="true">
        <el-button slot="append" icon="search" @click="handleShowDialog(showdialog)"></el-button>
    </el-input>
</template>
<script>
export default {
    name: 'LbSelectesearch',
    props: ['value', 'selected', 'default', 'showdialog', 'searchfield'],
    data() {
        return {
            defaultvalue: this.default,
            search_id: ''
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
    methods: {
    },
    computed: {
        getSelectStudentName() {
             console.log(this.$store.state.envs.currDialog,this.showdialog)
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
