// 骨架
import Layout from '@/components/Layout.vue'

// 主页
import Home from '@/views/Home/index.vue'

// 文章
import Essay from '@/views/Essay/index.vue'
import EssayList from '@/views/Essay/List/index.vue'
import EssayCreate from '@/views/Essay/Create/index.vue'
import EssayDetail from '@/views/Essay/Detail/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect:'/essay',
    children: [
      {
        path: 'home',
        meta:{
          title:'主页',
          name:'home',
          required_login:false
        },
        component: Home
      },
      {
        path:'essay',
        component: Essay,
        redirect:'/essay/list',
        children:[
          {
            path:'create',
            name:'EssayCreate',
            component: EssayCreate
          },
          {
            path:'list',
            component: EssayList
          },
          {
            path:'detail/:id',
            component: EssayDetail
          },
        ]
      }

    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/home'
  }
]