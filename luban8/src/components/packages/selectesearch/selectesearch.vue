<template>
    <el-input :placeholder="getSelectStudentName" :disabled="true">
        <el-button slot="append" icon="search" @click="showDailog(showdialog)"></el-button>
    </el-input>
</template>
<script>
export default {
    name: 'LbSelectesearch',
    props: ['value', 'selected', 'field', 'default', 'showdialog', 'searchfield', 'table'],
    data() {
        return {
            defaultvalue: this.default,
            search_id: this.value,
            objdata: null,
            currDialogId: 0
        }
    },
    watch: {
        value: function(val) {
            if (val == '') {
                this.defaultvalue = this.default
            }
            this.search_id = val
            this.getdefaulatvalue()
        }
    },
    mounted() {
        this.getdefaulatvalue()
    },
    methods: {
        showDailog(showdialog) {
            this.currDialogId = this.$store.state.envs.currDialogId + 1
            this.$store.state.envs.currDialogId = this.currDialogId
            this.handleShowDialog(showdialog)
        },
        getdefaulatvalue() {
            if (this.table && this.search_id && this.search_id.length > 0) {
                this.handleGetTableID(this.table, this.search_id).then((obj) => {
                    if (obj.data.length > 0) {
                        this.defaultvalue = obj.data[0][this.searchfield]
                    }
                })
            }
        },
    },
    computed: {
        getSelectStudentName() {
            if (this.$store.state.envs.currDialog == this.showdialog && this.$store.state.envs.currDialogId == this.currDialogId) {
                if (this.selected == '') {
                    let searchId = ''
                    this.objdata = null
                    if (this.$store.state.envs.currDialogResult) {
                        let fieldValue = this.searchfield.trim()
                        this.defaultvalue = this.$store.state.envs.currDialogResult[fieldValue]
                        this.objdata = this.$store.state.envs.currDialogResult
                        searchId = this.$store.state.envs.currDialogResult._id
                    } else {
                        searchId = ''
                        this.defaultvalue = this.default
                    }
                    this.$store.state.envs.currDialog = ''

                    if (this.search_id != searchId) {
                        this.search_id = searchId
                        this.$emit('input', searchId)
                        this.$emit('change', { id: searchId, text: this.defaultvalue, field: this.field, data: this.objdata })
                    }
                }
            }
            return this.defaultvalue
        },
    }
}
</script>
