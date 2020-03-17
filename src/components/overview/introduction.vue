<template>
  <div>
    <!-- 麪包屑導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>項目概覽</el-breadcrumb-item>
      <el-breadcrumb-item>項目介紹</el-breadcrumb-item>
    </el-breadcrumb>

    
    <el-card class="box-card" shadow="hover">
        <div class="font-content">
           <p> 本項目依託《故宮博物院藏乾隆年編華夷譯語》（學界習稱為“丁種本《華夷譯語》”）,展開語言學與民族名物文化交流兩個路徑的研究。其一，通過對《華夷譯語》對音漢字的觀察，瞭解明清時少數民族和鄰近國家的早期語音面貌。其二，通過逐詞疏解“衣服門”詞目，探尋當時清政府與少數民族服飾名物往來交流的狀況。同時，將對丁種本《華夷譯語》進行版本學校勘。</p>
            
        </div>
      <div style="width:100%" class="img-box"><img src="./intro.jpg"></div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.img-box{
    display: flex;
    justify-content: center;
}
img{
    width: 80%;
    height: 560px;
    

}

</style>