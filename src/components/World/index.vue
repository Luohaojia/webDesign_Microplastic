<template>
  <div class="wrapper">
    <div class="chart" id="chart"></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as echarts from 'echarts'

export default {
  data() {
    return {}
  },
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    msg: {
      deep: true,
      handler(val) {
        this.getWorld(val)
      }
    }
  },
  mounted() {
    this.getWorld(this.msg)
  },
  methods: {
    getWorld(data) {
      var that = this
      axios.get('static/map/world.json').then(function (res) {
        // console.log(res)
        let namemap = res.data.namemap
        let dataArr = res.data.dataArr
        that.drawChart(namemap, dataArr)
      })
    },
    drawChart(name, data) {
      // 基于准备好的dom，初始化echarts实例
      let chart = echarts.init(document.getElementById('chart'))
      // 监听屏幕变化自动缩放图表
      window.addEventListener('resize', function () {
        chart.resize()
      })
      // 绘制图表
      chart.setOption({
        // 图表主标题
        // title: {
        //   text: '世界地图', // 主标题文本，支持使用 \n 换行
        //   top: 10, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
        //   left: 'center', // 值: 'left', 'center', 'right' 同上
        //   textStyle: { // 文本样式
        //     fontSize: 24,
        //     fontWeight: 600,
        //     color: '#000'
        //   }
        // },
        grid: {
          width: '100%',
          height: '100%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        // 提示框组件
        tooltip: {
          trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
          // 使用函数模板  传入的数据值 -> value: number | Array
          formatter: function (val) {
            if (val.data == null) return
            return val.data.name
          }
        },

        // // 视觉映射组件
        // visualMap: {
        //   min: 0,
        //   max: 0,
        //   text: ['max', 'min'],
        //   realtime: false,
        //   calculable: true,
        //   color: ['#0064d0', '#c3e0ff']
        // },
        geo: {
          //为了散点
          type: 'map',
          name: '世界地图',
          map: 'world',
          // roam: true,
          zoom: 1,
          itemStyle: {
            areaColor: '#c2ccd0',
            borderColor: '#18849C',
            borderWidth: 0.1
          },
          data: data
        },
        series: [
          {
            type: 'effectScatter', //散点图
            geoIndex: 0, //(bug fixed:解决在地图上缩放重影问题
            rippleEffect: {
              // 涟漪效果
              scale: 1,
              brushType: 'stroke'
            },
            coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
            // zlevel: 30,
            data: [
              { name: '维多利亚', value: [135.193845, -25.304039], symbolSize: 10 },
              { name: '美国', value: [-100.696295, 33.679979], symbolSize: 10 },
              { name: '东京', value: [139.44, 35.41], symbolSize: 10 },
              { name: '伦敦', value: [0.15, 51.3], symbolSize: 10 },
              { name: '中国', value: [116.3, 33.9], symbolSize: 10 },
              { name: '巴黎', value: [2.25, 48.52], symbolSize: 10 }
            ],
            rippleEffect: {
              brushType: 'fill' // 波纹绘制效果
            },
            label: {
              // 默认的文本标签显示样式
              show: true,
              color: '#161823',
              position: 'top', // 标签显示的位置
              formatter: '{b}', // 标签内容格式器
              fontWeight: 'bold',
              fontSize: 13
            },
            itemStyle: {
              areaColor: '#fff',
              borderColor: '#18849C',
              borderWidth: 1
            },
          },
          {
            //与上面geo配置项重复，也是生成地图（为了visual），但设置好zoam即可重叠
            geoIndex: 0, //(bug fixed:解决在地图上缩放重影问题

            type: 'map', // 类型
            // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
            name: '世界地图',
            map: 'world', // 地图类型
            // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
            roam: false,
            // 图形上的文本标签
            label: {
              show: false // 是否显示对应地名
            },
            zoom: 1, //控制缩放比例
            // 地图区域的多边形 图形样式
            itemStyle: {
              // areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
              borderWidth: 0.15, // 描边线宽 为 0 时无描边
              borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
              borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
            },
            // 高亮状态下的多边形和标签样式
            emphasis: {
              label: {
                show: false, // 是否显示标签
                color: '#fff' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
              }
            },
            // 自定义地区的名称映射
            nameMap: name,
            // 地图系列中的数据内容数组 数组项可以为单个数值
            data: data
          }
        ]
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.wrapper .chart {
  width: 80%;
  margin: 0 auto;
  height: 600px;
  /* background: url(../../public/static/bg.png) no-repeat; 背景图设置*/
  background-size: 100% 100%;
}
</style>
