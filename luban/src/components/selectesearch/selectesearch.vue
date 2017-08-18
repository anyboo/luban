<template>
    <div class="input-group">
        <input type="text" :placeholder="getSelectStudentName" class="form-control" ng-readonly="true" readonly="readonly">
        <span class="input-group-btn">
            <button class="btn btn-default" @click="lbShowdialog($event,showdialog)">
                <i class="el-icon-menu"></i>
            </button>
        </span>
    </div>
</template>
<script>
export default {
    name: 'LbSelectesearch',
    props: ['value', 'selected','default','showdialog','searchfield'],
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
            if (this.$store.state.envs.currDialog == this.showdialog) {
                if (this.selected == '') {
                    let searchId = ''
                    if (this.$store.state.envs.currDialogResult) {
                        let fieldValue=this.searchfield.trim()
                        console.log('4555',fieldValue)
                        this.defaultvalue = this.$store.state.envs.currDialogResult.fieldValue
                        console.log('8888',this.defaultvalue)
                        searchId = this.$store.state.envs.currDialogResult._id
                    } else {
                        searchId = ''
                        this.defaultvalue = this.default
                    }
                    this.$store.state.envs.currDialog = ''
                    if (this.search_id != searchId) {
                        this.search_id = searchId
                        console.log('99999',searchId)
                        this.$emit('input', searchId)
                    }
                }
            }
            return this.defaultvalue
        },
    }
}
</script>
