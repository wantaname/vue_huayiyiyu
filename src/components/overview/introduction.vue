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
           <p> 1.利用珍稀文献出版资源，发挥丁种本《华夷译语》的辞书学价值与版本学价值。项目组以故宫博物院及故宫图书馆在2018年年底整理出版的丁种本《华夷译语》作为研究底本，对《华夷译语》前十二卷“衣服门”所有词目及对音汉字进行校勘、整理、汇编。
</p>
<p>2. 在历史比较语言学的视野下，比较古今汉语与相关民族语、外语，探求藏缅方言区域语音流变的规律与特征。从丁种本《华夷译语》衣服门义类下“衣、鞋、帽、线、纱”五类词目出发，将不同译语地区同一义项、相近义项的译音进行共时性对比与历时性对比，探求以藏缅语族为主的语言演变及相近译语地区的语音差异。 在老师的指导下撰写论文。
</p>
            <p>
              3.建立供研究使用的数据库及网站，尝试以语料库语言学的手段处理语言数据。

            </p>
            <p>4.项目组成员以各自的研究兴趣挖掘材料展开研究并撰写论文
</p>
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