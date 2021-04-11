import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index'
import adminList from '../page/adminList';
import roleList from "../page/roleList";
import newsType from "../page/newsType";
import newsList from "../page/newsList";
import addAdmin from "../page/addAdmin";
import updateList from "../page/updateList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '/adminList',
        name: 'adminList',
        component: adminList,
        children: [
          {
            path: 'adminList/addAdmin',
            component: addAdmin
          }
          /*{
            path: 'adminList/updateList',
            component: updateList
          }*/
        ]
      },
      {
        path: '/roleList',
        name: 'roleList',
        component: roleList
      },
      {
        path: '/newsType',
        name: 'newsType',
        component: newsType
      },
      {
        path: '/newsList',
        name: 'newsList',
        component: newsList
      },
    ]
  },
  {
    path: '/addAdmin',
    component: addAdmin
  },
  {
    path: '/updateList/:id',
    component: updateList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router