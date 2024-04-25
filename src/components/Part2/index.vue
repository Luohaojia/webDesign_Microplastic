<template>
  <div id="part2">
    <Top></Top>
    <el-backtop :visibilityHeight="7100"> </el-backtop>

    <!-- !!!!!header!!!! -->
    <header class="bgimgBox">
      <div class="bgimg headerImg"></div>
      <div id="bigTitle">02.微塑料足迹</div>
    </header>

    <main>
      <!-- !!!!!sec1!!!! -->
      <section class="sec1">
        <p>
          被科学家证实的微塑料足迹之广泛，是当之无愧的“多栖”。
          <br />
        </p>
        <div class="floatBox">
          <div class="floatBox1">
            <p class="p1">上到世界最高峰<br />珠穆朗玛峰顶端</p>
            <img src="/img/part2/山峰.png" alt="" />
            <transition enter-active-class="animate__animated  animate__rubberBand" leave-active-class="animate__animated animate__fadeOut">
              <p class="p2" v-show="numShow">8848.4m</p>
            </transition>
          </div>
          <div class="floatBox2">
            <p class="p1">下至世界最深海沟<br />马里亚纳底部</p>
            <img src="/img/part2/海沟.png" alt="" />

            <transition enter-active-class="animate__animated animate__rubberBand" leave-active-class="animate__animated animate__fadeOut">
              <p class="p2" v-show="numShow">-10928m</p>
            </transition>
          </div>
        </div>
        <p>纵向到达人迹罕至的世界南北两极，微塑料的身影随处可见。</p>
      </section>

      <!-- !!!!!sec2!!!! -->
      <section class="sec2">
        <!-- <h1>“海洋中的PM2.5”</h1> -->
        <div class="sec2-1">
          <article>
            <p>
              微塑料在海洋的分布尤为显著
              <br />
              被形象的称为：海洋中的
            </p>
          </article>

          <img src="/img/part2/PM2.5.png" alt="" />
        </div>
        <div class="sec2-2">
          <p>当海洋塑料垃圾进入海洋环境后，一部分漂浮的塑料通过海流和风的输运进入海洋环流，形成已知世界大洋五大涡旋塑料垃圾聚集区。</p>

          <div class="echartBoxCake" ref="echartBoxCake">
            <!-- <img src="/img/part2/饼图.png" alt="" /> -->
          </div>
          <p>英国《科学报告》杂志报道，最著名的“大太平洋垃圾带”几乎都是塑料，面积达<span class="redFont">160万</span>平方公里，大小相当于<span class="redFont">220个</span>足球场，且有呈指数增长的态势。</p>
          <img src="/img/part2/好看的图.png" alt="" style="margin-top: 30px" />
          <p class="imgTip">数据来源于：River plastic emissions to the world's oceans[J].Nature communications. 2017</p>
        </div>
      </section>

      <!-- !!!!!sec3-1!!!! -->
      <section class="sec3-1">
        <img src="/img/part2/水龙头.png" alt="" />
        <p>据英国《卫报》报道，美国一项研究对10多个国家的自来水样本进行分析，结果显示全球<span class="redFont">8%</span>的自来水中含有微塑料颗粒，意味着数十亿人的饮用水受到塑料污染。</p>
      </section>

      <!-- !!!!!sec3!!!! -->
      <section class="sec3">
        <!-- !!!!!sec3-2!!!! -->
        <div class="sec3-2">
          <p>据《美国国家科学院院刊》的研究发现，工业粉尘的排放是大气中微塑料污染的来源之一，经过学者研究，世界上多个国家的空气中都被证实有微塑料的存在。</p>
          <div class="imgBox1">
            <transition enter-active-class="animate__animated  animate__zoomIn " leave-active-class="animate__animated animate__fadeOut ">
              <figure v-show="cityShow">
                <img src="/img/part2/英国伦敦.jpg" alt="" />
                <figcaption>伦敦</figcaption>
              </figure>
            </transition>
            <transition enter-active-class="animate__animated  animate__zoomIn animate__delay-1s" leave-active-class="animate__animated animate__fadeOut ">
              <figure v-show="cityShow">
                <img src="/img/part2/法国巴黎.png" alt="" />
                <figcaption>巴黎</figcaption>
              </figure>
            </transition>
            <transition enter-active-class="animate__animated  animate__zoomIn animate__delay-2s" leave-active-class="animate__animated animate__fadeOut ">
              <figure v-show="cityShow">
                <img src="/img/part2/日本.png" alt="" />
                <figcaption>日本</figcaption>
              </figure>
            </transition>
            <transition enter-active-class="animate__animated  animate__zoomIn animate__delay-3s" leave-active-class="animate__animated animate__fadeOut ">
              <figure v-show="cityShow">
                <img src="/img/part2/维多利亚.png" alt="" />
                <figcaption>维多利亚</figcaption>
              </figure>
            </transition>
          </div>
          <p class="imgTip">图示：一些被取样并证实空气中含有微塑料的国家和城市</p>
          <div class="imgBox2">
            <p>据英国《每日邮报》报道，美国有<span class="redFont">11</span>个自然保护区和偏远地区的空气中检测出微塑料。</p>
            <img src="/img/part2/美国.png" alt="" />
          </div>
          <div class="imgBox3">
            <img src="/img/part2/天安门.jpg" alt="" />
            <p>有学者对我国各个城市的空气进行了取样检测，其中<span class="redFont">39</span>个城市的大气中被检测出有微塑料的身影。</p>
          </div>
          <p class="imgTip" style="transform: translateY(150%)">（移动鼠标可查看39个城市分布）</p>
          <China></China>
          <p class="imgTip" style="transform: translateY(-50%)">图示：大气中被检测出有微塑料的39个城市示意图<br />数据来源于论文 "Widespread distribution of microplastics in subsurface seawater in the NE Pacific Ocean."</p>
        </div>

        <!-- !!!!!sec3-3!!!! -->
        <div class="sec3-3">
          <p class="highLight">微塑料的食物链迁移已被报道, 其能够从低营养级向高营养级传递</p>
          <p>中国科学院烟台海岸带研究所与南京土壤研究所和荷兰莱顿大学的联合研究发现，莴苣和小麦作物根部的裂缝可以吸收土壤和水中的微塑料，然后<span class="redFont">传播到可食用部分</span>。</p>

          <figure>
            <img src="/img/part2/食物.png" alt="" />
            <figcaption>
              <p>意大利卡塔尼亚大学的一项研究显示，当地农产品中的胡萝卜、生菜、西兰花、土豆、苹果和梨子都含有微塑料。</p>
            </figcaption>
          </figure>
        </div>

        <!-- !!!!!sec3-4!!!! -->
        <div class="sec3-4">
          <section class="scene" id="sticky">
            <div class="viewer" ref="viewer"></div>
          </section>
        </div>
      </section>

      <!-- !!!!!sec3-5!!!! -->
      <section class="sec3-5">
        <p>2021 年 1 月意大利科学家首次在孕妇胎盘中也发现微塑料颗粒。该研究分析认为，微塑料主要通过饮食进入孕妇体内从而进入胎盘。</p>
        <div class="pp">
          <p>纽约大学的一项研究测量了从纽约州收集的6名婴儿、10名成人粪便样本以及3个新生儿第一次粪便的样本微塑料的浓度，发现婴儿粪便中的PET浓度平均比成人高10倍以上。婴儿比成年人接触到更高水平的微塑料的可能原因在于广泛使用塑料制的奶瓶、勺子和玩具等产品。</p>
        </div>
      </section>
    </main>

    <!-- !!!!!footer!!!! -->
    <footer class="bgimgBox">
      <div class="bgimg footerImg"></div>
      <div id="bigTitle">
        <p>03.为什么不能忽略微塑料</p>
        <div
          id="shapeBox"
          @click="
            () => {
              this.$router.push('part3')
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
import China from '@/components/China' //引入地图组件
// import '@/../public/static/map/world.js'
import * as echarts from 'echarts'
import Top from '@/components/Top'

export default {
  name: 'Part2',
  components: { China, Top },
  data() {
    deep: true
    return {
      currentScroll: 0,
      numShow: false,
      cityShow: false,
      cakeData: [
        {
          value: 2,
          name: '漂浮在海洋表面'
        },
        {
          value: 8,
          name: '堆积在海岸'
        },
        {
          value: 90,
          name: '存在于海洋水层和海底'
        }
      ]
    }
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset //表示当前滚动的位置

      //数字出现
      if (this.currentScroll >= 400) {
        this.numShow = true
      } else {
        this.numShow = false
      }

      //城市出现
      if (this.currentScroll >= 2800) {
        this.cityShow = true
      } else {
        this.cityShow = false
      }
    },
    funcScrollMagic() {
      // global vars
      // var viewer = document.querySelector('.viewer'),
      var viewer = this.$refs.viewer,
        // 帧数-1
        frame_count = 4,
        //控制整个环境的高度
        offset_value = 300

      // init controller
      var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0,
          reverse: true
        }
      })

      // build pinned scene
      new ScrollMagic.Scene({
        triggerElement: '#sticky',
        duration: frame_count * offset_value + 'px',
        reverse: true
      })
        .setPin('#sticky')
        .addTo(controller)

      // build step frame scene
      for (var i = 1, l = frame_count; i <= l; i++) {
        new ScrollMagic.Scene({
          triggerElement: '#sticky',
          offset: i * offset_value
        })
          .setClassToggle(viewer, 'frame' + i)
          .addTo(controller)
      }
    },
    initChart() {
      this.chartCake = echarts.init(this.$refs.echartBoxCake)
      this.chartCake.setOption({
        // 设置标题
        title: {
          left: 'center',
          text: '塑料垃圾在海洋中位置的分布',
          textStyle: {
            fontWeight: 'normal'
          }
          // top:-20
        },
        color: ['rgb( 40, 120, 180)', 'rgb( 160, 190, 230)', 'rgb( 190, 220, 240)'],
        tooltip: {
          // trigger: 'item',
          formatter: '{b}<br/>{d}%'
        },
        // 设置左侧对应模块标题
        legend: {
          // 垂直，水平
          // orient: 'vertical',
          orient: 'horizontal',
          left: 'center',
          top: 30
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.cakeData,
            // 鼠标放上去设置高亮状态的扇区和标签样式
            emphasis: {
              // 是否开启高亮后的扇区效果
              // focus: 'self',
              // 设置高亮部分四周的阴影和模糊情况
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.funcScrollMagic()
    this.initChart()
  }
}
</script>

<style lang="less" scoped>
#part2 {
  // max-width: 770px;
  // width: calc(100% - 50px);
  width: 100%;
  position: relative;
  // font-family: 'Courier New', Courier, monospace;
}
main {
  background-color: #fff;
  color: black;
  // border: 1px solid red;
  margin-top: 0;
}
.headerImg {
  background-image: url('@/assets/part2-header.jpg');
}
.footerImg {
  background-image: url('@/assets/part3-header.jpg');
}

.imgTip {
  text-align: center;
  color: rgb(152, 149, 149);
}

.sec1 {
  background-color: #fff;
  width: 100%;
  color: black;
  padding: 100px 0;
  // border: 1px solid red;
  max-width: 100%;
  padding-bottom: 0px;
  p {
    max-width: 770px;
  }
  .floatBox {
    max-width: 770px;
    margin: 50px auto;

    // border: 1px solid red;
    .floatBox1,
    .floatBox2 {
      background-color: rgb(30, 80, 120);
      // border: 1px solid red;
      width: 60%;
      display: flex;
      border-radius: 10px;
      color: #fff;
      img {
        width: 60px;
        height: 60px;
        // border: 1px solid red;
        margin: auto;
      }
      .p1 {
        margin: auto;
        margin-left: 30px;
        // border: 1px solid red;
      }
      .p2 {
        font-size: 2.5em;
        margin: auto;
        // font-family: 'Gill Sans Ultra Bold';
      }
    }
    .floatBox1 {
      transform: translateX(-10%);
      margin-bottom: 20px;
    }
    .floatBox2 {
      transform: translateX(70%);
    }
  }
}

.sec2 {
  margin-top: 130px;
  .sec2-1 {
    // border: 1px solid red;
    position: relative;
    margin-bottom: 100px;
    img {
      position: absolute;
      width: 60%;
      // border: 1px solid red;
      right: 0;
      top: -10%;
    }
    article {
      // border: 1px solid red;
      width: 40%;
      p {
        text-align: right;
      }
    }
  }
  .sec2-2 {
    margin-bottom: 100px;
    .echartBoxCake {
      height: 500px;
      width: 770px;
      // border: 1px solid red;
      margin-bottom: 20px;
      margin-top: 40px;
    }
    img {
      width: 100%;
    }
  }

  // p {
  //   //高亮字体
  //   span {
  //     color: rgb(230, 80, 70);
  //     font-weight: bold;
  //   }
  // }
  .imgBox {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0 auto;
    margin-top: 20px;

    figure {
      margin: 20px;
      text-align: center;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
.sec3-1 {
  margin-bottom: 120px;
  display: flex;
  width: 100%;
  height: 100px;
  max-width: 830px;
  margin: 0 auto;
  position: relative;
  img {
    position: absolute;
    width: 200px;
    // transform: translateY(-20%);
    // transform: translateX(-50%);
    // transform: translateY(-20%);
    left: -50px;
    top: -40px;
  }
  p {
    max-width: 830px;
    transform: translateX(4%);
  }
}

.sec3 {
  margin-top: 80px;

  .sec3-2 {
    margin-top: 50px;

    .imgBox1 {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      height: 170px;
      // border: 1px solid red;
      figure {
        margin: 20px;
        text-align: center;
        // border: 1px solid red;
      }
      img {
        width: 130px;
        height: 130px;
      }
    }
    .imgBox2 {
      display: flex;
      img {
        width: 25%;
      }
      p {
        margin: auto;
        padding-left: 0;
      }
    }
    .imgBox3 {
      display: flex;
      img {
        width: 30%;
        transform: translateY(-5%);
      }
      p {
        margin: auto;
        padding-left: 0;
      }
    }
  }
  .sec3-3 {
    margin-top: 50px;
    width: 100%;
    .highLight {
      background-color: rgb(30, 80, 120);
      color: #fff;
      width: 90%;
      text-align: center;
      border-radius: 8px;
    }
    figure {
      // padding: 10px;
      border-top: 1px solid rgb(152, 149, 149);
      border-bottom: 1px solid rgb(152, 149, 149);
      margin: 0 auto;
      width: 100%;
      justify-content: center;
      img {
        width: 470px;
        margin: 0 auto;
        display: block;
      }
      figcaption {
        margin: 0 auto;
      }
    }
  }
  .sec3-4 {
    margin-top: 50px;
    max-width: 100%;
    width: 100%;
    height: auto;
    // border: 1px solid red;
    .scene {
      height: 100vh;
      // height: 90%;
      width: 100%;
      // background: #eaeaea;
    }
    .viewer {
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      max-width: 770px;
      // width: 100%;
      background-image: url('@/assets/人体危害.png');
      background-repeat: no-repeat;
      background-position: 0 50%;
    }
    .viewer.frame1 {
      background-position: -750px 50%;
    }
    .viewer.frame2 {
      background-position: -1500px 50%;
    }
    .viewer.frame3 {
      background-position: -2250px 50%;
    }
    .viewer.frame4 {
      background-position: -3000px 50%;
    }
    .viewer.frame5 {
      background-position: -3750px 50%;
    }
  }
}
.sec3-5 {
  padding-bottom: 50px;
  max-width: 100%;
  margin: 0 auto;
  // border: 1px solid red;
  .pp {
    background-color: rgb(30, 80, 120);
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    max-width: 880px;
    margin: 0 auto;
  }
}
</style>
