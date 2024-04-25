import VueRouter from 'vue-router'
import Home from '../components/Home'
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'
import Part3 from '../components/Part3'
import Part4 from '../components/Part4'
import Part5 from '../components/Part5'
import Part6 from '../components/Part6'
import Scroll from '../components/Scroll'

const router = new VueRouter({
  //切换路由，滚动条默认重置回顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
      meta: { index: 0 }
    },
    {
      name: 'Scroll',
      path: '/scroll',
      component: Scroll
    },
    {
      name: 'Part1',
      path: '/part1',
      component: Part1,
      meta: { index: 1 }
    },
    {
      name: 'Part2',
      path: '/part2',
      component: Part2,
      meta: { index: 2 }
    },
    {
      name: 'Part3',
      path: '/part3',
      component: Part3,
      meta: { index: 3 }
    },
    {
      name: 'Part4',
      path: '/part4',
      component: Part4,
      meta: { index: 4 }
    },
    {
      name: 'Part5',
      path: '/part5',
      component: Part5,
      meta: { index: 5 }
    },
    {
      name: 'Part6',
      path: '/part6',
      component: Part6,
      meta: { index: 6 }
    }
  ]
})
export default router
