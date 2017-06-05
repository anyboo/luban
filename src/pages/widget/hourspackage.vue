<template>
    <div class="form-group ng-scope" ng-if="att.lesson_type == 10 || att.lesson_type == 11">
        <label class="control-label col-md-2 col-xs-3">科目:</label>
        <div class="col-md-10 col-xs-9">
            <select class="form-control ng-pristine ng-untouched ng-valid" name="sj_id" ui-jq="chosen" ng-options="subject.sj_id as subject.subject_name for subject in $gv.subjects" style="display: none;" v-model="localdata.form.lb_att_sj_id">
                <option value class>选择科目</option>
            </select>
            <div class="chosen-container chosen-container-single" style="width: 735px;" title>
                <a class="chosen-single" tabindex="-1">
                    <span>选择科目</span>
                    <div>
                        <b></b>
                    </div>
                </a>
                <div class="chosen-drop">
                    <div class="chosen-search">
                        <input type="text" autocomplete="off">
                    </div>
                    <ul class="chosen-results"></ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footer',
    data() {
        let localdata = {
            'form': {
                'lb_att_sj_id': ''
            }
        }
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>