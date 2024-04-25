<template>
  <div id="home">
    <Scroll></Scroll>
    <footer class="bgimgBox">
      <div class="bgimg footerImg"></div>
      <div id="bigTitle">
        <p>01.什么是微塑料</p>
        <div
          id="shapeBox"
          @click="
            () => {
              this.$router.push('part1')
            }
          "
        >
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll'

export default {
  name: 'Home',
  components: { Scroll }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
}
// .headerImg {
//   background-image: url('@/assets/part1-header.png');
// }
footer {
  bottom: 0;
}

.footerImg {
  background-image: url('@/assets/part1-header.png');
}
</style>
