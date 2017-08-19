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
<<<<<<< HEAD
                        console.log('4555', fieldValue)
                        this.defaultvalue = this.$store.state.envs.currDialogResult[fieldValue]
                        console.log('8888', this.defaultvalue)
=======
                        this.defaultvalue = this.$store.state.envs.currDialogResult[fieldValue]
>>>>>>> 9586392fd6dc12209b677d00ba06f65616e1777e
                        searchId = this.$store.state.envs.currDialogResult._id
                    } else {
                        searchId = ''
                        this.defaultvalue = this.default
                    }
                    this.$store.state.envs.currDialog = ''
                    if (this.search_id != searchId) {
                        this.search_id = searchId
<<<<<<< HEAD
                        console.log('99999', searchId)
=======
>>>>>>> 9586392fd6dc12209b677d00ba06f65616e1777e
                        this.$emit('input', searchId)
                    }
                }
            }
            return this.defaultvalue
        },
    }
}
</script>
