<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>研究成果</el-breadcrumb-item>
      <el-breadcrumb-item>詞目彙編</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->

    <el-card class="box-card">
        <el-row :gutter="2">
       
        <el-col :span="15">
           <el-input placeholder="請輸入查詢內容" v-model="queryBooks.query">
               <el-select  v-model="queryBooks.select" slot="prepend" placeholder="請選擇">
              <el-option value="clothes" label="分類" ></el-option>
              <el-option value="category" label="詞目" ></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchBooks"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <el-table :data="booksList" style="width: 100%" id='font'>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item :label="dict.book+': '" v-for="(dict,index) in props.row.books" :key="index" >
                <span id="li">{{ dict.word }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
  
        
        <el-table-column label="序號" type="index" width="100px" ></el-table-column>
      
        <el-table-column label="分類" prop="clothes"></el-table-column>
   

        <el-table-column label="詞目" prop="category"></el-table-column>
       
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
        .get(`/clothes/category`, {
          params: this.queryBooks
        })
        .then(res => {
          if (res.status !== 200) return this.message.error("獲取譯語表失敗!");
         
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

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
    
  }
    #li{
    font-family:Arial,Helvetica,sans-serif;
     color:#fa450eef;
     font-size: 18px;
     
 

}
#font{
    font-size: 16px;
}
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>