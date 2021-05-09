<template>
  <div class="container">
    <div class="item">
      <dv-charts :option="option1" />
    </div>
    <div class="item">
      <dv-charts :option="option2" />
    </div>
    <div class="item">
      <dv-charts :option="option3" />
    </div>
    <div class="item">
      <dv-charts :option="option4" />
    </div>
    <div class="item">
      <dv-charts :option="option5" />
    </div>
    <div class="item">
      <dv-charts :option="option6" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option1: {
        title: {
          text: '基本折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line'
        }]
      },
      option2: {
        title: {
          text: '光滑折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line',
          smooth: true
        }]
      },
      option3: {
        title: {
          text: '虚线折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line',
          lineStyle: {
            lineDash: [10, 10]
          }
        }]
      },
      option4: {
        title: {
          text: '填充折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line',
          lineArea: {
            show: true
          }
        }]
      },
      option5: {
        title: {
          text: '渐变折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line',
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
          },
          linePoint: {
            radius: 4
          }
        }]
      },
      option6: {
        title: {
          text: '数据标签折线图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [{
          data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
          type: 'line',
          label: {
            show: true,
            formatter: '{value}元'
          }
        }]
      }
    }
  }
}
</script>
<style>
div {
  margin: 0 auto;
}

.text {
  font-size: 24px;
  width: 200px;
  height: 40px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.container {
  width: 1350px;
  height: 620px;
  background: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.item {
  width: 450px;
  height: 300px;
}

</style>