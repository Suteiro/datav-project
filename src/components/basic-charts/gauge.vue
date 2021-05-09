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
          text: '基本仪表盘'
        },
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55 } ],
            axisLabel: {
              formatter: '{value}%'
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      },
      option2: {
        title: {
          text: '渐变详情仪表盘'
        },
        series: [
          {
            type: 'gauge',
            data: [ { name: 'itemA', value: 55, gradient: ['#ff4646', '#ffdb5c', '#2ba245']} ],
            axisLabel: {
              formatter: '{value}%'
            },
            animationCurve: 'easeInOutBack',
            details: {
              show: true,
              offset: [0, 40],
              formatter: '剩余{value}%'
            },
          }
        ]
      },
      option3: {
        title: {
          text: '百分比环'
        },
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 25,
            data: [
              { name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                  fill: '#1ed3e5',
                  fontSize: 35
              }
            }
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
  width: 1350px;
  height: 620px;
  background: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.item {
  width: 450px;
  height: 400px;
}

</style>