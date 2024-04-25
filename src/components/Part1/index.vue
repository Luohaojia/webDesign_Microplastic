<template>
  <div id="one">
    <Top></Top>
    <el-backtop :visibilityHeight="1300"> </el-backtop>

    <!-- !!!!!header!!!! -->
    <header class="bgimgBox">
      <div class="bgimg headerImg"></div>
      <div id="bigTitle">01.什么是微塑料</div>
    </header>

    <!-- !!!!!main!!!! -->
    <main>
      <section class="sec1">
        <p>微塑料顾名思义，就是微小的塑料。根据学术定义，微塑料主要是指粒径在5mm以下的小颗粒塑料，其中肉眼不可见的占多数。微塑料具有不同形状，如纤维状、碎片状和球状颗粒等。</p>
        <p>微塑料的来源很多，可分为初生微塑料（人造微材料）和次生微塑料（由较大塑料垃圾分解而产生）两大类。</p>
      </section>
      <section class="sec2">
        <div class="sec2-1">
          <img src="/img/part1/工业.png" alt="" />
          <p>初生微塑料包括一些塑料制品工业原料，含有微微塑料颗粒或清洁微珠的工业化产品，如药物、个人护理品（化妆品、洗面奶、牙膏和沐浴露）等。</p>
        </div>
        <div class="sec2-2">
          <p>次生微塑料则是在紫外辐射、波浪击打、物理磨损等作用下，大块塑料会发生碎化、降解，逐渐形成的。</p>
          <div class="imgBox">
            <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
              <img src="/img/part1/太阳.gif" alt="" v-show="imgShow" />
            </transition>
            <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
              <img src="/img/part1/海浪.gif" alt="" v-show="imgShow" />
            </transition>
            <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
              <img src="/img/part1/轮胎.gif" alt="" v-show="imgShow" />
            </transition>
          </div>
          <p>微塑料颗粒小，质量轻，很容易通过大气、水环境和生物携带传播。</p>
        </div>
      </section>
    </main>

    <!-- !!!!!footer!!!! -->
    <footer class="bgimgBox">
      <div class="bgimg footerImg"></div>
      <div id="bigTitle">
        <p>02.微塑料足迹</p>
        <div
          id="shapeBox"
          @click="
            () => {
              this.$router.push('part2')
            }
          "
        >
          <div class="shape"></div>
          ·
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Top from '@/components/Top'

export default {
  name: 'Part1',
  components: { Top },

  data() {
    deep: true
    return {
      currentScroll: 0,
      isShow1: false,
      sec2show: [false, false, false],
      imgShow: false
    }
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset //表示当前滚动的位置
      if (this.currentScroll >= 1100) {
        // console.log(this.currentScroll)
        this.imgShow = true
      } else {
        this.imgShow = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
#one {
  // max-width: 670px;
  // width: calc(100% - 50px);
  width: 100%;
  // margin-top: 100px;
  position: relative;
}
.headerImg {
  background-image: url('@/assets/part1-header.png');
}
.footerImg {
  background-image: url('@/assets/part2-header.jpg');
}
.sec1 {
  padding-bottom: 80px;
}
.sec2 {
  max-width: 100%;
  color: black;
  background-color: #fff;
  padding: 80px 0;

  .sec2-1 {
    max-width: 770px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 80px;
    // border: 1px solid red;
    img {
      width: 35%;
      transform: translateX(-15%);
      // border: 1px solid red;
    }
    p {
      margin: auto;
      transform: translateX(3%);
    }
  }
  .sec2-2 {
    max-width: 770px;
    margin: 0 auto;

    .imgBox {
      display: flex;
      width: 100%;
      justify-content: center;
      height: 220px;
      img {
        width: 220px;
      }
      .sec2Before {
        opacity: 0;
        transition: all 0.5s ease;
      }
      .sec2Enter {
        opacity: 1;
      }
    }
  }
}
</style>
