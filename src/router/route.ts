import Layout from '../components/Layout.vue'
export default [
  {
    path:'/',
    component:Layout
  },
  {
    path:'/:pathMatch(.*)',
    redirect:'/'
  }
]