import views from '@/views/index.vue'
import Home from '@/views/Home/index.vue'
import HomeTest from '@/views/Home/test.vue'
import Essay from '@/views/Essay/index.vue'
import EssayCreate from '@/views/Essay/create.vue'
import EssayList from '@/views/Essay/list.vue'
import Login from '@/views/Login/index.vue'
export default [
  {
    path:'/',
    component:views,
    children:[
      {
        path:'',
        component: Login,
      },
      {
        path:'Login',
        component:Login
      },
      {
        path:'test',
        component: HomeTest
      },
      {
        path:'essay',
        component:Essay,
        redirect:'/essay/list',
        children:[
          {
            path:'create',
            component:EssayCreate
          },
          {
            path:'list',
            component:EssayList
          },
          {
            path:':pathMatch(.*)',
            redirect:'/essay/list'
          }
        ]
      },
      {
        path:':pathMatch(.*)',
        redirect:'/'
      }
    ],
  },
  {
    path:'/:pathMatch(.*)',
    redirect:'/'
  }
]