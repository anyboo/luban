<template>
    <div class="lbSdebar">
        <lb-sidebarHeader></lb-sidebarHeader>
        <lb-sidebarItem></lb-sidebarItem>
    </div>
</template>
<script>
import sidebarHeader from '../menu/sidebarHeader.vue'
import sidebarItem from '../menu/sidebarItem.vue'
export default {
    name: 'sidebar',
    data() {
        return {
            isToUl: false
        }
    },
    components: {
        'lb-sidebarHeader': sidebarHeader,
        'lb-sidebarItem': sidebarItem
    },
    methods: {
        handleClickColl() {
            this.isToUl = !this.isToUl
        }
    }

}
</script>