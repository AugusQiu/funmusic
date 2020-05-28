<template>
  <div class="home">
        <el-container>
            <el-aside><left-nav/></el-aside>
             <el-container>
                    <el-header><top-nav/></el-header>
                    <el-main>
                      
                    </el-main>    
            </el-container>   
        </el-container>
        <el-footer></el-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import leftNav  from '@/components/leftNav.vue'
import topNav   from '@/components/topNav.vue'  
export default {
  name: 'Home',
  components: {
    leftNav,
    topNav
  }
}
</script>
<style scoped>

</style>
