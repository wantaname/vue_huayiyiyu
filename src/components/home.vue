<template>
  <el-container class="home-container">
    <!-- 頭部區域 -->

    <el-header>
      <div class="header">
        <!-- 圖標 -->
        <img src="../assets/books.png" alt />
        <span>華東師範大學中文系</span>
      </div>
    </el-header>

    <!-- 頁面主體區 -->
    <el-container>
      <!-- 側邊欄 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
      <!-- 摺疊 -->
      <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu background-color="#333744"  text-color="#fff" active-text-color="#409EFE" :unique-opened='true' :collapse="isCollapse" :collapse-transition="false"
        :default-active="this.$route.path" router >
          <!-- 一級菜單 -->
          <el-submenu :index="item.id" v-for="item in menulist" :key="item.id">
            <!-- 一級菜單的模板區 -->
            <template slot="title">
              <!-- 圖標 -->
              <i :class="menuIcon[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.name}}</span>
            </template>
            <!-- 二級菜單 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <!-- 二級菜單模板 -->
              <template slot="title">
                <!-- 圖標 -->
                <i :class="submenuIcon[subItem.path]"></i>
                <!-- 文本 -->
                <span>{{subItem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右側內容 -->
      <el-main>
        <!-- 路由佔位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

    data(){
        return {
            menulist:[],
            isCollapse:false,
            menuIcon:{
                '0':'el-icon-view',
                '1':'el-icon-reading',
                '2':'el-icon-data-analysis',
                '3':'el-icon-zoom-in',
            },
            submenuIcon:{
                'introduction':'el-icon-document-copy',
                'geography':'el-icon-location',
                'books':'el-icon-notebook-2',
                'class':'el-icon-menu',
                'words':'el-icon-collection',
                'degree':'el-icon-connection',
                'cloud':'el-icon-cloudy',
                'clothes':'el-icon-s-data',
                'map':'el-icon-map-location'
            }

        }
    },
  created() {
    this.getMenuList();
    
  },
  methods: {
    // 獲取菜單列表
    async getMenuList() {
      const { data: res } = await this.$http.get(`menus`);
      if(res.status!==200) return this.$message.error(res.msg)
      this.menulist=res.data
    },
    toggleCollapse(){
      this.isCollapse=!this.isCollapse
      
    }
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-aside {
  background-color: #333744;
}

.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}

.el-menu{
    border-right: none;
}

.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  color: #ffffff;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.header{
    margin-left: 10px;
}
</style>