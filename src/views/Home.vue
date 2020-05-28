<template>
  <div class="home">
      <div class="carouselWrap">
           <el-carousel trigger="click" height="150px" class="hide">
              <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
           </el-carousel>
      </div>
  </div>
</template>

<script> 
export default {
  name: 'Home',
  components: {
  
  }
}
</script>
<style scoped>
 .home{
    display: flex;
    justify-content: center;
 }
 .carouselWrap{
   width: 500px;
 }
 .hide{
   overflow: hidden;
   text-align: center;
 }
</style>
