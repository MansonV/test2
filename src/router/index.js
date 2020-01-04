import Vue from 'vue'
import Router from '../router'
import tagsearch from '@/components/tagsearch'
import item from '@/components/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tagsearch',
      component: tagsearch
    },
    {
      path: '/',
      name: 'item',
      component: item,
      props: true,
    }
  ]
})
