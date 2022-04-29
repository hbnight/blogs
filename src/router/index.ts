import { createRouter, createWebHashHistory } from "vue-router";
import routes from './route'
const Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default Router