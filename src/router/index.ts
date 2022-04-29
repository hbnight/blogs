import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './routes'

const Router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default Router