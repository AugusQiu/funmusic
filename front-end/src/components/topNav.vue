<template>
  <div class="topWrap">
      <el-menu :default-active="'1'"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                >
                 <el-menu-item index="1">推荐</el-menu-item>
                 <el-menu-item index="2">排行</el-menu-item>
                 <el-menu-item index="3">歌手</el-menu-item>
                 <el-menu-item index="4">歌单</el-menu-item>
       </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class topNav extends Vue {
  public handleSelect(key:string){
    switch(key){
      case "1":
        this.$router.push({ path:'/'});
        break;
      case "2":
        this.$router.push({ path:'/rank'});
        break;
      case "3":
        this.$router.push({ path:'/singers'});
        break;
      case "4":
        this.$router.push({ path:'/songs'});
        break;
      default:
        this.$router.push({ path:'/'});
    }
   
  }
}
</script>

<style scoped>
  .topWrap{
      display: flex;
      justify-content: center;
  }
</style>