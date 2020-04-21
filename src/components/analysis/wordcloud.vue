<template>
  <div>
    <!-- 麪包屑導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>數據分析</el-breadcrumb-item>
      <el-breadcrumb-item>詞雲</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card" shadow="hover" id="bg">
      <div id="main" class="chart-container" style=" height:650px;"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts-wordcloud";

export default {
  data() {
    return {
      words: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$http
        .get(`/data/word_cloud`, {})
        .then(res => {
          if (res.status !== 200) return this.message.error("获取数据失败!");

          this.words = res.data.data;
          this.wordCloud();
        })
        .catch(error => {
          console.log(error);
        });
    },
    wordCloud() {
      var chart = echarts.init(document.getElementById("main"));

      chart.setOption({
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove|click",
          axisPointer: {
            type: "line"
          },
          textStyle: {
            fontSize: 14
          },
          borderWidth: 0
        },
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        series: [
          {
            type: "wordCloud",

            // shape: "cardioid",

            left: "center",
            top: "center",
            width: "70%",
            height: "80%",
            // right: null,
            // bottom: null,

            sizeRange: [20, 80],

            rotationRange: [-90, 90],
            rotationStep: 30,

            gridSize: 8,

            drawOutOfBound: false,

            // Global text style
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color can be a callback function or a color string
                color: function() {
                  // Random color
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },

            // Data is an array. Each array item must have name and value property.
            data: this.words
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
#bg{
    background-color: #2C3E50;
}
</style>