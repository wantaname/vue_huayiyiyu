<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>數據分析</el-breadcrumb-item>
      <el-breadcrumb-item>譯語重合度</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <el-row :gutter="2">
        <el-col :span="2">
          <el-select v-model="queryBooks.select" placeholder="請選擇">
            <el-option value="type_1" label="譯語一"></el-option>
            <el-option value="type_2" label="譯語二"></el-option>
            <el-option value="degree" label="重合度"></el-option>
            <el-option value="like_words" label="重合詞目"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10">
          <el-input placeholder="請輸入查詢內容" v-model="queryBooks.query">
            <el-button slot="append" icon="el-icon-search" @click="searchBooks"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!-- 用戶列表區 -->
      <el-table :data="booksList" stripe style="width: 100%" border>
        <el-table-column type="index" label="序號"></el-table-column>
        <el-table-column prop="type_1" label="譯語一"></el-table-column>
        <el-table-column prop="type_2" label="譯語二"></el-table-column>
        <el-table-column prop="degree" label="重合度"></el-table-column>
        <el-table-column prop="like_words" label="重合詞目"></el-table-column>
      </el-table>
      <!-- 分頁區 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryBooks.pagenum"
        :page-sizes="[5, 10,20,30]"
        :page-size="queryBooks.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 獲取書籍
      queryBooks: {
        query: "",
        pagenum: 1,
        pagesize: 10,
        select: ""
      },
      booksList: [],
      total: 0
    };
  },

  created() {
    this.getBooksList();
  },
  methods: {
    getBooksList() {
      this.$http
        .get(`/data/word_like`, {
          params: this.queryBooks
        })
        .then(res => {
          if (res.status !== 200) return this.message.error("獲取譯語重合表失敗!");
          
          this.booksList = res.data.data;
          this.total = res.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },

    searchBooks() {
      this.getBooksList();
    },
    //監聽pagesize改變的事件
    handleSizeChange(newSize) {
      this.queryBooks.pagesize = newSize;
      this.getBooksList();
    },
    // 監聽頁碼值改變的事件
    handleCurrentChange(newPage) {
      this.queryBooks.pagenum = newPage;
      this.getBooksList();
    }
  }
};
</script>


<style scoped>
</style>