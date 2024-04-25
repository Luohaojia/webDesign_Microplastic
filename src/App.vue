<template>
  <div id="app">
    <!-- <el-backtop :visibilityHeight="15000"> </el-backtop> -->
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <!-- <Scroll></Scroll> -->
    <!-- <Home></Home> -->
    <!-- <Part1></Part1> -->
    <!-- <Part2></Part2> -->
    <!-- <Part3></Part3> -->
    <!-- <Part4></Part4> -->
    <!-- <Part5></Part5> -->
    <!-- <Part6></Part6> -->
  </div>
</template>

<script>
import Top from '@/components/Top'
import Home from '@/components/Home'
import Part1 from '@/components/Part1'
import Part2 from '@/components/Part2'
import Part3 from '@/components/Part3'
import Part4 from '@/components/Part4'
import Part5 from '@/components/Part5'
import Part6 from '@/components/Part6'
import Scroll from '@/components/Scroll'

import '../public/css/public.less'
export default {
  name: 'App',
  components: { Top, Home, Part1, Part2, Part3, Part4, Part5, Part6, Scroll },
  data() {
    return {
      show: false,
      transitionName: '',
      visible: false
    }
  },
  created() {
    if (document.getElementById('Loading')) document.getElementById('Loading').remove()
  },
  watch: {
    $route(to, from) {
      // window.location.reload() //监测到路由发生跳转时刷新一次页面
      console.log('跳转了')
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      if (to.meta.index > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  // margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  position: relative;
}
.child-view {
  position: relative;
  width: 100%;
  transition: all 0.8s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
