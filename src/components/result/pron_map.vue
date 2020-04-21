<template>
  <div>
    <!-- 麪包屑導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>研究成果</el-breadcrumb-item>
      <el-breadcrumb-item>對音地圖</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card :body-style="{ padding: '0px' }" class="card">
     
      <el-carousel :interval="3000" type="card" height="560px" class="carousel">
        <el-carousel-item v-for="(url,index) in imgUrl" :key="index">
           <img :src="url"/>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgUrl:[
        require('./img/clothes.jpg'),
        require('./img/clothes1.jpg'),
        require('./img/hat.jpg'),
        require('./img/hat1.jpg'),
        require('./img/shoe.jpg'),
        require('./img/shoe1.jpg'),
        require('./img/zhi.jpg'),
        require('./img/zhi1.jpg'),
      ]
    }
  }
};
</script>

<style lang="less" scoped>
img{
  width:500px;
  height: 560px;
}
.carousel{
    width: 80%;
    margin: 0 auto;
}
</style>