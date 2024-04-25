<template>
  <div class="scrollBox">
    <section class="scene section" id="stickyTop" ref="scene">
      <div class="viewer" ref="viewerTop">
        <div id="text" ref="text">
          <div class="videoBox">
            <span class="topicTitle">无“微”不至的微塑料<br />“塑”战如何速决</span>
            <video id="v2" autoplay loop muted>
              <source src="/audio/第一眼就心动的视频.mp4" type="video/mp4" />
            </video>
          </div>
          <!-- <p class="topicTitle">无“微”不至的微塑料<br />“塑”战如何速决</p> -->
          <p class="firstP">塑料制品给人们带来了极大的便利，但<span class="highLight">大量难以回收的废弃塑料</span>也对环境造成了<span class="highLight">严重污染</span>。</p>
          <p>越来越多的研究发现，<span class="highLight">“白色污染”</span>正在以新的形式——微塑料，威胁着生态和环境安全，<span class="highLight">并会给人体健康带来危害</span>。</p>
          <p>上到最高<span class="highLight">珠穆朗玛峰</span>，下到最深<span class="highLight">马里亚纳海沟</span>，都有微塑料的身影——<span class="highLight">“微”不足道却无“微”不至</span>。</p>
          <p>近日，科学家在南极洲也发现了微塑料的存在。<span class="highLight">这向人们正式宣告：地球上最后一片不存在微塑料的“净土”也已消失</span>。</p>
        </div>
        <video id="v1" autoplay loop muted class="hidden" ref="video">
          <source src="/audio/序列 01.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {
      currentScroll: 0
    }
  },
  methods: {
    funcScrollMagic() {
      // global vars
      // var viewer = document.querySelector('.viewer'),
      var viewerTop = this.$refs.viewerTop,
        // 帧数-1
        frame_count = 20,
        //控制整个环境的高度
        offset_value = 200
      var text = this.$refs.text

      // init controller
      var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0,
          reverse: true
        }
      })

      // build pinned scene
      new ScrollMagic.Scene({
        triggerElement: '#stickyTop',
        duration: frame_count * offset_value + 'px',
        reverse: true
      })
        .setPin('#stickyTop')
        .addTo(controller)

      // build step frame scene
      for (var i = 1, l = frame_count; i <= l; i++) {
        new ScrollMagic.Scene({
          triggerElement: '#stickyTop',
          offset: i * offset_value
        })
          // .setClassToggle(viewerTop, 'frame' + i)
          .setClassToggle(text, 'frame' + i)
          .addTo(controller)
      }
    },
    funcScrollText() {
      var video = this.$refs.video
      // var scene = this.$refs.scene
      var text = this.$refs.text
      var currentScroll = (this.currentScroll = window.pageYOffset) //表示当前滚动的位置

      //  -------控制视频--------
      if (currentScroll >= 400 && currentScroll <= 4000) {
        // console.log('来了来了来了')
        // console.log(currentScroll)
        //显示视频
        video.style.opacity = '1'
      } else {
        video.style.opacity = '0'
      }

      // ---------控制text-----------
      if (currentScroll <= 4000) {
        // text.style.display = 'block'
        text.style.opacity = '1'
      } else {
        // console.log(123)
        text.style.opacity = '0'
        // text.style.display = 'none'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.funcScrollMagic()
    window.addEventListener('scroll', this.funcScrollText)
    this.funcScrollText()
  }
}
</script>

<style lang="less" scoped>
// video {
//   position: absolute;
//   right: 0px;
//   bottom: 0px;
//   min-width: 100%;
//   min-height: 100%;
//   height: auto;
//   width: auto;
//   /*加滤镜*/
//   // filter: blur(5px); //背景模糊设置
//   /*-webkit-filter: grayscale(100%);*/
//   // filter:grayscale(100%); //背景灰度设置
// }      html,

.scrollBox {
  // height: 3000px;
  width: 100%;
  background-color: rgb(30, 80, 120);
  .scene {
    // height: 100vh;
    width: 100%;
    background-color: rgb(30, 80, 120);
    z-index: 0;
    // position: relative;
    top: 0px;
  }
  .viewer {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: 100%;
    background-repeat: no-repeat;
    // background-position: 0 50%;
    z-index: 10;
    #text {
      height: auto;
      // border: 5px solid red;
      width: 780px;
      width: 100%;
      position: absolute;
      top: 0;
      opacity: 0.8;
      transition: all 0.5s linear;
      // margin-left: 20%;
      // padding-top: 100px;
      z-index: 200;
      .videoBox {
        // position: relative;
        // width: 100%;
        position: relative;
        span {
          position: absolute;
          // border: 1px solid red;
          top: 50%;
          left: 15%;
          font-size: 4.5em;
          line-height: 1.5;
          padding: 10px;
          max-width: 770px;
          transform: translateY(-50%);
        }
      }
      .topicTitle {
        font-size: 3.5em;
      }
      .firstP {
        padding-top: 250px;
        // border: 1px solid red;
      }
      p {
        line-height: 1.5;
        font-size: 2.2em;
        margin-bottom: 550px;
        padding: 10px;
        margin-left: 15%;
        max-width: 770px;
        // border: 1px solid red;
        .highLight {
          font-weight: bold;
          text-shadow: 0 0 2rem rgb(157, 220, 238);
        }
      }
    }

    #text.frame1 {
      transform: translateY(-200px);
    }
    #text.frame2 {
      transform: translateY(-400px);
    }
    #text.frame3 {
      transform: translateY(-600px);
    }
    #text.frame4 {
      transform: translateY(-800px);
    }
    #text.frame5 {
      transform: translateY(-1000px);
    }
    #text.frame6 {
      transform: translateY(-1200px);
    }
    #text.frame7 {
      transform: translateY(-1400px);
    }
    #text.frame8 {
      transform: translateY(-1600px);
    }
    #text.frame9 {
      transform: translateY(-1800px);
    }
    #text.frame10 {
      transform: translateY(-2000px);
    }
    #text.frame11 {
      transform: translateY(-2200px);
    }
    #text.frame12 {
      transform: translateY(-2400px);
    }
    #text.frame13 {
      transform: translateY(-2600px);
    }
    #text.frame14 {
      transform: translateY(-2800px);
    }
    #text.frame15 {
      transform: translateY(-3000px);
    }
    #text.frame16 {
      transform: translateY(-3200px);
    }
    #text.frame17 {
      transform: translateY(-3400px);
    }
    #text.frame18 {
      transform: translateY(-3600px);
    }
    #text.frame19 {
      transform: translateY(-3800px);
    }
    #text.frame20 {
      transform: translateY(-4000px);
    }
    .hidden {
      /* display: none; */
      opacity: 0;
      transition: all 1s linear;
    }
  }
}
video {
  opacity: 1;
  width: 100vh;
  height: 100vh;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  transition: all 1s linear;
  object-fit: fill;
}
#v2 {
  min-width: 100%;
  min-height: 100%;
  width: 100vh;
  height: 100vh;
  object-fit: fill;
}
</style>
