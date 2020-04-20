<template>
  <el-container class="home-container">
    <!-- 頭部區域 -->
    <div id="particles">
      <vue-particles
        :color="particles.color"
        :particleOpacity="particles.particleOpacity"
        :particlesNumber="particles.particlesNumber"
        :shapeType="particles.shapeType"
        :particleSize="particles.particleSize"
        :linesColor="particles.linesColor"
        :linesWidth="particles.linesWidth"
        :lineLinked="particles.lineLinked"
        :lineOpacity="particles.lineOpacity"
        :linesDistance="particles.linesDistance"
        :moveSpeed="particles.moveSpeed"
        :hoverEffect="particles.hoverEffect"
        :hoverMode="particles.hoverMode"
        :clickEffect="particles.clickEffect"
        :clickMode="particles.clickMode"
        v-if="particlesShow"
      ></vue-particles>
    </div>
    <el-header>
      <div class="header">
        <!-- 圖標 -->
        <img src="../assets/books.png" alt />
        <span>比较语言学视野下的丁种本《华夷译语》“衣服门”词目汇校及研究</span>
      </div>
    </el-header>

    <!-- 頁面主體區 -->
    <el-container>
      <!-- 側邊欄 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          :background-color="settingForm.menuBgColor"
          :text-color="settingForm.menuTextColor"
          :active-text-color="settingForm.menuActiveTextColor"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="this.$route.path"
          router
        >
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
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <!-- 二級菜單模板 -->
              <template slot="title">
                <!-- 圖標 -->
                <i :class="submenuIcon[subItem.path]"></i>
                <!-- 文本 -->
                <span>{{subItem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <div class="footer">
            <!-- 设置 -->
            <div class="setting">
              <el-button
                type="info"
                icon="el-icon-setting"
                circle
                size="small"
                @click="drawer=true"
              ></el-button>
            </div>
            <!-- 折叠 -->
            <div class="toggle-button">
              <el-button
                type="info"
                icon="el-icon-s-fold"
                @click="toggleCollapse"
                size="small"
                circle
              ></el-button>
            </div>
          </div>
        </el-menu>
      </el-aside>
      <!-- 右側內容 -->
      <el-main :style="{ backgroundColor: settingForm.mainBgColor}">
        <!-- 路由佔位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 抽屉 -->
    <el-drawer :visible.sync="drawer" direction="rtl" :with-header="false">
      <el-form ref="settingForm" :model="settingForm" label-width="auto">
        <el-divider content-position="center">菜单栏</el-divider>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="settingForm.menuBgColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="文字颜色">
          <el-color-picker v-model="settingForm.menuTextColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="激活颜色">
          <el-color-picker v-model="settingForm.menuActiveTextColor"></el-color-picker>
        </el-form-item>

        <el-divider content-position="center">内容区</el-divider>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="settingForm.mainBgColor"></el-color-picker>
        </el-form-item>
        <el-divider content-position="center">二次元</el-divider>
        <el-form-item label="角色选择">
          <el-select v-model="live2dSetting.model" placeholder="请选择">
            <el-option
              v-for="item in modelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="方向">
          <el-select v-model="live2dSetting.direction" placeholder="请选择">
            <el-option
              v-for="item in directionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="水平偏移">
          <el-slider v-model="live2dSetting.hOffset" :min="-100" :max="800"></el-slider>
        </el-form-item>
        <el-form-item label="垂直偏移">
          <el-slider v-model="live2dSetting.vOffset" :min="-100" :max="800"></el-slider>
        </el-form-item>
        <el-form-item label="人物宽度">
          <el-slider v-model="live2dSetting.width" :min="80" :max="330"></el-slider>
        </el-form-item>
        <el-form-item label="人物高度">
          <el-slider v-model="live2dSetting.height" :min="160" :max="660"></el-slider>
        </el-form-item>

        <el-form-item label="开关">
          <el-switch
            v-model="live2dShow"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="live2dShow"
          ></el-switch>
        </el-form-item>

        <el-divider content-position="center">特效</el-divider>
        <el-form-item label="开关">
          <el-switch
            v-model="particlesShow"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="particlesShow"
          ></el-switch>
        </el-form-item>
        <el-form-item label="粒子颜色">
          <el-color-picker v-model="particles.color"></el-color-picker>
        </el-form-item>
        <el-form-item label=" 粒子透明度">
          <el-slider v-model="particles.particleOpacity" :min="0" :max="1" :step="0.1"></el-slider>
        </el-form-item>
        <el-form-item label="粒子数量">
          <el-slider v-model="particles.particlesNumber" :min="0" :max="800" :step="1"></el-slider>
        </el-form-item>
        <el-form-item label="粒子外观">
          <el-select v-model="particles.shapeType" placeholder="请选择">
            <el-option
              v-for="item in shapeTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="粒子大小">
          <el-slider v-model="particles.particleSize" :min="0" :max="100" :step="1"></el-slider>
        </el-form-item>

        <el-form-item label="线条颜色">
          <el-color-picker v-model="particles.linesColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="线条宽度">
          <el-slider v-model="particles.linesWidth" :min="0" :max="20" :step="0.1"></el-slider>
        </el-form-item>

        <el-form-item label="是否连线">
          <el-switch v-model="particles.lineLinked" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
        <el-form-item label="线条透明度">
          <el-slider v-model="particles.lineOpacity" :min="0" :max="1" :step="0.1"></el-slider>
        </el-form-item>
        <el-form-item label="线条距离">
          <el-slider v-model="particles.linesDistance" :min="0" :max="500" :step="1"></el-slider>
        </el-form-item>

        <el-form-item label="粒子速度">
          <el-slider v-model="particles.moveSpeed" :min="0" :max="50" :step="0.5"></el-slider>
        </el-form-item>

        <el-form-item label="悬浮特效">
          <el-switch
            v-model="particles.hoverEffect"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </el-form-item>
        <el-form-item label="悬浮模式">
          <el-select v-model="particles.hoverMode" placeholder="请选择">
            <el-option
              v-for="item in hoverModeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="点击特效">
          <el-switch
            v-model="particles.clickEffect"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </el-form-item>

        <el-form-item label="点击模式">
          <el-select v-model="particles.clickMode" placeholder="请选择">
            <el-option
              v-for="item in clickModeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-drawer>

    <live2d :live2dSetting="live2dSetting" v-if="live2dShow"></live2d>
  </el-container>
</template>

<script>
import live2d from "./live2d";
export default {
  data() {
    return {
      // 抽屉
      drawer: false,
      // 菜单栏
      // 菜单栏设置表单
      settingForm: {
        menuBgColor: "",
        menuTextColor: "",
        menuActiveTextColor: "",
        mainBgColor: ""
      },
      // 二次元
      modelOptions: [
        { label: "chitose", value: "chitose" },
        { label: "epsilon2_1", value: "epsilon2_1" },
        { label: "gf", value: "gf" },
        { label: "haru_1", value: "haru_1" },
        { label: "haru_2", value: "haru_2" },
        { label: "haruto", value: "haruto" },

        { label: "hibiki", value: "hibiki" },
        { label: "hijiki", value: "hijiki" },
        { label: "izumi", value: "izumi" },
        { label: "koharu", value: "koharu" },
        { label: "miku", value: "miku" },
        { label: "nico", value: "nico" },

        { label: "nietzsche", value: "nietzsche" },
        { label: "ni-j", value: "ni-j" },
        { label: "nipsilon", value: "nipsilon" },
        { label: "nito", value: "nito" },
        { label: "shizuku", value: "shizuku" },
        { label: "tororo", value: "tororo" },
        { label: "tsumiki", value: "tsumiki" },
        { label: "unitychan", value: "unitychan" },
        { label: "wanko", value: "wanko" },
        { label: "z16", value: "z16" }
      ],
      directionOptions: [
        { label: "左下", value: "left" },
        { label: "右下", value: "right" },
        { label: "左上", value: "top" }
      ],

      // 看板娘
      live2dShow: false,
      live2dSetting: {
        model: "z16",
        width: 150,
        height: 300,
        direction: "right",
        hOffset: 0,
        vOffset: 0
      },
      // 特效
      particles: {
        color: "#dedede",
        particleOpacity: 0.7,
        particlesNumber: 80,
        shapeType: "circle",
        particleSize: 8,
        linesColor: "#dedede",
        linesWidth: 1,
        lineLinked: true,
        lineOpacity: 0.4,
        linesDistance: 150,
        moveSpeed: 3,
        hoverEffect: true,
        hoverMode: "grab",
        clickEffect: true,
        clickMode: "push"
      },
      particlesShow: false,
      shapeTypeOptions: [
        { label: "circle", value: "circle" },
        { label: "edge", value: "edge" },
        { label: "triangle", value: "triangle" },
        { label: "polygon", value: "polygon" },
        { label: "star", value: "star" }
      ],
      clickModeOptions: [
        { label: "推开", value: "push" },
        { label: "移除", value: "remove" },
        { label: "击退", value: "repulse" },
        { label: "气泡", value: "bubble" }
      ],
      hoverModeOptions: [
        { label: "聚集", value: "grab" },
        { label: "击退", value: "repulse" },
        { label: "气泡", value: "bubble" }
      ],

      menulist: [],
      isCollapse: false,
      menuIcon: {
        "0": "el-icon-view",
        "1": "el-icon-reading",
        "2": "el-icon-data-analysis",
        "3": "el-icon-zoom-in"
      },
      submenuIcon: {
        introduction: "el-icon-document-copy",
        geography: "el-icon-location",
        books: "el-icon-notebook-2",
        class: "el-icon-menu",
        words: "el-icon-collection",
        degree: "el-icon-connection",
        cloud: "el-icon-cloudy",
        clothes: "el-icon-s-data",
        map: "el-icon-map-location",
        todo: "el-icon-notebook-2"
      }
    };
  },
  created() {
    this.getMenuList();
  },
  components: {
    live2d
  },
  methods: {
    // 獲取菜單列表
    async getMenuList() {
      const { data: res } = await this.$http.get(`menus`);
      if (res.status !== 200) return this.$message.error(res.msg);
      this.menulist = res.data;
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
#particles {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  #particles-js {
    width: 100%;
    height: 100%;
  }
}
.el-container {
  height: 91%;

  .el-aside {
    height: 100%;
  }
}

.el-header {
  display: flex;

  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  background-color: #0b0c0f;

  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.home-container {
  height: 100%;
}

.el-menu {
  border-right: none;
  width: 100%;
  height: 100%;
}

.header {
  margin-left: 10px;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-button {
    margin: 0 10px;
  }
}

.el-form-item {
  margin-bottom: 10px;
}
.el-drawer {
  overflow: scroll;
  position: static !important;
}
.el-form {
  margin: 40px;
}

.wrap {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>