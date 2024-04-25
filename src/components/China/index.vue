<template>
  <!-- 具备一个宽高的dom -->
  <div ref="main" class="echartBox" style="margin: 0 auto; padding: 0; overflow: hidden"></div>
</template>

<script>
// 导入echarts
import * as echarts from 'echarts'
// 中国地图
import chianJson from '@/../public/static/map/china.json'
// 导入echarts主题
require('@/theme/chalk')
export default {
  name: 'china-map',
  data() {
    return {
      chart: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      window.addEventListener('resize', this.screenAdapter)
      this.screenAdapter()
    })
  },
  methods: {
    initChart() {
      // init第一个参数 ref定义的，第二个参数主题
      this.chart = echarts.init(this.$refs.main)
      echarts.registerMap('china', chianJson)
      this.chart.setOption({
        title: {
          // text: '（移动鼠标可查看39个城市分布）',
          left: 'center',
          // top: 20,
          textStyle: {
            color: 'rgb(152, 149, 149)',
            // fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 2,
            fontFamily: 'HeiTi'
          }
        },
        geo: {
          type: 'map', // 类型
          map: 'chain',
          top: '25%', // 距离顶部
          // bottom: '5%', // 距离底部
          itemStyle: {
            // 地图区域的样式。
            areaColor: 'rgb( 190, 220, 240)', // 地图整体区域的颜色
            borderColor: '#FFF', //地图边界线的颜色
            // emphasis: {
            //   areaColor: 'rgb( 160, 190, 230)' //鼠标悬停时区域变成的颜色
            // },
            label: {
              emphasis: {
                //鼠标移入时显示的默认样式,也就是鼠标移上去，显示该地区的地名，可具体设置样式，也可不显示
                show: false
              }
            }
          },
          emphasis: {
            itemStyle: {
              areaColor: 'rgb( 160, 190, 230)' //鼠标悬停时区域变成的颜色
            }
          },
          tooltip: {},
          zoom: 1.3
        },
        // 自定义提示框的内容
        tooltip: {
          trigger: 'item',
          show: true,
          // 自定义提示框的内容
          formatter(params) {
            return '<div>🚩' + params.data.name + '</div>'
          }
        },
        // 散点图
        series: [
          {
            type: 'effectScatter', //特效散点图
            rippleEffect: {
              // 涟漪效果
              scale: 3.5, //涟漪特效动画中波纹的最大缩放比例
              brushType: 'stroke'
            },
            coordinateSystem: 'geo', // 使用坐标,
            itemStyle: {
              color: 'rgb( 250, 230, 230 )'
            },
            // name: '一线城市',
            data: [
              { name: '北京', value: [116.46, 39.92] },
              { name: '天津', value: [117.30983, 39.71755] },
              { name: '石家川', value: [117.48149137695314, 39.065911534473464] },
              { name: '太原', value: [112.48699, 37.94036] },
              { name: '呼和浩特', value: [111.62299, 40.80772] },
              { name: '长春', value: [125.28845, 43.83327] },
              { name: '大连', value: [121.5255, 38.95223] },
              { name: '沈阳', value: [123.46987, 41.80515] },
              { name: '哈尔滨', value: [126.95717, 45.54774] },
              { name: '上海', value: [121.48941, 31.40527] },
              { name: '南京', value: [118.8921, 31.32751] },
              { name: '宁波', value: [121.84431, 29.89889] },
              { name: '杭州', value: [120.21201, 30.2084] },
              { name: '合肥', value: [117.30794, 31.79322] },
              { name: '福州', value: [119.27345, 26.04769] },
              { name: '厦门', value: [118.03394, 24.48405] },
              { name: '南昌', value: [115.94422, 28.54538] },
              { name: '青岛', value: [120.39629, 36.30744] },
              { name: '济南', value: [116.75199, 36.55358] },
              { name: '郑州', value: [113.6401, 34.72468] },
              { name: '武汉', value: [114.02919, 30.58203] },
              { name: '长沙', value: [112.98626, 28.25591] },
              { name: '深圳', value: [113.88308, 22.55329] },
              { name: '广州', value: [113.27324, 23.15792] },
              { name: '南宁', value: [108.27331, 22.78121] },
              { name: '海口', value: [110.32941, 20.02971] },
              { name: '重庆', value: [106.54041, 29.40268] },
              { name: '成都', value: [104.101947, 30.65984] },
              { name: '贵阳', value: [106.62298, 26.67865] },
              { name: '昆明', value: [102.82147, 24.88554] },
              { name: '拉萨', value: [91.13775, 29.65262] },
              { name: '西安', value: [108.93425, 34.23053] },
              { name: '兰州', value: [103.71878, 36.10396] },
              { name: '新宁', value: [110.85674, 26.43346] },
              { name: '银环', value: [110.85674, 26.43346] },
              { name: '乌鲁木齐', value: [88.31104, 43.36378] },
              { name: '香港', value: [114.16546, 22.27534] },
              { name: '澳门', value: [113.54913, 22.19875] },
              { name: '台北', value: [121.520076, 25.030724] }
            ]
          }
        ]
      })
    },
    // 当浏览器的大小发生变化的时候，会调用此方法来完成适配
    screenAdapter() {
      // 获取自适应大小
      const titleFontSize = (this.$refs.main.offsetWidth / 100) * 3.6
      // 自适应配置
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize // 自适应字体大小
          }
        },
        legend: {
          // 图例组件
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2 // 自适应字体大小
          }
        }
      }
      this.chart.setOption(adapterOption)
      // 自适应
      this.chart.resize()
    }
  }
}
</script>

<style lang="scss" scoped>
.echartBox {
  height: 700px;
  width: 100%;
  margin: 0 auto;
}
</style>
