<template>
  <div>
    <!-- 麪包屑導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>項目概覽</el-breadcrumb-item>
      <el-breadcrumb-item>地理分佈</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card :body-style="{ padding: '0px' }">
      <img src="./map.jpg" class="image">
      
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
img{
  width:100%;

  
}

</style>