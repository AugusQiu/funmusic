<template>
  <div class="leftWrap">
  <el-col>
    <div class="block avatar"><el-avatar :size="50"></el-avatar></div>
    <el-menu 
       :default-active="'1'"
       > 
        <el-menu-item-group title="在线音乐">
          <el-menu-item index="1"><i class="iconfont icon-music"></i>音乐星球</el-menu-item>
          <el-menu-item index="2"><i class="iconfont icon-fm"></i>电台收听</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="我的音乐">
          <el-menu-item index="3"><i class="iconfont icon-love"></i>我喜欢</el-menu-item>
          <el-menu-item index="4"><i class="iconfont icon-pc"></i>本地音乐</el-menu-item>
          <el-menu-item index="5"><i class="iconfont icon-download"></i>下载管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="创建的歌单">
          <el-menu-item><i class="iconfont icon-song"></i>华语流行100首</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="收藏的歌单">
          <el-menu-item><i class="iconfont icon-song"></i>周杰伦</el-menu-item>
        </el-menu-item-group>
    </el-menu>
  </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class leftNav extends Vue {
 
}
</script>

<style scoped>
 .leftWrap{
   width:200px;
 }
 .avatar{
   margin-left: 75px;
 }
 i[class^='iconfont icon-']{
    margin-right:6px;
 }
</style>