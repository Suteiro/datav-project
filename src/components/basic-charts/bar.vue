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
  </div>
</template>
<script>
export default {
  data() {
    return {
      option1: {
        title: {
          text: '基本柱状图'
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
          type: 'bar'
        }]
      },
      option2: {
        title: {
          text: '梯形柱状图'
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
          type: 'bar',
          shapeType: 'leftEchelon'
        }]
      },
      option3: {
        title: {
          text: '渐变柱状图'
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
          type: 'bar',
          gradient: {
            color: ['#37a2da', '#67e0e3']
          }
        }]
      },
      option4: {
        title: {
          text: '堆积柱状图'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [
          {
            name: '系列A',
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '系列B',
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar',
            stack: 'a'
          }
        ]
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
  width: 960px;
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