<template>
  <div>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 表格區 -->
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
        v-for="(tableData, index) in tables"
        :key="index"
        :stripe='true'
        highlight-current-row
      >
        <el-table-column prop="mingwu" label="名物"></el-table-column>
        <el-table-column prop="word_type" label="詞目類別"></el-table-column>
        <el-table-column prop="index" label="序號"></el-table-column>
        <el-table-column prop="code" label="編碼"></el-table-column>
        <el-table-column prop="word" label="詞目"></el-table-column>
        <el-table-column prop="pron" label="對音"></el-table-column>
        <el-table-column prop="word_class" label="義類"></el-table-column>
        <el-table-column prop="book" label="譯語"></el-table-column>
        <el-table-column prop="note" label="備注"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   数组
      tables: [],
      span: {
        鞋: 21,
        裙: 8,
        袜: 12,
        袍: 8,
        帳子: 6,
        帶: 9,
        衣服: 5,
        纓子: 2,
        褥子: 2,
        缐: 3
      },
      span2: {
        叚: 2,
        縀: 10,
        鞋: 7,
        鞋子: 2,
        裙: 7,
        裙子: 1,
        襪: 9,
        韈: 1,
        襪子: 1,
        袍: 6,
        袍子: 2,
        帳子: 5,
        蚊帳: 1,
        帶: 6,
        帶子: 3,
        衣服: 3,
        衣裳: 2,
        纓子: 2,
        褥子: 2,
        缐: 3
      }
    };
  },

  created() {
    this.getBooksList();
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 8) {
        if (rowIndex === 0) {
          return {
            rowspan: this.span[row.mingwu],
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }

      if (columnIndex === 1) {
        if (row.index === 1) {
          return {
            rowspan: this.span2[row.word_type],
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    getBooksList() {
      this.$http
        .get(`/data/getTodo`)
        .then(res => {
          if (res.status !== 200) return this.message.error("获取数据失败");

          this.tables = res.data.tables;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style scoped>
</style>