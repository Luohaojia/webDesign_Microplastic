<template>
  <div id="part4">
    <Top></Top>
    <el-backtop :visibilityHeight="4600"> </el-backtop>

    <!-- !!!!!header!!!! -->
    <header class="bgimgBox">
      <div class="bgimg headerImg"></div>
      <div id="bigTitle">04.限塑令还不能“限速”</div>
    </header>

    <!-- !!!!!main!!!! -->
    <main>
      <!-- <div id="partTitle">04.限速令还不能‘限速’</div> -->

      <!-- !!!!!sec1!!!! -->
      <section class="sec1">
        <div class="sec1-1">
          <p>
            联合国环境规划署（UNEP）去年发布报告称，1950年至2017年期间，全球累计生产约<span class="redFont">92亿</span>吨塑料，其中塑料回收利用率不足<span class="redFont">10%</span>，约有<span class="redFont">70亿</span>吨成为塑料垃圾。预计到2040年，全球每年将有约<span class="redFont">7.1亿</span
            >吨塑料垃圾被遗弃到自然环境中。
          </p>
        </div>
        <div class="sec1-2">
          <img src="/img/part4/警告.png" alt="" />
          <p>美国《科学进展》杂志文章警告，2050年，地球上将有超过<span class="redFont">130亿</span>吨塑料垃圾，蓝色地球可能变成“塑料星球”。</p>
        </div>
        <div :class="{ 'sec1-3': true, showBefore: true, showEnter: isShow }">
          <p>如果我们不采取行动，每年流入海洋的塑料总量将会是现在的近<span class="redFont">3</span>倍(预计从2016年的<span class="redFont">1100万吨</span>上涨到2040年的<span class="redFont">2900万吨</span>),海洋内的塑料垃圾存量将会是现在的 4 倍(超过 6 亿吨)。</p>
        </div>
      </section>

      <!-- !!!!!sec2!!!! -->
      <section class="sec2">
        <!-- tab -->
        <p>面对“白色污染”，世界范围内的许多国家、组织采取了不同的行动。</p>
        <div id="toggleBox">
          <p class="imgTip">（移动鼠标查看世界各组织机构及各国的限塑政策）</p>
          <ul class="tabBox">
            <li v-for="(item, index) in imgList" :key="index" @mouseenter="enterFunc(index)" :class="{ 'li-active': imgActive == index }">
              <div class="name">{{ item.name }}</div>
              <img :src="item.imgSrc" />
            </li>
          </ul>
          <article>
            <div :class="{ text: true, 'text-acitve': textActive == 0 }">
              <p>
                在内罗毕举行的联合国环境大会续会上，来自175个国家的与会代表通过了一项历史性决议，旨在到2024年达成一项具有法律约束力的国际决议，该决议旨在设立一个政府间谈判委员会，目标是在2024年底前完成一项具有法律约束力的国际协定，以解决塑料污染治理问题。这是联合国环境大会首次对全球塑料问题通过决议。
              </p>
            </div>
            <div :class="{ text: true, 'text-acitve': textActive == 1 }">
              <p>
                《欧洲塑料公约》是一个公私联盟契约，其希望通过避免塑料浪费并将价值链中的所有参与者聚集在一起，实现真正的欧洲塑料循环经济。 签署者包括塑料制造商、零售商、政府和民间社会组织，承诺到2025年实现一系列目标，包括：
                <br />
                一、重新设计所有塑料包装和一次性产品，使其尽可能可重复使用，并可回收利用；<br />
                二、将原生塑料的使用量减少20％；<br />
                三、将收集、分类和回收能力提高25％<br />
                四、在新包装中增加再生塑料的使用量。<br />
                《欧洲塑料公约》针对不同种类的塑料制品，分类提出了“再设计、创新、代替、扩大”的解决方法。
              </p>
            </div>
            <div :class="{ text: true, 'text-acitve': textActive == 2 }">
              <p>
                《美国塑料协定2020基准报告》提到在2025年，美国在处理塑料问题方面要达成四个目标： <br />
                一、确定一系列疑难或非必要的商品包装名单，并采取措施取缔它们；<br />
                二、100%的塑料包装必须可重复利用、可回收或可降解； <br />
                三、采取必要行动对50%的塑料包装进行回收或堆肥；<br />
                四、对塑料包装中可回收及有机材料的平均追踪监管率要达到30%。<br />
              </p>
            </div>
            <div :class="{ text: true, 'text-acitve': textActive == 3 }">
              <p>
                《日本财务省、环境省等政府部门的联合通知》规定自2020年7月1日起，对全国范围内零售业提供的塑料购物袋都将进行收费，具体价格由商家决定。若提供的塑料购物袋符合以下标准，则无需收费： <br />
                一、塑料袋的厚度大于50mm；<br />
                二、 海洋环境下的分解率达到100%；<br />
                三、塑料袋中有机材料的比例达25%以上。<br />
                该通知指出，塑料袋收费是解决解决海洋塑料垃圾和全球变暖问题的第一步，旨在通过改变消费者的生活习惯从而促进塑料产业的变革。
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- !!!!!sec3时间轴!!!! -->
      <section class="sec3">
        <article>
          <p>党的十九大将建设生态文明提升为千年大计，提出“五位一体”总体布局。我国一直遵循命运共同体的发展理念，制定和实施环保制度，其中“限塑令”就是一项重要环保政策。</p>
          <p>纵观历史，我国的限塑令进程可以大致分为三个阶段，分别是早期酝酿阶段（1978-2007年）、渐进启动阶段（2008-2019年）、断裂变迁阶段（2020年至今）。</p>
          <p class="imgTip">我国“限塑令”主要的法律法规：</p>
          <div class="bgImg"></div>
        </article>
        <Timeline></Timeline>
        <div class="sec3-imgbox">
          <p>2008年6月1日起开始实行的《关于限制生产销售使用塑料购物袋的通知》，开启了我国环保政策的发展的里程碑。</p>
          <img src="/img/part4/塑料袋.png" alt="" />
        </div>
        <div class="echartBoxLine" ref="echartBoxLine">11</div>
      </section>

      <!-- !!!!!sec4!!!! -->
      <section class="sec4">
        <p style="text-align: center">我国限塑令的变化</p>
        <div class="rotateBox">
          <div class="img1">
            <!-- <img src="/img/part4/横向比较.png" alt="" width="350px" /> -->
            <h4>从治理格局来看</h4>
            <p>
              前期主要从供应和需求等塑料<span class="redFont" style="color:rgb( 250, 110, 110)">使用源头</span>方面着手解决问题，对生产销售和使用等环节进行限制；后期则将治理格局拓宽了，专注于塑料污染的<span class="redFont">全链条治理</span
              >，由局部治理转为生产、流通和循环利用和再生的系统化的运作，同时从各方面加大对可降解塑料的研发鼓励力度，从<span class="redFont">全方位开展塑料污染治理行动</span>。
            </p>
          </div>
          <div class="img2">
            <h4>从限制的塑料对象看</h4>
            <!-- <img src="/img/part4/纵向比较.png" alt="" width="350px" /> -->
            <p>从一开始对一次性发泡塑料盒的重拳出击，到后来扩大到超薄塑料袋、农膜地膜，再到后来的快递外卖和其它商品包装，范围逐步拓宽，治理的更加全面。其中一次性塑料发泡盒的封禁之路可谓是一波三折，从前到后经历了被全面禁止—历经14年后解禁—9年后重新被全面禁止的过程。</p>
          </div>
        </div>
      </section>
    </main>

    <!-- !!!!!footer!!!! -->
    <footer class="bgimgBox">
      <div class="bgimg footerImg"></div>
      <div id="bigTitle">
        <p>05.限塑被什么限了“速”</p>
        <div
          id="shapeBox"
          @click="
            () => {
              this.$router.push('part5')
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
import * as echarts from 'echarts'
import Top from '@/components/Top'
import Timeline from '@/components/Timeline'

export default {
  name: 'Part4',
  components: { Top, Timeline },

  data() {
    return {
      activeName: '1',
      imgList: [
        {
          name: '联合国',
          imgSrc: '/img/part4/联合国.png'
        },
        {
          name: '欧盟',
          imgSrc: '/img/part4/欧洲.png'
        },
        {
          name: '美国',
          imgSrc: '/img/part4/美国.png'
        },
        {
          name: '日本',
          imgSrc: '/img/part4/日本.png'
        }
      ],
      imgActive: 0,
      textActive: 0,
      currentScroll: 0,
      isShow: false,
      lineDataX: [2006, 200, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 201, 2018, 2019, 2020],
      lineDataY: [13, 22, 16, -1, 22, 13, 7, 9, 8, 13, 10, 10, 6, 7, 10]
    }
  },
  methods: {
    handleScroll() {
      if (this.isShow) return
      this.currentScroll = window.pageYOffset

      if (this.currentScroll >= 700) {
        console.log(this.currentScroll)
        this.isShow = true
      }
    },
    enterFunc(index) {
      this.imgActive = index
      this.textActive = index
    },
    // leaveFunc(index) {
    //   this.active = index
    // }
    initChartLine() {
      this.chartLine = echarts.init(this.$refs.echartBoxLine)
      this.chartLine.setOption({
        title: {
          text: '我国初生塑料产量较上一年增长率（单位：百分比）', //标题
          left: 'center',
          textStyle: {
            fontWeight: 'normal',
            // fontStyle: 'Heiti SC',
            fontSize: 18
          },

          subtext: '(数据来源于国家统计局)',
          subtextStyle: {
            // fontStyle: 'Heiti SC',
            fontSize: 15
          }
        },
        //提示框组件
        tooltip: {
          trigger: 'axis' //item数据项图形触发,axis坐标轴触发
        },
        //直角坐标系内绘图网格
        // grid: {
        //   top: '20%', //grid组件距上下左右的距离
        //   left: '0%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true //grid区域是否包含坐标轴的刻度标签。
        // },
        //直角坐标系 grid 中的 x 轴
        xAxis: {
          type: 'category', //坐标轴类型，category类目轴，适用于离散的类目数据
          boundaryGap: false, //坐标轴两边留白策略,默认为 true
          data: this.lineDataX, //数据
          //坐标轴刻度标签的相关设置
          axisLabel: {
            interval: 1, //横轴信息全部显示
            // rotate: -45, //倾斜度 -90 至 90 默认为0
            margin: 15, //刻度标签与轴线之间的距离
            textStyle: {
              fontSize: 13, //横轴字体大小
              color: '#000000' //颜色
            }
          }
        },
        yAxis: {
          type: 'value', //'value' 数值轴，适用于连续数据。
          axisLabel: {
            textStyle: {
              fontSize: 13,
              color: '#000000' //颜色
            }
          }
        },
        series: [
          {
            name: '增长率', //对应的系列
            type: 'line',
            stack: '总量',
            data: this.lineDataY,
            itemStyle: {
              normal: {
                // color: 'rgb( 160, 190, 230)', //改变折线点的颜色
                lineStyle: {
                  // color: 'rgb( 160, 190, 230)', //改变折线颜色
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb( 30, 80, 120)'
                    },
                    {
                      offset: 0.5,
                      color: 'rgb( 160, 190, 230)'
                    },
                    {
                      offset: 1,
                      color: 'rgb( 190, 220, 240)'
                    }
                  ]) //线条渐变色
                }
              }
            }
          }
        ]
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.initChartLine()
  }
}
</script>

<style lang="less" scoped>
#part4 {
  // max-width: 670px;
  // width: calc(100% - 50px);
  width: 100%;

  // font-family: 'Courier New', Courier, monospace;
}
main {
  background-color: #fff;
  color: black;
  margin-top: 0;
}
.headerImg {
  background-image: url('@/assets/part4-header.jpg');
}
.footerImg {
  background-image: url('@/assets/part5-header.jpg');
}
h3 {
  text-align: center;
  max-width: 670px;
  font-size: 1.2em;
  margin: 0 auto;
  width: 100%;
  color: black;
}

.sec1 {
  .sec1-1 {
    padding-top: 50px;
  }
  .sec1-2 {
    margin-top: 50px;
    display: flex;
    img {
      width: 30%;
    }
    p {
      margin: auto;
    }
  }
  .sec1-3 {
    margin-top: 50px;

    color: #fff;
    background-color: rgb(30, 80, 120);
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 10px 10px 4px rgb(203, 201, 201);
    transition: all 1.5s ease;
  }
  .showBefore {
    transform: translateY(50%);
    opacity: 0;
  }
  .showEnter {
    transform: translateY(0);
    opacity: 1;
  }
}
.sec2 {
  margin-top: 100px;
  padding: 80px 0 20px 0;
  background-color: rgb(30, 80, 120);
  color: #fff;
  width: 100%;
  max-width: 100%;
  .imgTip {
    color: rgb(152, 149, 149);
    text-align: center;
  }
  #toggleBox {
    width: 100%;
    max-width: 770px;
    margin: 0 auto;
    margin-top: 50px;
    .tabBox {
      display: flex;
      justify-content: space-around;
      li {
        position: relative;
        overflow: hidden;
        .name {
          position: absolute;
          color: rgb(249, 241, 241);
          font-size: 1.5em;
          font-weight: bold;
          transition: all 0.7s ease;
          top: 35%;
          right: 50%;
          transform: translateX(-200%);
        }
        &:hover {
          // opacity: 0.5;
          .name {
            transform: translateX(50%);
            z-index: 5;
          }
          img {
            opacity: 0.5;
            z-index: -1;
          }
        }
        img {
          width: 150px;
          height: 100px;
        }
      }
      .li-active {
      }
    }

    article {
      position: relative;
      padding: 20px;
      height: 400px;
      ul {
        font-size: 1.1em;
        line-height: 2;
      }
      .text {
        position: absolute;
        height: 50px;
        opacity: 0;
      }
      .text-acitve {
        opacity: 1;
      }
    }
  }
  // :deep {
  //   .el-collapse {
  //     margin: 0 auto;
  //     margin-top: 20px;

  //     box-sizing: border-box;
  //     max-width: 670px;
  //     padding-left: 10px;
  //     .el-collapse-item__header {
  //       border: none;
  //       background-color: rgb(190, 220, 240);
  //     }
  //     .el-collapse-item__wrap {
  //       background-color: transparent;
  //       border: none;
  //       .el-collapse-item__content {
  //         padding: 0;
  //       }
  //     }
  //   }
  // }

  // .el-collapse {
  //   article {
  //     background-color: rgb(200, 240, 250);
  //     padding: 20px;
  //     box-sizing: border-box;
  //     ul {
  //       list-style: none;
  //       margin: 0 auto;
  //       padding: 0 0 0 20px;
  //       font-size: 1.1em;
  //     }
  //   }
  // }
}

.sec3 {
  width: 100%;
  max-width: 100%;

  article {
    padding-top: 20px;
    background-color: #fff;
    width: 100%;
    position: relative;
    // margin-top: 100px;
    color: black;
    .bgImg {
      background-image: url('@/assets/中国.png');
      background-size: 50%;
      position: absolute;
      top: 0;
      opacity: 0.5;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
    }
    p:first-child {
      margin-top: 230px;
    }
    p {
      margin-bottom: 80px;
    }
    .imgTip {
      color: #989595;
      font-size: 1.2em;
      text-align: center;
    }
  }
  #vuetify-timeline {
    background-color: #fff;
    margin: 0 auto;
    max-width: 670px;
    box-sizing: border-box;
    h3 {
      font-size: 1em;
    }
    margin-bottom: 100px;
  }
  .sec3-imgbox {
    max-width: 770px;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    img {
      width: 30%;
    }
    p {
      width: 60%;
      margin: auto;
    }
  }
  .echartBoxLine {
    // border: 1px solid red;
    transform: translateX(1%);
    max-width: 780px;
    height: 500px;
    margin: auto;
    margin-top: 80px;
  }
}
.sec4 {
  margin-top: 50px;
  .rotateBox {
    // border: 1px solid red;
    width: 600px;
    height: 500px;
    position: relative;
    margin: 0 auto;
    color: #fff;
    .img1,
    .img2 {
      position: absolute;
      border-radius: 10px;
      top: 70px;
      transition: all 0.7s ease;
      opacity: 0.7;
      width: 350px;
      height: 350px;
      box-sizing: border-box;
      // background-color: rgb(30, 80, 120);
      background-color: rgb(40, 120, 180);
      padding-top: 20px;
      h4 {
        text-align: center;
        // background-color: rgb(40, 120, 180);
        // background-color: rgb(160, 190, 230);
        height: 10%;
        width: 50%;
        margin: 0 auto;
        line-height: 35px;
      }
    }
    .img1 {
      transform: perspective(500px) rotateY(55deg) scale(0.95);
    }
    .img2 {
      right: 0px;
      transform: perspective(500px) rotateX(87deg) skewX(-20deg);
    }
    .img1:hover {
      transform: none;
      z-index: 10;
      opacity: 1;
    }
    .img2:hover {
      transform: none;
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>
