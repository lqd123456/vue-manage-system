<template>
  <div ref="echart" style="height: 100%" />
</template>

<script>
import echarts from 'echarts'
export default {
  // 父组件传进来的图表数据
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [], // X轴的数据
          series: [] // Y轴的数据
        }
      }
    },
    isAxisChart: { // 判断是否需要坐标轴
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      echart: null, // echart容器 对应的DIV 元素
      axisOption: { // 需要坐标轴的
        legend: { // 显示图例
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%' // 图表向左偏移
        },
        tooltip: {
          trigger: 'axis' // 鼠标悬浮坐标轴提示
        },
        xAxis: { // X轴的数据显示
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3' // 配置线条的颜色
            }
          },
          axisLabel: {
            color: '#333' // 文本的颜色
          }
        },
        yAxis: [ // Y轴的数据显示
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: [ // 图表颜色
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7fd1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089'
        ],
        series: []
      },
      normalOption: { // 不需要坐标轴的图表
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
        series: []
      }
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  watch: {
    chartData: { // 监听数据的变化，绘制图表
      handler: function() {
        this.initChart()
      },
      deep: true
    },
    isCollapse() { // 折叠菜单的时候重新绘制表格
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeChart) // 增加监听事件，浏览器发生变化 重新渲染图表
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChart) // 避免内存泄漏
  },
  methods: {
    initChart() { // 初始化图表容器
      this.initChartData() // 初始化图表的时候，渲染数据
      if (this.echart) {
        this.echart.setOption(this.options) // 传入数据，绘制图表
      } else {
        this.echart = echarts.init(this.$refs.echart) // 第一次的时候初始化图表容器
        this.echart.setOption(this.options) // 开始开始绘制图表
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart() {
      this.echart ? this.echart.resize() : ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
