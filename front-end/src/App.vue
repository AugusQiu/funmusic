<template>
  <div id="app">
      <el-container>
            <el-aside><left-nav/></el-aside>
             <el-container>
                    <el-header><top-nav/></el-header>
                    <el-main>
                      <router-link to="/"></router-link>
                      <router-view/>
                    </el-main>    
            </el-container>   
        </el-container>
          <play-music></play-music>
  </div>
</template>

<script>
// @ is an alias to /src
import leftNav   from '@/components/leftNav.vue'
import topNav    from '@/components/topNav.vue' 
import playMusic from '@/components/playMusic.vue'
export default {
  name: 'App',
  components: {
     leftNav,
     topNav,
     playMusic
  }
}
</script>
<style>
/* 阿里iconfont图标库 */
@import url("//at.alicdn.com/t/font_1847493_iebless86y.css");

#app {
  margin:0;
  padding:0;
}
</style>
