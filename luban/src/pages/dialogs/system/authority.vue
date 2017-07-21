<template>
    <div class="modal-dialog">
        <div class="modal-content" modal-transclude>
    
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                    的权限设置
                </h3>
            </div>
            <div class="modal-body">
                <el-tree :data="authoritymenu" show-checkbox node-key="id" :props="defaultProps">
                </el-tree>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">确定</button>
                <button class="btn btn-warning" @click="lbClosedialog($event)">关闭</button>
            </div>
    
        </div>
    </div>
</template>
<script>
import menus from '~/stores/menu'
export default {
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    computed: {
        authoritymenu() {
            let treedata = []      
            let obj = {}
            obj.id = '0'
            obj.label = '菜单权限'
            obj.children = []    
            treedata.push(obj) 
            this.gettreedata(obj.children, menus)
            let option={}
            option.id = '0'
            option.label = '功能权限'
            option.children = []
            treedata.push(option)   
            return treedata 
        }
    },
    watch: {},
    methods: {
        gettreedata(treedata, menus) {
            if (menus) {
                menus.forEach((element) => {
                    let obj = {}
                    obj.id = element.to
                    obj.label = element.menuTitle
                    obj.children = []
                    this.gettreedata(obj.children, element.menu)
                    treedata.push(obj)
                })
            }
        },
    }
}
</script>

