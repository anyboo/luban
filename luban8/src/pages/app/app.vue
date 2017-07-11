<template>
<div class="container" :class="{'contaierb':isvariety,'contaierc':!isvariety}">
      <lb-sidebar></lb-sidebar>
       <lb-header @variety="variety"></lb-header>
      <lb-body></lb-body>
      <lb-footer></lb-footer>
  </div>      
</template>
<script>
import header from './header.vue'
import body from './body.vue'
import footer from './footer.vue'
import sidebar from './sidebar.vue'
export default{
    name:'app',
    data(){
        return {
            isvariety:true
        }
    },
    components:{
        'lb-header':header,
        'lb-body':body,
        'lb-footer':footer,
        'lb-sidebar':sidebar
    },
    methods:{
        variety(){
            this.isvariety = !this.isvariety
        }
    }
}
</script>
