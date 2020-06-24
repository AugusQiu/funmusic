<template>
  <div class="playWrap">
      <div>
          歌曲信息在这里
      </div>

      <div>

          <audio src="http://tyst.migu.cn/public/product09/2018/05/04/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/%E9%9D%92%E8%8A%B1%E7%93%B7-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3?key=7e4f29834ad38141&Tim=1592986203501&channelid=00&msisdn=ee30d281f28f43c58d83c24f6e0185bf&CI=600547019912600902000006889090&F=000009" 
          ref="myAudio"
          id="myAudio"></audio>
          <p class="iconfont" :class="state?'icon-pause':'icon-play'" @click="switchState"></p>
     
      </div>

      <div>
          相关设置
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class playMusic extends Vue {
  
  //播放状态：要播放=>0 要暂停=>1
  state:number = 0;
//   myAudio:any = document.getElementById('myAudio')!; 
 
  public switchState(){
      if(this.state){
          //播放时
          this.state = 0;
          let myAudio:any = this.$refs.myAudio!;
          myAudio.pause();
   
      }else{
          this.state = 1;
          let myAudio:any = this.$refs.myAudio!;
          myAudio.play();
     
      }
  }
}
</script>

<style scoped>
  .playWrap{
      width: 100%;
      border: 1px solid black;
      height:60px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
  }

</style>