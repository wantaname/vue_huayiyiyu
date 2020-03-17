import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import introduction from '../components/overview/introduction.vue'
import geography from '../components/overview/geography.vue'
import book_table from '../components/data/book_table.vue'
import class_table from '../components/data/class_table.vue'
import word_table from '../components/data/word_table.vue'
import word_like from '../components/analysis/word_like.vue'
import clothoes_category from '../components/result/clothes_category.vue'
import pron_map from '../components/result/pron_map.vue'
import home from '../components/home.vue'

import word_cloud from '../components/analysis/wordcloud'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    redirect: '/introduction',
    
    children: [
      {path:'/introduction',component:introduction},
      {path:'/geography',component:geography},
      {path:"/books",component:book_table},
      {path:'/class',component:class_table},
      {path:'/words',component:word_table},
      {path:'/cloud',component:word_cloud},
      {path:'/degree',component:word_like},
      {path:'/clothes',component:clothoes_category},
      {path:"/map",component:pron_map},
      // 测试用
      {path:'/cloud',component:word_cloud}
    ]
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫

export default router
