<template>
  <div id="part5">
    <Top></Top>
    <el-backtop :visibilityHeight="3800"> </el-backtop>

    <!-- !!!!!header!!!! -->
    <header class="bgimgBox">
      <div class="bgimg headerImg"></div>
      <div id="bigTitle">05.限塑被什么限了“速”</div>
    </header>

    <!-- !!!!!main!!!! -->
    <main>
      <!-- <div id="partTitle">05.限塑被什么限了‘速’</div> -->
      <!-- !!!!!sec1!!!! -->
      <section class="sec1">
        <p>2008年开始施行的“限塑令”，明确“限塑”重点为厚度<span class="redFont">小于0.025毫米</span>的塑料购物袋。当时有关专家表示，当时市场80%以上的塑料购物袋厚度都无法达到要求。一般农贸市场提供的塑料购物袋厚度在0.005毫米左右，大型超市和商场提供的塑料购物袋厚度一般在0.015毫米-0.020毫米之间。</p>

        <p>2008年限塑令实施以来，超市、商场的塑料袋使用量普遍减少<span class="redFont">2/3</span>以上，累计减少塑料袋<span class="redFont">140万吨</span>左右，这个数字虽给人们带来了些许安慰，但不可否认的是，由于塑料袋用起来方便，当时还没有更好的替代品，这也使得“限塑令”更深一步的执行难以奏效。</p>
        <div class="sec1-1">
          <img src="/img/part5/菜市场.png" alt="" />
          <p>在大型商场、超市，限塑令能够得到较好执行，但自带购物袋、不使用塑料袋的顾客仍是少数。在菜市场、街边小摊点等“限塑令”的死角，超薄塑料袋仍是“零成本”使用。</p>
        </div>
      </section>

      <!-- !!!!!sec3!!!! -->
      <section class="sec2">
        <div class="sec2-1">
          <p>一次性塑料用品在外卖、网购、快递行业被广泛使用，让“限塑令”面临新的挑战。</p>
          <p>据《中国快递领域绿色包装发展现状及趋势报告》显示，2008-2016年，我国快递业消耗塑料袋从82.68亿个增至约147亿个</p>
          <img src="" alt="" />
        </div>
      </section>

      <!-- !!!!!sec3!!!! -->
      <section class="sec3">
        <div id="echartBox2" ref="echartBox2"></div>
        <div id="echartBox1" ref="echartBox1"></div>
        <p>据公开数据显示，国内三大外卖平台订单量2000万左右，而1单至少使用1个塑料袋。这些产业近年来飞速发展，使得“限塑令”大打折扣。</p>
        <div id="echartBox3" ref="echartBox3"></div>
        <p class="imgTip">注：数据来源于美团财报</p>
      </section>

      <!-- !!!!!sec4!!!! -->
      <section class="sec4">
        <img src="/img/part5/张德元.png" alt="" />
        <p>
          国家发改革研究员张德元认为：长期以来，由于广大企业和消费者主体责任不明确、节约意识不强，导致商品过度包装依然“泛滥”，各类一次性塑料制品浪费现象比较普遍。这些一次性塑料制品使用广、价值低、收集难，成为塑料污染治理的“难点”和“痛点”，我们亟待探索适应新时期的限塑政策。在经济稳健有力地发展的同时，限塑政策也要按下“加速键”，让政策更新的步伐跟上奔驰的经济快马。
        </p>
      </section>
    </main>

    <!-- !!!!!footer!!!! -->
    <footer class="bgimgBox">
      <div class="bgimg footerImg"></div>
      <div id="bigTitle">
        <p>06.限塑，我们也要行动</p>
        <div
          id="shapeBox"
          @click="
            () => {
              this.$router.push('part6')
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

export default {
  name: 'Part5',
  components: { Top },

  data() {
    return {
      data1_x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      data1_y: [23, 37, 57, 92, 140, 207, 313, 401, 507, 635, 833],
      data2_x: [2015, 2016, 2017, 2018],
      data2_y: [82, 147, 196, 245],
      chart1: '',
      chart2: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart1()
      this.initChart2()
      this.initChart3()
      window.addEventListener('resize', this.screenAdapter)
      // this.screenAdapter()
    })
  },
  methods: {
    initChart1() {
      this.chart1 = echarts.init(this.$refs.echartBox1)
      this.chart1.setOption({
        title: {
          text: '2015-2018快递业消耗塑料袋数（单位：亿个）',
          left: 'center',
          textStyle: {
            color: '#ffffff'
          }
        },
        // x坐标轴
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          name: '数量',
          nameTextStyle: {
            color: '#75878a',
            fontSize: 18,
            fontWeight: 'bolder'
          },
          axisLabel: {
            fontWeight: 'bolder',
            fontFamily: 'KaiTi',
            // fontStyle:'italic',
            fontSize: 16,
            color: '#75878aC'
          }
        },
        // y坐标轴
        yAxis: {
          type: 'category',
          data: this.data2_x,
          name: '年份',
          nameTextStyle: {
            color: '#75878a',
            fontSize: 18,
            fontWeight: 'bold'
          },
          axisLabel: {
            fontWeight: 'bold',
            fontFamily: 'KaiTi',
            fontSize: 14,
            color: '#75878a'
          }
        },
        // 数值体
        series: [
          {
            type: 'bar',
            data: this.data2_y,
            label: {
              show: true,
              fontSize: 12,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            itemStyle: {
              borderRadius: [0, 25, 25, 0],
              color: '#99CCCC',
              color: 'rgb( 190, 220, 240)'
            },
            barWidth: 45
          }
        ]
      })
    },
    initChart2() {
      this.chart2 = echarts.init(this.$refs.echartBox2)
      this.chart2.setOption({
        title: {
          text: '2010-2020快递业业务数量（亿件）',
          left: 'center',
          textStyle: {
            color: '#ffffff'
          }
        },
        xAxis: {
          // type: 'value',  bug
          name: '年份',
          nameTextStyle: {
            color: '#75878a',
            fontSize: 18,
            fontWeight: 'bolder'
          },
          data: this.data1_x,
          axisLabel: {
            fontSize: 14,
            fontFamily: 'KaiTi',
            color: '#75878a',
            fontWeight: 'bold'
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '数目',
            nameTextStyle: {
              color: '#75878a',
              fontSize: 18,
              fontWeight: 'bold'
            },
            axisLabel: {
              fontWeight: 'bold',
              fontFamily: 'KaiTi',
              fontSize: 14,
              color: '#75878a'
            }
          }
        ],
        series: [
          {
            name: '数目',
            type: 'bar',
            data: this.data1_y,
            label: {
              show: true,
              fontSize: 12,
              position: 'top'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            itemStyle: {
              color: '#99CCCC',
              borderRadius: [13, 13, 0, 0]
            }
          },
          {
            name: '数目',
            type: 'line',
            data: this.data1_y,
            symbol: 'circle', //设定为实心点
            symbolSize: 10, //设定实心点的大小
            label: {
              show: false,
              fontSize: 12,
              position: 'top'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            itemStyle: {
              color: '#4c8dae'
            }
          }
        ]
      })
    },
    initChart3() {
      this.chart3 = echarts.init(this.$refs.echartBox3)
      this.chart3.setOption({
        title: {
          text: '2017-2021美团外卖交易笔数（单位：亿单）',
          left: 'center',
          textStyle: {
            color: '#ffffff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
          // 控制提示格式
          // formatter: function(param){
          //     return `${param[0].axisValue}: <br/>${param[0].value}人`
          // }
        },
        xAxis: {
          type: 'category',
          data: ['2017', '2018', '2019', '2020', '2021'],
          name: '年份',
          nameTextStyle: {
            color: '#75878a',
            fontSize: 18,
            fontWeight: 'bolder'
          },
          axisLabel: {
            fontSize: 14,
            fontFamily: 'KaiTi',
            color: '#75878a',
            fontWeight: 'bold'
          }
        },
        yAxis: {
          type: 'value',
          name: '数目',
          nameTextStyle: {
            color: '#75878a',
            fontSize: 18,
            fontWeight: 'bold'
          },
          axisLabel: {
            fontWeight: 'bold',
            fontFamily: 'KaiTi',
            fontSize: 14,
            color: '#75878a'
          }
        },
        series: [
          {
            data: [40.9, 63.9, 87, 101, 144],
            type: 'line',
            symbolSize: '16',
            symbol: 'emptyTriangle',
            symbolBorderWidth: '2',
            itemStyle: {
              normal: {
                color: 'rgb( 250, 230, 230 )', //折线点上的颜色
                lineStyle: {
                  color: 'rgb( 160, 190, 230)' //折线上颜色
                }
              }
            }
          }
        ]
      })
    },
    screenAdapter() {
      console.log(1)
      // 获取自适应大小
      // const titleFontSize = (this.$refs.echartBox1.offsetWidth / 100) * 3.6
      // 自适应配置
      const adapterOption = {
        // title: {
        //   textStyle: {
        //     fontSize: titleFontSize // 自适应字体大小
        //   }
        // },
        // legend: {
        //   // 图例组件
        //   itemWidth: titleFontSize / 2,
        //   itemHeight: titleFontSize / 2,
        //   itemGap: titleFontSize / 2,
        //   textStyle: {
        //     fontSize: titleFontSize / 2 // 自适应字体大小
        //   }
        // }
        // xAxis: {
        //   axisLabel: {
        //     fontSize: titleFontSize
        //   }
        // }
      }
      this.chart1.setOption(adapterOption)
      this.chart2.setOption(adapterOption)
      // 自适应
      this.chart1.resize()
      this.chart2.resize()
    }
  }
}
</script>

<style lang="less" scoped>
#part5 {
  width: 100%;

  // font-family: 'Courier New', Courier, monospace;
}
.headerImg {
  background-image: url('@/assets/part5-header.jpg');
}
.footerImg {
  background-image: url('@/assets/part6-header.jpg');
}

.sec1 {
  padding-bottom: 80px;
  max-width: 100%;
  margin: 0 auto;
  p {
    margin-bottom: 50px;
  }
  .sec1-1 {
    display: flex;
    max-width: 900px;
    margin: 0 auto;

    img {
      width: 42%;
      transform: translateX(-3%);
    }
    p {
      margin: auto;
      max-width: 670px;
      transform: translateX(3%);
    }
  }
}
.sec2 {
  background-color: #fff;
  color: black;
  width: 100%;
  max-width: 100%;
  padding: 80px 0;
  .sec2-1 {
    margin: auto;
    padding: 120px 0;
    background-image: url('@/assets/快递盒背景.png');
    background-size: 40%;
    background-position: 500px 100px;
    max-width: 850px;
    // margin: auto 40px;
    background-repeat: no-repeat;
  }
}
.sec3 {
  margin-top: 100px;
  #echartBox1 {
    // width: 80%;
    margin: 0 auto;
    height: 500px;
    margin-bottom: 50px;
  }
  #echartBox2 {
    // width: 80%;
    height: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  #echartBox3 {
    // width: 80%;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    margin-top: 80px;
    // border: 1px solid ;
  }
  .imgTip {
    padding: 0;
    color: rgb(152, 149, 149);
  }
}
.sec4 {
  max-width: 900px;
  display: flex;
  padding: 80px 0;
  // border: 1px solid red;
  img {
    width: 200px;
    height: 200px;
    transform: translateX(-16%);
  }
  p {
    margin: auto;
    transform: translateX(1%);
    transform: translateY(-5%);
  }
}
</style>
