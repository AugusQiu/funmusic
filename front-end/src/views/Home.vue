<template>
  <div class="home">
      <div class="carouselWrap">
           <el-carousel trigger="click" height="150px" class="hide">
              <el-carousel-item v-for="item in carouseList" :key="item">
              <img width="500" height="150" :src="item"/>
              </el-carousel-item>
           </el-carousel>
      </div>
      <div class="listWrap">
        <p>推荐歌单</p><hr/>
          <el-row>
             <el-col :span="5" v-for="item in songsList" :key="item.id" :offset="item.id > 1 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                <img :src="item.url" class="image" width="150" height="130">
                <div style="padding: 8px;">
                    <span>{{item.text}}</span>
                </div>
               </el-card>
             </el-col>
         </el-row>

      </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  carouseList:string[] = ["http://p1.music.126.net/c_z_ylrU8Jl47qR2US7rKw==/109951165082797815.jpg?imageView&quality=89",
                          "http://p1.music.126.net/v5E4A91u5IXUV2fRFXsMsA==/109951165082809618.jpg?imageView&quality=89",
                          "http://p1.music.126.net/E_Y6ZrSP_tAIBJRFjhMmZw==/109951165081953844.jpg?imageView&quality=89"]

  songsList:object[]  = [ {
                             id:1,
                             url:"http://p4.music.126.net/jOku0pcfMkC-PGtsnGhyAg==/109951164983180957.jpg?param=200y200",
                             text:"温柔和情歌"
                          },
                           {
                             id:2,
                             url:"http://p3.music.126.net/q40hrQZv9C1qzrPDAO7Lig==/109951165069492222.jpg?param=200y200",
                             text:"快手华语歌"
                          },
                          {
                             id:3,
                             url:"http://p3.music.126.net/u62qfFp_9ASBQ9SulWVJdQ==/109951164552138354.jpg?param=200y200",
                             text:"迷人嗓音"
                          },
                          {
                             id:4,
                             url:"http://p4.music.126.net/NYHDw-AwM4adHz8ZXYKUXg==/109951164869100401.jpg?param=200y200",
                             text:"少年"
                          },
                            ]
}
</script>
<style scoped>
 .home{
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .carouselWrap{
   width: 500px;
 }
 .hide{
   overflow: hidden;
   text-align: center;
 }
 .listWrap{
   width:100%;
 }
</style>
