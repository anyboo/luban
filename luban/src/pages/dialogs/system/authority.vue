<template>
    <div class="modal-dialog">
        <div class="modal-content" modal-transclude>
    
            <div class="modal-header">
                <button class="close" type="button" @click="lbClosedialog($event)">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">关闭</span>
                </button>
                <h3 class="modal-title">
                   {{authority.name}} 的权限设置
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
            },
            authority:{}
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.authority = this.$store.state.dialogs.dailogdata
        }
    },
    computed: {
        authoritymenu() {
            let treedata = []
            let menudata = {}
            menudata.id = '0'
            menudata.label = '菜单权限'
            menudata.children = []
            treedata.push(menudata)

            let optdata = {}
            optdata.id = '0'
            optdata.label = '功能权限'
            optdata.children = []
            treedata.push(optdata)

            this.gettreedata(menudata.children, optdata.children, menus)


            return treedata
        }
    },
    watch: {},
    methods: {
        getoptdata(optdata, dropDownMenu) {
            dropDownMenu.forEach((item) => {
                let optitem = {}
                if (item.url) {
                    optitem.id = item.url
                } else if (item.action) {
                    optitem.id = item.action
                }
                optitem.label = item.text
                optdata.push(optitem)
            })
        },
        gettreedata(menudata, optdata, menus) {
            if (menus) {
                menus.forEach((element) => {
                    let obj = {}
                    obj.id = element.to
                    obj.label = element.menuTitle
                    obj.children = []
                    if (element.dropDownMenu || element.action) {
                        let optitem = {}
                        optitem.id = element.to
                        optitem.label = element.menuTitle
                        optitem.children = []
                        if (element.dropDownMenu) {
                            this.getoptdata(optitem.children, element.dropDownMenu)
                        }
                        if (element.action) {
                            this.getoptdata(optitem.children, element.action)
                        }
                        optdata.push(optitem)
                    }
                    this.gettreedata(obj.children, optdata, element.menu)
                    menudata.push(obj)
                })
            }
        },
    }
}
</script>

